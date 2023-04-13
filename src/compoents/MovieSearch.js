import React from "react";
import { useEffect, useState } from "react";
import  {getTrandingMovies,getMoviesBySearch} from "../api/api";
import Searchbar from "./searchBar/search";
import MovieList from "./movieList/movieList";
import styles from "./moviesearch.module.css";
import Spinner from "./spinner/spinner";
const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage,setCurrentPage]=useState(1)
  const [totalPage,setTotalPage]=useState(1)
  const [loading,setLoading]=useState(false)

const setTrandingMovies=async(page)=>{
   setLoading(true)
   const data=await getTrandingMovies(page);
   setMovies(data?.results || [])
   setTotalPage(data?.total_pages)
   setCurrentPage(data?.page)
   setLoading(false)
}
const setMoviesBySearch=async(query,page)=>{
  setLoading(true)
  const data = await getMoviesBySearch(query,page);
  setMovies(data?.results || [])
  setTotalPage(data?.total_pages)
  setCurrentPage(data?.page)
  setLoading(false)
}
  useEffect(() => {
    setTrandingMovies();
  }, []);

   
  return (
    
   <div>
    {loading ? <Spinner/> : <> <div className={styles.searchbar}>
    <Searchbar setMoviesBySearch={setMoviesBySearch} setTrandingMovies={setTrandingMovies} />
    </div>
   
    <MovieList movies={movies}/> </>}
   
   </div>
      
  );
};

export default MovieSearch;
