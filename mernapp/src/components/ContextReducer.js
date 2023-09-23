import React, { createContext, useContext, useReducer } from "react";

const cartStateContext = createContext();
const cartDisptachContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index,1);
      return newArr;
    case "UPDATE":
      let newArray = [...state];
      newArray.find((food,index)=>{
        if(food.id===action.id)
        {
          newArray[index] = {...food,qty:parseInt(action.qty)+parseInt(food.qty),price : action.price+food.price}
        }
          return newArray;
      })
      return newArray;
    case "DROP":
      let empArray =[];
      return empArray;
    default:
      console.log("error");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <cartDisptachContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDisptachContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDisptachContext);
