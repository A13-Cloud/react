import {createContext, useReducer} from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  cleanCart: () => {}
});

function cartReducer (state, action) {

  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatingItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1
      }
      updatingItems[existingCartItemIndex] = updatedItem;
    } else {
      updatingItems.push({...action.item, quantity: 1});
    }

    return { ...state, items: updatingItems }
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      }
      updatedItems[existingCartItemIndex] = updateItem;
    }

    return { ...state, items: updatedItems }
  }

  if (action.type === "CLEAR_CART") {
    return {...state, items: []}
  }

  return state;
}

export function CartContextProvider ({children}) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem (item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem (id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id});
  }

  function cleanCart () {
    dispatchCartAction({ type: "CLEAR_CART"});
  }

  const cartContextCtx = {
    items: cart.items,
    addItem,
    removeItem,
    cleanCart
  }

  // console.log(cartContext);

  return (
    <CartContext.Provider value={cartContextCtx}>
      {children}
    </CartContext.Provider>
  )
}


export default CartContext;