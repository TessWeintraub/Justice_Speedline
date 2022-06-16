import {useState} from "react";
import {createContext, useContext} from "react";
export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const localRequest = localStorage.getItem('USERS')
    const localData = localRequest ? JSON.parse(localRequest) : []

    const [isAuth, setIsAuth] = useState(false)
    const [users, setUsers] = useState(localData)
    const [userAuth,setUserAuth] = useState()

    return (
        <UserContext.Provider value={{
            users,
            setUsers,
            userAuth,
            setUserAuth,
            isAuth,
            setIsAuth,
        }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUserContext = () => useContext(UserContext);