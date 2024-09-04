import React, { useContext } from 'react'
import { ShopCtx } from '../../context/CartProductProvider';
import { MdOutlineLocalShipping } from "react-icons/md";

const Checkout = () => {
  const {calculateTotalAmount, products, cartItems} = useContext(ShopCtx);
  let sum=  (calculateTotalAmount()*0.08)+calculateTotalAmount();
  return (
    <div className="mt-4 lg:row-span-3 lg:mt-0">
    <h2 className="sr-only">Checkout</h2>
    <p className="text-base font-semibold leading-7 text-gray-900">Your Order</p>
    <ul className="space-y-4 mt-6">
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
              <h4>Quantity: {cartItems[e.id]}</h4>
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
                <dd><p>RM {calculateTotalAmount} </p></dd>
              </div>

              <div className="flex justify-between">
                <dt>SST Tax 8%</dt>
                <dd>RM {calculateTotalAmount()*0.08}</dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>No discount</dd>
              </div>

              <div className="flex justify-between">
                <dt>Delivery Fee</dt>
                <dd> <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <MdOutlineLocalShipping />
                <p className="whitespace-nowrap text-xs pl-2">Free shipping</p>
              </span></dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>RM {sum}</dd>
              </div>
            </dl>
          </div>
        </div>
    
  </div>
  )
}

export default Checkout