import { useState } from 'react'
import Movies from './components/Movies'
import axios from 'axios'
import MovieInfo from './components/MovieInfo';

const API_KEY = '303115a8';

const App = () => {

  const [search, updateSearch] = useState();
  const [timeOutId, updateTimeOutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selected, updateSelected] = useState();

  const fetchMovies = async (searchMovie) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${searchMovie}&apikey=${API_KEY}`
    );
    updateMovieList(res.data.Search);
  }

  const onTextChange = (e) => {
    clearTimeout(timeOutId);
    updateSearch(e.target.value);
    
    const timeout = setTimeout(() => fetchMovies(e.target.value), 500)
    updateTimeOutId(timeout);
  }

  return (
    <div className='flex flex-col'>
      
      <div className='flex flex-row bg-black text-white p-3 text-[25px] text-bold shadow-md justify-between'>
        <p className='items-center px-15'>
          MOVIX
        </p>
        <input 
          className='w-[40%] h-full text-lg bg-white text-black p-2 mr-10 rounded-lg outline-none'
          type='text' 
          placeholder='Search movie' 
          value = { search }
          onChange={ onTextChange }
        /> 
      </div>

      {selected && <MovieInfo selected={selected} />}

      <div className='flex flex-row flex-wrap p-8 justify-evenly'>
        {
          movieList?.length ? 
          movieList.map((movie, index) => <Movies key={index} movie={movie} updateSelected={updateSelected} />) 
          : 
          "Search the movie you want to watch..."
        }
      </div>

    </div>
  )
}

export default App
