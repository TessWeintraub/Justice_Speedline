import {useEffect, useState} from "react";
import {createContext, useContext} from "react";

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
  const localRequest = localStorage.getItem('USERS')
  const localData = localRequest ? JSON.parse(localRequest) : null

  const localAuthRequest = localStorage.getItem('USER_AUTH')
  const localAuthUser = localAuthRequest ? JSON.parse(localAuthRequest) : null

  const [isAuth, setIsAuth] = useState(false)
  const [users, setUsers] = useState(localData)
  const [userAuth, setUserAuth] = useState(localAuthUser)
  const [newProduct, setNewProduct] = useState(null)
  const [activeWarehouse, setActiveWarehouse] = useState(null)


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
      setNewProduct
    }}>
      {children}
    </UserContext.Provider>
  )
}
export const useUserContext = () => useContext(UserContext);