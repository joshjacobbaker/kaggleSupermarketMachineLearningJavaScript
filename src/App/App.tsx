import React from "react"

import AppStyled from "./AppStyled"
import Header from "../Header/Header"
import Body from "../Body/Body"
import Footer from "../Footer/Footer"

function App() {
  return (
    <AppStyled>
      <Header />
      <Body>Children Prop Here</Body>
      <Footer />
    </AppStyled>
  )
}

export default App
