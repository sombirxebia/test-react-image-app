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
    para:{
      fontSize: '12px'
    }
  }))