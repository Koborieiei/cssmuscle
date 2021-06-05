import React from 'react'
import styled from 'styled-components'
import iconSedans from '../asset/icon-sedans.svg'
import iconLuxury from '../asset/icon-luxury.svg'
import iconSuvs from '../asset/icon-suvs.svg'
import { device } from '../utils/breakpoint'

const Navbar = styled.nav`
 background-color: black;
 display: block;
 height: 10%;
 position: fixed;
`
const ClickingButton = styled.button`
 background-color: white;
 border: none;
 color: ${(props) => automateColor(props.name)};
 border-radius: 23px;
 width: 150px;
 height: 45px;
 margin-top: 20px;
 cursor: pointer;
`
const Container = styled.div`
 margin-top: 40px;
 margin-bottom: 40px;

 @media ${device.laptopL} {
  margin-top: 100px;
  margin-bottom: 100px;
 }
`

const Wrapper = styled.div`
 border-radius: 30px;
 width: 80%;
 padding: 20px;
 box-shadow: 0px 1px 20px 10px rgb(99, 99, 99, 0.1);
 margin: 0 auto;
 display: flex;
 flex-flow: column;
 justify-content: center;
 align-items: center;

 @media ${device.laptopL} {
  flex-flow: row wrap;
 }
`

const Card = styled.div`
 width: 300px;
 height: 480px;
 background-color: ${(props) => automateColor(props.name)};

 :first-child {
  border-radius: 10px 10px 0px 0px;
 }

 :last-child {
  border-radius: 0px 0px 10px 10px;
 }

 @media ${device.laptopL} {
  :first-child {
   border-radius: 10px 0px 0px 10px;
  }

  :last-child {
   border-radius: 0px 10px 10px 0px;
  }
 }
`

const automateColor = (title) => {
 return title === 'sedans'
  ? 'hsl(31, 77%, 52%)'
  : title === 'suvs'
  ? 'hsl(184, 100%, 22%)'
  : 'hsl(179, 100%, 13%)'
}
const CardIcon = styled.div`
 width: 105px;
 height: 50px;
 background: url(${(props) => props.imgurl}) no-repeat;
 /* background-size: cover; */
`

const CardContainer = styled.div`
 margin: 15%;
 padding-left: 30px;
 padding-right: 30px;

 p {
  font-size: 15px;
  line-height: 25px;
  color: rgb(255, 255, 255, 0.8);
 }
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`

const CardHeaderText = styled.h1`
 font-family: 'Big Shoulders Display', cursive;
 color: white;
`

const MultipleCard = ({ data }) => {
 return data.map((card, i) => (
  <Card key={i} name={card.name}>
   <CardContainer>
    <CardIcon imgurl={card.imgurl} />
    <CardHeaderText>{card.name}</CardHeaderText>
    <p>{card.info}</p>
    <ClickingButton name={card.name}>Learn More</ClickingButton>
   </CardContainer>
  </Card>
 ))
}
const HeaderSection = styled.section``

const data = [
 {
  name: 'sedans',
  imgurl: iconSedans,
  info:
   'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
 },
 {
  name: 'suvs',
  imgurl: iconSuvs,
  info:
   'SUVs Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
 },
 {
  name: 'luxury',
  imgurl: iconLuxury,
  info:
   'Luxury Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style..',
 },
]
export default function Profolio() {
 return (
  <>
   {/* <Navbar></Navbar> */}

   <Container>
    <Wrapper>
     <MultipleCard data={data} />
    </Wrapper>
   </Container>
  </>
 )
}
