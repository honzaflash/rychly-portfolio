import { createTheme } from '@mui/material/styles'

export const PRIMARY_COLOR = '#48b53f'

const DEFAULT_BACKGROUND = '#010302'
const PAPER_BACKGROUND = '#091209'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: PRIMARY_COLOR,
      contrastText: 'rgba(0,0,0,0.87)',
    },
    secondary: {
      main: '#9843c7',
    },
    background: {
      default: DEFAULT_BACKGROUND,
      paper: PAPER_BACKGROUND,
    },
    text: {
      primary: '#ffffff',
      secondary: '#CAFFCE',
      disabled: 'rgba(242,245,242,0.38)',
    },
    warning: {
      main: '#ed9302',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto Mono',
    },
    h2: {
      fontFamily: 'Roboto Mono',
    },
    h3: {
      fontFamily: 'Roboto Mono',
    },
    h4: {
      fontFamily: 'Roboto Mono',
    },
    body1: {
      fontFamily: 'Roboto',
    },
    body2: {
      fontFamily: 'Roboto',
    },
    button: {
      fontFamily: 'Roboto Mono',
    },
    caption: {
      fontFamily: 'Roboto',
    },
    overline: {
      fontFamily: 'Roboto',
    },
    subtitle2: {
      fontFamily: 'Roboto',
    },
    subtitle1: {
      fontFamily: 'Roboto',
    },
    h6: {
      fontFamily: 'Roboto Mono',
    },
    h5: {
      fontFamily: 'Roboto Mono',
    },
    fontFamily: 'Roboto',
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl'
      }
    },
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
    MuiCard: {
      styleOverrides: {
        root: {
          background: DEFAULT_BACKGROUND,
          border: 'solid 2px',
          borderColor: PRIMARY_COLOR,
          borderRadius: '8px',
          padding: '12px 18px',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollPaddingTop: '60px',
        },
        a: {
          transition: 'color 200ms',
          '&:any-link': {
            color: '#FFF'
          },
          '&:link:hover': {
            color: PRIMARY_COLOR,
          },
          '&:visited:hover': {
            color: '#CAFFCE'
          }
        }
      }
    }
  },
  shape: {
    borderRadius: 2,
  },
  spacing: 4,
})

export default  theme
