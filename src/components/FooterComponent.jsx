import styled from "styled-components"

export default function Footer() {

  return (
    <FooterComponent>&#169; Garuba Abdul Azeez 2022</FooterComponent>
  )
}

const FooterComponent = styled.div`
background-color:var(--dark);
width: 100%;
height: 30px;
text-align: center;
color: white;
font-family: gentona;
padding-top:5px;

`
