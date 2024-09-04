import React, { useContext } from 'react'
import Layout from './Layout'
import DetailItem from '../components/detail/DetailItem'
import PopupSuccess from '../components/popup/PopupSuccess'
import { ShopContext, ShopCtx } from '../context/CartProductProvider'
import { useParams } from 'react-router-dom'

const Detailpage = () => {
  const {products} = useContext(ShopCtx);
  const {id} = useParams();
  const product = products.find((e)=>e.id === Number(id));
  return (
        <Layout>
            <DetailItem />
            <PopupSuccess/>
        </Layout>
  )
}

export default Detailpage