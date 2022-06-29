import React from 'react'
import { 
  Typography,
  Card,
  CardActionArea, 
  CardContent, 
  CardMedia, 
} from '@material-ui/core';
import { useStyles } from './cardView.style';

function CardView(props) {
  const { defaultOpacity, item } = props;
  const classes  = useStyles();

  return (
        <>
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
        </>
       
  )
}
export default CardView;