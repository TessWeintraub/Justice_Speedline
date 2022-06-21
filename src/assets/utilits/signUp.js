import {warehouses} from "../../mockdata/warehouses";

export const signUpInitStat = {
  email: {
    value: '',
    errorMessage: 'Email заполнен не верно',
    errorBoolean: false,
    touched: false,
  },
  password: {
    value: '',
    errorMessage: 'Пароль заполнен не верно',
    errorBoolean: false,
    touched: false,
  },
}
export const sampleNewUser = {
  id: 0,
  email: '',
  password: '',
  characteristic: {
    title: 'Warehouse',
    button_text: 'Add a warehouse +',
    one: 'All stores',
    two: 'Number of products',
    three: 'Length, m',
    four: 'Width, m',
    five: 'Height, m'
  },
  warehouses: warehouses
}