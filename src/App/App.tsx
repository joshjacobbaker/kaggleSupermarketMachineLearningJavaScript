import React from "react"

import AppStyled from "./AppStyled"
import Header from "../components/Header/Header"
import Body from "../components/Body/Body"
import Footer from "../components/Footer/Footer"

// Charts and
import VegaLiteChart from "../components/Chart2/Chart2"

function App() {
  return (
    <AppStyled>
      <Header />
      <Body>
        Children Prop Here
        <VegaLiteChart></VegaLiteChart>
      </Body>
      <Footer />
    </AppStyled>
  )
}

export default App
