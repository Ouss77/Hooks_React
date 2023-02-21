import React, { useState } from 'react'
import { MovieCard } from './MovieCard';
import data from './data';

function Home() {
    const [movies, setMovies] = useState(data)

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
        let status = false;
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
            return;
        }

        movies.map(tit => {
            if (tit.Title == newMovie.Title.trim()) {
                status = true
            }
        })
        if (status == true) {
            alert("this movie already exist")
        }
        else {
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
        <div> <h1 className='text-center mr-[300px] font-bold mt-10 text-2xl'>The best Movies</h1>
            <div className='grid grid-cols-[3fr_1fr] my-10'>

                <div className='flex flex-wrap justify-center space-x-10 '>
                    {filteredMovies.map((movie, index) => (
                        <a key={movie.id} href={`desc/${movie.id}`}>
                            <MovieCard movie={movie} />
                        </a>
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
            </div></div >
    )
}

export default Home