import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function App(){

  const [page, setPage] = useState(1);
  const [movies,setMovies] = useState([])

  const API = "https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page=${page}"

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function fetchingAPI() {
      let response = await axios.get(`${API}${page}`)
      setMovies(response.data.results);
    }
    fetchingAPI();
  }, [page])

  return (
    <>
    <button onClick={handlePrevious}>Previous</button>
    <span>Page: {page}</span>
    <button onClick={handleNext}>Next</button>
    <div style={{ display: "flex",gap:"10px" ,flexWrap: "wrap" }}>
      {
        movies.map((element,index) => {
          return (
            <div>
              <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} />
              <h4>{element.title}</h4>
            </div>
          )
        })
      }

    </div>
    </>

  )
}
export default App;