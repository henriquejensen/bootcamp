# Semana 6

## API, formulários e validação

### TL;DR

- Promises
- Forms in React
- Axios
- Fetch API
- State

### Desafio

Listar repositórios de usuário do GitHub

#### Sobre

O GitHub é a nossa rede social, e por que não usar sua API junto com os seus novos conhecimentos em programação asíncrona, validação de formulários e consumo de APIS pra construir algo novo? O seu objetivo é criar uma aplicação que lista os repositórios de um usuário do GitHub!

#### Requisitos

- Ler o texto de um `input` para pegar o nome do usuário a ter os repositórios listados assim que o formulário for submetido
- Pré validar o conteúdo do input de acordo com estas regras:
  - Somente caracteres alfanuméricos ou um único hífen
  - Não pode começar ou terminar com hífen
  - Máximo de 39 caracteres
- Fazer requisição para o endpoint do GitHub usando a `Fetch API`
- Se o usuário não existir (404) exibir erro de validação de usuário não encontrado
- Se o usuário não tiver nenhum repositório, exibir um "Empty State" de "O usuário não tem nenhum repositório"
- Se a request for bem sucessida e o usuário tendo 1 ou mais repositórios, liste-os.
  - Deve-se exibir ao menos informaçōes básicas do repositório (nome, link e número de stars)
- Assim que o conteúdo do `input` for alterado (ao submit do formulário) a lista deve ser deletada.

#### Notas

O campo `input` deve conter um atributo `data-error` com o valor `formato` **se** a pré validação der erro
O campo `input` deve conter um atributo `data-error` com o valor `nao-encontrado` **se** o usuário não existir
O container do "Empty State" deve conter uma tag `data-test` com o valor `sem-resultados`

### Refs

https://pt-br.reactjs.org/docs/forms.html
https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
https://blog.matheuscastiglioni.com.br/trabalhando-com-promises-em-javascript/
https://pt.stackoverflow.com/questions/45783/o-que-%C3%A9-rest-e-restful
https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
https://blog.matheuscastiglioni.com.br/realizando-requisicoes-ajax-com-axios/
https://alligator.io/js/async-functions/
https://medium.com/@oieduardorabelo/javascript-armadilhas-do-asyn-await-em-loops-1cdad44db7f0
https://developer.github.com/v3/repos/#list-user-repositories
