import { createStyles, makeStyles } from '@material-ui/core';
import { COLORS } from '../config/theme/baseTheme';

export const useStyles = makeStyles(() =>
createStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      cursor:'auto',
      height: 240,
      borderBottom: `1px solid ${COLORS.BORDER_BLACK}`,
    },
    headerStyle :  {
      border: `1px solid ${COLORS.BORDER_BLACK}`,
      backgroundColor: COLORS.PRIMARY_MAIN,
      padding: '30px',
      textAlign: 'center',
      fontSsize: '35px',
      color: 'white'
    },
    inputField :{
      width: '50%',
      height: '30px'
  },
   navStyle: {
      width: '20%',
      backgroundColor: COLORS.PRIMARY_MAIN,
      height: 'calc(100vh - 98px)',
      borderRight: `1px solid ${COLORS.BORDER_BLACK}`,
    },
    articleStyle:  {
      padding: '10px',
      width: '80%',
      backgroundColor: COLORS.PRIMARY_MAIN,
      height: 'calc(100vh - 98px)',
      overflowY: 'scroll'
    },
    orderList:{
      listStyle: 'none',
      cursor: 'pointer',
      padding: '20px',
    },
    para:{
      fontSize: '12px'
    }
  }))