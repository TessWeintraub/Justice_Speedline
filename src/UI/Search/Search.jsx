import React from 'react';
import classes from "./Search.module.css";

const Search = ({onChange}) => {
    return (
        <input type='text' placeholder='Search' onChange={onChange} className={classes.search}/>
    );
};

export default Search;