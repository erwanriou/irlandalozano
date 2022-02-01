import styled from "styled-components"
import { colors, sizes } from "@styles/constants"

export const IconStyle = styled.i`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Material Icons";
  color: ${p => p.color};
  font-size: ${p => p.size};
  width: ${p => p.size};
  height: ${p => p.size};
`
