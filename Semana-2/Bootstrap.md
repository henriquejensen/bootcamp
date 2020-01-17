# Introducao Bootstrap

Bootstrap é um framework front end usado para projetar paginas webs e aplicações webs.
Utiliza a aboradagem modile-first. Utiliza estilos e classes CSS pre-constuidas e algumas funcionalidades Javascript.
Utiliza um grid layout responsivo de 12 colunas e possui templates para:

- buttons
- images
- tables
- forms
- navigation

Site oficial: https://getbootstrap.com/

Para utiliza-lo existem diferentes maneiras, mas a mais facil de iniciar é adicionando o link para o cdn
do Bootstrap na sua pagina.
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>`

## Trabalhando com responsividade

- container-fluids - Usada para deixar o conteudo ocupar toda a tela
- img-responsive - Usada para ajustar a largura das imagens ao tamanho da tela

### Trabalhando com textos

- text-center - Centraliza os textos
- text-dagner - Aplica a cor vermelha ao texto

### Trabalhando com botoes

Classe default dos botoes é `btn`.

- btn-default - aplica o layout default ao botão
- btn-block - normalmente o botão possui a largura do texto dentro dele, essa propriedade faz com que o botão ocupe toda a horizontal que ele esta definido
- btn-primary - aplica o layout primary ao botão
- btn-info - aplica o layout info ao botão
- btn-danger - aplica o layout danger ao botão

### Trabalhando com Grid

O bootstrap utiliza um grid de 12 colunas baseado no flexbox do CSS.
Ele possui diferentes tipos de larguras que pdoemos especificar.
Extra small, <576px, nao tem uma largura máxima, col-
Small, >= 576px, largura maxima do container 540px, col-sm-
Medium, >= 768px, largura maxima do container 720px, col-md-
Large, >= 992px, largura maxima do container 960px, col-lg-
Extra large, >= 1200px, largura maxima do container 1140px, col-sl-

Geralmente utilizamos a classe grid da seguinte form

```html
<div class="container">
  <div class="row">
    <div class="col-6"></div>
  </div>
</div>
```

### Font icons

Font Awesome é umas das libs mais famosas de icones e para adiciona-la basta colar o link na pagina

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
  crossorigin="anonymous"
/>
```

Voce pode usar as classes de icones na tag <i>, exemplo de um botão de like

```html
<button class="btn btn-block btn-primary">
  <i class="fas fa-thumbs-up"></i> Like
</button>
```

### Trabalhando com formulários

- form-control - classe utilizada para controlar tags textuais, <input>, <select>, <textarea>, aplica um width de 100%

### Construindo do 0

- crie uma pagina html e adicione o link do bootstrap na header
- crie um elemento h3 com o texto 'AceleraDev React'
- aplique ao h3 a classe text-primary e centralize com text-center
- envolva a h3 com uma div de classe container-fluid
- abaixo da h3 crie uma div row
- dentro da row, crie duas div de coluna de tamanho 6 extra small, col-6
- dentro de cada coluna crie uma div card
- crie um header com a classe card-header dentro de cada card e coloque o texto Inicio no primeiro e Fim no segundo
- crie a div card-body logo apos a div card-header em ambos os cards
- crie a div card-footer logo apos a div card-body somente no card Inicio
- crie 2 botoes dentro da card-footer
- primeiro botao com as classes btn btn-secondary e texto "Cancelar"
- primeiro botao com as classes btn btn-primary e texto "Adicionar"
- envolva os botoes numa div row e de um espaco entre eles com a classe justify-content-between
- dentro da div body do card inicio insira uma div card-title com o texto "Objetivos"
- logo apos a div card-title insira um form com a classe form-inline
- dentro do form crie uma div form-group
- dentro do form group crie uma label com a classe form-label e mr-4 para criar margem, Insira o texto "Objetivo"
- logo apos a label crie o input text com a classe form-control
- no card Fim, crie a uma table dentro da div body, e adciona a classe table a ela
- crie a thead dentro da table com a classe thead-dark
- insira dois header com a tag th, o primeiro com o texto Objetivo e o outro Data
- apos a thead crie a tbody e adicione linhas com dados fakes para ela
