import React, { useContext } from 'react'
import { ShopCtx } from '../../context/CartProductProvider';
import { NavLink, useParams } from 'react-router-dom'
import { MdOutlineLocalShipping } from "react-icons/md";

const Cart = () => {
  const {calculateTotalAmount, products, cartItems, removeFromCart, quantityHandler} = useContext(ShopCtx);
  const {id} = useParams();
  let sum=  (calculateTotalAmount()*0.08)+calculateTotalAmount();

  return (
    <div>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
      </header>

      <div className="mt-8">
        <ul className="space-y-4">
        {products.map((e)=>{
          if(cartItems[e.id]>0)
          {
            return  <li className="flex items-center gap-4">
            <img
              src={e.image}
              alt="product"
              className="size-20 rounded object-cover"
            />

            <div>
              <h3 className="text-sm text-gray-900">{e.name[0].toUpperCase() + e.name.substring(1)}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Category:</dt>
                  <dd className="inline">{e.category}</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">{e.color}</dd>
                </div>

                <div>
                  <dt className="inline">Price per item:</dt>
                  <dd className="inline">RM {e.price}</dd>
                </div>

                <div>
                  <dt className="inline">Sub total:</dt>
                  <dd className="inline">RM {e.price*cartItems[e.id]}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
              <form>
              <label htmlFor="Quantity" className="sr-only"> Quantity </label>
                <button  onClick={ ()=>{quantityHandler(e.id,'DEC')}}type="button" className="size-10 leading-10 text-red-600 transition hover:opacity-75">
                    &minus;
                </button>

                <input
                    type="number"
                    id="Quantity"
                    value={cartItems[e.id]}
                    className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />

                <button onClick={ ()=>{quantityHandler(e.id,'INC')}} type="button" className="size-10 leading-10 text-teal-600 transition hover:opacity-75">
                &#43;
                </button>

              </form>

              <button className="text-gray-600 transition hover:text-red-600" onClick={()=>{removeFromCart(e.id)}}>
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              
            </div>
          </li>
          
          }
          return null;
        })}
         
        </ul>
        
        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Total before tax</dt>
                <dd><p>RM {calculateTotalAmount()}</p></dd>
              </div>

              <div className="flex justify-between">
                <dt>SST Tax 8%</dt>
                <dd>RM {calculateTotalAmount()*0.08}</dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>No discount</dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>RM {sum}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <MdOutlineLocalShipping />
                <p className="whitespace-nowrap text-xs pl-2">Free shipping</p>
              </span>
            </div>

            <div className="flex justify-end">
              <NavLink to={"/order"}
                
                className="block rounded bg-teal-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-teal-700 mr-2"
              >
                Proceed to Checkout
              </NavLink>
              <NavLink to={"/"}
                
               className="block rounded bg-white px-5 py-3 text-sm text-black transition hover:bg-red-700 hover:text-white">
                    Cancel
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Cart