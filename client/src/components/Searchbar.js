import React, { Fragment } from "react";
import { Button, Input } from "reactstrap";

function SearchBar({ handleFormSubmit, handleInputChange, searchField }) {

    return (
        <Fragment>
            <div className='container container-flex'>
                <form class="form" action="#" method="POST">
                    <input className=""
                        type="text" name="markerCount"
                        value={searchField}
                        id="markerCount"
                        placeholder="Search points"
                        onChange={handleInputChange} />
                    <br />
                    <br />
                    <button className='btn btn-primary' onClick={handleFormSubmit}>Search</button>
                </form>

            </div>

        </Fragment>
    )

}

export default SearchBar;

