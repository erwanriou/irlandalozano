import styled from "styled-components"
import { colors, sizes } from "@styles/contants"

export const TitleStyle = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  padding: 40px 0;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: ${sizes.large};
  border-bottom: 1px solid ${colors.black2};
`
