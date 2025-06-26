import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home , Product , CreateForm, Navbar } from './screen'
import Login from './auth/login'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Navbar/>}/>
      <Route path={"/home"} element={<Home/>}/>
      <Route path={"/product"} element={<Product/>}/>
      <Route path={"/create-form"} element={<CreateForm/>}/>
      <Route path={"/auth/login"} element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App