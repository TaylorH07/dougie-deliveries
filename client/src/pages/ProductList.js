import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 800;
margin-right: 20px;
`

const Select = styled.select`
    padding: 3px;
    margin-right: 20px;
`
const Option =styled.option`

`
function ProductList() {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Pet Toys</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Pet
                    </Option>
                    <Option>Dog</Option>
                    <Option>Cat</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected> Newest</Option>
                    <Option>Price (lowest)</Option>
                    <Option>Price (highest)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList