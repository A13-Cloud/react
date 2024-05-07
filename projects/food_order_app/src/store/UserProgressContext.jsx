import {createContext, useState} from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider ({children}) {
  const [useProgress, setUserProgress] = useState("");

  function showCart () {
    setUserProgress("cart");
  }

  function hideCart () {
    setUserProgress("");
  }

  function showCheckout () {
    setUserProgress("checkout");
  }

  function hideCheckout () {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: useProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  }

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  )
}


export default UserProgressContext;