import { useEffect } from "react";
import axios from "axios";

function App(){
  const API = "https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page=1"


  useEffect(()=>{
    async function fetchingfunction(){
      let response = await fetch(API);
      // let data = await response.json();
      console.log(data);
    }
    fetchingfunction();
  },[])
  return(
    <>
      <h1>HEllo</h1>
    </>
  )
}
export default App;