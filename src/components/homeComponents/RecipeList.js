import React from 'react';
import RecipeCard from './RecipeCard';
import classes from './HomeScreen.module.css'

const RecipeList = ({filteredRecipes}) => {
  return (
    <div className={classes['recipe-list']}>
    <section className={classes['recipe-container']}>
        {filteredRecipes.map((recipe,index)=>{
            return <RecipeCard key={recipe.recipe_id} recipe={recipe} />
        })}
      </section>
      </div>
  )
}

export default RecipeList