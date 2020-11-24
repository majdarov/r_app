import React from 'react';
import s from './Input.module.css';

function Input({ input, meta, ...props }) {

  let error = meta.error && meta.touched;

  return (
    <div>
      <div className={s.formControl + ' ' + (error ? s.error : '')}>
        <input {...input} {...props}/>
      </div>
      <div className={s.warning}>
        {error && <span>{meta.error}</span>}
      </div>
    </div>
  );
}
export default Input;
