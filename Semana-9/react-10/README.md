# Criar uma agenda de contatos usando o Redux para gerenciar o estado

Nesta altura do campeonato, já conseguimos observar uma dor recorrente: compartilhar informaçōes com a aplicação inteira.
O que fazer quando dois componentes precisam dos mesmos dados? E se um deles é responsável por alterar, como imediatamente mandar esta nova informação pro outro sem que tudo vire uma grande bagunça?
Para isto nós usamos um `gerenciador de estado`, sendo ele o Vuex! Faça uma agenda de contatos para ver o quanto é simples manter dados compartilhados com toda a aplicação quando usamos ele!

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

- Flux pattern
- Redux
- Redux Persist

### Tarefas

- Rota `/`
  - Deve listar todos os contatos registrados
    - Cada contato deve ter um `RouterLink` para a página de edição
    - Cada contato deve ter uma ação de `Remover da Lista`
  - Exibir no mínimo os campos de `Nome` e `Email`
  - Conter um `RouterLink` para a página de criar novo contato
  - Conter o número total de contatos
  - Se não existir nenhum contato ainda, deve conter um `Empty State`
- Rota `/create`
  - Deve ter um formulário para criar um novo contato
    - Pode conter quantos campos quiser, mas é necessário ter `Nome` e `Email`
  - Deve ter uma ação de `Criar contato`
- Rota `/:contato_id/edit`
  - Deve tentar encontrar o contato via o parametro de ID
    - Se o contato não existir, redirecionar para a rota `/404`
    - Se ele existir
      - Deve ter um formulário para editar um contato
        - Deve conter os mesmo campos do formulário de criação, porém, devem vir preenchidos com os dados do usuário
        - Somente ao clicar em salvar que os dados devem ser atualizados
        - Deve conter uma action de `Salvar`
- Rota `/404`
  - Deve conter um link para voltar para a tela inicial

### Exemplo

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/vue-5/0OGbjIr.gif)

### Atenção

- Todas as alterações de contato (seja edição ou criação) devem ser persistidas no `LocalStorage`
- O elemento com o total de contatos deve conter um atributo `data-test` com o valor `total-${totalDeCotnatos}`
- Cada link de `editar contato` deve conter um atributo `data-test` com o valor `editar`
- Cada ação de `remover contato` deve conter um atributo `data-test` com o valor `apagar`
- O container do `Empty State` deve conter um atributo `data-test` com o valor `sem-contatos`
- O link de `Criar novo contato` deve conter um atributo `data-test` com o valor `novo-contato`
- O elemento `input` de alteração / cadastro do `nome` do contato, deve contar um atributo `data-test` com o valor `nome`
- O elemento `input` de alteração / cadastro do `email` do contato, deve contar um atributo `data-test` com o valor `email`
- A ação de `Criar novo contato` deve conter um atributo `data-test` com o valor `criar`
- A ação de `Salvar contato` deve conter um atributo `data-test` com o valor `salvar`
