import React from 'react'
import styled from 'styled-components'
import {FaRegEnvelope} from 'react-icons/fa'

const Container = styled.div`
    height: 30vh;
    background-color: lightcoral;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightcoral;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`

function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Never miss on our latest store updates</Description>
        <InputContainer>
        <Input placeholder='Your Email'/>
        <Button>
            <FaRegEnvelope size="1.7em"/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter