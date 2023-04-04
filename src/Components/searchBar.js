import React, {useState} from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("pikachu")  
  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value)
    setSearch(e.target.value)
  }
  const onButtonClickHandler = () => {
    console.log("O pokemon: ", search)
  }
  
  return (
    <div className="searchBar-container">
      <div className="searchBar">
        <input placeholder="buscar pkm" onChange={onChangeHandler}/>
        {/*{search}*/}  
      </div>
      <div className="searchBarButton">
        <button onClick = {onButtonClickHandler}> Buscar </button>
      </div>
    </div>
  );
};

export default SearchBar;
