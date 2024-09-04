import React from 'react'
import Header from './../components/header/Header'
import Divider from '../components/divider/Divider'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navbar/navbar'

const Main = () => {


  return (
    <div>
      <Navbar/>
        <Header/> 
        <Divider/>
        <Catalog/>
        <Footer/>
    </div>
  )
}

export default Main