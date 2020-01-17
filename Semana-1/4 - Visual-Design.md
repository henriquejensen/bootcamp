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
Quando a posição de um elemento é definida para `relative`, isto permite a voce como o CSS devera mover o elemento relativamente da sua posição no fluxo normal da pagina. Ela faz uso das propriedades offset de left, right, top e bottom. Elas dizem como mover um item fora da sua posição normal.

