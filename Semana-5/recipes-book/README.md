# Livro de receitas

![design](./src/assets/mockup.gif)

## Criando a busca

Sem fazer o layout ja fiz o import dos dados na app, realizei um map sobre os valores e fiz a busca neles

```jsx
import React from "react";
import "./App.css";
import data from "./data/recipes.json";

function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [recipesOriginal, setRecipesOriginal] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    setRecipes(data.results);
    setRecipesOriginal(data.results);
  }, []);

  const handleChangeSearch = e => {
    const value = e.target.value;
    setSearch(value);
    setRecipes(
      recipesOriginal.filter(r =>
        r.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <section>
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={handleChangeSearch}
        />
      </section>
      <section>{recipes.map(recipe => recipe.title)}</section>
    </div>
  );
}

export default App;
```
