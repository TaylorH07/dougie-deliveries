import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: lightcoral;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

function Announcement() {
  return (
    <Container>
      Sign Up for Free Shipping
      </Container>
  );
};

export default Announcement;