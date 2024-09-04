import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { LuPackageSearch } from "react-icons/lu";


const ToggleMenu = () => {
   
  return (
    <div className="block rounded bg-gray-100 p-2.5 text-teal-600 transition hover:text-gray-600/75 md:hidden">
         <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Menu
          <FaChevronDown aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400"/>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 p-2 rounded-lg z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
        <MenuItem>
            <NavLink to={"/search"}
              
              className="block px-4 py-2 rounded-lg text-sm text-gray-700 data-[focus]:bg-gray-200 data-[focus]:text-gray-900"
            >
              Search Product <LuPackageSearch />
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={"/"}
              
              className="block px-4 py-2 rounded-lg text-sm text-gray-700 data-[focus]:bg-gray-200 data-[focus]:text-gray-900"
            >
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={"/cart"}
              
              className="block px-4 py-2 rounded-lg text-sm text-gray-700 data-[focus]:bg-gray-200 data-[focus]:text-gray-900"
            >
              Cart
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to={"/myorder"}
              
              className="block px-4 py-2 rounded-lg text-sm text-gray-700 data-[focus]:bg-gray-200 data-[focus]:text-gray-900"
            >
              Order Track
            </NavLink>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 rounded-lg py-2 text-left text-sm text-gray-700 hover:bg-red-400 hover:text-white"
              >
                Log out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
    </div>
  )
}

export default ToggleMenu