import React, { useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchList } from './listSlice'
import { Grid } from '@material-ui/core';
export function List() {
  const { data, categories } = useSelector(
    (state) => state.data
  );

  const headerStyle =  {
    backgroundColor: '#666',
    padding: '30px',
    textAlign: 'center',
    fontSsize: '35px',
    color: 'white'
  }
  
 const navStyle = {
    float: 'left',
    width: '30%',
    height: '300px',
    background: '#ccc',
    padding: '20px'
  }
  
  const navulStyle = {
    listStyleType: 'none',
    padding: 0
  }
  
  const articleStyle =  {
    float: 'left',
    padding: '20px',
    width: '70%',
    backgroundColor: '#f1f1f1',
    height: '300px'
  }
  
  const footerStyle =  {
    backgroundColor: '#777',
    padding: '10px',
    textAlign: 'center',
    color: 'white'
  }

  const dispatch = useDispatch()  

  const fetchListData = useCallback(
    () => {
      dispatch(
        fetchList()
      );
    },
    [dispatch]
  )

  useEffect(()=>{
    fetchListData()
  }, [fetchListData])

  return (
    <>
      <header style={headerStyle}>
        <h2>Cities</h2>
      </header>

      <section>
        <nav style={navStyle}>
          <ul>
            <li><a href="#">London</a></li>
            <li><a href="#">Paris</a></li>
            <li><a href="#">Tokyo</a></li>
          </ul>
        </nav>
        
        <article style={articleStyle}>
          <h1>London</h1>
          <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
          <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
        </article>
      </section>
      </>
  )
}