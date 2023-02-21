import { Outlet, useParams } from "react-router-dom";
import movies from "./data"

function Desc() {
    const { id } = useParams();

    if (movies[id] == undefined) {
        return(        <>
            <h1>movie not found</h1>
            <Outlet />
        </>)
    }
    else {
        return (
            <>
                <h1 className="text-center mt-[50px] font-bold text-xl text-cyan-500" >The description of the Movie:</h1>
                <p className="mr-[200px] ml-[200px] mt-[50px]">{movies[id].Description}</p>
                <h1 className="text-center mt-[50px] font-bold text-xl text-cyan-500" >The Trailer of the Movie:</h1>
                <iframe className="ml-[500px] mt-[50px]" width="560" height="315" src={movies[id].Trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>            </>)
    }
}

export default Desc;
