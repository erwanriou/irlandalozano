import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const MainAboutWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    font-family: "Montserrat", sans-serif;
    margin-top: 50px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${sizes.large};
  }
  p {
    font-family: "Montserrat", sans-serif;
    margin: 30px;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.8;
    font-weight: 300;
  }
`
export const MainServices = styled.div`
  position: relative;
  background-color: ${colors.black};
`
export const MainServicesList = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-left: 1px solid ${colors.black2};
`

export const MainProjects = styled.div`
  position: relative;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGrey};
`

export const MainProjectList = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const MainClients = styled.div`
  position: relative;
  background-color: ${colors.black};
`

export const MainClientList = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-left: 1px solid ${colors.black2};
`
