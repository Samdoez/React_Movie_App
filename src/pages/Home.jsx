import {useState, useEffect} from "react";
import {getPopularMovies, searchMovies} from "../services/Api";
import "../css/Home.css";
import MovieCard from "../components/MovieCard";

function Home(){
    const [searchText, setSearchText] = useState("");
    const [movieArray, setMovieArray] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMoviesArray = await getPopularMovies();
                setMovieArray(popularMoviesArray);
            } catch(error) {
                console.log(error);
                setError("Failed to load movies");
            } finally{
                setLoading(false);
            }
        };  loadPopularMovies()
    }, []);

    const handleSearch = async (event) => {
        event.preventDefault(); 
        if(!searchText.trim()) return;
        if(loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchText);
            setMovieArray(searchResults);
            setError(null);
        } catch(error) {
            console.log(error);
            setError("Failed to search movies");
        } finally {
            setLoading(false);
        }
    };

    return(
        <div>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input type="text" className="search-input" placeholder="Search for movies" 
                        value={searchText} onChange={(event) =>{setSearchText(event.target.value)}}>
                    </input>
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>

            {error && <div className="error-message">{error}</div>}

            {loading ? (<div className="loading">Loading Movies...</div>) :
                (<div className="movie-grid">
                    {movieArray.map((item) => {
                        return(item.title.toLowerCase().includes(searchText.trim().toLowerCase()) && <MovieCard movie={item} key={item.id}/>)
                    })}
                </div>)
            }
        </div> 
    )
}

export default Home;

// Anonymus function written with arrow function
// onChange={(e) => setSearchText(e.target.value)}

// Anonymus function written with traditional function
// onChange={function (e) {
//     setSearchText(e.target.value)
// } }

// if it has a name

// <input value={searchText} onChange={handleChange} />

// written with arrow function
// const handleChange = (e) => {
//   setSearchText(e.target.value);
// };

// written with Traditional function
// const handleChange = function (e) {
//   setSearchText(e.target.value);
// };

// or as 
// function handleChange(e) {
//   setSearchText(e.target.value);
// }

// in conclusion i can write a function with arrow function syntax or with traditional function keyword 
// irrespective of wether it is named or Anonymus