import React, {useState, useEffect} from 'react';

import Loading from '../loading/Loading';

import Item from "../item/Item"

const Catalog = () => {

  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(products);
  const listItems = [...new Set(products.map((list) => list.category))]
  


   /* let [filterTextvalue, updateFilterText] = useState('all');
    let filteredProduct = products.filter((product) => {
    if(filterTextvalue === 'headphone'){
    return product.category === 'headphone';
    } else if(filterTextvalue === 'speaker'){
    return product.category === 'speaker';
    } else if(filterTextvalue === 'phone'){
      return product.category === 'phone';
    }else {
    return product;
    }})*/

  useEffect(()=> {
    getProducts();
  

  },[]); 

 

  const getProducts = async() => {
    await fetch('http://localhost:5000/allproducts')
    .then((res)=>res.json())
    .then((data)=>setProducts(data));
    setLoading(true);
};
const filterItems = (cat) => {
  const newItems = products.filter((newlist) => newlist.category === cat )
  setList(newItems)
  
  } 
  return (
    <div>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" id="Catalog">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

      <p className="mx-auto mt-4 mb-3 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>

          <div className='flex flex-wrap gap-3 m-2 p-2 justify-center'>
          <button className='text-sm font-medium flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-teal-600 px-3 py-2 text-white hover:border-teal-600 has-[:checked]:border-blue-500 has-[:checked]:bg-teal-500 has-[:checked]:text-white'
            onClick={() => setList(products)}>
            All
            </button>
            {
            listItems.map(val => (
            <button className='text-sm font-medium flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-teal-600 px-3 py-2 text-white hover:border-teal-600 has-[:checked]:border-blue-500 has-[:checked]:bg-teal-500 has-[:checked]:text-white'
            onClick={() => filterItems(val)}>
            {val[0].toUpperCase() + val.substring(1)}
            </button>
            ))
          }
            
            </div>

     {/* <form>
        <fieldset className="flex flex-wrap gap-3 m-2 p-2 justify-center">
        <button name="all" value="all" onclick={()=>filterItems(products)} className="text-sm font-medium flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-teal-600 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white">All</button>
        <button name="all" value="speaker" className="text-sm font-medium flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-teal-600 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white">Speaker</button>
        <button name="all" value="headphone" className="text-sm font-medium flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-teal-600 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white">Headphone</button>
        <button name="all" value="phone" className="text-sm font-medium flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-teal-600 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white">Phone</button>
       
    </fieldset>
    </form>*/}
    </header>
    
    
   {/*} <ul>
    {product.map((product,index)=>(
      <li key={product._id}>
          <p>{product.name}</p>
      </li>
      ))}
    </ul>*/}
    

  {loading ?
   <ul className=" mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
   
    {list.map((item,index)=>{
      return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category}/>
     
})}
    </ul>:<Loading/> }
  </div>

    </div>
  )
}

export default Catalog