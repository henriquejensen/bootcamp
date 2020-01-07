# Semana 5

## Framework II

### TL;DR

- Create React App
- Componentes
- Gerenciamento de estado

### Desafio

Criar Quiz estilo "Buzzfeed"

#### Sobre

O Create React App facilita a vida do desenvolvedor, com um único arquivo de configuração simples conseguimos desfrutar de todas as features do desenvolvimento moderno, fazendo o **bundle** do código inteiro!
Com esta ferramenta, você deve criar um _Quiz_ no estilo Buzzfeed!

#### Requisitos

- O projeto deve ser criado usando o `create-react-app`
- Listar perguntas com as alternativas
- Permitir trocar alternativa selecionada
- Ao terminar de preencher o quiz, exibir o resultado de quantas perguntas o usuário acertou
- Botão de "Refazer Quiz", que deve reiniciar as alternativas selecionadas e o resultado

#### Notas

As alternativas certas devem conter um atributo `data-test` com o valor `correta`
As alternativas incorretas devem conter um atributo `data-test` com o valor `incorreta`
O botão de "Refazer Quiz" **deve** conter um atributo `data-test` com o valor de `limpar-dados`
O elemento de exibição do resultado deve conter um atributo `data-resultado` com o valor correspondente ao total de acertos

### Refs

https://create-react-app.dev/
https://blog.matheuscastiglioni.com.br/criando-minha-primeira-app-com-react/
https://pt-br.reactjs.org/docs/components-and-props.html
https://pt-br.reactjs.org/docs/introducing-jsx.html
