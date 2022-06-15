export const Patterns = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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

export const registration = e =>{
  const inputsValidRegExp = processingInput(e)
  const invalidEmail = inputsValidRegExp.filter(input => input.name === 'email')



}

export const requestLocalUsers = () => {
  const localRequest = localStorage.getItem('Users')
  const localUsers = localRequest ? [...JSON.parse(localRequest)] : undefined
  return localUsers
}

export const updateLocalUsers = () => {

}