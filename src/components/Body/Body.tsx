import React from "react"
import BodyStyled from "./BodyStyled"
import VegaLiteApi from "../VegaLiteApi/VegaLiteApi"

const Body = () => {
  return (
    <BodyStyled>
      <VegaLiteApi></VegaLiteApi>
    </BodyStyled>
  )
}

export default Body
