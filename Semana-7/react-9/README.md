# Criar um mini fórum

Até agora trabalhamos em aplicaçōes somente de uma página, mas como lidar com mudança de rotas? O React Router vem pra resolver este problema pra nós!
Para botar esta nova ferramenta a prova, crie um mini fórum de internet!

## Requisitos

Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

Na primeira execução rodar o comando:

```bash
$ npm install
```

Depois, para começar a desenvolver:

```bash
$ npm start
```

## Tópicos

Com esse desafio, você aprenderá:

- SPA
- React Router

### Tarefas

- Rota `/`
  - Deve listar todas as Threads retornadas pela API
    - Exibir no mínimo informaçōes básicas (título e número de respostas)
    - Conter um `RouterLink` para levar para a tela de visualização da thread
- Rota `/thread/:thread_slug`
  - Deve fazer uma request para API
    - Se a Thread não existir, redirecionar pra `/404`
    - Se ela existir
      - Deve conter um link para voltar para a tela inicial
      - Deve-se listar no mínimo informaçōes básicas (título, corpo (body) e número de respostas)
      - Exibir todas as repostas (no mínimo o corpo (body) da reply)
- Rota `/404`
  - Deve conter um link para voltar para a tela inicial

### Exemplo

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/vue-4/27pkeDP.gif)

### Atenção

Todos os links que voltam para a tela inicial (na rota 404 e /thread/:thread_slug) devem conter um atributo `data-test` com o valor `voltar`
Cada container de Thread deve conter um atributo `data-test` com o valor `thread`
Cada link que direciona para a tela de visualização da Thread deve conter um atributo `data-test` com o valor `link`
Cada container de resposta na tela de visualização da Thread deve conter um atributo `data-test` com o valor `resposta`

#### API

Neste desafio, assim que você roda o comando `api`, um servidor node que prove a API para consumo é criado com dois endpoints, que são:

> Dica: Você pode rodar comandos em paralelo em um único terminal usando `|`, exemplo: `npm start | npm run api`

Listar todas as Threads:

```bash
GET http://localhost:1338/api/threads
```

Resposta:

```json
{
  "data": [
    {
      "id": 1,
      "title": "in qui recusandae non ut",
      "slug": "in-qui-recusandae-non-ut-1",
      "body": "Nemo facere recusandae reiciendis voluptatem nihil facere perferendis qui. Et nam voluptas itaque quibusdam aut. Dolor at repellendus debitis minima minus et velit nisi veniam. Nemo animi dolorem reprehenderit rem officia. Excepturi a nisi autem voluptate eos quis porro laborum. Voluptatem eaque at consequatur at dicta eum iste qui.",
      "total_replies": 2,
      "user": {
        "id": 1,
        "name": "Fábio Martins Jr.",
        "email": "Warley_Costa@live.com",
        "created_at": 1563255424468
      },
      "created_at": 1563285424468
    }
  ]
}
```

Visualizar uma Thread:

```bash
GET http://localhost:1338/api/threads/{thread_slug}
```

Resposta:

```json
{
  "data": {
    "id": 1,
    "title": "in qui recusandae non ut",
    "slug": "in-qui-recusandae-non-ut-1",
    "body": "Nemo facere recusandae reiciendis voluptatem nihil facere perferendis qui. Et nam voluptas itaque quibusdam aut. Dolor at repellendus debitis minima minus et velit nisi veniam. Nemo animi dolorem reprehenderit rem officia. Excepturi a nisi autem voluptate eos quis porro laborum. Voluptatem eaque at consequatur at dicta eum iste qui.",
    "total_replies": 2,
    "user": {
      "id": 1,
      "name": "Fábio Martins Jr.",
      "email": "Warley_Costa@live.com",
      "created_at": 1563255424468
    },
    "created_at": 1563285424468,
    "replies": [
      {
        "id": 1,
        "thread_id": 1,
        "user": {
          "id": 2,
          "name": "Carlos Braga",
          "email": "Nataniel81@gmail.com",
          "created_at ": 1563165424467
        },
        "body": "Suscipit soluta harum nulla labore et unde harum. Porro sunt voluptatem aspernatur rem sit sunt autem. Et cupiditate modi delectus harum. Iure dolorem laboriosam quis vel. Voluptatem beatae temporibus sapiente ut maxime sequi delectus tempora repellat.",
        "created_at": 1563270424468
      },
      {
        "id": 2,
        "thread_id": 1,
        "user": {
          "id": 3,
          "name": "Pedro Braga Neto",
          "email": "Tertuliano4@live.com",
          "created_at": 1563195424467
        },
        "body": "Impedit sint laborum. Laboriosam ea et. Id esse ut dicta id velit laborum deserunt numquam. Earum autem repellendus quos error exercitationem. Est qui recusandae minus quibusdam accusamus esse maiores eos.",
        "created_at": 1563285424468
      }
    ]
  }
}
```
