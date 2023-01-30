import React from 'react';
import classes from './HomeScreen.module.css';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = ()=> {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
  return (
    <section className={classes.card}>
        <div className={classes['card-img']}>
            <img src={recipe.image_url} alt={recipe.recipe_name} />
        </div>
        <div className={classes['card-content']}>
            <p className={classes['card-title']}>
                {recipe.recipe_name}
            </p>
            <button onClick={handleClick} className={classes['blue-btn']}>See More</button>
        </div>
    </section>
  )
}

export default RecipeCard