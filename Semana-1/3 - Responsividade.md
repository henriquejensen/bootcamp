# Introducao Responsividade e FlexBox

## Media Queries

Media Queries são uma nova tecnica introduzida no CSS3 que muda a apresentação do conteudo baseado nos diferentes viewports. Viewport é a area do usuario visivel na pagina web e ele muda de acordo com o dispositivo.
Media Queries consistem de um media type e se aquele media type encontrar o tipo de dispositivo que o documento esta sendo mostrado o estilo é aplicado.

`@media (max-width: 100px) { /* CSS Rules */ }`

`@media (min-height: 350px) { /* CSS Rules */ }`

## FlexBox

A User Interface (UI) é dividida em 2 componentes, os visuais e os posicionamentos. CSS3 introduziuo flexbox para criar layouts para paginas dinamicas. Embora seja novo a maioria dos browsers ja o aceita.

Adicionar `display: flex;` em um elemento permite usar outras propriedades flex.

### flex-direction

Adicionar o `display: flex;` transforma o elemento em um container, isto torna possivel alinhar qualquer filho daquele elemento em linhas ou colunas. Para fazer isso se adiciona a propriedade `flex-direction;` para o item pai e atribua `row` ou `column` a ele.
Outras opções são `row-reverse` ou `column-reverse`.

### justify-content

Alinha os items através do eixo principal. Para linhas o eixo principal é uma linha horizontal e para colunas é uma linha vertical
Terminologias: https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg

Esta propriedade é utilizada para alinhar os elementos de um container flex.
* center
* flex-start - alinha os elementos no inicio do container flex. Para row, coloca os items para a esquerda do container, para column coloca no topo. É o default
* flex-end - alinha os elementos no fim. Row coloca os items a direita, Column coloca os items embaixo
* space-between - alinha os items ao centro, como espaco extra entre os itens
* space-around
* space-evenly
* initial

### align-items

Containers flex possuem alem da main axis (eixo principal) a cross axis que é o oposto da main axis. Para linhas a cross axis é vertical e para colunas é horizontal.
A propriedade align-items utiliza a cross-axis. Seus valores
* flex-start
* flex-end
* center
* stretch - default value
* baseline

### flex-wrap

Elementos extras movem para uma nova linha ou coluna. O ponto de quebra depende do tamanho dos elementos