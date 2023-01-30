import React, { useState } from "react";
import classes from "./NewRecipeScreen.module.css";
import { Formik } from "formik";
import axios from "axios";
const baseURL = "https://recipes.devmountain.com";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values, {resetForm}) => {
    values.ingredients = ingredients;
    console.log(values);
    axios
      .post(`${baseURL}/recipes`, values)
      .then(() => {
        resetForm({values: ''})
        setIngredients([])
        Array.from( document.querySelectorAll('input[name="type"]:checked'), input => input.checked = false );
        alert("Recipe added successfully!"
      )})
      .catch((err) => console.log(err));
  };

  const addIngredient = (e) => {
    e.preventDefault()
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  return (
    <section className={classes["new-recipe-wrapper"]}>
      <h1 className={classes["form-title"]}>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form className={classes["form-wrapper"]} onSubmit={handleSubmit}>
            <div className={classes.row}>
              <input
                className={classes.long}
                type="text"
                value={values.recipeName}
                name="recipeName"
                placeholder="Title your Recipe!"
                onChange={handleChange}
              />
              <input
                className={classes.long}
                type="text"
                placeholder="Image URL"
                value={values.imageURL}
                name="imageURL"
                onChange={handleChange}
              />
            </div>
            <div className={classes.radio}>
              <input
                type="radio"
                id="cook"
                name="type"
                value="Cook"
                onChange={handleChange}
              />
              <label htmlFor="cook">Cook</label>
              <input
                type="radio"
                id="bake"
                name="type"
                value="Bake"
                onChange={handleChange}
              />
              <label htmlFor="bake">Bake</label>
              <input
                type="radio"
                id="drink"
                name="type"
                value="Drink"
                onChange={handleChange}
              />
              <label htmlFor="drink">Drink</label>
            </div>
            <div className={classes.row}>
              <input
                className={classes.short}
                type="text"
                placeholder="Prep time"
                name="prepTime"
                value={values.prepTime}
                onChange={handleChange}
              />
              <input
                className={classes.short}
                type="text"
                placeholder="Cook time"
                name="cookTime"
                value={values.cookTime}
                onChange={handleChange}
              />
              <input
                className={classes.short}
                type="text"
                placeholder="Serves"
                name="serves"
                value={values.serves}
                onChange={handleChange}
              />
            </div>
            <div className={classes["column-section"]}>
              <div className={classes["left-column"]}>
                <input
                  className={classes.long}
                  type="text"
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className={classes.long}
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <ul className={classes["right-column"]}>
                {ingredients.map((ingredient) => {
                  return (
                    <li className={classes.list} key={ingredient.name}>
                      {ingredient.name} {ingredient.quantity}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={classes.actions}>
              <button className={classes["add-btn"]} onClick={addIngredient}>
                Add Another
              </button>
              <textarea
                name="instructions"
                id="instructions"
                placeholder="What are the instructions?"
                cols="80"
                rows="10"
                value={values.instructions}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className={classes["save-btn"]}>
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
