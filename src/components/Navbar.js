import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import {AiOutlineShopping} from 'react-icons/ai'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-item: center;`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;`  

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-item: center;
  margin-left: 25px;
  padding: 5px;
  `  
const Input = styled.input`
border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input/>
            <BsSearch size="1.3em" color='gray'/>
          </SearchContainer>
        </Left>
        <Center><Logo>Dougie Deliveries</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <AiOutlineShopping size="2.5em"/>
          </MenuItem>
        </Right>
      </Wrapper>
      
      </Container>
  )
}

export default Navbar