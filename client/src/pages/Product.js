import {React, useState, useEffect}  from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import catToy1 from '../assets/images/CatToy1.jpeg';
import {GrFormSubtract} from 'react-icons/gr';
import {HiPlus} from 'react-icons/hi';
import { useLocation } from 'react-router-dom';



const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 40vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 20px;
`
const Title = styled.h1`
    font-weight: 500;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 800;
    font-size: 40px;
`
const AddContainer = styled.div`
    width: 26%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

`
const Button = styled.button`
    margin: 0px 0px;
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 900;

    &:hover {
        background-color: teal;
        color: white;
    }
`

function Product() {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});

    useEffect(() = {
        const getProduct = async () => {
            try{
                const res = axios.
            }catch{}
        }
    })
  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src={catToy1} />
            </ImgContainer>
            <InfoContainer>
                <Title>Fuzzy Mice Toy</Title>
                <Desc>Mice Cat Toy with Catnip, Pack of 2</Desc>
                <Price> $6.99</Price>
            </InfoContainer>
            <AddContainer>
                <AmountContainer>
                    <GrFormSubtract />
                    <Amount>1</Amount>
                    <HiPlus />
                </AmountContainer>
                <Button>Add to Cart</Button>
            </AddContainer>
        </Wrapper>
        <Newsletter />
        <Footer />

    </Container>
  )
}

export default Product