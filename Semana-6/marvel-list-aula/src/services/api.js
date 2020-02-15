const TIMESTAMP = "1581718777";
const API_KEY = "13ec77281bace3d4bea2b5732d41e96b";
const MD5 = "8fbf6b8fb4dfd385b50116c637dfa9f5";
const URL = `http://gateway.marvel.com/v1/public/characters?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${MD5}`;

export const getCharacters = () => {
  return fetch(URL).then(r => r.json());
};

export const getCharactersName = name => {
  return fetch(`${URL}&nameStartsWith=${name}`).then(r => r.json());
};
