/**
 * This module generates a random set of data to be consumed.
 */

const faker = require('faker/locale/pt_BR');

const getRandomBetween = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const createArray = (length, callback) => Array.from(Array(length)).map(callback);

const getCreatedAt = (current, max) => Date.now() - (max - current) * 15000000;

const users_length = getRandomBetween(8, 12);
const users = createArray(
  users_length,
  (_, index) => ({
    id: index + 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    created_at: getCreatedAt(index, users_length),
  }),
);

const threads_length = getRandomBetween(15, 30);
const threads = createArray(
  threads_length,
  (_, index) => {
    const id = index + 1;
    const title = faker.lorem.words(getRandomBetween(3, 8));
  
    return {
      id,
      title,
      slug: faker.helpers.slugify(`${title}-${id}`),
      body: faker.lorem.paragraph(),
      total_replies: 0,
      user: users[getRandomBetween(0, users.length - 1)],
      created_at: getCreatedAt(index, threads_length),
    };
  },
);

const replies_length = getRandomBetween(45, 110);
const replies = createArray(
  replies_length,
  (_, index) => {
    const id = index + 1;
    const thread_id = getRandomBetween(1, threads_length);

    /**
     * Increase replies count in thread entity.
     */
    threads[thread_id - 1].total_replies += 1;
  
    return {
      id,
      thread_id,
      user: users[getRandomBetween(0, users_length - 1)],
      body: faker.lorem.paragraph(),
      created_at: getCreatedAt(index, replies_length),
    };
  },
);

module.exports = {
  users,
  threads,
  replies,
};