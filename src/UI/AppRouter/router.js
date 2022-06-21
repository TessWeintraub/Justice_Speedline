import MainPage from "../../components/MainPage/MainPage";
import Warehouses from "../../components/Warehouses/Warehouses";


export const publicRoutes = [
  {path: '/', element:<MainPage/>}
]

export const privateRoutes = [
  {path: '/warehouses', element:<Warehouses/>}
]