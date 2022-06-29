import { createStyles, makeStyles } from '@material-ui/core';
import { COLORS } from '../config/theme/baseTheme';

export const useStyles = makeStyles(() =>
createStyles({
  slider:{
    height:'30% !important',
    marginTop: '120px',
    marginLeft: '15px',
    border:  `1px dotted ${COLORS.BORDER_BLACK}`,
  },
  opacity:{
    fontSize: '12px',
    paddingLeft: '10px'
  }
  }))