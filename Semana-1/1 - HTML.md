# Introducao HTML

HTML (HyperText Markup Language) é uma linguagem de marcação usada para descrever uma pagina web

Usa uma notação para dar informação sobre a pagina para o browser

Elementos possuem abertura e fechamento de tags que envolvem o conteudo

Exemplo

```
    <h1>Top level heading: Maybe a page title</h1>

    <p>A paragraph of text. Some information we would like to communicate to the viewer. This can be as long or short as we would like.</p>

    <ol>
      <li>Number one on the list</li>
      <li>Number two</li>
      <li>A third item</li>
    </ol>

```

## Estrutura básica da pagina

Doctype
hmtl
  head
  body
html

## Headings

h1, h2, h3, h4, h5, h6

# Paragraph

<p>

## Tags descritivas

Estruturam o HTML, melhoram a leitura e ajudam o SEO e a acessibilidade

<main>
<header>
<footer>
<nav>
<video>
<article>
<section>

## Adicionando imagens

<img src="" alt="" />

## Adicionando links

Um link somente necessita da tag a com o atributo href
<a href="">Nome do link</a>

o atributo target especifica ao browser onde o link deve abrir. O blank indica que sera uma nova pagina.
https://alligator.io/html/target-attribute-anchor-tags/
<a href="" target="_blank">Nome do link</a>

Os links podem ser internos
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>

Voce pode aninhar links com outras tags 
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>

## Criando listas

Listas nao ordenadas
```
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Listas ordenadas
```
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

## Campo de texto

O atributo type especifica ao browser o tipo de dado que o campo tera https://www.w3schools.com/tags/att_input_type.asp
`<input type="">`

O atributo placeholder insere um texto de visualização para o usuario
`<input type="">`

## Formulários

Cria um formulario com a acao redirecionando a url
`<form action="/url-where-you-want-to-submit-form-data"></form>`

Botao submit que aciona a action do formulario
```
<form>
<button type="submit">this button submits the form</button>
</form>
```

O atributo required nao permite que o formulario seja enviado se o campo estiver vazio
```
<form>
<input type="text" required placeholder="cat photo URL">
<button type="submit">this button submits the form</button>
</form>
```

## Radio buttons

O type radio cria radio buttons, colocando o input dentro de um label este ira automaticamente se associar ao radio button. É uma boa pratica colocar o atributo for no label com o valor do seu input
```
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```
Pelo atributo value que o elemento envia seu valor 
```
<label for="indoor"> 
  <input value="indoor" id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

## Checkbox

Da mesma forma que o radio button o checkbox tem um label que se associa automaticamente
```
<label for="loving">
  <input id="loving" type="checkbox" name="personality"> Loving
</label>
```

```
<label for="loving">
  <input value="loving" id="loving" type="checkbox" name="personality"> Loving
</label>
```

## Containers com div

Uma tag com o proposito geral de containers para outros elementos é a tag `<div>`

```
<div>
  <ul>
    <li>milk</li>
    <li>cheese</li>
  </ul>

  <ul>
    <li>milk</li>
    <li>cheese</li>
  </ul>
</div>
```


?username=dfasdfas&password=asdfasdf

?username=react%40facebook.com&password=12345&terms=on