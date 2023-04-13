import React from 'react'
// import movies from "./data.json";
import Card from "../card/card";
import styles from "./Movielist.module.css";
const MovieList = ({movies}) => {
    const renderCardList = (movies|| []).map((movie,index)=>(
        <div className={styles.item} key={movie.id.toString()}>
            <Card movie={movie}/>
        </div>
    ))
  return (
    <div className={styles.movielist} >
      {renderCardList}
      
      {!movies.length && <div className={styles.notavailable}> <p >No available Movies Click on View All Button </p></div>}
    </div>
  )
}

export default MovieList