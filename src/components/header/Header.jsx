import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading';

const Header = () => {
  const [newCollection, setNewCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
     fetch('http://localhost:5000/latest')
    .then((res)=>res.json())
    .then((data)=>setNewCollection(data));
    setLoading(true);
  },[])
  return (
    <div>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8" id="Header">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Collection Arrived</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>
    {loading ?
    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      {newCollection.map((item,index)=>(
        <a href="#Catalog" className="group relative block">
        <img
          src={item.image}
          alt={item.image}
          className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-lg"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">{item.name}</h3>

          
        </div>
      </a>
))}


      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
      
        <a href="#Catalog" className="group relative block">
          
          <img
            src="http://localhost:5000/images/image_1724870346300.jpg"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-lg"
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Headphone</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>
    </ul>:<Loading/> }
  </div>

    </div>
  )
}

export default Header