const assert = require('assert');
const thread_fixture = require('./fixtures/thread.json');
const threads_fixture = require('./fixtures/threads.json');

// set to 10 seconds...
jest.setTimeout(10000);

/**
 * Mock API requests.
 */
const requestMock = async (callback) => {
  await page.setRequestInterception(true);

  // clear old listeners
  await page.removeAllListeners('request');

  page.on('request', async (request) => {
    const url = request.url();
    
    if (url.indexOf('/api/') === -1) {
      return request.continue();
    }
  
    await request.respond(callback(url));
  });
};

/**
 * Assert page contains string.
 */
const assertString = async (string, message) => {
  assert(await page.evaluate(string => document.body.innerText.includes(string), string), message);
};

/**
 * Wait a X amount of time.
 */
const delay = miliseconds => new Promise(resolve => setTimeout(resolve, miliseconds));

/**
 * Load page recursive.
 */
const load = async (path = '/') => {
  try {
    await page.goto('http://localhost:3000' + path);
    await delay(500);
  } catch (e) {
    await load(path);
  }
};

/**
 * Wait for selector or fail with message.
 */
const waitForSelector = async (selector, message) => {
  try {
    await page.waitForSelector(selector);
  } catch (e) {
    assert(false, message);
  }
};

describe('Forum', () => {
  /**
   * Run a first load.
   */
  beforeAll(load);

  it('should list all threads', async () => {
    await requestMock(() => ({
      status: 200,
      contentType: 'text/plain',
      body: JSON.stringify({
        data: threads_fixture,
      }),
    }));

    await load();

    const threads = await page.$$('[data-test="thread"]');

    assert(threads.length === threads_fixture.length, `Could not find all threads in page (${threads.length} of ${threads_fixture.length})`);

    for (const thread of threads_fixture) {
      await assertString(thread.title, `Could not find the thread "${thread.title}" in page`);
      await assertString(thread.total_replies, `Could not find thread "${thread.title}" total replies in page`);
    }
  });

  it('thread card should contain a link to thread full page', async () => {
    await requestMock(() => ({
      status: 200,
      contentType: 'text/plain',
      body: JSON.stringify({
        data: [
          thread_fixture,
        ],
      }),
    }));

    await load();

    await assertString(thread_fixture.title, `Could not find the thread "${thread_fixture.title}" in page`);

    await waitForSelector('[data-test="link"]', 'Could not see the thread full page link.');

    /**
     * Mock request to return correct thread info.
     */
    await requestMock(() => ({
      status: 200,
      contentType: 'text/plain',
      body: JSON.stringify({
        data: thread_fixture,
      }),
    }));

    const action = await page.$('[data-test="link"]');

    await action.click();
    await delay(100);

    assert(page.url().indexOf(thread_fixture.slug) !== -1, 'Thread link is not working.');
  });

  it('thread page should contain basic info and a return to home link', async () => {
    await requestMock(() => ({
      status: 200,
      contentType: 'text/plain',
      body: JSON.stringify({
        data: thread_fixture,
      }),
    }));

    await load('/thread/' + thread_fixture.slug);

    await waitForSelector('[data-test="voltar"]', 'Could not see the return link.');
    
    await assertString(thread_fixture.title, 'Could not find thread title in page');
    await assertString(thread_fixture.body, 'Could not find thread body in page');
    await assertString(thread_fixture.total_replies, 'Could not find thread total replies in page');
  });

  it('should render all thread replies in thread page', async () => {
    await requestMock(() => ({
      status: 200,
      contentType: 'text/plain',
      body: JSON.stringify({
        data: thread_fixture,
      }),
    }));

    await load('/thread/' + thread_fixture.slug);

    const replies = await page.$$('[data-test="resposta"]');

    assert(replies.length === thread_fixture.replies.length, `Could not find all thread replies in page (${replies.length} of ${thread_fixture.replies.length})`);

    for (const reply of thread_fixture.replies) {
      await assertString(reply.body, `Could not find the thread reply "${reply.body}" in page`);
    }
  });

  it('should redirect to 404 if page or thread does not exist.', async () => {
    await load('/some-random-page');

    assert(page.url().indexOf('404') !== -1, 'Should redirect to 404 if thread does not exist.');

    await requestMock(() => ({
      status: 404,
      contentType: 'text/plain',
      body: 'Thread not found',
    }));

    await load('/thread/some-random-thread');

    assert(page.url().indexOf('404') !== -1, 'Should redirect to 404 if thread does not exist.');
  });

  it('404 page should contain a return to home link.', async () => {
    await load('/404');
    
    await waitForSelector('[data-test="voltar"]', 'Could not see the return link.');
    
    await requestMock(() => ({
      status: 200,
      contentType: 'text/plain',
      body: JSON.stringify({
        data: threads_fixture,
      }),
    }));

    const action = await page.$('[data-test="voltar"]');

    await action.click();
    await delay(100);

    assert(page.url().indexOf('404') === -1, 'Return link is not working.');
  });
});
