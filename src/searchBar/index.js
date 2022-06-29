import React from 'react'
import { 
  Grid,
} from '@material-ui/core';
import { useStyles } from './searchBar.style';

function SearchBar(props) {
  const { setInput, searchValue, handleSearchFilter } = props;
  const classes  = useStyles();
  
  const handleSearch = (e) => {
    handleSearchFilter && handleSearchFilter(e);
  }

  const handleInput = (value) => {
    setInput && setInput(value);
  }

  return (
    <Grid className={classes.headerStyle}>
     <input className={classes.inputField} type="text" placeholder='Search' value={searchValue} onInput={e => handleInput(e.target.value)}  onKeyPress={(e) => handleSearch(e)} />
    </Grid>
  )
}
export default SearchBar;