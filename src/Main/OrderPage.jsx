import React from 'react'
import Order from '../components/order/Order'
import Checkout from '../components/checkout/Checkout'

const OrderPage = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <Order/>
        <Checkout/>
    </div>
  )
}

export default OrderPage