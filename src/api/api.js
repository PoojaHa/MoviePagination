import axios from "axios";


const baseUrl ="https://api.themoviedb.org/3";

const API_KEY = "4692f83609436a2e3011559f9dc39cbd"

// https://api.themoviedb.org/3/trending/all/day?api_key=4692f83609436a2e3011559f9dc39cbd


export const getTrandingMovies = async(page=1)=>{
    try{
      const res= await axios.get(`${baseUrl}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
      return res.data
    }catch(err){
     console.log(err)
    }
}
//https://api.themoviedb.org/3/search/movie?api_key=4692f83609436a2e3011559f9dc39cbd&language=en-US&page=1&include_adult=false&query=Shazam
export const getMoviesBySearch = async(query,page=1)=>{
    try{
      const res= await axios.get(`${baseUrl}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=${page}&query=${query}`)
      return res.data
    }catch(err){
     console.log(err)
    }
}