import { useState } from "react";
import { geoApiOptions, GEO_API_URL } from "./common";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const Search =({getCoordinates}) => {
        const [search, setSearch] = useState([]);
        const [options, setOptions] = useState([]);
        console.log('options', options);
        const getDataFromAPI = (input) => {
                console.log('inputValue', input);
                return fetch(
                  `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${input}`,
                  geoApiOptions
                )
                .then((response) => response.json())
                .then((response) => {
                  console.log('res', response.data);
                  response.data = response.data.map((city) => {
                    return {
                      coordinates: `${city.latitude} ${city.longitude}`,
                      label: `${city.name}, ${city.countryCode}`,
                    };
                  })
                  setOptions(response.data);
                });
            };
        const handleChange = (e) => {
                setSearch(e.target.value);
                getDataFromAPI(e.target.value);
                
        }
        return ( <div>
         <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        loading={options.length === 0}
        options={options}
        value={search}
        onChange={(e, value) => getCoordinates(value.coordinates)}
        renderInput={(params) => (
          <TextField {...params}
            onChange={handleChange}
            variant="outlined"
            label="Search City"
          />
        )}
      />
      </div>)
}
export default Search;