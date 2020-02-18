# Grid

Facilita na construção de designs web complexos. Torna o HTML em um container grid com linhas(rows) e colunas(columns) para você colocar os elementos filhos aonde você quiser dentro do grid.

## Começando

Para comecar a utilizar o grid basta somente iniciar a propriedade display com o valor grid: `display: grid`

No Grid os componente pai é chamado de container e os filhos de items.

## Colunas

Somente definindo a propriedade grid não muda muita coisas, é necessário definir a estrutura do grid tambem.
Para adicionar algumas estruturas para o grid utilize o `grid-template-columns`.
Esta propriedade recebe a quantidade e tamanho de cada coluna.
Exemplo criando 4 colunas de 100px: `grid-template-columns: 100px 100px 100px 100px;`

## Rows

A criação de colunas cria as rows automaticamente, para ajustar as rows manualmente usamos o `grid-template-rows` da mesma forma que as colunas, ela recebe a quantidade de linhas e tamanho delas.

## Unidades de medida grid

Podemos utilizar px ou em como unidades de medida, mas as mais comuns são as unidade de medida grid: fr, auto, %
`fr`: define a column/row para uma fração do espaço disponível
`auto`: define a column/row para a largura ou altura do seu conteudo automaticamente
`%`: ajusta a column/row para a porcentagem de largura do seu container

Exemplo: `grid-template-columns: auto 50px 10% 2fr 1fr;`
Neste exemplo ele cria 5 columns, a primeira fica com largura do conteudo que tem nela, a segunda com largura de 50px, a terceira com 10% da largura do seu container, a quarta 2 fracoes do espaco disponivel que sobrou e a quinta 1 fracao do espaco disponivel que sobrou.

## Criando um espaco(gap) com grid-column-gap e grid-row-gap

Quando criamos as grid as colunas ficaram coladas uma na outra, mas podemos dar um espaco nelas usando a grid-column-gap
Exemplo criando um gap de 10px: `grid-column-gap: 10px;`

O mesmo se aplica as rows, mas usando a propriedade `grip-row-gap`: `grid-row-gap: 10px`

Ou podemos usar o `grip-gap` para adicionarmos os gaps rapidamente, é um jeito rápido de aplicar gaps em rows e columns.
Se o `grip-gap` tiver 1 valor ele vai aplicar o gap para as rows e as columns e se tiver 2 valores ele vai aplicar o primeiro para as rows e o segundo para as columns

## Controlando espaços com grid-column e grid-row

Ao contrario das outras propriedades ja citadas o grid-column e grid-row são propriedades para serem usadas nos items e não nos containers.
A propriedade `grid-column` especifica quantas colunas um item vai consumir. E a `grid-row` quantas linhas.
`grid:column: 1 / 3` -> aqui esta especificado que o elemento vai comecar na coluna 1 e vai parar na coluna 3, consumindo assim 2 colunas.

O grid de 3x3 por exemplo se divide desta maneira, usamos as linhas que forma o grid para definir onde comeca o elemento e onde ele termina:

```
   11___2___3___4
   2|___|___|___|
   3|___|___|___|
   4|___|___|___|
```

## Alinhamento

### Alinhando um item horizontalmente - justify-self

No Grid o conteudo esta dentro de uma celula e podemos alinhar o conteudo horizontalmente dentro da celula usando o jusitfy-self;
Propriedades: "stretch", "center", "start", "end"

### Alinhando um item verticalmente - align-self

No Grid o conteudo esta dentro de uma celula e podemos alinhar o conteudo verticalmente dentro da celula usando o jusitfy-self;
Propriedades: "stretch", "center", "start", "end"

### Alinhando todos os itens horizontalmente - justify-items

Podemos alinhar todos os itens horizontalmente tambem, atraves do justify-items;
Propriedades: "stretch", "center", "start", "end"

### Alinhando todos os itens verticalmente - align-items

Podemos alinhar todos os itens verticalmente tambem, atraves do align-items;
Propriedades: "stretch", "center", "start", "end"

## Dividindo o grid em area template

Podemos dividir o grid em areas e dar para estas areas nomes curtomizados. Para fazer isso utilizamos o `grid-template-areas` no container:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

Após darmos nomes as nossas areas podemos colocar um item na area com a propriedade `grid-area`

Neste exemplo estamos dizendo para o item 1 ir para a area header.

```css
.item {
  grid-area: header;
}
```

### Grid sem nomes

Podemos usar o grid-area sem nomes tambem

No exemplo abaixo estamos dividindo o grid da seguinte maneira
`grid-area: hinicio da linha horizontam / inicio da linha vertical / fim da linha horizontal / fim da linha vertical;`

```css
item1 {
  grid-area: 1/1/2/4;
}
```

## Reduzindo repetição com a função repeat

O `grid-template-column` e o `grid-template-rows` além de receberem os valores para cada coluna ou linha do grid podem receber um função como valor que facilita a criação de muitos grids.
Este valor é a função `repeat` que recebe como parametro o numero de vezes que queremos que o grid se repita e o seu valor.

Neste exemplo queremos que o grid crie 100 colunas de 50px cada

```css
grid-template-columns: repeat(100, 50px);
```

Podemos fazer combinações interessantes tambem, como esta, onde criamos 5 colunas onde as 4 primeiras são criadas pelo repeat e a ultima pelo valor manualmente.

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

## Limitando o tamanho do item com a função minmax

Outra função built-in para o grid é a minmax, ele é usada para limitar o tamanho dos itens quando o tamanho do container muda.

No exemplo abaixo estamos criando 2 colunas, a primeira com tamanho de 100px e a segunda com a largura minima de 50px e maxima de 200px.

```css
grid-template-columns: 100px minmax(50px, 200px);
```

Neste outro exemplo, estamos criando 3 colunas com no minimo 90px e maximo de 1 fração do container, ou seja ele fica responsiva para espaços grandes mas quando diminui vai no maximo a 90px.

```css
grid-template-columns: repeat(3, minmax(90px, 1fr));
```

## Layouts flexiveis

### auto-fill

A função repeat vem com uma opção chamada auto-fill, ela permite inserirmos automaticamente quantas linhas ou colunas quisermos que for possivel no espaço do tamanho do container. Ela é usada com o minmax para criar layouts flexiveis.

```css
grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
```

### auto-fit

Funciona parecido como o auto-fill mas a diferença esta que conforme o container aumente de largura ao inves de ficar preenchendo com espacos vazios como o `auto-fill` o `auto-fit` faz o elementos se encaixarem ao tamanho do container.

```css
grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
```

## Media queries

Com media-queries podemos fazer um layout responsivo simplesmente rearranjando os grid areas, mudando as dimensões do grid e rearranjando os lugares dos items.

No exemplo abaixo temos um media querie para valores entre 300px e 400px de largura, ele muda o grid de uma coluna só para duas colunas e a quantidade de linhas para 3 linhas. No segundo media querie extendemos a largura da header e do footer para que ocupem toda a linha.

```html
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px) {
    .container {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px) {
    .container {
      /* change the code below this line */

      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";

      /* change the code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>
```

## Grid dentro de grid

A propriedade grid afeta seus descendentes diretos, então por isso podemos criar elementos filhos com a propriedade grid tendo assim um grid dentro de outro grid.

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* enter your code below this line */
    display: grid;
    grid-template-columns: auto 1fr;
    /* enter your code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```
