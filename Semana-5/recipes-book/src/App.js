import React from "react";
import "./App.css";
import data from "./data/recipes.json";

function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [recipesOriginal, setRecipesOriginal] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [recipeSelected, setRecipeSelected] = React.useState({});

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

  const handleEditRecipe = (recipe, index) => {
    setRecipeSelected({ recipe, index });
  };

  const handleChangeRecipe = (field, value) => {
    setRecipeSelected({
      ...recipeSelected,
      recipe: {
        ...recipeSelected.recipe,
        [field]: value
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newRecipesOriginal = [...recipesOriginal];
    newRecipesOriginal[recipeSelected.index] = recipeSelected;
    setRecipeSelected({});
    setRecipes(recipes.map());
    setRecipesOriginal(data.results);
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

      {recipeSelected.recipe && (
        <section>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={recipeSelected.recipe.title}
                onChange={e => handleChangeRecipe("title", e.target.value)}
              />
            </div>
          </form>
        </section>
      )}
      <section>
        {recipes.map((recipe, index) => (
          <div key={index} onClick={() => handleEditRecipe(recipe, index)}>
            {recipe.title}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
