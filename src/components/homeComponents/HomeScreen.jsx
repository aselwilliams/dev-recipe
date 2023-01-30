import React,{useEffect, useState} from 'react'
import AdBanner from './AdBanner';
import axios from 'axios';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const baseUrl = 'https://recipes.devmountain.com'

const HomeScreen = () => {  
  const [recipes, setRecipes]= useState([])
  const [search, setSearch] = useState('')

  const fetchRecipes=()=> {
      axios.get(`${baseUrl}/recipes`).then((res)=> {
        console.log(res.data)
        setRecipes(res.data)
    })
  }
  useEffect(()=> {
   fetchRecipes()
    },[])

 const filteredRecipes = recipes.filter((recipe,index)=> {
  return recipe.recipe_name.toLowerCase().includes(search.toLowerCase())
 })
 
  return (
    <div>
      <AdBanner />
      <SearchBar search={search} setSearch={setSearch} />
     <RecipeList filteredRecipes={filteredRecipes} />
    </div>
  )
}

export default HomeScreen