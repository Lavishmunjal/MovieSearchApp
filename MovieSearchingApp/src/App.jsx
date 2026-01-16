import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MovieCard from './components/MovieCard'

function App() {
  // const [count, setCount] = useState(0)
  const [allMoviedata, setAllMovieData] = useState([])
  const [searcMovie, setSearchMovie] = useState("hero")
  const [loading, setLoading] = useState(false)

  const fetchMovieData = async () => {
    try {
      setLoading(true)
      const res = await fetch(`http://www.omdbapi.com/?s=${searcMovie}&apikey=`)
      const data = await res.json()
      console.log(data.Search)
      setAllMovieData(data.Search)
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  return (
    <>
      {/* <h1 className='text-2xl'>Hello world</h1> */}
      <Navbar search= {searcMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
      <MovieCard allMoviedata={allMoviedata} loading={loading} />
    </>
  )
}

export default App
