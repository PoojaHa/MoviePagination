import React, { useState } from 'react'
import styles from "./serach.module.css";
const Searchbar = ({setMoviesBySearch,setTrandingMovies}) => {
    const [query,setQuery] =useState("");

    const handleSearch=()=>{
        setMoviesBySearch(query)
    }
    const handleClear=()=>{
        setQuery("");
        setTrandingMovies()
    }
  return (
    <div className={styles.searchbox}>
      <input type="text" value={query} className={styles.searchinput}  onChange={(e)=>setQuery(e.target.value)}/>
      <button type="button" className={styles.searchbutton} onClick={handleSearch}>Search</button>
      <button type="button" className={styles.searchclear} onClick={handleClear}>View All</button>
    </div>
  )
}

export default Searchbar