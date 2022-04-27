import React from 'react'
import { GrAdd, GrSubtract } from 'react-icons/gr'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 500;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props =>props.type === "filled" && "none"}; 
    background-color: ${props =>props.type === "filled" ? "black" : "transparent"};
    color: ${props =>props.type === "filled" && "white"};
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin:  0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    
`
const ProductDetail = styled.div`
    flex: 2;
`
const Image = styled.img`
    width: 46%;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ProductName = styled.span`
    font-size: 20px;
`
const ProductId = styled.span`

`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-content: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 26px;
    margin: 10px;
    
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
`
const Hr = styled.hr`
    background-color: gray;
    border: none;
    height: 1px;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 400;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props =>props.type === "total" && "1000"};
    font-size: ${props =>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 800;
`
function Cart() {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
           <Title>Your Shopping Bag</Title>
           <Top>
               <TopButton>Continue Shopping</TopButton>
               <TopText>Shopping Bag</TopText>
               <TopText>Your Wishlist</TopText>
               <TopButton type='filled'>Checkout</TopButton>
           </Top>
           <Bottom>
               <Info>
                
               <Product>
                       <ProductDetail>
                           <Image src='https://i5.walmartimages.com/asr/66454d86-54b5-412c-981c-040ed3c65a98.52b45ab1979d102e93b894ca310c3b27.jpeg' />
                           <Details>
                               <ProductName><b>Product:</b> Rabbit Play Fence</ProductName>
                               <ProductId><b>SKU:</b> 92847593852</ProductId>
                           </Details>
                       </ProductDetail>
                       <PriceDetail>
                           <ProductAmountContainer>
                               <GrAdd />
                               <ProductAmount>  </ProductAmount>
                               <GrSubtract />
                           </ProductAmountContainer>
                           <ProductPrice>$ 25.99</ProductPrice>
                       </PriceDetail>
                   </Product>
                    <Hr />
                   <Product>
                       <ProductDetail>
                           <Image src='https://img.chewy.com/is/image/catalog/330885_MAIN._AC_SS600_V1646948074_.jpg' />
                           <Details>
                               <ProductName><b>Product:</b> Rabbit Rosewood Fun Ball</ProductName>
                               <ProductId><b>SKU:</b> 223537475852</ProductId>
                           </Details>
                       </ProductDetail>
                       <PriceDetail>
                           <ProductAmountContainer>
                               <GrAdd />
                               <ProductAmount> 3 </ProductAmount>
                               <GrSubtract />
                           </ProductAmountContainer>
                           <ProductPrice>$ 5.99</ProductPrice>
                       </PriceDetail>
                   </Product>
               </Info>
               <Summary>
                   <SummaryTitle>Order Summary</SummaryTitle>
                   <SummaryItem>
                       <SummaryItemText>Subtotal</SummaryItemText>
                       <SummaryItemPrice>$33</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>Estimated Shipping</SummaryItemText>
                       <SummaryItemPrice>Free with subscription</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryItemText>Shipping Discount</SummaryItemText>
                       <SummaryItemPrice>Free</SummaryItemPrice>
                   </SummaryItem>
                   <SummaryItem type="total">
                       <SummaryItemText >Total</SummaryItemText>
                       <SummaryItemPrice>$33</SummaryItemPrice>
                   </SummaryItem>
                   <Button>Checkout</Button>
               </Summary>
           </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart