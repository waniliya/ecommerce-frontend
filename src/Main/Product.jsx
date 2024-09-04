import React, { useContext } from 'react'
import { ShopContext, ShopCtx } from '../context/CartProductProvider'
import { useParams } from 'react-router-dom'
import DetailItem from '../components/detail/DetailItem';
import Menu from '../components/menu/Menu';
import Navbar from '../components/navbar/navbar';

const Product = () => {
    const {products} = useContext(ShopCtx); //null
  
      // Handle the case where products is null
      {console.log('Products from context:', products);}
    
    const {id} = useParams();
    const product = products.find((e)=>e.id === Number(id));
    {console.log('Product after find by id:', product);}
    
  return (
    <div>
        <Navbar/>
        <DetailItem product={product}/>
        </div>
  )
}

export default Product