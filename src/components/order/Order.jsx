import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ShopCtx } from '../../context/CartProductProvider';
import { useParams } from 'react-router-dom';

const Order = () => {

  const {calculateTotalAmount, products, cartItems} = useContext(ShopCtx);
  let sum=  (calculateTotalAmount()*0.08)+calculateTotalAmount();
  const [totalStock, setTotalStock] = useState("");
  const {id} = useParams();

  const [data, setData] = useState({
    name:"",
    email:"",
    phonenum:"",
    address:"",
    userId:""
  });

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phonenum:"",
    address:""
  });

  /*const [orderInfo, setOrderInfo] = useState({
    userId:"",
    items:[],
    amount:"",
    address:"",
  })*/
  const [error, setError] = useState(null);

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('jwt'); // Assume token is stored in localStorage
        if (!token) {
          setError('Message from order page: No access token found');
          return;
        }
  
        const response = await axios.get('http://localhost:5000/getuser', {
          headers: { Authorization: `Bearer ${token}` },
        });
        
        console.log(response.data);
        setData({
          name: response.data.name,
          email: response.data.email,
          phonenum: response.data.phoneNum,
          address: response.data.address,
          userId:response.data._id
        });
          
      } catch (err) {
        setError('Failed to fetch user data');
        console.log(error);
      }
    };

    

    useEffect(()=>{
      fetchUserData();
      
    },[]);

    const onChangeHandler = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setFormData(data=>({...data, [name] :value}))
      }

    const placeorder = async (e)=>{
       e.preventDefault();
        let orderItems = [];
        products.map((item)=>{
        if(cartItems[item.id]>0){
        let itemInfo = item;
        item.totalofstocks=item.totalofstocks-cartItems[item.id];
        console.log(totalStock); 
        itemInfo["quantity"] = cartItems[item.id];
        orderItems.push(itemInfo) ;
        }
      });
      let orderData ={
        address: data.address,
        items:orderItems,
        amount:sum,
        userId:data.userId
      }
      console.log(orderData);
      if(localStorage.getItem('jwt')){
        let response = await axios.post('http://localhost:5000/placeorder', orderData);
        if(response.data.success){
          alert("info order success");
          window.location.replace("/");
        }else{
          alert(response.errors)
        }
        
     
      }
      }
   
    
       
    

  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <form onSubmit ={placeorder}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Order Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                onChange={onChangeHandler}
                value={data.name}
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                onChange={onChangeHandler}
                value={data.email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="phonenum" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                onChange={onChangeHandler}
                value={data.phonenum}
                  id="phonenum"
                  name="phonenum"
                  type="tel"
                  autoComplete="number"
                  //pattern="[0-9]{3}-[0-9]{8}"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                onChange={onChangeHandler}
                value={data.address}
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
           
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Bank
              </label>
              <div className="mt-2">
              <select
                  id="bank"
                  name="bank"
                  autoComplete="state-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                >
                  <option>Bank Rakyat</option>
                  <option>MayBank</option>
                  <option>CIMB Bank</option>
                  <option>Hong Leong Bank</option>
                  <option>Affin Bank</option>
                  <option>RHB Bank</option>
                  <option>Bank Islam</option>
                  <option>Bank Muamalat</option>
                  <option>HSBC Bank</option>
                  <option>Bank Simpanan Nasional</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Expire Date
              </label>
              <div className="mt-2">
                <input
                  id="expirebank"
                  type="month"
                  name="month"
                  min="01/2000"
                  max="12/2050"
                  required
                  pattern="[0-9]{2}/[0-9]{2}"
                  autoComplete="expirebank"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Bank account number
              </label>
              <div className="mt-2">
                <div className="sm:col-span-2 sm:col-start-1">
                <input
                  id="bank-account-number"
                  name="bank-account-number"
                  type="number"
                  required
                  autoComplete="bank-account-number"
                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Confirmation Order</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, mollitia!
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      required
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-500">
                      Yes, I confirm all information above are accurate and I responsible if order cannot fullfil
                      because of information are inaccurate.
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={()=>window.location.assign('/cart')} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-red-700 hover:text-white shadow-sm">
          Cancel
        </button>
        <button
        onClick={()=>{placeorder()}}
          type="submit"
          className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Order
        </button>
      </div>
    </form>
    </div>
  )
}

export default Order