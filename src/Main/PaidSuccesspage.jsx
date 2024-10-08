import React from 'react'

const PaidSuccesspage = () => {
  return (
<div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-200 animate-bounce">&#10004;</h1>

    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Yeah!</p>

    <p className="mt-4 text-gray-500">Our staff will process your order ASAP. Stay Tuned</p>

    <a
      href="/dashboard"
      className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
    >
      Continue Shopping
    </a>
  </div>
</div>

  )
}

export default PaidSuccesspage