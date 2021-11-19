import styled from "styled-components"

export const Contact = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  color: white;
  top: 70%;
`
export const ImgStyle = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b785eb;
  font-family: "Material Icons";
  width: 30px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    filter: invert(65%) sepia(30%) saturate(7170%) hue-rotate(81deg) brightness(118%) contrast(127%);
  }
`
