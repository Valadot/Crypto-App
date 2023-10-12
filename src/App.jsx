import {ThemeProvider} from "styled-components"
import {Container} from "./App.styles"
import Navbar from "./components/Navbar/Navbar"





function App() {

  return (
    <ThemeProvider theme={{red:"blue"}}>
    <Container>
      <Navbar />
      <h1>Here you will see a list of the coins</h1>

    </Container>
    </ThemeProvider>
  )
}

export default App
