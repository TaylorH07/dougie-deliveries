import React from 'react'
import styled from 'styled-components'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BiMap} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'


const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;

`
const SocialConatiner = styled.div`
    display: flex;
`
const SocialIcon = styled.h1`
    width: 40px;
    height: 40px;
    display: flex;
    align-content: center;
    justify-content: center;
    margin-right: 15px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
function Footer() {
  return (
    <Container>
        <Left>
          <Logo>Dougie Deliveries</Logo>
            <Desc>
                Thank you for being apart of our pet community! For each product you purchase from DougieDeliveries.com store, your purchase will fund the delievery of food to our local rescue center. Please follow our social media as we provide updates throughout the year on our animal rescue journey.  
            </Desc>
            <SocialConatiner>
                <SocialIcon>
                    <FaFacebookSquare />
                </SocialIcon>
                <SocialIcon>
                    <FaTwitterSquare />
                </SocialIcon>
                <SocialIcon>
                    <BsInstagram />
                </SocialIcon>
                <SocialIcon>
                    <BsPinterest />
                </SocialIcon>
                <SocialIcon>
                    <BsYoutube />
                </SocialIcon>
            </SocialConatiner>
        </Left>
        <Center>
            <Title>QuickLinks</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Sign-Up</ListItem>
                <ListItem>Shop Dog</ListItem>
                <ListItem>Shop Cat</ListItem>
                <ListItem>Login</ListItem>
                <ListItem>Order History</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><BiMap size="1.5em" style={{marginRight:"10px"}}/>6425 Boaz Ln, Dallas Texas 75205</ContactItem>
            <ContactItem><AiOutlinePhone size="1.5em" style={{marginRight:"10px"}}/>214-768-2000</ContactItem>
            <ContactItem><HiOutlineMail size="1.5em" style={{marginRight:"10px"}} />contact@dougiedeliveries.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer