import React, { Fragment, useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

function SearchBar(props) {
    const [term, setTerm] = useState()

    function handleInputChange(e) {
        const value = e.target.value
        setTerm(value)
    }
    

    return (
        <Fragment>
            <Form>
                <FormGroup>
                    <Label htmlFor="searchTerm" hidden>Search:</Label>
                    <Input type="text" name="searchTerm"
                        value={term}
                        id="searchTerm"
                        placeholder="Search for weather in local cities"
                        onChange={handleInputChange} />
                    <Button color="primary">Search</Button>
                </FormGroup>
            </Form>
        </Fragment>
    )

}

export default SearchBar;

