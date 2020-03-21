import React from 'react';
import { connect } from 'react-redux';
import TextArea from '../../TextArea/TextArea';
import { toggleShowTxtAC, setProfileDesriptionAC } from '../../../redux/profileReduser';

let newDescriptionRef = React.createRef();

function onEnter(e) {
  if (e.key === "Enter") {
    e.target.value += "<br>"
    e.target.rows += 1;
  }
  if (e.key === "Delete" || e.key === "Backspace") {
    if (!e.target.value.trim().length) {
      e.target.rows -= 1;
    }
  }
}

const mapState = state => {
  return {
    placeholder: state.profilePage.profileDescription,
    refrence: newDescriptionRef
  }
}

const mapDispatch = dispatch => {
  return {
    onKeyDown: onEnter,
    onBlur: e => {
      let description = e.target.value;
      if (description.trim().length) {
        let conf = window.confirm("Save changes?");
        if (conf) {
          dispatch(setProfileDesriptionAC(description));
        }
      }
      dispatch(toggleShowTxtAC(false));
      document
        .querySelector("[class*='descriptionBlock'] button")
        .removeAttribute("disabled");
    }
  }
}

const TextAreaContainer = connect(mapState, mapDispatch)(TextArea);

export default TextAreaContainer;