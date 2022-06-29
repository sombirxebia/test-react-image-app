import React, { useState, useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchList } from './listSlice'
import { 
  Grid, 
  Typography, 
} from '@material-ui/core';
import {useStyles} from './list.style';
import RangeSlider from '../rangeSlider';
import NavBar from '../navBar';
import CardView from '../cardView';
import SearchBar from '../searchBar';

function Listing() {
  const classes  = useStyles();
  const { data, categories } = useSelector(
    (state) => state.data
  );
  const [listData, setListData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [defaultOpacity, setOpacity] = useState(1);
  const dispatch = useDispatch()  

  const fetchListData = useCallback(
    () => {
      dispatch(
        fetchList()
      );
    },
    [dispatch]
  )

  const handleOpacityChange = (value) => {
    setOpacity(value)
  }

  const handleCategoryFilter = useCallback((category) => {
    let dataInfo = []; 
    for(let i = 0; i < data.length; i++){
      for ( const iterator in data[i]) {
        if(category === iterator){
          dataInfo = [...data[i][iterator]]
        }
       }
     }
     setListData(dataInfo);
    
  }, [data]);

  const handleSearchFilter = useCallback((e) => {
    if(e.key === 'Enter'){
      let dataInfo = []; 
      for(let i = 0; i < data.length; i++){
        for ( const iterator in data[i]) {
          if(inputValue.toLocaleLowerCase() === iterator.toLocaleLowerCase()){
            dataInfo = [...data[i][iterator]]
          }
          if(inputValue.trim() === ''){
            dataInfo = [...dataInfo,...data[i][iterator]]
          }
         }
       }
      setListData(dataInfo);
    }
  }, [inputValue, data]);

  useEffect(()=>{
    fetchListData()
  }, [fetchListData])

  useEffect(()=>{
    let dataInfo = []; 
    for(let i = 0; i < data.length; i++){
     for ( const iterator in data[i]) {
        dataInfo = [...dataInfo, ...data[i][iterator]]
      }
    }
    setListData(dataInfo);
  }, [data])

  return (
    <Grid container direction='column'>
      <SearchBar handleSearchFilter={handleSearchFilter} searchValue={inputValue} setInput={setInputValue} />
      {/* <Grid className={classes.headerStyle}>
        <input className={classes.inputField} type="text" placeholder='Search' value={inputValue} onInput={e => setInputValue(e.target.value)}  onKeyPress={(e) => handleSearchFilter(e)} />
      </Grid> */}
      <Grid container direction='row'>
        <Grid item className={classes.navStyle}>
          <NavBar menuList={categories} handleOnClick={handleCategoryFilter} />
          <RangeSlider handleOpacityChange={handleOpacityChange} defaultLabel="Opacity" />
        </Grid>
        <Grid item className={classes.articleStyle}>
          <Grid container spacing={1}>
            {
            listData && listData.length > 0 ?
            listData.map((item, index) => (
            <Grid key={index} item xs={4}>
              <Grid>
                <CardView defaultOpacity={defaultOpacity} item={item} />
               </Grid>
              </Grid>
             ))
             :<Typography  className={classes.para} component="p">No Search Found</Typography>
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Listing;