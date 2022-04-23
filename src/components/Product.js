import React from 'react'
import styled from 'styled-components'
import {AiOutlineShopping} from 'react-icons/ai'
import { FiSearch} from 'react-icons/fi'
import {FaRegHeart} from 'react-icons/fa'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
`
const Circle = styled.div `
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
`
const Image = styled.img `
  height: 60%;
`
const Info = styled.div `
  width: 22%;
  position: absolute;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  

`
const Icon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  &:hover{ 
    background-color: white;
    transform: scale(1.1);

  }
`

function Product({item}) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <AiOutlineShopping size="2.2em" />
        </Icon>
        <Icon>
          <FiSearch size="2.0em" />
        </Icon>
        <Icon>
          <FaRegHeart size="1.7em" hover  />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product