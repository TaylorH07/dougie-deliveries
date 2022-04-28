import {React, useState} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'
import {useLocation} from 'react-router-dom';
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

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
          ...filters,
          [e.target.name]: value,
        });
      };

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Pet Toys</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="pet" onChange={handleFilters}>
                    <Option disabled>
                        Pet
                    </Option>
                    <Option>Dog</Option>
                    <Option>Cat</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest"> Newest</Option>
                    <Option value="lowest">Price (lowest)</Option>
                    <Option value="highest">Price (highest)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList