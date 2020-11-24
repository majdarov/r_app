import React from 'react';
import s from './TextArea.module.css';

function TextArea({ input, meta, ...props }) {

  let error = meta.error && meta.touched;

  return (
    <div>
      <div className={s.formControl + ' ' + error ? s.error : ''}>
        <textarea {...input} {...props} />
      </div>
      <div className={s.warning}>
        {error && <span>{meta.error}</span>}
      </div>
    </div>
  );
}
export default TextArea;
