import React,{useState} from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'
import Modal from '../popup/logoutModal'
//import {NavLink} from 'react-router-dom'
//import {subcatalog} from '../subcatalog/Subcatalog'

const Menu = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const Exit = (e) =>{
    e.preventDefault();
    alert("goodbye");
  }
  
  return (
    
    <div className='Menu hidden md:block'>
    <ul className="fixed flex flex-col space-y-2 z-40">
    <li>
      <strong className="block text-xs font-medium uppercase text-gray-400"> Category </strong>
      
      <ul className="mt-2 space-y-1">
        <li>
          <NavLink to={"/tshirt"}
            className="block rounded-lg hover:bg-gray-100 text-gray-500 px-4 py-2 text-sm font-medium hover:text-gray-700"
          >
            Speaker
          </NavLink>
        </li>

        <li>
          <NavLink to={"/shoes"}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Phone
            </NavLink>
        </li>

        <li>
          <NavLink to={"/hoodies"}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Headphones
            </NavLink>
        </li>

      </ul>
    </li>

    <li>
      <strong className="block text-xs font-medium uppercase text-gray-400"> Support </strong>

      <ul className="mt-2 space-y-1">
        <li>
        <NavLink to={"/cart"}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Cart
          </NavLink>
        </li>

        <li>
          <NavLink to={"/dashboard"}
            
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Settings
          </a>
        </li>
      </ul>
    </li>

    <li>
      <strong className="block text-xs font-medium uppercase text-gray-400"> Profile </strong>

      <ul className="mt-2 space-y-1">
        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Update Profile
          </a>
        </li>

        <li>
          <a
            href=""
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Payment Method
          </a>
        </li>

        <li>
          
            <button
              type="submit"
              className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-red-400 hover:text-white"
              onClick={openModal}
            >
              Logout
            </button>
          
        </li>
        <li>
          
        </li>
      </ul>
    </li>
  </ul>
  <Modal isOpen={isModalOpen} onClose={closeModal}/>
  <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>



    </div>
  )
}

export default Menu