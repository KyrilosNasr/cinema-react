import { useState } from "react";
import { FILTER } from "../util/filter.enum";
import classes from "./FeaturedList.module.css";
const FeaturedList = (props: { onSelect: (param: string) => void }) => {
  const [active, setActive] = useState("popular");

  const handleClick = ( value?: string) => {
    console.log(value);
    
    if (value) {
      setActive(() => {
        props.onSelect(value)
        return value
      })
      // return props.onSelect(value);
      
    }
  }
  
  return (
    <>
      <div className={classes.listContainer}>
        <ul className={classes.list}>
          <li className={active === FILTER.POPULAR ? classes.active : "" }>
            <button onClick={()=>{handleClick("popular")}}>Popular</button>
          </li>
          <li className={active === FILTER.TRENDING ? classes.active : "" }>
            <button onClick={()=>{handleClick("trending")}}>Trending</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FeaturedList;
