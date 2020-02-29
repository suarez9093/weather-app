import React, {useState} from 'react';
import API from '../utils/API'


 function SearchForm({handleClick}){
    return (
        <form>
            <input type="text" placeholder="lat" required/>
            <input type="text" placeholder="lon" required/>
            <input type="text" placeholder="number" required/>
            <button onClick={handleClick}>Submit</button>
        </form>
       
      );
}
 
export default SearchForm;