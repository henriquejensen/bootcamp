# Introducao Visual Design

Design visual combina tipografia, teoria de cor, gráficos, animação e design de página. O desing visual pode influenciar a apresentação e a experiência do usuário.

## text-align

Opções: justify, center, right, left (default)

## Ajustando a largura com width e altura com height

Pode ser dado com unidades relativas(em), unidades absolutas (px) ou como procentagens.

## Tags visuais

<strong> // bold em um texto
<s> // Strikethrough, linha cortando o texto
<em> // texto italico

<hr /> // linha horizontal
<u> // underline

## Ajustando a cor de fundo background-color e rgba

RGBA - Red, green, blue e o nivel de opacidade (alpha)
rgb vai de 0 a 255 e o alpha varia de 1(cor solida) a 0 (transparente)

## Tamanho do texto com font-size

font-size é usado para ajustar o tamanho do texto em um elemento

## box-shadow

Aplica uma ou mais sombras ao elemento

Valores
offset-x -> horizontalmente
offset-y -> verticalmente
blur-radius (opcional), spread-radius(opcional) e color

voce pode passar varias sombras separando-as por virgula

## opacity

Usado para ajustar a transparencia

valor de 1 é opaco, 0.5 é o meio termo e 0 é completamente transparente

## text-transform

Usado para mudar a aparencia do texto.

valores
lowercase, uppercase, capitalize, initial (default value), inherit (text-transform do pai), none(default, usa o texto original)

## font-weight

Esta propriedade define quanto fino ou largo os caracteres serão

## line-height

Define a altura de cada linha em um bloco de texto

## hover

Hover é uma pseudo classe. Pseudo classes são palavras chaves que podem ser adicionadas aos seletores para selecionar um estado especifico do elemento.

sintaxe

```
tag:hover {
    propriedade
}
```

## Mudando a posição relativa de um elemento com position

Css trata cada elemento como sua propria caixa, o que é usualmente referenciado como CSS Box Model.
Item de Block-level automaticamente iniciam em uma nova linha (h, p, div) inline-item ficam dentro do conteudo (img, span). O CSS possui a propriedade position para sobrescrever o fluxo normal que um elemento seria posicionado no documento.

### position relative

Quando a posição de um elemento é definida para `relative`, isto permite a voce especificar como o CSS devera mover o elemento relativamente da sua posição no fluxo normal da pagina. Ela faz uso das propriedades offset de left, right, top e bottom. Elas dizem como mover um item fora da sua posição normal.
Usar o `position: relative` não remove o elemento do seu fluxo normal, outros elementos ao redor dele ainda se comportam como se o elemento estivesse na sua posição default.

### CSS offsets - top, bottom, right, left

Estas propriedades dizem ao browser o quanto o elemento deve se mover de sua posição original

### position absolute

Diferente do `position: relative` o `position: absolute` remove o elemento do seu fluxo normal, ou seja, os elementos ao lado dele não se comportarão como ele estivesse la.
Ele move o elemento em relação ao seu container pai mais proximo definido com `position: relative`, se não existir nenhum, o browser utiliza o `body`

### fixed

Assim como `position: absolute` o `position: fixed` também remove o elemento da sua posição original, porém ele move o elemento em relação a window. Um diferença entre absolute em fixed, é que o fixed não se move com o scroll da pagina

### z-index

Quanto posicionamos os elementos usando `fixed, absolute, relative` um elemento pode ficar em cima do outro, e o elemento que veio primeiro na página vai ficar em cima. Por isso utilizamos a propriedade `z-index` com um numero inteiro como valor.

## Colors

### hsl

### linear-gradient

A possibilidade de usar transições de cores no CSS. Aplicado via a propriedade `background`, seu parametros são `background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);`

### repeating-linear-gradient

O angulo é a direção do gradiente. Os width são como paradas para as cores, são dados como porcentagens ou pixels.
O gradiente se divide igualmente pela quantidade de cores passadas, o que muda é aonde ele se inicia

```css
div {
  background: repeating-linear-gradient(
    45deg,
    yellow 0px,
    blue 40px,
    red 40px,
    black 80px
  );
}
```

### background

Voce pode usar o background com a funcao url, para adicionar imagens a seu background

## Transform

### scale

Essa propriedade muda a escala de um elemento. `transform: scale(2);`, neste exemplo o elemento esta dobrando de tamanho.

Neste exemplo o elemento aumenta o tamanho quando o evento hover acontece.

```css
div {
  width: 70%;
  height: 100px;
  margin: 50px auto;
  background: linear-gradient(53deg, #ccfffc, #ffcccf);
}
div:hover {
  transform: scale(1.1);
}
```

### skewX

Esta propriedade é utilizada para mudar o angulo de um elemento através do eixo x (horizontal) por um dado angulo;
Neste exemplo o elemento se inclina 24 graus horizontalmente.

```css
#bottom {
  background-color: blue;
  transform: skewX(24deg);
}
```

### skewY

Esta propriedade é utilizada para mudar o angulo de um elemento através do eixo y (vertical) por um dado angulo;
Neste exemplo o elemento se inclina 10 graus verticalmente.

```css
#top {
  background-color: red;
  transform: skewY(-10deg);
}
```

## Criando figuras usando CSS

Manipulando diferentes propriedades podemos fazer figuras interessantes.

### lua com box-shadow e border-radius

Neste exemplo esta sendo criado uma lua a partir de um quadrado com box-shadow;

```css
div {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 25px 10px 0px 0px blue;
}
```

### coração usando :before e :after

O :before e :after são chamados de pseudo-classes e são usados para adicionar algo a um elmento, antes ou depois dele.

Neste exemplo esta sendo criado um coração. Para que o :after e o :before consigam funcionar corretamente utilizamos a propriedade
`content` com o valor de string vazia. Esta propriedade serve para adicionar texto ou imagens para os elementos.

```css
.heart {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: pink;
  height: 50px;
  width: 50px;
  transform: rotate(-45deg);
}
.heart::after {
  background-color: pink;
  content: "";
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0px;
  left: 25px;
}
.heart::before {
  content: "";
  background-color: pink;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  left: 0px;
}
```

## Animando um elemento com @keyframes

Para criar uma animação no elemento precisamos conhecer as propriedades de animação e a regra `@keyframes`
As propriedades de animação controlam como a animação deveria se comportar e a regra @keyframes controla
o que acontece durante a animação. Existem 8 propriedades de animação no total.

### animation-name

Define o nome da animação, o qual é depois utilizado pelo @keyframes para dizer ao CSS qual regra regra vai com qual a animação.

### animation-duration

Define o tamanho do tempo da animação

### @keyframes

Especifica o que acontece durante a animação. É feito usando propriedades CSS para especificar os frames durante a animação.
Com porcentagens variando de 0% até 100%. Sendo 0% o inicio da animação e 100% o fim dela.

Neste exemplo a animação colorful esta tendo uma animação que varia sua cor de azul, depois vermelho, para amarelo.

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  33% {
    background-color: red;
  }
  100% {
    background-color: yellow;
  }
}
```

O @keyframes pode ser utilizado com pseudo-classes tambem
Neste exemplo o width da img esta sendo animado no hover do mouse.

```css
img:hover {
  animation-name: width;
  animation-duration: 500ms;
}

@keyframes width {
  100% {
    width: 40px;
  }
}
```

### animation-fill-mode

Especifica quando uma animação deve terminar. Por exemplo `animation-fill-mode: forwards;` especifica que a animação deva terminar com os valores de 100% do @keyframe

### animation-iteration-count

Esta propriedade permite controlar quatas vezes a animação deve se repetir, por exemplo `animation-iteration-count: 3`.
Tambem podemos especificar que a animação se repita eternamente com `animation-iteration-count: infinite`.

Neste exemplo estamos animando uma bola do topo, até 249px e de volta ao topo. Tambem estamos aumentando sua largura e diminuindo
seu tamanho, tudo isso infinitamente.

```css
#ball {
  width: 100px;
  height: 100px;
  margin: 50px auto;
  position: relative;
  border-radius: 50%;
  background: linear-gradient(35deg, #ccffff, #ffcccc);
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0% {
    top: 0px;
  }
  50% {
    top: 249px;
    width: 130px;
    height: 70px;
  }
  100% {
    top: 0px;
  }
}
```

### animation-timing-function

Controla qual a velocidade de um elmento muda durante uma animação. Exemplo seria de um carro acelerando e desacelerando.
Há um numero definido de keywords disponiveis para as opçoes populares.
O valor defaul é `ease`, o qual comeca devagar, fica rapido no meio e desacelera no final.
Outra opção é o `ease-out`, o qual é rapido no comeco e vai desacelerando.
O `ease-in`, o que é devagar no comeco e vai acelerando ate o final.
O `linear` que mantem uma velocidade de animacao constante.

Exemplo da animação de duas bolinhas em velocidades diferentes

```css
.balls {
  border-radius: 50%;
  background: linear-gradient(35deg, #ccffff, #ffcccc);
  position: fixed;
  width: 50px;
  height: 50px;
  margin-top: 50px;
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
#ball1 {
  left: 27%;
  animation-timing-function: linear;
}
#ball2 {
  left: 56%;
  animation-timing-function: ease-out;
}

@keyframes bounce {
  0% {
    top: 0px;
  }
  100% {
    top: 249px;
  }
}
```

### cubic-bezier

Opção alem das keywords que prove um controle fino sobre como uma animação ira acontecer, usando as curvas de Bezier.
A curva bezier esta num sistema de coordenadas 1x1, onde o eixo x é o tempo da animação e o y é a mudança da animação.
A função `cubic-bezier` consiste de 4 pontos principais que esta neste gride 1x1, `p0`, `p1`, `p2`, `p3`.
`p0` e `p3` são pre-definidos, são os pontos de inicio e fim, os quais são sempre localizados na origin (0,0) e no fim (1,1).
Os `p1` e `p2` são definidos pelo programador, e dependendo dos valores (x1, y1, x2, y2) que eles receberam é o tamanho da curva para a animação.
Exemplo: `animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);`
Neste exemplo os pontos formam uma linha reta, então a animação fica igual ao `linear`

Embora o sistema de coordenadas seja 1x1, a propriedade y aceita valores maiores que 1, com isso alguns movimento como o de lancamento de um bolinha são possíveis.

`animation-timing-function: cubic-bezier(0.3, 0.4, 0.5, 1.6);`
