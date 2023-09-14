import { ThemeOptions } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#48b53f',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    secondary: {
      main: '#9843c7',
    },
    background: {
      default: '#010302',
    },
    text: {
      primary: '#ffffff',
      secondary: '#fafffb',
      disabled: 'rgba(242,245,242,0.38)',
    },
    warning: {
      main: '#ed9302',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Victor Mono',
    },
    h2: {
      fontFamily: 'Victor Mono',
    },
    h3: {
      fontFamily: 'Victor Mono',
    },
    h4: {
      fontFamily: 'Victor Mono',
    },
    body1: {
      fontFamily: 'Open Sans',
    },
    body2: {
      fontFamily: 'Open Sans',
    },
    button: {
      fontFamily: 'Victor Mono',
    },
    caption: {
      fontFamily: 'Open Sans',
    },
    overline: {
      fontFamily: 'Open Sans',
    },
    subtitle2: {
      fontFamily: 'Open Sans',
    },
    subtitle1: {
      fontFamily: 'Open Sans',
    },
    h6: {
      fontFamily: 'Victor Mono',
    },
    h5: {
      fontFamily: 'Victor Mono',
    },
    fontFamily: 'Open Sans',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
  },
  shape: {
    borderRadius: 2,
  },
  spacing: 4,
}