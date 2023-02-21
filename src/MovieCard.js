export function  MovieCard({movie}){
    return (
          <div className='text-center'>
            <img className='w-[300px]  aspect-auto	mt-10' src={movie.Images} alt="Image 1" />
            <h1>{movie.Title} ({movie.Year})</h1>
          </div>
      );
} 

