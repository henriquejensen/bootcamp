# Acessibilidade

Acessibilidade geralmente significa ter um conteudo e uma interface do usuário que possa ser entendida, navegada e interagida por uma ampla audiencia. Isso inclui pessoas com desabilidade visual, auditiva, movel ou cognitiva.

Alguns usuários podem usar assistentes de voz, leitores de tela ou navegarem somente usando o teclado.

## Textos alternativos para imagens - alt

O texto do atributo `alt` nas tags `img` descrevem a imagem e proveem um texto alternativo para isso.
Ele útils nos casos de erro de carregamento da imagem ou o usuário noã puder ver ela. Também é utilizado pelos motores de busca.

```html
<img src="importantLogo.jpeg" alt="Company logo" />
```

Nos casos em que a imagem já foi explicada pelo texto da página ou ela é somente decorativa (background images) o atributo `alt` pode ser vazio.

```html
<img src="visualDecoration.jpeg" alt="" />
```

## Hierarquia de conteudo relacionado - h1,h2,h3,h4,h5,h6

## Tags semanticas

### main

tag que representa o conteudo principal da pagina, deve existir somente um por pagina. É o conteudo central, portanto nao deve conter conteudo que se repete, tal como menu de navegação

### article

Utilizado para encapsular grupos independentes

### sections

Utilizado para encapsular grupos de conteudo relacionados

### header

É utilizado para encapsular conteudos introdutorios ou links de navegação do componenten pai

### nav

Utilizado para encapsular o elemento de navegação principal da pagina.

### footer

Utilizado para encapsular informações que vão principalmente na parte de baixo da página.

### audio

Elemento para encapsular audio ou video da pagina. Ele suporta os controles default do browser como play, pause e etc.

### figure e figcaption

Eles são utilizados juntos para encapsular representações visuais (como imagens, graficos, diagramas) junto com sua caption (breve texto explicativo)
