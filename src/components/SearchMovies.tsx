import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import classes from "./SearchMovies.module.css";

const SearchMovies = (props:{ onSearch: (search:string) => void, onClear:()=>void }) =>{

const[search, setSearch] = useState('')


  const serchMovies = () => {
    if (search) { 
      return props.onSearch(search)
    }
  };

  const clearSearchHandler = () => {
    setSearch('')
    return props.onSearch('')
  }
  return (
    <div className={classes.formField}>
      <input onKeyUp={(e) => {
        if (e.key === "Enter") {
          serchMovies()
        }
      }} value={search} onChange={(e) => {
        setSearch(e.target.value)
      }} placeholder="search for movie ...." />
     { search == "" &&<FaSearch onClick={serchMovies} className={classes.icon} />}
      {search !== "" && <RxCross2 onClick={clearSearchHandler} className={classes.icon} />}
      <button type="button" onClick={serchMovies}>Search</button>
    </div>
  );
};



export default SearchMovies;
