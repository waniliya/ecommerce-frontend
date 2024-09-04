import React from 'react'
import { Link } from "react-router-dom";

const Result = ({ products }) => {
    if (products.length === 0) {
        return <p>No products found.</p>;
      }
  return (
    <div transition
    className="mx-auto max-w-3xl mt-3">
            <ul className=" mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-8">
      {products.map(product => (
        <li key={product.id}>
            <Link to={`/product/${product.id}`} className="group block overflow-hidden">
            <img
            src={product.image}
            className="size-20 rounded object-cover"
            alt={product.name}/>
          <strong>{product.name}</strong>  RM {product.price}
          </Link>
        </li>
      ))}
    </ul>
    </div>

  )
}

export default Result