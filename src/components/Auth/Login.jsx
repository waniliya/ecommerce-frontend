import React,{useState} from 'react'

const Login = () => {
  
  const [auth, setAuth]=useState({
    email:"",
    password:"",
  });
  
  const changeHandler = (e)=>{
    setAuth({...auth,[e.target.name]:e.target.value})
}

  const loginGate = async(e) =>{
   
    e.preventDefault();
    console.log(auth);
    
   let responseData;
    await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
      },
      body:JSON.stringify(auth),
  }).then ((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('jwt',responseData.accessToken);
      alert("Welcome")
      window.location.replace('/');
    }else{
      alert(responseData.errors)
    }
    
  }
  return (
    <div>
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-teal-500 sm:text-3xl">Get shop today</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
      inventore quaerat mollitia?
    </p>

    <form onSubmit ={loginGate} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
          name="email"
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email" onChange={changeHandler}  value={auth.email} 
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
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
          name="password"
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password" onChange={changeHandler} value={auth.password}
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

       <button
        type="submit"
        className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-500"
        onClick={()=>{loginGate()}}
      >
        Log in
      </button>

      <p className="text-center text-sm text-gray-500">
        No account? 
        <a className="underline" href="/register">Sign Up</a>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}

export default Login