import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Notes from "./pages/Notes"
import Create from "./pages/Create"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from "@mui/material/colors";
import Layout from './components/Layout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

  }
})


function App() {
  return (
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={ <Notes /> } />
            <Route path="create" element={ <Create /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
