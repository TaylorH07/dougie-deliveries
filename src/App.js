import React from 'react'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Detail';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { HiHome } from 'react-icons/hi';


function App() {
  return (
    <Home/>
  )
}

export default App;