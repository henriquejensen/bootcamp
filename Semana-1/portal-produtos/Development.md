# Portal de produtos

Descrição do desenvolvimento da aplicação de um portal de produtos

Pontos:

- A app foi desenvolvida com o conceito de mobile first

## Parte 1

Na primeira parte apenas estruturei o HTML com as informações

```html
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

<nav class="menu">
  <div>
    Original Trombones
  </div>
  <ul>
    <li>Features</li>
    <li>Hor it Works</li>
    <li>Pricing</li>
  </ul>
</nav>

<main class="main">
  <h1>Handcrafted, home-made masterpieces</h1>
  <form>
    <div class="form-group">
      <input
        type="text"
        placeholder="Enter your email address"
        class="form-control"
        required
      />
    </div>
    <button type="submit" class="btn">GET STARTED</button>
  </form>
</main>

<section class="features">
  <div class="feature">
    <h2>Premium Materials</h2>
    <p>
      Our trombones use the shiniest brass which is sourced locally. This will
      increase the longevity of your purchase.
    </p>
  </div>

  <div class="feature">
    <h2>Fast Shipping</h2>
    <p>
      We make sure you recieve your trombone as soon as we have finished making
      it. We also provide free returns if you are not satisfied.
    </p>
  </div>

  <div class="feature">
    <h2>Quality Assurance</h2>
    <p>
      For every purchase you make, we will ensure there are no damages or faults
      and we will check and test the pitch of your instrument.
    </p>
  </div>
</section>

<section class="video">
  <iframe
    id="video"
    height="315"
    src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
    frameborder="0"
    allowfullscreen=""
  ></iframe>
</section>

<section class="plans">
  <div class="plan">
    <div class="plan-header">TENOR TROMBONE</div>
    <div>
      <h2>$600</h2>
      <p>Lorem ipsum.</p>
      <p>Lorem ipsum.</p>
      <p>Lorem ipsum dolor.</p>
      <p>Lorem ipsum.</p>
    </div>
    <button class="btn" type="button">SELECT</button>
  </div>

  <div class="plan">
    <div class="plan-header">BASS TROMBONE</div>
    <div>
      <h2>$900</h2>
      <p>Lorem ipsum.</p>
      <p>Lorem ipsum.</p>
      <p>Lorem ipsum dolor.</p>
      <p>Lorem ipsum.</p>
    </div>
    <button class="btn" type="button">SELECT</button>
  </div>

  <div class="plan">
    <div class="plan-header">VALVE TROMBONE</div>
    <div class="plan-body">
      <h2>$1200</h2>
      <p>Plays similar to a Trumpet.</p>
      <p>Great for Jazz Bands.</p>
      <p>Lorem ipsum dolor.</p>
      <p>Lorem ipsum.</p>
    </div>
    <button class="btn" type="button">SELECT</button>
  </div>
</section>

<footer class="footer">
  <div>
    <span>Privacy</span>
    <span>Terms</span>
    <span>Contact</span>
  </div>
  <p>Copyright 2016, Original Trombonesv</p>
</footer>
```

## Parte 2

### Aplicação de estilo no menu

```css
* {
  box-sizing: border-box;
}

:root {
  --background: #eee;
  --yellow: #f1c40f;
  --orange: orange;
  --black: black;
  --grey: #ccc;
}

body {
  background-color: var(--background);
  font-size: 15px;
  margin: 0;
  padding: 0;
}

.menu {
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  background-color: var(--background);
}

.menu div:first-child {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

### Aplicação do estilo da main

```css
.main {
  padding-top: 7rem;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.main h1 {
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

.form-control {
  padding: 5px;
  width: 250px;
}

.btn {
  background-color: var(--yellow);
  border: none;
  font-weight: bold;
  padding: 5px 15px;
}

.btn:hover {
  background-color: var(--orange);
  transition: background-color 1s;
}
```

### Aplicação do estilo da feature

```css
.feature {
  text-align: center;
  padding: 20px 0px;
}

.feature h2 {
  margin: 0;
}

.feature p {
  margin: 0;
}
```

### Aplicação do estilo do video

```css
.video {
  display: flex;
  justify-content: center;
}

.video > iframe {
  max-width: 560px;
  width: 100%;
}
```

### Aplicação do estilo dos planos

```css
.plans {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.plan {
  width: 250px;
  border: 1px solid var(--black);
  text-align: center;
  margin-top: 15px;
}

.plan-header {
  background-color: var(--grey);
  padding: 15px 0px;
  font-weight: bold;
}

.plan > button {
  margin-bottom: 15px;
}
```

### Aplicação do layout do footer

```css
.footer {
  background-color: var(--grey);
  width: 100%;
  padding: 20px;
  text-align: right;
}

.footer > p {
  margin: 0;
}

.footer > div > span {
  margin-left: 10px;
  font-size: 1.1rem;
  font-weight: 500;
}
```
