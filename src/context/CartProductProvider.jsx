import React, { useEffect, useState } from "react";

const ShopContext = React.createContext();

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 100+1; index++) {
    cart[index] = 0;
    }
    return cart;
}

const CartProductProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());
    //const [totalAmountOfProducts, setTotalAmountOfProducts] = useState();
    
   // const [order,setOrder] = useState([]);
    
    useEffect(()=> {
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:5000/allproducts');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const result = await response.json();
             // console.log(result);
              setProducts(result);
              if(localStorage.getItem('jwt')){
                    try {
                      const responseCart = await fetch('http://localhost:5000/getcart',{
                        headers: {
                            'jwt': `${localStorage.getItem( 'jwt')}`,
                            },
                      }); // No body here
                      const data = await responseCart.json();
                      setCartItems(data);
                    } catch (error) {
                      console.error('Error fetching data:', error);
                    }
                
                   
                }
              //console.log(products);
            } catch (err) {
              console.log(err);
            } 
          };
      
          fetchData();
          
     
    
      },[]); 

      
    const addToCart = async (itemId) => {
        
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
        if(localStorage.getItem('jwt')){
        fetch('http://localhost:5000/addtocart',{
        method: 'POST',
        headers: {
        Accept: 'application/form-data',
        'jwt': `${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json)
        .then((data)=>console.log(data));
        alert("Added to cart")

    }
}


    const removeFromCart = (itemId) => {
        //setCartItems(products.filter((product) => product.id !== itemId))
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('jwt')){
            fetch('http://localhost:5000/removefromcart',{
            method: 'POST', 
            headers: {
            Accept: 'application/form-data',
            'jwt': `${localStorage.getItem( 'jwt')}`,
            'Content-Type': 'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
        })
    }
}
    const calculateTotalAmount = () => {
        let totalAmount =0;
        for(const item in cartItems) 
        {
            if(cartItems[item]>0)
            {   
                let itemInfo = products.find((product)=>product.id === Number(item)) //item is string, so use Number to change to integer
                totalAmount+= itemInfo.price * cartItems[item];
            }
           
        }
        return totalAmount; 
    }

    const getTotalCartItem = () =>{
        let totalItem =0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const quantityHandler = (itemId, action) => {
    
        if(action === 'INC'){
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
            if(localStorage.getItem('jwt')){
                fetch('http://localhost:5000/addtocart',{
                method: 'POST',
                headers: {
                Accept: 'application/form-data',
                'jwt': `${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
                })
                .then((response)=>response.json)
                .then((data)=>console.log(data));
            }
           
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
            if(localStorage.getItem('jwt')){
                fetch('http://localhost:5000/removefromcart',{
                method: 'POST', 
                headers: {
                Accept: 'application/form-data',
                'jwt': `${localStorage.getItem( 'jwt')}`,
                'Content-Type': 'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
        }
        
        }
    }

    /*const placeOrder = async (itemId) => {
        
        setOrder(cartItems);
        console.log(order);
        if(localStorage.getItem('jwt')){
        fetch('http://localhost:5000/neworder',{
        method: 'POST',
        headers: {
        Accept: 'application/form-data',
        'jwt': `${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json)
        .then((data)=>console.log(data));
       

    }
}*/

    return ( 
        <ShopContext.Provider value={{products, cartItems, addToCart, removeFromCart, calculateTotalAmount, getTotalCartItem, quantityHandler}}>
            {children}
        </ShopContext.Provider>
     );

};

export const ShopCtx = ShopContext;
export default CartProductProvider; 