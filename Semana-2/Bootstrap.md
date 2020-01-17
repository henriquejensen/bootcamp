# Introducao Bootstrap

## Setting npm and webpack

    1. criou uma pasta
    2. git init
    3. npm init
    4. cria um gitignore e coloca o node_modules

### Bundler com Webpack

Instalando as dependências `npm install webpack webpack-cli webpack-dev-server --save-dev`

Crie um arquivo `webpack.config.js` na raiz do projeto

### Icones com fontawesome

Instalando as dependências `npm install --save-dev @fortawesome/fontawesome-free`

### Fibers

Utilizado para usar as coroutines do node

Instalando as dependências `npm install --save-dev fibers`
obs: tive que instalar `sudo apt-get install g++ build-essential` no meu Ubuntu antes

### Sass

Instalando as dependências `npm install --save-dev sass`

### Dependências do webpack

sass-loader
node-sass
css-loader
autoprefixer
postcss-loader
file-loader

Instalando as dependências `npm install --save-dev sass-loader node-sass css-loader autoprefixer postcss-loader file-loader`

mini-css-extract-plugin -> extrai o CSS em arquivos separados
Instalando as dependências `npm install --save-dev mini-css-extract-plugin`

### Instalando o Bootstrap

Instalando as dependências `npm install bootstrap`

O Bootstrap possui com dependência o jquery (lib js) e o popper.js (engine para tooltip)
`npm install --save jquery popper.js`

### Criando a estrutura do projeto

A estrutura do projeto esta dessa forma:

```
- dist (pasta com os arquivos de produção)
  - css
  - fonts
  - js
  index.html
src
  - js
    plugins (pasta com arquivos js de terceiros)
    - app.js
    - custom.js
  - sass
    - app
      - components (css dos componentes da pagina)
      - pages (css das paginas ex pagina Login)
      - vendor (css para sobreescrever css de terceiros)
    - _customize-bootstrap.scss
    - _vars.scss
    - main.scss
.gitignore
package.json
webpack.config.js
```

### configurando o webpack

```js
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), //de onde nossos arqs serão servidos
    compress: true, //aqr final será comprimido
    publicPath: "dist",
    writeToDisk: true
  },
  entry: "./src/js/app.js", //arq js inicial do nosso desenvolvimento
  output: {
    filename: "app.js", //nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), //localização do arquivo de saída
    publicPath: "dist"
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require("autoprefixer") //utilizado pelo bootstrap sass file para compilar mais rapido
                ];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, //utilizado para as fonts
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "../fonts/",
              publicPath: "../fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/app.css" //nome do arq final com o css extraido
    }),
    new webpack.ProvidePlugin({
      $: "jquery", //coloca o $ como variavel global para o jQuery
      jQuery: "jquery"
    })
  ]
};
```

Para testar basta criar um boilerplate de html no `dist/index.html` e importar o script `js/app.js`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World!</h1>

    <script src="js/app.js"></script>
  </body>
</html>
```

Dentro de `src/js/app.js` import o bootstrap

```js
import "bootstrap";
import "../sass/main.scss";
import "./custom";
```

Após isso crie no `package.json` o script de build `"build": webpack`

### Servindo a aplicação com webpack-dev-server

Para desenolvermos utilizaremos um servidor de arquivos estáticos chamado `webpack-dev-server`. Todas a configuração dele fizemos no `webpack.config` agora precisamos somente criar um script de inicialização no `packjage.json`:
`"start:dev": webpack-dev-server`

Após criado o script rode-o na linha de comando e abra o link `localhost:8080` no seu navegador. Se tudo estiver ok deverá aparecer a mensagem Hello World

## Creating a bootstrap templates

## Customize the bootstrap
