import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import classes from './HomeScreen.module.css'

const SearchBar = ({search, setSearch}) => {
  return (
    <div className={classes['search-wrapper']}>
        <BiSearchAlt  size="1.5em" color="#DA7533"/>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className={classes['search']} type='text' placeholder='Search for a Recipe'/>
    </div>
  )
}

export default SearchBar