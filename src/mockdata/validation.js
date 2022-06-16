

export const Patterns = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export const processingInput = e => {
  e.preventDefault()
  const elements = [...e.target.elements]
  const inputsAll = elements.filter(element => element.hasAttribute('data-input') && element)
  const inputsError = inputsAll.map(input => input.value ? input : inputErrorMessage(input))
  const inputsValue = inputsError.filter(element => element && element)
  if (!inputsValue.length) return
  const inputsValidate = inputsValue.filter(input => validation(input) && input)
  if (inputsValidate.length === inputsAll.length) return inputsValidate
}

export const inputErrorMessage = input => {
  if (input.nextSibling) input.nextSibling.style.display = 'block'
}

export const validation = input => {
  switch (Patterns[input.name].test(input.value)) {
    case true:
      return true
    default:
      return false
  }
}

export const registration = e => {
  const inputsValidRegExp = processingInput(e)
  const invalidEmail = inputsValidRegExp.filter(input => input.name === 'email')
  const localUsers = requestLocalUsers()
  const localUserEmail = localUsers ? localUsers.filter(user => user.email === invalidEmail[0].value) : false
  if (localUserEmail.length){
      return false
  }
  const user = {
    id: localUsers ? localUsers.last().id + 1 : 1,
    email: inputsValidRegExp[0].value,
    password: inputsValidRegExp[1].value,
    characteristic: {
      title: 'Warehouse',
      button_text: 'Add a warehouse +',
      one: 'All stores',
      two: 'Number of products',
      three: 'Length, m',
      four: 'Width, m',
      five: 'Height, m'
    },
    warehouses: []
  }
  return localUsers ? updateLocalUsers(user) : createLocalUser(user)
}


export const authorization = e => {
  const inputsValidRegExp = processingInput(e)
  const localUsers = [...requestLocalUsers()]
  const authUser = localUsers ? localUsers.filter(user => user.email === inputsValidRegExp[0].value && user.password === inputsValidRegExp[1].value) : false
  if (!authUser.length){
    return false
  }
  return createLocalUser(authUser.last(), 'USER_AUTH')
}

export const requestLocalUsers = () => {
  const localRequest = localStorage.getItem('Users')
  const localUsers = localRequest ? JSON.parse(localRequest) : false
  return localUsers
}

export const updateLocalUsers = (user,key) => {
    const localUsers = requestLocalUsers()
    localUsers && localStorage.setItem(key ? key : 'Users', JSON.stringify([...localUsers, user ]))
    return requestLocalUsers()
}

export const createLocalUser = (user,key) => {
  user && localStorage.setItem(key ? key :'Users', JSON.stringify([user]))
  return requestLocalUsers()
}


Array.prototype.last = function() {
  return this[this.length - 1];
}