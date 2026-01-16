import React from 'react'

const MovieCard = ({ allMoviedata, loading }) => {

    
  return (
    <div>
        {loading && <h2 className='text-2xl text-black text-center mt-10'>Loading...</h2>}
        <div className='main flex px-6 py-5 flex-wrap lg:px-10 '>
            {allMoviedata.map((movie, index)=>{
                const {Title, Year, Poster} = movie;
                return (
                    <div key={index} className='child p-2 lg:w-1/4 w-full'>
                <div className='subchild bg-[#002e4b] p-3 rounded-md shadow-md hover:scale-105'>
                    <img src={Poster} alt="img" className='w-40 rounded-2xl mb-2'/>
                    <h2 className='text-white text-xl font-bold'>{Title}</h2>
                    <h2 className='text-gray-300 text-lg '>{Year}</h2>

                </div>
            </div>
                )
            }) }
        </div>
    </div>
  )
}

export default MovieCard