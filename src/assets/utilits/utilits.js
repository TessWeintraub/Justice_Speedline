import {Patterns} from "../../mockdata/validation";

export  const bindInputProps = (state, setState ,key , label, type) => {
  return {
    label: label,
    type: type ? type : 'text',
    placeholder: `Enter a ${key}`,
    onBlur: (e) => setState({
      ...state,
      [key]: {
        ...state[key],
        touched: true,
        errorBoolean: !Patterns[key].test(e.target.value),
      }
    }),
    value: state[key].value,
    onChange: (e) => setState({
      ...state,
      [key]: {
        ...state[key],
        value: e.target.value
      }
    }),
    errorMessage: state[key].errorBoolean && state[key].errorMessage
  }
}

