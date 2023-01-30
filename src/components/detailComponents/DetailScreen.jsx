import React,{useEffect, useState} from 'react';
import Banner from './Banner';
import classes from './DetailScreen.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const baseUrl = 'https://recipes.devmountain.com'

const DetailScreen = () => { 
  const [recipe, setRecipe] = useState({}) 

  const {recipeId} = useParams() 
  console.log(recipeId,'id')

  useEffect(()=> {
    axios.get(`${baseUrl}/recipes/${recipeId}`).then((res)=> setRecipe(res.data))
  },[recipeId])
  console.log(recipe, 'recipe')
  return (
    <section>
     <Banner />
     <main className={classes['details-wrapper']}>
      <article className={classes["left-detail"]}>
        <div className={classes['left-card']}>
          <div className={classes["recipe"]}>
            <h2 className={classes.title}>Recipe</h2>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.serves}</p>
          </div>
          <div className={classes["ingredients"]}>
            <h2 className={classes.title}>Ingredients</h2>
            {recipe.ingredients?.map((item)=>{
              return (
                <p key={item.ingredient_id}>{item.quantity}  {item.ingredient}</p>
              )
            })}
           
          </div>
        </div>
      </article>
      <article className={classes['right-detail']}>
        <div className={classes['right-card']}>
          <div className={classes["instructions"]}>
            <h2 className={classes.title}>Instructions</h2>
            <p>{recipe.instructions && JSON.parse(recipe.instructions)}
            </p>
          </div>
        </div>
      </article>
      
     </main>
    </section>
  );
};

export default DetailScreen;
