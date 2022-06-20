import React from 'react';
import classes from "./Select.module.css";

// const Select = ({warehouses}) => {
//   console.log(warehouses && warehouses.map(warehouse => warehouse.id ))
//     return (
//         <label className={classes.select}>
//             {/*<input type='text' list='datalist' placeholder='Filter by' autoComplete="off" spellCheck="off"/>*/}
//             {/*<datalist id='datalist'>*/}
//             <select name='select'>
//               {warehouses && warehouses.map(warehouse => <option key={`${warehouse.id}_option`} value={warehouse.id}>{warehouse.one}</option> ) }
//             </select>
//             {/*</datalist>*/}
//         </label>
//     );
// };

const Select = ({warehouses, onChange, onBlur, placeholder, label}) => {
  return (
    <label className={classes.select}>
      {label}
      <select name='select' onChange={onChange} onBlur={onBlur} placeholder={placeholder}>
        {warehouses && warehouses.map(warehouse => <option key={`${warehouse.id}_option`} value={warehouse.id}>{warehouse.one}</option> ) }
      </select>
    </label>
  );
};

export default Select;