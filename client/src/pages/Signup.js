import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url('https://www.willowmtnvet.com/wp-content/uploads/sites/474/2017/06/Multiple-Pets.png');
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
`
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 10px 0px;

`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightcoral;
    color: white;
    cursor: pointer;

`

function SignUp() {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder ="last name" />
                <Input placeholder ="username" />
                <Input placeholder ="email" />
                <Input placeholder ="password" />
                <Input placeholder ="confirm password" />
                <Agreement>
                By creating an account with Dougie Deliveries, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create Account</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default SignUp