import React, {useState,useEffect,useContext} from 'react';
import { ShopCtx } from '../../context/CartProductProvider';
import { useParams } from 'react-router-dom';


const DetailItem = ({product}) => {
   // const product = useContext(ShopContext);
    const {addToCart} = useContext(ShopCtx);

    const {id} = useParams();
    
   const [item,setItem] = useState([]);
 
    
   
    

    useEffect(()=> {
      getProductById();
  },[id]);

  const getProductById = async(id) =>{
   
    await fetch(`http://localhost:5000/findproducts/${id}`)
    .then((res)=>res.json())
    .then((data)=>setItem(data));
    console.log(item);
    
  }

  
  return (
    
    <div className="group block overflow-hidden m-4 w-4/6 mx-auto p-6 ">
      <div className="relative h-[150px] sm:h-[250px] ">
  <img
      src={product.image}
      alt=""
      className="absolute h-full w-full object-cover opacity-100 hover:scale-105 rounded-lg"
    />

  </div>

  <div className="px-4 sm:px-0 mt-2">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Product Information</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Name of Product</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.name[0].toUpperCase() + product.name.substring(1)}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Category</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.category}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Color</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.color}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Price per item</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">RM {product.price}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About Product</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {product.description}
            </dd>
          </div>

  <a   
    onClick={()=>{addToCart(product.id)}} 
      className="block rounded bg-teal-600 px-5 py-3 text-sm text-gray-100 transition hover:bg-teal-800 mt-3">
      Add to cart
    </a>
    <a href="javascript: history.go(-1)" className="block rounded bg-grey-900 px-5 py-3 text-sm text-black transition hover:bg-red-800 hover:text-white mt-3">Go Back</a>

    </dl>
</div>

</div>

  )
}

export default DetailItem