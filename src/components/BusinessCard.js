import React, { useState, useEffect } from 'react'
import { device } from '../utils/breakpoint'
import Img from '../asset/image-header-desktop.jpg'
import styled from 'styled-components'

const Container = styled.div`
 background-color: hsl(233, 47%, 7%);
 color: white;
 width: 100%;
 height: 900px;
 display: flex;
 justify-content: center;
 align-items: center;
`

const CardContainer = styled.div`
 background-color: hsl(244, 38%, 16%);
 display: flex;

 /* height: 35%; */
 margin-top: 200px;
 margin: 0 auto;
 @media ${device.mobileM} {
  flex-direction: column-reverse;
  /* max-width: 800px; */
  text-align: center;
  flex-wrap: wrap;
 }
 @media ${device.laptopL} {
  flex-direction: row;
  /* max-width: 800px; */
  text-align: center;
  flex-wrap: wrap;
  align-items: center;
 }
`
const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;

 /* margin-top: auto; */
 /* width: 50%; */
 padding: 40px;

 @media ${device.mobileL} {
  text-align: center;
 }
 @media ${device.laptopL} {
  text-align: left;
  width: 45%;
 }
`

const ContentTitle = styled.h1`
 margin: 0;
 font-weight: bold;
 color: white;
`

const HighlightText = styled.span`
 font-weight: bold;
 margin: 0;
 color: hsl(277, 64%, 61%);
`

const ItemHeaderText = styled.h2`
 font-weight: bold;

 margin-bottom: 5px;
`

const ItemDescription = styled.p`
 color: hsla(0, 0%, 100%, 0.75);
 margin: 20px auto 10px auto;
 line-height: 24px;
`
const RowFlexBox = styled.div`
 display: flex;
 justify-content: space-between;

 @media ${device.mobileM} {
  text-align: center;

  flex-direction: column;
  align-items: center;
 }
 @media ${device.laptopL} {
  justify-content: space-between;
  flex-direction: row;
 }
`
const FlexChild = styled.div`
 width: 100px;
 height: 100px;
`

const ImageContainer = styled.div`
 background-image: linear-gradient(
   to bottom,
   hsl(277, 64%, 30%, 0.7),
   hsl(277, 64%, 30%, 0.7)
  ),
  url(${Img});
 height: 400px;

 background-size: cover;
 height: 100%;
 width: 40%;

 @media ${device.mobileM} {
  height: 300px;
  /* min-width: 50%; */
  width: 100%;
 }
 @media ${device.laptopL} {
  /* max-width: 800px; */
  height: 400px;
  width: 47%;
 }
`

export default function BusinessCard() {
 const [staticData, setStaticData] = useState({})
 const { title, content, companyscore, template, query } = staticData

 const flatMap = (array, fn) => {
  var result = []
  for (var i = 0; i < 2; i++) {
   var mapping = fn(array[i])
   result = result.concat(mapping)
  }

  result.pop()

  return result
 }

 const HightLightWord = title
  ? flatMap(title.split('insights'), function (part) {
     //   console.log(part);
     return [part, <HighlightText key="2">insight</HighlightText>]
    })
  : ''

 //  console.log(HightLightWord)
 useEffect(() => {
  setStaticData({
   title: 'Get insights that help your business grow.',
   content:
    'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.',
   companyscore: '10k',
   template: '10k',
   query: 22,
  })
 }, [])

 //  setStaticData({ title: 'Get insights that help your business grow.' })

 //  const { title } = staticData

 return (
  <Container>
   <CardContainer>
    <ContentContainer>
     <ContentTitle>{HightLightWord}</ContentTitle>
     <ItemDescription>{content}</ItemDescription>
     <RowFlexBox>
      <FlexChild>
       <ItemHeaderText>{companyscore}</ItemHeaderText>
       <span>Companies</span>
      </FlexChild>
      <FlexChild>
       <ItemHeaderText>{template}</ItemHeaderText>
       <span>Template</span>
      </FlexChild>
      <FlexChild>
       <ItemHeaderText>{query}</ItemHeaderText>
       <span>QUERIES</span>
      </FlexChild>
     </RowFlexBox>
    </ContentContainer>
    <ImageContainer></ImageContainer>
   </CardContainer>
  </Container>
 )
}
