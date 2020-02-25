import React from 'react';

function TextArea(props) {
  
  let placeholder;
  if (props.placeholder) {
    placeholder = props.placeholder;
  } else {
    placeholder = "add new message...";
  }
  
    return (
        <textarea
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={props.refrence}
          cols={"60"}
          rows={"4"}
          wrap={"hard"}
          value={props.value}
          placeholder={placeholder}
        />
    );
}
export default TextArea;