import { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../App.jsx';

const movInfo = (props) => { 

    const [movInfo, setMovInfo] = useState();
    const { selected } = props;

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${selected}&apikey=${API_KEY}`)
            .then((res) => setMovInfo(res.data))
            .catch((err) => console.error("Error fetching movie info:", err));
    }, [selected]);

  return (
    <div className='flex flex-row p-6 justify-center border-b-1px border-neutral-600'>
        {movInfo ? (
            <>
                <img src={movInfo?.Poster} 
                     alt='poster' 
                     className='object-cover w-80 h-96' 
                />
                <div className='flex flex-col m-5'>
                    <p className='text-lg font-semibold text-black m-2 whitespace-nowrap overflow-hidden capitalize'>{movInfo?.Type}: <span>{movInfo?.Title}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>IMDB Rating: <span>{movInfo?.imdbRating}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Year: <span>{movInfo?.Year}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Language: <span>{movInfo?.Language}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Ratings: <span>{movInfo?.Rated}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Release Date: <span>{movInfo?.Released}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Runtime: <span>{movInfo?.Runtime}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Genre: <span>{movInfo?.Genre}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Director: <span>{movInfo?.Director}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Director: <span>{movInfo?.Director}</span></p>
                    <p className='text-sm font-medium text-black m-0.5 whitespace-nowrap overflow-hidden capitalize'>Plot: <span>{movInfo?.Plot}</span></p>
                </div>
                <button 
                    className='text-lg font-semibold bg-gray-400 p-2 cursor-pointer rounded-md'
                    onClick={() => props.updateSelected()}
                >
                    X
                </button>
            </>
        ) : (
            "Loading..."
        )}
        
    </div>
  )
}

export default movInfo
