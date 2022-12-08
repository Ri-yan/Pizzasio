import React, { useContext, useEffect, useState, createContext } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([])
    const [orders, setOrders] = useState([])

    function addToCart(pizza){
        setCart(cart => ( [...cart, pizza]))
    }
    function deleteCartItem(id){
        const temp=[...cart];
        const index=temp.findIndex(item=>item.id===id)
        if(index<0) return;
        temp.splice(index,1);
        setCart(temp);
      }
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
      
//       console.log(auth)
//     });

//     return unsubscribe;
//   }, []);

const value = {setCart,addToCart,cart,deleteCartItem,orders, setOrders};
  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};
export function useApp() {
  return useContext(AppContext);
}
