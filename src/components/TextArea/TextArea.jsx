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
          onKeyDown={props.onKeyDown}
          ref={props.refrence}
          // cols={props.cols}
          // rows={"4"}
          wrap={"hard"}
          value={props.value}
          placeholder={placeholder}
          autoFocus
        />
    );
}
export default TextArea;