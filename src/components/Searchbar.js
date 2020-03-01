import React, { Fragment} from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

function SearchBar({handleFormSubmit, 
    handleInputChange, searchField}) {

    return (
        <Fragment>
            {/* <Form>
                <FormGroup> */}
                    {/* <Label htmlFor="markerCount" hidden>Search:</Label> */}
                    <div className="search-container">
                    <input
                        className="searchbar"
                        type="text" name="markerCount"
                        value={searchField}
                        id="markerCount"
                        placeholder="Type a number"
                        onChange={handleInputChange}
                         />
                    <Button id="formBtn" onClick={handleFormSubmit} color="primary">Search</Button>

                    </div>
                {/* </FormGroup>
            </Form> */}
        </Fragment>
    )

}

export default SearchBar;

