import React, {useState} from 'react';
import SearchFrom from "../SearchForm"


function Search(){
    const [search, setSearch ] = useState()


function handleSearchInput(e){
    setSearch(e.target.value)
}    
function handleClick(e) {
    e.preventDefault()
}
    return(
        <div>
            <SearchFrom 
            handleSearchInput={handleSearchInput}
            handleClick={handleClick}/>
        </div>
    )
}
export default Search