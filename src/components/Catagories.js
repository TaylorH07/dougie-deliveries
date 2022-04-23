import styled from 'styled-components'
import { categories } from '../pages/data'
import CategoryItem from './CatagoryItem'
import React from 'react'


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

function Catagories() {
  return (
    <Container>
        {categories.map(item =>(
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Catagories