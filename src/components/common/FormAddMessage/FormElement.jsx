import React from 'react';
import s from './FormElement.module.css';

const RenderElement = ({ input, elType, ...props }) => {

  switch (elType) {

    case 'textarea':
      return <textarea {...input} {...props} />;

    case 'input':
      return <input {...input} {...props} />;

    case 'checkbox':
      return <input type='checkbox' {...input} {...props} />;

    default:
      return <input {...input} {...props} />

  }
}

function FormElement({ input, meta, elType, ...props }) {

  let error = meta.error && meta.touched;

  return (
    <div>
      <div className={s.formControl + ' ' + (error ? s.error : '')}>
        <RenderElement {...input} {...props} elType={elType} />
      </div>
      <div className={s.warning}>
        {error && <span>{meta.error}</span>}
      </div>
    </div>
  );
}
export default FormElement;
