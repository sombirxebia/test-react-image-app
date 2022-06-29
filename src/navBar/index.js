import React from 'react'
import { 
  List, 
  ListItem, 
  ListItemText 
} from '@material-ui/core';
import { useStyles } from './navBar.style';

function NavBar(props) {
  const { menuList, handleOnClick } = props;
  const classes  = useStyles();

  const handleMenuClick = (value) => {
    handleOnClick && handleOnClick(value)
  }

  return (
        <>
        <List component="nav" className={classes.root} aria-label="contacts">
          {
            menuList && menuList.map((item, index) => (
              <ListItem  key={item} style ={ index % 2? { background : "#efe3e3" }:{ background : "#ef8d8d" }} button onClick={() => handleMenuClick(item)}>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>
        </>
       
  )
}
export default NavBar;