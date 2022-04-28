import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    background-color: lightcoral;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
`

function Announcement() {
  return (
    <Container>
      Sign Up for Free Shipping
      </Container>
  );
};

export default Announcement;