import styled from "styled-components"

export const MainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
export const MainBackground = styled.div`
  position: absolute;
  background-color: black;
  width: 100%;
  height: 100%;
`

export const Text = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 50px;
  color: white;
  font-family: montserrat;
  font-weight: bold;
  letter-spacing: 5px;
  p {
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 25px;
  }
`
export const Copyright = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  font-size: 8px;
  color: white;
  font-family: montserrat;
  font-weight: normal;
  p {
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    width: calc(100% - 30px);
    line-height: 1.5;
  }
`
