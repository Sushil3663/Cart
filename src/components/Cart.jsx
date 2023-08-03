import React, { createContext, useEffect, useReducer } from 'react'
import CartContext from './CartContext'
import './cart.css'
import Products from './Products';
import { reducer } from './Reducer';

const cartContext = createContext();

const initialState = {
    item: Products,
    Amount:0,
    totalItem: 0,
}
const Cart = () => {

   const [state, dispatch] = useReducer(reducer, initialState);

   //delete
   const deleteItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const removeAll =()=>{
    return dispatch({
        type: "REMOVE_All"
    })
  }

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  
  const decrementItem = (id) =>{
    return dispatch({
        type: "DECREMENT",
        payload:id,
    })
  }

  useEffect(()=>{
    dispatch({ type: "TOTAL"});
    // console.log("Ok")

  },[state.item])

    return (
        <>
            <cartContext.Provider value={{...state, deleteItem, removeAll, increment, decrementItem }}>

                <CartContext />

            </cartContext.Provider>
        </>
    )
}

export default Cart
export {cartContext};