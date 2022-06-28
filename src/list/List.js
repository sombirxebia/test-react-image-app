import React, { useState, useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchList } from './listSlice'
import { Grid, withStyles } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import IMG from '../assets/logo.png';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    cursor:'auto',
    height: 140,
    borderBottom: '1px solid #666',

  },
  headerStyle :  {
    border: '1px solid #666',
    padding: '30px',
    textAlign: 'center',
    fontSsize: '35px',
    color: 'white'
  },
  inputField :{
    width: '50%'
  },
 navStyle: {
    float: 'left',
    width: '20%',
    height: 'calc(100vh - 108px)',
    borderRight: '1px solid #666',
    padding: '10px',
   
  },
  orderList:{
    listStyle: 'none',
    cursor: 'pointer'
  },
  para:{
    fontSize: '12px'
  },
  articleStyle:  {
    float: 'left',
    padding: '10px',
    width: '75%',
    backgroundColor: '#f1f1f1',
    height: 'calc(100vh - 108px)',
    overflowY: 'scroll'
  },
};

function List(props) {
  const { classes } = props;
  const { data, categories } = useSelector(
    (state) => state.data
  );
  const [listData, setListData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()  

  const fetchListData = useCallback(
    () => {
      dispatch(
        fetchList()
      );
    },
    [dispatch]
  )

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
    <>
      <header className={classes.headerStyle}>
        <input className={classes.inputField} type="text" placeholder='Search' value={inputValue} onInput={e => setInputValue(e.target.value)}  onKeyPress={(e) => handleSearchFilter(e)} />
      </header>
      <section>
        <nav className={classes.navStyle}>
          <ul className={classes.orderList}>
            {
              categories && categories.map((item, index) => (
                <li key={item} onClick={() => handleCategoryFilter(item)}>{item}</li>
              ))
            }
          </ul>
        </nav>
        <article className={classes.articleStyle}>
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
        </article>
      </section>
      </>
  )
}
export default withStyles(styles)(List);