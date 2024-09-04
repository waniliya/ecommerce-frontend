import React from 'react';
import { Link } from "react-router-dom";



const Item = (props) => {
  
 
  return (
    <div>
          <Link to={`/product/${props.id}`} className="group block overflow-hidden">
          <img
            src={props.image}
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-lg"
            alt={props.name}/>
    

          <div className="relative bg-white pt-3">
            <h1 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
              Name of product: {props.name[0].toUpperCase() + props.name.substring(1)}
              
            </h1>

            <p className="text-sm text-gray-700 ">Category: {props.category}</p>
            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>
              
              <span className="tracking-wider text-gray-900"> Price: RM {props.price} </span>
            </p>
          </div>
        </Link>
        
    </div>
  )
}

export default Item