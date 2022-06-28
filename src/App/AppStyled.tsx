import styled from "styled-components"

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: 10vh 80vh 10vh;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
  background-color: #282c34;
  min-height: 100vh;
  color: white;
  overflow-y: scroll;
  overflow-x: hidden;
`

export default AppStyled
