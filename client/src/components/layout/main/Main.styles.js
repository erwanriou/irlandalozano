import styled from "styled-components"

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
export const MainImg = styled.img`
  position: absolute;
  width: 100%;
`

export const Text = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  font-size: 40px;
  color: white;
  font-family: montserrat;
  font-weight: bold;
  letter-spacing: 5px;
`
export const Copyright = styled.div`
  position: absolute;
  top: 90%;
  font-size: 8px;
  color: white;
  font-family: montserrat;
  font-weight: normal;
`
