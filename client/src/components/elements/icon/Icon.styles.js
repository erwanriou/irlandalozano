import styled from "styled-components"
import { colors, sizes } from "@styles/contants"

export const IconStyle = styled.i`
  position: relative;
  cursor: pointer;
  font-family: "Material Icons";
  color: ${p => p.color};
  font-size: ${p => p.size};
`
