# Criar Quiz estilo "Buzzfeed"

O Create React App facilita a vida do desenvolvedor, com um único arquivo de configuração simples conseguimos desfrutar de todas as features do desenvolvimento moderno, fazendo o **bundle** do código inteiro!
Com esta ferramenta, você deve criar um _Quiz_ no estilo Buzzfeed!

## Requisitos

Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

Na primeira execução rodar o comando:

```bash
$ npm install
```

Depois, para começar a desenvolver

```bash
$ npm start
```

## Tópicos

Com esse desafio, você aprenderá:

- Create React App
- Componentes
- Gerenciamento de estado

### Tarefas

- O projeto deve ser criado usando o `create-react-app`
- Listar perguntas com as alternativas
- Ao terminar de preencher o quiz, exibir o resultado de quantas perguntas o usuário acertou
- Botão de "Refazer Quiz", que deve resetar as alternativas selecionadas e o resultado

### Exemplo

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/vue-2/1qu3NMV.gif)

### Atenção

O elemento pai que contém as opções das perguntas **deve** conter um atributo `data-test` com o valor `pergunta`
Cada alternativa **deve** conter um atributo `data-test` com o valor `opcao`
Após a pergunta ser respondida, o elemento pai que contém as opções das perguntas **deve** conter um atributo `data-resposta` com o valor `correta` ou `errada` respectivamente
O elemento pai que mostra o resultado final **deve** conter um atributo `data-resultado` com o valor total de respostas corretas
O botão de "Refazer o Quiz" **deve** conter um atributo `data-test` com o valor `refazer`
