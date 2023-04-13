import React from 'react'
import styles from "./card.module.css";
const MAX_SUMARRY=200
const Card = ({movie}) => {
 const overview = movie.overview?.length  >MAX_SUMARRY ? movie.overview.slice(0,MAX_SUMARRY)+"...." : movie.overview
  return (
    <div className={styles.box}>
        <div className={styles.content}>
              <img src={"https://image.tmdb.org/t/p/w200/"+movie.poster_path} className={styles.image} />
              <div className={styles.info}>
                <p className={styles.title}>{movie.title || "unknown Movie"}</p>
                <p className={styles.summary}>{overview}</p>
              </div>
        </div>
    </div>
  )
}

export default Card