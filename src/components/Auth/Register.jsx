import React,{useState} from 'react'
import axios from 'axios';


const Register = () => {
  const [formData, setFormData]=useState({
    email:'',
    password:'',
    phoneNum:'',
    name:'',
    address:'',
    isAdmin:false
  },{_id:false});
  
  
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}
const saveuser = async(e) => {
  e.preventDefault();
  console.log(formData);
  let responseData;
  try {
    await axios.post('http://localhost:5000/newuser',{
      //method:'POST',
      headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
  }).then ((response)=>response.json()).then((data)=>responseData=data)

 
    localStorage.setItem('jwt',responseData.token);
    alert("Register Success");
    window.location.replace("/login");
   }catch (error) {
      if (error.response){
        alert(error.response.data.msg);
      }
  }
  

    /*}else{
      alert(responseData.errors)
    }*/
}
  return (
    <div>

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl">Register New Account</h1>

    <p className="mt-4 text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
      ipsa culpa autem, at itaque nostrum!
    </p>
  </div>

  <form onSubmit ={saveuser} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
      <label className="sr-only">Email</label>

      <div className="relative">
        <input
          type="email" required
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter email" name='email' value={formData.email}  onChange={changeHandler} 
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label className="sr-only">Password</label>

      <div className="relative">
        <input
          type="password" required
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter password" name='password' value={formData.password} onChange={changeHandler}  
        />

        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label  className="sr-only">Phone Number</label>

      <div className="relative">
        <input
          type="tel" id="phone" pattern="[0-9]{3}-[0-9]{8}" required
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter phone number" name='phoneNum' value={formData.phoneNum} onChange={changeHandler}  
        />
      </div>
    </div>

    <div>
      <label className="sr-only">Username</label>

      <div className="relative">
        <input
          type="text"
          required
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter username" name='name' value={formData.name} onChange={changeHandler} 
        />
      </div>
    </div>

    <div>
      <label className="sr-only">Address</label>

      <div className="relative">
        <input
          type="text"
          required
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder="Enter your address" name='address' value={formData.address} onChange={changeHandler} 
        />
      </div>
    </div>

    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500">
        Have already account?
        <a className="underline" href="/login">Log In Here</a>
      </p>

      <button
        type="submit"
        className="inline-block rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white hover:bg-teal-400"
        onClick={()=>{saveuser()}}
      >
        Register New Account
      </button>
    </div>
  </form>
</div>

    </div>
  )
}

export default Register