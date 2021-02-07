import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}