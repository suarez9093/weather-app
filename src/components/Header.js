import React, {useState} from "react";
import { Link } from "react-router-dom"
import { Button, Input, FormGroup, Label } from "reactstrap"
import axios from "axios";

function Header() {
    const [coordinates, setCoordinates] = useState([])

    function generateRandomNumbers(length){
        // Latitudes range from -90 to 90, and longitudes range from -180 to 80 42.00000 (5 decimal places)

        axios.post("https://api.random.org/json-rpc/2/invoke", {
          jsonrpc: "2.0",
          method: "generateIntegerSequences",
          params: {
            apiKey: "f47e402c-ba3e-4ca9-8842-55e557335be7",
            n: 1,
            length: 2, // use paramater to set the length
            min: -180,
            max: 90,
            replacement: true,
            base: 10
          },
          id: 28572
        })
        .then(res => console.log(res))
        // .then(res => res.data.result.random.data).then(data => setCoordinates(data));
        console.log(coordinates)
    }

  
    return (
        <header>

            <div className="header-buttons">
                <Link to="saved">Saved Locations</Link>
                <FormGroup className="header-item-width">
                    <Label for="exampleSelect">Select Number of Coordinates</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>--</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </Input>
                </FormGroup>
                <Button onClick={generateRandomNumbers}color="primary">primary</Button>
               
            </div>



        </header>
    )
};

export default Header;