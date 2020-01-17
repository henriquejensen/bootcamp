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

Instalando as dependências `npm install --save-dev sass-loader node-sass css-loader autoprefixer postcss-loader`

mini-css-extract-plugin -> extrai o CSS em arquivos separados
Instalando as dependências `npm install --save-dev mini-css-extract-plugin`

### Instalando o Bootstrap

Instalando as dependências `npm install bootstrap`

O Bootstrap possui com dependência o jquery (lib js) e o popper.js (engine para tooltip)
`npm install --save jquery popper.js`

## Creating a bootstrap templates

## Customize the bootstrap