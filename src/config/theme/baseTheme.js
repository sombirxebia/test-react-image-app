import { createMuiTheme } from '@material-ui/core';

export const COLORS = {
    PRIMARY_MAIN: '#f1f1f1',
    BORDER_BLACK: '#666'
}

const theme = createMuiTheme({
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
})

export default theme;