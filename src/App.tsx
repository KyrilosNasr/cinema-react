import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FeaturedList from "./components/FeaturedList";
import MoviesList from "./components/MoviesList";
import SearchMovies from "./components/SearchMovies";
import { MovieDetail } from "./util/movie.interface";
import { popularUrl, searchUrl, trendingUrl } from "./util/urls";
function App() {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("popular");

  useEffect(() => {
    if (searchValue !== "") {
      axios
        .get(searchUrl, {
          params: {
            query: searchValue,
            page: 1,
          },
        })
        .then((res) => setMovies(res.data.results))
        .catch((error) => console.log(error));
    } else if (filter === "popular" && searchValue === "") {
      axios
        .get(popularUrl)
        .then((res) => {
          return setMovies(res.data.results);
        })
        .catch((error) => console.log(error));
    } else if (filter === "trending" && searchValue === "") {
      axios
        .get(trendingUrl)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((error) => console.log(error));
    }
  }, [filter, searchValue]);

  const searchHandler = (search: string) => {
    return setSearchValue(search);
  };

  const clearSearch = () => {
    setSearchValue("");
  };
  const filterHandler = (filter: string) => {
    setFilter(filter);
    console.log("app",filter);
    
  };

  return (
    <>
      <h1>Cinema React</h1>
      <div className="header">
        <SearchMovies onClear={clearSearch} onSearch={searchHandler} />
      </div>
      <div>
        <FeaturedList onSelect={filterHandler} />
      </div>
      <div className="App">
        <MoviesList movies={movies} />
      </div>
    </>
  );
}

export default App;
