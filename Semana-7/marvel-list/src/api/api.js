const TIMESTAMP = "1581718777"; // MAth.floor(Date.now() / 1000)
const API_KEY = "13ec77281bace3d4bea2b5732d41e96b";
const MD5 = "8fbf6b8fb4dfd385b50116c637dfa9f5";
const URL = `http://gateway.marvel.com/v1/public/characters?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${MD5}`;

export const fetchCharacters = async () => {
  const response = await fetch(URL);

  return response.json();
};

export const fetchCharactersByName = async name => {
  try {
    const response = await fetch(`${URL}/nameStartsWith=${name}`);

    return response.json();
  } catch (e) {
    throw Error("Erro na busca por nome");
  }
};

export const fetchCharactersById = async id => {
  try {
    const response = await fetch(`${URL}/${id}`);

    return response.json();
  } catch (e) {
    throw Error("Erro na busca por id");
  }
};
