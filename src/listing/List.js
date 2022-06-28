import React, { useState, useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchList } from './listSlice'
import { withStyles, Grid, Typography, Card, CardActionArea, CardContent, CardMedia, Slider, List, ListItem, ListItemText } from '@material-ui/core';
import styles from './list.style';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "grey",
      },
      track: {
        color: 'grey'
      },
      rail: {
        color: 'grey'
      }
    }
}
});

function Listing(props) {
  const { classes } = props;
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
      <Grid className={classes.headerStyle}>
        <input className={classes.inputField} type="text" placeholder='Search' value={inputValue} onInput={e => setInputValue(e.target.value)}  onKeyPress={(e) => handleSearchFilter(e)} />
      </Grid>
      <Grid container direction='row'>
        <Grid item className={classes.navStyle}>
          <List component="nav" className={classes.root} aria-label="contacts">
            {
              categories && categories.map((item, index) => (
                <ListItem  key={item} button onClick={() => handleCategoryFilter(item)}>
                  <ListItemText primary={item} />
                </ListItem>
              ))
            }
        </List>
          <ThemeProvider theme={muiTheme}>
            <Slider
              className={classes.slider}
              orientation="vertical"
              min={0.1}
              max={1}
              step={0.1}
              valueLabelDisplay="auto"
              getAriaValueText={handleOpacityChange}
              defaultValue={1}
              aria-labelledby="range-slider"
            />
          </ThemeProvider>
          <Typography  className={classes.opacity} component="p">Opacity</Typography>
        </Grid>
        <Grid item className={classes.articleStyle}>
          <Grid container spacing={1}>
            {
            listData && listData.length > 0 ?
            listData.map((item, index) => (
            <Grid key={index} item xs={4}>
            <Grid>
             <Card  className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image= {item.image}
                    title={item.text}
                    style={{opacity:defaultOpacity}}
                  />
                  <CardContent>
                    <Typography  className={classes.para} component="p">{item.text}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
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
export default withStyles(styles)(Listing);