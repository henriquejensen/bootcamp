# Introducao Sass

Sass ou Syntactically Awesome StyleSheets é uma linguagem de extensão do CSS.
Ela adiciona features que não estão disponíveis na sintaxe básica do CSS.
Ela pode extender o CSS porque ela é um preprocessador, ou seja, ela converte o código Sass em CSS no final.
A extensão do arquivo Sass é SCSS (Sassy CSS)

## Criando o ambiente

Existem algumas formas de usar o sass no seu projeto, mas aqui vamos usar via node-sass

### Passos

- inicie um projeto node
- instale o package node-sass
- crie o script `"scss": "node-sass --watch sass -o css"`
  1. node-sass é o binario, --watch é para rodar em loop o script, sass é a pasta com arquivos sass e css é a pasta de saida
- crie a pasta sass e css no root do projeto
- crie o arquivo main.scss dentro da pasta sass
- rode o script scss
- escreva dentro dele uma regra css e salve o arquivo
  https://webdesign.tutsplus.com/tutorials/watch-and-compile-sass-in-five-quick-steps--cms-28275

## Variaveis

Assim como JS o Sass tambem possui variáveis para armazenar algum valor.
Para definir uma variavel basta usar o simbolo `$` seguido do nome da variavel

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

## Aninhamento de regras

Voce pode aninhar as regras css

```css
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}

nav ul li a span div {
  display: inline-block;
}
```

```scss
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```

## Mixins

Mixin é um grupo de declarações CSS que podem ser reusadas no projeto.
Ele permitem criar algo como funcões para reaproveitar codigo.

```css
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

A definição de um mixin se inicia pelo @mixin seguido pelo nome do mixin, dentro dos parenteses vão os parametros do mixin

```scss
@mixin box-shadow($x, $y, $blur, $c) {
  -webkit-box-shadow: $x, $y, $blur, $c;
  -moz-box-shadow: $x, $y, $blur, $c;
  -ms-box-shadow: $x, $y, $blur, $c;
  box-shadow: $x, $y, $blur, $c;
}
```

Para chamar o mixin basta usar o @include

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

#awesome {
  width: 150px;
  height: 150px;
  background-color: green;
  @include border-radius(15px);
}
```

## Lógica if e else

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}

@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  } @else if $val == alert {
    color: yellow;
  } @else if $val == success {
    color: green;
  } @else {
    color: black;
  }
}
```

## For loop

Existem duas formas de escrever for, com through e com to. A diferenca
é que um inclui o ultimo valor e o outro exclui o ultimo valor

Loop que vai de 1 ate o 12 inclusive
`#{$i} é a forma de interpolação string e variavel`

```scss
@for $i from 1 through 12 {
  .col-#{$i} {
    width: 100%/12 * $i;
  }
}
```

Loop que vai de 1 ate o 5

```scss
@for $i from 1 to 6 {
  .text-#{$i} {
    font-size: 15 * $i;
  }
}
```

## Iterando nos valores de uma lista com @each

Voce pode iterar diretamente nos valores

```scss
@each $color in blue, red, green {
  .#{$color}-text {
    color: $color;
  }
}
```

Ou pode criar uma lista com uma variavel e iterar na variavel

```scss
$colors: (
  color1: blue,
  color2: red,
  color3: green
);

@each $key, $color in $colors {
  .#{$color}-text {
    color: $color;
  }
}
```

## Loop com @while

Criando um loop de 1 ate 12 com while

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} {
    width: 100%/12 * $x;
  }
  $x: $x + 1;
}
```

Criando 5 classes text com diferentes font-size

```scss
$count: 1;
@while $count < 6 {
  .text-#{$count} {
    font-size: 15 * $count;
  }
  $count: $count + 1;
}
```

## Criando arquivos separados com partials

Partials são arquivos separados que iniciam seu nome com um "\_". É uma forma de manter o código em um módulo e assim ter organização.
O underscore diz ao sass que aquele é uma parte do codigo e não deve converter o arquivo em um css separado.
Para trazer o codigo em um partial para outro basta usar a keyword @import. No import não ha necessidade de colocar o underscore

```scss
// In the main.scss file

@import "mixins";
```

## Extendendo regras de um elemento em outro com @extend

O Sass utiliza do @extend para habilitar a herança de regras css de um elemento em outro

```scss
.panel {
  background-color: red;
  height: 70px;
  border: 2px solid green;
}

.big-panel {
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

## Teste

https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page
