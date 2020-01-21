# Passo a passo do desenvolvimento do website Personal Portfolio

- Criei a pasta para o projeto
- Dentro da pasta iniciei um projeto node com `npm init`
- Adicionei o `Parcel` para realizar o bundler do projeto: `yarn add parcel-bundler --dev`
- Criei uma pasta `src` na raiz do projeto e coloquei um `index.html`
- No arquivo `index.html` coloquei um codigo html base
- Coloquei um arquivo `index.js`
- inseri um `console.log("Hello")` dentro do arquivo `index.js`
- Importei o arquivo `index.js` dentro do `index.html`
- Criei um script para o parcel: `"dev": "parcel src/*.html",`
- Rodei o script
- criei a seguinte estrutura padrão no `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Personal Portfolio</title>
  </head>
  <body>
    <nav id="navbar">
      <ul>
        <li><a href="#welcome-section">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <section id="welcome-section">
      <h1>Hey I am Henrique Jensen</h1>
      <p>a front end developer</p>
    </section>
    <section id="projects">
      <h1>These are some of my projects</h1>
      <div class="project-list">
        <div class="project">
          <div class="project-tile">
            <img
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tribute.jpg"
              alt="Tribute Page"
            />
          </div>
          <footer class="project-footer">
            <a href="#" target="_blank">Tribute Page</a>
          </footer>
        </div>
      </div>
    </section>
    <section id="contact">
      <div>
        <h1>Let's work together...</h1>
        <p>How do you take your coffee?</p>
      </div>
      <div class="social-medias">
        <a class="profile-link" href="#" target="_blank">GitHub</a>
        <a class="profile-link" href="#" target="_blank">Facebook</a>
        <a class="profile-link" href="#" target="_blank">Twitter</a>
        <a class="profile-link" href="#mailto:example@example.com"
          >Send a mail</a
        >
        <a class="profile-link" href="tel:1181189899">Call me</a>
      </div>
    </section>
    <script src="./index.js"></script>
  </body>
</html>
```

- Comecei estilizando a navbar, ela deve ser fixa na pagina, os textos do menu ficam centralizados a esquerda
- Dentro da pasta `src` criei um arquivo `style.scss`
- Importei o arquivo dentro do `index.html`
- Criei dentro da src uma pasta chamada `sass`
- Criei um arquivo chamado `reset.scss` e coloquei o conteudo do seguinte link: https://gist.githubusercontent.com/DavidWells/18e73022e723037a50d6/raw/ead7e72d11c847ad9b81f094686543522101c278/reset.css
- criei o arquivo `_colors.scss` dentro da pasta `sass` e coloquei o seguinte código

```scss
$white: white;
$black: black;
$red: #be3144;
$menu-background: $red;
$menu-hover-background: #45567d;
$welcome-background: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
```

- criei o arquivo `_navbar.scss` dentro da pasta `sass` e coloquei o seguinte código

```scss
#navbar {
  background-color: $menu-background;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  width: 100%;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }

  li {
    cursor: pointer;
    height: 100%;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    &:hover {
      background-color: $menu-hover-background;
    }
  }

  a {
    color: $white;
    text-decoration: none;
  }
}
```

O `style.scss` ficou da seguinte forma

```scss
@import "sass/reset";

html {
  font-size: 14px;
}

@media (max-width: 30em) {
  html {
    font-size: 12px;
  }
}

@import "sass/colors";
@import "sass/navbar";
```

- Criei dentro da pasta `sass` o arquivo `_welcome.scss` com o seguinte conteudo

```scss
#welcome-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: $white;
  background-color: $black;
  background-image: $welcome-background;

  h1 {
    font-size: 5rem;
    text-align: center;
  }

  p {
    font-size: 2rem;
    font-weight: 300;
    color: $red;
  }
}
```

- Criei dentro da pasta `sass` o arquivo `_projects.scss` com o seguinte conteudo

```scss
#projects {
  background-color: $blue;
  color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5rem;
    padding: 8rem 1rem;
    text-align: center;
  }
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 4rem;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  margin-bottom: 6rem;
}

.project {
  text-align: center;
}

.project-tile {
  img {
    max-width: 100%;
  }
}

.project-footer {
  background-image: $welcome-background;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  a {
    text-decoration: none;
    color: $white;
    font-size: 2rem;
  }
}
```

- Criei dentro da pasta `sass` o arquivo `_contact.scss` com o seguinte conteudo

```scss
#contact {
  background-image: $welcome-background;
  height: 100vh;
  color: $white;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  h1 {
    font-size: 5rem;
    padding-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    font-style: italic;
  }
}

.social-medias {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5rem;
  a {
    color: $white;
    text-decoration: none;
    cursor: pointer;
    font-size: 3rem;
    padding: 2rem;
  }
}
```
