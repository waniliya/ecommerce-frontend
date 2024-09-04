import React from 'react'
import Layout from './Layout'
import Header from './../components/header/Header'
import Divider from '../components/divider/Divider'
import Catalog from '../components/Catalog/Catalog'
import Footer from '../components/Footer/Footer'


const Dashboard = () => {
  
  return (
    <Layout>
        <Header/>
        <Divider/>
        <Catalog />
        <Footer/>
    </Layout>
  )
}

export default Dashboard