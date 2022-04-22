import React from 'react'
import styled from 'styled-components'
import {HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight} from 'react-icons/hi'
import LazyDog from '../images/lazy pug.jpeg'
import Spainal from '../images/Spainal.jpeg'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
`
const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 54.8%;
`
const Image2 =styled.img`
    height: 50%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1 `
font-size: 70px;
`
const Desc = styled.p `
    margin: 50px 0px;
    font-size: 20;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button `
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

function Slider() {
  return (
    <Container>
        <Arrow direction = "left">
           <HiOutlineArrowCircleLeft size='2.2em' /> 
        </Arrow>
        <Wrapper>
            <Slide>
            
            <ImgContainer>
                <Image src={LazyDog} />
                <Image2 src={Spainal} />
            </ImgContainer>
            <InfoContainer>
                <Title>Summer Sale</Title>
                <Desc>Get 20% off on all treats this month!</Desc>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction= "right">
           <HiOutlineArrowCircleRight size='2.2em'/> 
        </Arrow>
        </Container>
  )
}

export default Slider