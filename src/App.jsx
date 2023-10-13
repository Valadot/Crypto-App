import {ThemeProvider} from "styled-components"
import {Container} from "./App.styles"
import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"




function App() {

  return (
    <Layout>
    <Container>
      <Navbar />
      <h1>Here you will see a list of the coins</h1>

    </Container>
    </Layout>
  )
}

export default App
