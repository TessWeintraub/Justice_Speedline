import React, {useState} from 'react';
import classes from "./Select.module.css";

// const Select = ({warehouses}) => {
//     return (
//         <label className={classes.select}>
//             <input type='text' list='datalist' placeholder='Filter by' autoComplete="off" spellCheck="off"/>
//             <datalist id='datalist'>
//               {warehouses && warehouses.map(warehouse => <option key={`${warehouse.id}_option`} value={warehouse.id}>{warehouse.one}</option> ) }
//             </datalist>
//         </label>
//     );
// };

const Select = ({array, onChange, onBlur, placeholder, label}) => {
  // const [val,setVal] = useState('')
  // style={{color : val === 'Select a warehouse' && `#3E4C5966`}}
  return (
    <label className={classes.label}>
      {label}
      <select
        name='select'
        className={classes.select}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        defaultValue={'Select a warehouse'}
      >
        <option value='Select a warehouse'>Select a warehouse</option>
        {array && array.map(warehouse => <option key={`${warehouse.id}_option`} value={warehouse._id}>{warehouse.one}</option> ) }
      </select>
    </label>
  );
};

export default Select;