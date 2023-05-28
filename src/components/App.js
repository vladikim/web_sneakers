import './index.scss'
import Card from './Card';
import Header from './Header';
import React from 'react';
import Drawer from './Drawer';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Favorite from './Favorite';
import Home from '../pages/Home';

export const AppContext = React.createContext({})


function App() {

  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [favoriteItems, setFavoriteItems] = React.useState([])

  function isAddedOrNot(obj) {
    return cartItems.some(elem => elem.idd === obj)
  }

  function isFavorited(id) {
    return favoriteItems.some(elem => elem.idd === id)

  }

  const openCart = () => {
    setCartOpened(!cartOpened)
  }

  async function addItemsInFavorite(product) {
    try {
      if (!favoriteItems.find(elem => product.idd === elem.idd)) {
        setFavoriteItems([...favoriteItems, product])
      } else {
        setFavoriteItems(favoriteItems.filter(elem => elem.idd !== product.idd))
      }
    } catch (err) {
      alert('не получилось')
    }
  }

  const inCart = (obj) => {
    if (cartItems.find((elem) => elem.idd === obj.idd)) {
      setCartItems(cartItems.filter((item) => item.idd !== obj.idd))
      axios.delete(`https://64521189bce0b0a0f73bc627.mockapi.io/cart/${obj.id}`)
      console.log('d')
    } else {
      setCartItems([...cartItems, obj])
      axios.post('https://64521189bce0b0a0f73bc627.mockapi.io/cart', obj)
      console.log(1)
    }
  }

  const searchChangeValue = (event) => {
    setSearchValue(event.target.value)
  }

  React.useEffect(() => {
    async function fetchProducts() {
      const itemsResolve = await axios.get('https://64521189bce0b0a0f73bc627.mockapi.io/items')
      const cartResponse = await axios.get('https://64521189bce0b0a0f73bc627.mockapi.io/cart')
      setCartItems(cartResponse.data)
      setItems(itemsResolve.data)
    }
    fetchProducts()
  }, [])

  return <AppContext.Provider value={{ items, cartItems, favoriteItems, isAddedOrNot, addItemsInFavorite, inCart, setCartItems, isFavorited, openCart }}>
    <div className='wrapper'>
      {cartOpened ? <Drawer closeCart={openCart} /> : null}
      <Header onCart={openCart} />
      <Routes exact='true'>
        <Route path='/favorites' element={<Favorite />} />
        <Route path='/' element={<Home searchValue={searchValue} searchChangeValue={searchChangeValue} />}
        />
      </Routes>
    </div >
  </AppContext.Provider>
}

export default App
