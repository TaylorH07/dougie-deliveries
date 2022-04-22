import React from 'react'
import styled from 'styled-components'
import {HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight} from 'react-icons/hi'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: lightseagreen;
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

function Slider() {
  return (
    <Container>
        <Arrow direction = "left">
           <HiOutlineArrowCircleLeft size='2.2em' /> 
        </Arrow>
        <Arrow direction= "right">
           <HiOutlineArrowCircleRight size='2.2em'/> 
        </Arrow>
        </Container>
  )
}

export default Slider