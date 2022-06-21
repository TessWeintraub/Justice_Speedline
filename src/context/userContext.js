import {useEffect, useState, createContext, useContext} from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
  const localRequest = localStorage.getItem('USERS')
  const localData = localRequest ? JSON.parse(localRequest) : []

  const localAuthRequest = localStorage.getItem('USER_AUTH')
  const localAuthUser = localAuthRequest ? JSON.parse(localAuthRequest) : null

  const authRequest = localStorage.getItem('IS_AUTH')
  const authInitVal = authRequest ? JSON.parse(authRequest) : false

  const [isAuth, setIsAuth] = useState(authInitVal)
  const [users, setUsers] = useState(localData)
  const [userAuth, setUserAuth] = useState(localAuthUser)
  const [newProduct, setNewProduct] = useState(null)
  const [activeWarehouse, setActiveWarehouse] = useState(null)
  const [move, setMove] = useState(null)
  const [productsCheck, setProductsCheck] = useState([])

  useEffect(()=>{
    localStorage.setItem('IS_AUTH', JSON.stringify(isAuth))
    isAuth || localStorage.removeItem('USER_AUTH')
    isAuth || setUserAuth(null)
  },[isAuth])


  useEffect(() => {
    if (!userAuth) return
    const updateUsers = users.filter((user) => user.id !== userAuth.id)
    setUsers([...updateUsers, userAuth])
    localStorage.setItem('USER_AUTH', JSON.stringify(userAuth))
  }, [userAuth])

  useEffect(() => {
    if (!users) return
    localStorage.setItem('USERS', JSON.stringify(users))
  }, [users])


  return (
    <UserContext.Provider value={{
      users,
      setUsers,
      userAuth,
      setUserAuth,
      isAuth,
      setIsAuth,
      activeWarehouse,
      setActiveWarehouse,
      newProduct,
      setNewProduct,
      productsCheck,
      setProductsCheck,
      move,
      setMove
    }}>
      {children}
    </UserContext.Provider>
  )
}
export const useUserContext = () => useContext(UserContext);