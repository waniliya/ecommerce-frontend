import React, {  useState, createContext } from "react";

const ShopContext = createContext();

// Context Provider component
const ShopProvider = ({ children }) => {
  const [state, setState] = useState(false); // Example state

  return (
    <ShopContext.Provider value={{ state, setState }}>
      {children}
    </ShopContext.Provider>
  );
};

export const StateShop=ShopContext;
export default ShopProvider;