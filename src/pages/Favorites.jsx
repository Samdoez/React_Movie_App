import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites(){
    const {favorites} = useMovieContext();

    if(favorites){
        return(
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movies) => {
                        <MovieCard movie = {movie} key={movie.id}/>
                    })}
                </div>
            </div>
        )
    }

    return(
        <div className="favorites-empty">
            <h1>No Movies Yet</h1>
            <p>Add movies and they will appear here</p>
        </div>
    )
}

export default Favorites;