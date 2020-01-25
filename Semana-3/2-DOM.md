# Introdução ao DOM

O DOM (Document Object Model) é a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na Web

## O que é?

O Document Object Model (DOM) è uma interface de programação para os documentos HTML e XML. Uma página web é um documento e o DOM
é a representação orientada a objetos da página que pode ser modificada por uma linguagem como o Javascript

![DOM](./DOM.png)

## document

É o objeto que representa o documento da página.

```js
let paragraphs = document.getElementsByTagName("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);

let image = document.querySelector("img"); //primeira imagem que encontrar
let images = document.querySelectorAll("img"); //todas as imagens do documento

let root = document;
let html = root.children[0];
let head = html.children[0];
let body = html.children[1];
```
