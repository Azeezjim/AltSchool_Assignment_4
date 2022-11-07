import styled from "styled-components"
import {Body} from "../styles/Styling"


const Home = () => {
 


  return (
    <Body Home>
      <Head>WELCOME</Head>
      <Text>The HillTop Community is a fast growing community of Professional Software Engineers that help start ups with the ideas and necssery funding to promote their businesses.</Text>
    </Body>
  )
}

export default Home

const Head = styled.h1`
font-family: gentona;
padding: 30px;
font-size: 50px;
color: var(--dark);
@media (max-width:460px) {
  font-size: 30px;
}
`

const Text = styled.div`
font-size: 22px;
font-weight: bold;
margin: 0 auto;
text-align: center;
width: 50%;
@media (max-width:460px) {
  font-size: 14px;
}
`

