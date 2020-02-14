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

Podemos
