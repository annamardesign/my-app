import React, { useState, useCallback } from "react";
import { geoApiOptions, GEO_API_URL } from "../common";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Search =({getCoordinates}) => {
        const [search, setSearch] = useState([]);
        const [options, setOptions] = useState([]);
        const getDataFromAPI = (input) => {
                return fetch(
                  `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${input}`,
                  geoApiOptions
                )
                .then((response) => response.json())
                .then((response) => {
                  response.data = response.data.map((city) => {
                    return {
                      coordinates: `${city.latitude} ${city.longitude}`,
                      label: `${city.name}, ${city.countryCode}`,
                    };
                  })
                  setOptions(response.data);
                });
            };
        const handleChange = useCallback((e) => {
          setSearch(e.target.value);
          setTimeout(() => getDataFromAPI(e.target.value), 2000)     
        }, []);
        
        return ( <React.Fragment>
         <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        loading={options.length === 0}
        options={options}
        getOptionLabel={(option) => option.label || ""}
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
      </React.Fragment>)
}
export default Search;