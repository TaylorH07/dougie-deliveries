import {React, useState} from 'react'
import styled from 'styled-components'
import {login} from '../redux'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url('https://www.treehugger.com/thmb/IHAUG8VsbUynU8zc4vwkqI47meE=/4244x2387/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__shutterstock_646123120-b577122dc7bf464f9b414782cfefedf9.jpg');
     background-size: cover;
     display: flex;
     align-items: center;
     justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`
const span = styled.h1`
    font-size: 24px;
    font-weight: 800;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightcoral;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;

`
const Link = styled.a`
    margin: 5px 0px;
    font-style: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: gray;
`
const Error = styled.span`
    color: red`

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };


  return (
    <Container>
        <Wrapper>
            <span role="img"  aria-label="dog">Create an Account  🐕‍🦺 </span>
            <Form>
                <Input placeholder="username" />
                <Input placeholder ="password" />
                <Button>Login</Button>
                <Link>Create a New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login