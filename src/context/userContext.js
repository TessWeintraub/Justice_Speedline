import {useEffect, useState, createContext, useContext} from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {

  const authRequest = localStorage.getItem('IS_AUTH')
  const authInitVal = authRequest ? JSON.parse(authRequest) : false

  const [isAuth, setIsAuth] = useState(authInitVal)
  const [userAuth, setUserAuth] = useState(null)
  const [newProduct, setNewProduct] = useState(null)
  const [activeWarehouse, setActiveWarehouse] = useState(null)
  const [move, setMove] = useState(null)
  const [editProduct, setEditProduct] = useState({})
  const [productsCheck, setProductsCheck] = useState([])


  useEffect(()=>{
    localStorage.setItem('IS_AUTH', JSON.stringify(isAuth))
    if(!isAuth){
      setNewProduct(null)
      setActiveWarehouse(null)
      setMove(null)
      setEditProduct({})
      setProductsCheck([])
    }
  },[isAuth])


  return (
    <UserContext.Provider value={{
      userAuth,
      setUserAuth,
      isAuth,
      setIsAuth,
      activeWarehouse,
      setActiveWarehouse,
      newProduct,
      setNewProduct,
      productsCheck,
      editProduct,
      setEditProduct,
      setProductsCheck,
      move,
      setMove
    }}>
      {children}
    </UserContext.Provider>
  )
}
export const useUserContext = () => useContext(UserContext);