# Survey form

## Instalação e estrutura do projeto

A estrutura do projeto seguirá o seguinte exemplo

```
survey-form
  - dist (pasta gerada pelo bundler com os arquivos buildados)
  - src (pasta principal dos projetos)
    - js (pasta dos arquivos javascript)
    index.html (arquivo html root)
    index.js (arquivo html root)
  package.json
  README.md
```

Para este projeto vamos utilizar os seguintes pacotes:

parcel -> bundler para o projeto
bootstrap -> framework css

Para o parcel a instalação é o seguinte
`yarn add -D parcel-bundler`

Logo após instalado criamos o script dentro do package.json

```json
"start": "parcel src/index.html",
"build": "parcel build src/index.html"
```

Para o bootstrap vamos inserir o link do cdn no index.html

## Criando o layout

baseado nas seguintes especificações: https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />
  </head>
  <body class="container">
    <header id="header">
      <h1 id="title">Survey Form</h1>
      <p id="description">
        Thnk you for taking the time to help us imporve the platform
      </p>
    </header>
    <main>
      <form id="survey-form">
        <div class="form-group">
          <label for="name" id="name-label">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            class="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email" id="email-label">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            class="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="age" id="number-label">Age (optional</label>
          <input
            name="age"
            type="number"
            id="number"
            class="form-control"
            min="1"
            max="150"
            placeholder="Age"
          />
        </div>

        <div class="form-group">
          <label for="role">
            Which option best describes your current role?
          </label>
          <select name="role" id="dropdown" class="form-control">
            <option value="student" name="student">Student</option>
            <option value="fulljob" name="fulljob">Full time job</option>
            <option value="learner" name="learner">Full time learner</option>
            <option value="nottosay" name="nottosay">Prefer not to say</option>
            <option value="other" name="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <h1>Would you recommend us to a friend?</h1>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="definitely"
              />
              <label class="form-check-label" for="inlineRadio1">
                Definitely
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="maybe"
              />
              <label class="form-check-label" for="inlineRadio2">
                Maybe
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="notsure"
              />
              <label class="form-check-label" for="inlineRadio3">
                Not sure
              </label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="role">
            What is your favorite feature?
          </label>
          <select name="role" id="dropdown" class="form-control">
            <option value="challenges">Challenges</option>
            <option value="projects">Projects</option>
            <option value="community">Community</option>
            <option value="opensource">Open Source</option>
          </select>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="frontend"
              value="frontend"
            />
            <label class="form-check-label" for="frontend">
              Front-end Projects
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="backend"
              value="backend"
            />
            <label class="form-check-label" for="backend">
              Back-end Projects
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="datavisualization"
              value="datavisualization"
            />
            <label class="form-check-label" for="datavisualization">
              Data Visualization
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="challenges"
              value="challenges"
            />
            <label class="form-check-label" for="challenges">
              Challenges
            </label>
          </div>

          <div class="form-group">
            <label for="comments">Any comments or suggestions?</label>
            <textarea
              class="form-control"
              id="comments"
              rows="3"
              placeholder="Enter your comment here..."
            ></textarea>
          </div>
        </div>
        <button id="submit" class="btn btn-success btn-block" type="submit">
          Submit
        </button>
      </form>
    </main>
    <script src="./index.js"></script>
  </body>
</html>
```

## Criando a lógica JavaScript
