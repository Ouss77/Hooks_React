
import React, { useState } from 'react';
import { MovieCard } from './MovieCard';

function InputForm() {
  const [movies, setMovies] = useState([
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
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Type": "movie",
      "Images": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    },
    {
      "Title": "I Am Legend",
      "Year": "2007",
      "Rated": "PG-13",
      "Type": "movie",
      "Images": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",

    }
  ]);

  const [newMovie, setNewMovie] = useState({
    "Title": "",
    "Year": "",
    "Rated": "",
    "Type": "",
    "Images": "",
  });

  const handleChange = (event) => {
    setNewMovie({
      ...newMovie,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    let status=false;
    //PreventDefault to not refreshing the page ?
    event.preventDefault();
    let isFormValid = true;
    for (const key in newMovie) {
      if (!newMovie[key].length) {
        isFormValid = false;
        break;
      }
    }
    if (!isFormValid) {
      alert("Not all the fields are filled")
      return;}

      movies.map(tit => {
      if(tit.Title == newMovie.Title.trim()){
        status=true
      }
    })
    if(status==true){
      alert("this movie already exist")
    }
    else{
      setMovies([...movies, newMovie]);
      setNewMovie({
        "Title": "",
        "Year": "",
        "Rated": "",
        "Type": "",
        "Images": "",
      });
    }
  }

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div>
    <h1 className='text-center mr-[300px] font-bold mt-10 text-2xl'>The best Movies</h1>
    <div className='grid grid-cols-[3fr_1fr] my-10'>
    <div className='flex flex-wrap justify-center space-x-10 '>
      {/* {movies.map((movie, index) => (
        <MovieCard movie={movie} />
      ))} */}
      {filteredMovies.map((movie, index) => (
        <MovieCard movie={movie} />
      ))}
    </div>
    <div className='text-center border-4 mx-5'>
      <h1 className='mt-10 mb-5 font-bold'>The form for adding a new Movie: </h1>
      <form onSubmit={handleSubmit}>
        <input className='border-2 border-rose-800  mb-2'
          type="text"
          name="Title"
          value={newMovie.Title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input className='border-2 border-rose-800 mb-2'
          type="text"
          name="Year"
          value={newMovie.Year}
          onChange={handleChange}
          placeholder="Year"
        />
        <input className='border-2 border-rose-800   mb-2'
          type="text"
          name="Rated"
          value={newMovie.Rated}
          onChange={handleChange}
          placeholder="Rated"
        />
        <input className='border-2 border-rose-800  mb-2'
          type="text"
          name="Type"
          value={newMovie.Type}
          onChange={handleChange}
          placeholder="Type"
        />
        <input className='border-2 border-rose-800  mb-2'
          type="text"
          name="Images"
          value={newMovie.Images}
          onChange={handleChange}
          placeholder="Images"
        />
        <br></br>
        <button className='mt-3 hover:bg-sky-500' type="submit">Submit</button>
      </form>
      <br />
      <h1 className='mt-10 mb-5 font-bold'>Filtering Films by names:</h1>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title or rating"
        />
        <button className=' hover:bg-sky-500' type="submit">Search</button>
      </form>
    </div>
  </div></div>
    
  );
}

export default InputForm;
