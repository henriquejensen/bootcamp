// import threads from "../data/threads.json";
// import replies from "../data/replies.json";

const URL = "http://localhost:1338/api/threads";

function api(slug = "") {
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     if (slug) {
  //       resolve({ data: replies[slug] });
  //     } else {
  //       resolve({ data: threads });
  //     }
  //   }, 1500);
  // });
  return fetch(`${URL}/${slug}`).then(response => response.json());
}

function getThreads() {
  return api()
    .then(response => response.data)
    .catch(e => []);
}

function getThread(slug) {
  return api(slug)
    .then(response => response.data)
    .catch(e => {});
}

export default { getThreads, getThread };
