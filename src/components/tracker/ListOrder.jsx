import React,{useEffect, useState} from 'react'
import axios from "axios";
import { GoPackageDependencies } from "react-icons/go";

const ListOrder = () => {
 
  const [data,setData] = useState([]);
  
  const token = localStorage.getItem('jwt');
  

  useEffect(()=> {
    const fetchDataOrder = async () => {
      let array;
     
        try {
      
          console.log(token);
          const response = await axios.get('http://localhost:5000/myorder',{
                    headers: {
                      'jwt': `${localStorage.getItem( 'jwt')}`,
                      },
                  }); // No body here
                  console.log(response.data);
                  array=[...response.data];
                  console.log(array);
                  setData(array);
                 console.log(response.data.data);
                  //setOrder(response.data.data);
          console.log(data);
         
        } catch (error) {
          console.log(error);
        } 
      };
      
     
        fetchDataOrder();
      
  },[]); 


  return (
    <div className="overflow-x-auto">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">My Order List</h1>
        </header>
  
        <div className="mt-8">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Order Date</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Packages</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Amount</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Track</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {data.map((order,i)=>(
             <tr key={i}>
             <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{order.date}</td>
             <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><GoPackageDependencies /></td>
             <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <p>{order.items.map((item,index)=>{
              if(index === order.items.length-1){
                return item.name[0].toUpperCase() + item.name.substring(1) + "x" + item.quantity;
              }else{
                return item.name[0].toUpperCase() + item.name.substring(1) + "x" + item.quantity + " ; ";
              }
             })}</p>
             </td>
             <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><p>RM {order.amount}</p></td>
             <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.1 text-indigo-700">&#x25cf;
              <b className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{order.status}</b></span>
             </td>
             
             <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"><button>Track Order</button></td>
             
           </tr>
            ))}
              
            </tbody>
          </table>

        </div>
      </div>
    </div>
  
      </div>
  )
}

export default ListOrder