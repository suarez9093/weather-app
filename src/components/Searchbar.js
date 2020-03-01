import React, { Fragment } from "react";
import { Button, Input } from "reactstrap";

function SearchBar({ handleFormSubmit, handleInputChange, searchField }) {

    return (
        <Fragment>

            <div className="search-container">
                <input
                    className="searchbar"
                    type="text" name="markerCount"
                    value={searchField}
                    id="markerCount"
                    placeholder="Generate Random weather points"
                    onChange={handleInputChange}
                />
                <Button id="formBtn" onClick={handleFormSubmit} color="primary">Search</Button>

            </div>

        </Fragment>
    )

}

export default SearchBar;

