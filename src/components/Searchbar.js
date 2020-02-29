import React, { Fragment, useState } from "react";
import API from "../utils/API"
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

function SearchBar(props) {
    const [markerCount, setMarkerCount] = useState()

    function handleInputChange(e) {
        let value = e.target.value
        setMarkerCount(value)
    }
    
    function handleFormSubmit(e){
        e.preventDefault()
        API.searchWeather(55,37,markerCount).then(res => setMarkerCount(res))
    }
    return (
        <Fragment>
            <Form>
                <FormGroup>
                    <Label htmlFor="markerCount" hidden>Search:</Label>
                    <Input type="text" name="markerCount"
                        value={markerCount}
                        id="markerCount"
                        placeholder="Type a number"
                        onChange={handleInputChange} />
                    <Button id="formBtn" onClick={handleFormSubmit} color="primary">Search</Button>
                </FormGroup>
            </Form>
        </Fragment>
    )

}

export default SearchBar;

