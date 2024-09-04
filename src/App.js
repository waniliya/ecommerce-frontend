import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register";
import Main from "./Main/Main";
import CartPage from "./Main/CartPage";
import Detailpage from "./Main/Detailpage";
import Product from "./Main/Product";
import OrderPage from "./Main/OrderPage";
import OrderTrack from "./Main/OrderTrack";
import SearchPage from "./Main/SearchPage";
import ReportPage from "./Main/ReportPage";

function App() {
  return (
    
    <div className='App'>
      <BrowserRouter>
        <Routes>  
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/*<Route path="/dashboard" element={<Dashboard />} />*/}
        
        <Route path="/product" element={<Product/>}>
           <Route path=":id" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="item/:id" element={<Detailpage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/myorder" element={<OrderTrack />} />
        {/*<Route path="/paid" element={<PaidSuccesspage />} />*/}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/report" element={<ReportPage />} />
        </Routes>
        </BrowserRouter>

       

    </div>
    

      
  )
}

export default App