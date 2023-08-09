import { CssBaseline } from '@mui/material'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import AppRoutes from 'Routes'
import ScrollToTop from 'utils/ScrollToTop'

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#080F18',
      },
      secondary: {
        main: '#ffffff',
      },
      background: {
        default: '#0B1622',
        paper: '#151f2e',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      button: {
        textTransform: 'none',
      },
    },
  })
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  )
}

export default App
