import { useState } from 'react';
import './App.css';
import { MovieCard } from './MovieCard';

function App() {
  const [movies,setMovies]=useState([
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Type": "movie",
      "Images": 
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",

    },
    {
      "Title": "I Am Legend",
      "Year": "2007",
      "Rated": "PG-13",
      "Type": "movie",
      "Images": 
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",

    },
    {
      "Title": "300",
      "Year": "2006",
      "Rated": "R",
      "Type": "movie",
      "Images": 
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
    },
    {
      "Title": "The Avengers",
      "Year": "2012",
      "Rated": "PG-13",
      "Type": "movie",
      "Images":  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",

    },
    {
      "Title": "The Wolf of Wall Street",
      "Year": "2013",
      "Rated": "R",
      "Type": "movie",
      "Images": 
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"   
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Type": "movie",
      "Images": 
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",       
    }
  ])
  return (
  <div className='grid grid-cols-[3fr_1fr] my-10'>
  <div className='flex flex-wrap justify-center space-x-10 '> 
  {movies.map(movie=>{
    return <MovieCard movie={movie}/>
  })}
</div>
<div className='text-center border-4 mx-5'>
  <h1 className='font-bold text-xl'>Adding a film </h1> <br></br>
  <input type="text" placeholder='Film-name'/>
  <button onClick={}>Add</button> 
  <h1 className='font-bold text-xl mt-5'>Filtering Films </h1> 
  <input type="text" placeholder='Filter A-Z'/>
  <button>Search</button>    
  </div>
  </div>

)

};

export default App;