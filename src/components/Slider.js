import React, { useState } from 'react'
import styled from 'styled-components'
import {HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight} from 'react-icons/hi'
import LazyDog from '../images/lazy pug.jpeg'
import Spainal from '../images/Spainal.jpeg'
import { sliderItems } from '../pages/data'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;
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
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props =>props.slideIndex * -100}vw);
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
const Image3 =styled.img`
    height: 52.9%;
`
const Image4 = styled.img`
    height: 47.1%
`

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
           <HiOutlineArrowCircleLeft size='2.2em' /> 
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            
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
           {sliderItems.map((item)=> (
           <Slide>
            <ImgContainer>
                <Image3 src={item.img} />
                <Image4 src={item.img2} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction= "right" onClick={() => handleClick("right")}>
           <HiOutlineArrowCircleRight size='2.2em'/> 
        </Arrow>
        </Container>
  )
}

export default Slider