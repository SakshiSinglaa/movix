import React from 'react'

const Movies = (props) => {

    const { Title, Year, imdbID, Type, Poster } = props.movie;

    return (
        <div 
            className='flex flex-col m-2 p-2.5 w-72 border border-neutral-600 cursor-pointer hover:scale-105 shadow-gray-900'
            onClick={() => {
                props.updateSelected(imdbID);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }} 
        >

            <img 
                className='w-full h-80'
                src={Poster}
                alt='poster'
            />

            <p className='text-lg text-start text-black font-semibold mt-3.5 whitespace-nowrap overflow-hidden'>
                {Title}
            </p>

            <div className='flex flex-row justify-between text-sm mt-2 font-medium capitalize'> 
                <p>Year: {Year}</p>
                <p>Type: {Type}</p>
            </div>
    
        </div>
    
    ) 
}

export default Movies
