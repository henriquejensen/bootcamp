# Introducao CSS

CSS (Cascading Style Sheets) é uma linguagem de estilo usada para dizer ao browser como mostra a pagina web

Ela é case sensitive
Permite controlar:
 * cores
 * fontes
 * posicionamento
 * espaçamento
 * tamanho
 * decorações
 * transições

Três formas de aplicar estilo:
 * estilos inline, diretamente na tag HTML usando o stributo `style`
 * Adicionando tags `style` no seu html e colocando as regras CSS dentro
 * Escrever num arquivo css separado e importá-lo no arquivo HTML

## Mudando a cor do texto

`<h2 style="color: red;">CatPhotoApp</h2>`

## Seletores CSS

Seleção por tag
```
<style>
  h2 {
    color: red;
  }
</style>
```

Seleção por classes. Elas são estilo reutilizaveis que podem ser adicionados os elementos HTML
```
<style>
  .blue-text {
    color: blue;
  }
</style>
<h2 class="blue-text">CatPhotoApp</h2>
```

## Fontes

Voce pode alterar o tamanho da fonte com a propriedade `font-size`
```
<style>
  h1 {
    font-size: 30px;
  }
</style>
```

Voce pode alterar a familia da fonte com a propriedade `font-family`
```
<style>
  h2 {
    font-family: sans-serif;
  }
</style>
```

Para não usar uma font padrão do browser voce pode importar uma font de um link na sua pagina
Importando a font do Google
`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">`

Para usar outra fonte do google va no link: https://fonts.google.com/


Algumas fontes default: monospace, serif e sans-serif
Quando uma fonte nao funciona voce pode especificar uma fonte extra que sera aplicada no lugar
```
p {
  font-family: Helvetica, sans-serif;
}
```

## Tamanho

A propriedade `width` controla a largura de um elemento.
```
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

## Bordas

As bordas possuem propriedades como cor, largura e estilo que podem ser modificados
```
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

Voce pode adicionar cantos com o `border-radius` e passando o valor em pixels
```
<style>
  .larger-image {
    width: 500px;
    border-radius: 10px
  }
</style>
```

O valor pode ser em porcentagem tambem
```
<style>
  .larger-image {
    width: 500px;
    border-radius: 50%
  }
</style>
```

## Background color
```
<style>
  .green-background {
    background-color: green;
  }
</style>
```

## Id de um elemento

Alem de classes cada elemento HTML tambem pode ter um atributo `id`
Diferente de classes ids devem ser unicos. São geralmente usados com JavaScript

`<h2 id="cat-photo-app">`

```
#cat-photo-element {
  background-color: green;
}
```

## Espacamento do elemento

Três propriedades controlam o espaco em volta de cada elemento HTML
 * padding
 * margin
 * border

```
  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
```

*Margins aceitam valores negativos*

Voce pode passar valores diferentes para cada lado do elemento
```
  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-left: 40px;
    padding-bottom: 20px;
    padding-right: 20px;
  }
```
O mesmo vale para margin
```
  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
```
Voce pode usar a notacao Clockwise para especificar os valores
```
  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 10px 20px 10px 20px;
  }
```

CSS Box Model: https://www.tutorialrepublic.com/css-tutorial/css-box-model.php
Usando box-sizing: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#What_is_the_CSS_box_model


## Teste

* Crie um documento html default
* Aplique um background black com uma regra css para o body
* Crie uma tag h1
* Crie a propriedade color green, font monospace para a body
* Crie a classe pink-text com a propriedade color pink
* Atribua a classe pink-text para a tag h1
* Crie a class blue-text logo após a classe pink-text
* Atribua a classe tag h1 em conjunto com a pink-text
* Crie um id orange-text e coloque a cor laranja
* Atribua o id criado a tag h1
* Usando um estilo inline no h1, faca-o ficar branco
* Adicione um !important para a classe pink-text

## Cores

Elas podem ser especificadas pelo nome em ingles (red, blue)

Podem ser via o codigo Hexadecimal da cor
```
body {
  color: #000000;
}
```
Hexadecimal utiliza 6 digitos para representar as cores 2 para vermelhor, 2 para verde e 2 para azul.
```
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1e90ff;
  }
  .orange-text {
    color: #ffa500;
  }
</style>
```

Outra forma é utilizar valores RGB
`rgb(255, 255, 255)`
A diferenca que aqui se especifica de 0 a 255 o nivel de vermelho, verde ou azul