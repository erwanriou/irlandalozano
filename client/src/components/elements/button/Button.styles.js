import styled from "styled-components"
import { colors, sizes } from "@styles/contants"

export const ButtonStyle = styled.button`
  position: relative;
  cursor: pointer;
  border: 1px solid ${colors.green};
  background: unset;
  border-radius: 100px;
  color: ${colors.white};
  padding: 6px 12px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${colors.green};
    color: ${colors.black};
  }
`
