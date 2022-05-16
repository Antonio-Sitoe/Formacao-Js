import React from 'react';

function Input(props) {
  console.log(props.value)
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type='text'
        name={props.label}
        value={props.value}
        id={props.label}
        onChange={props.onChange}
      />
    </>
  );
}

export default Input;
