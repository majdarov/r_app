import React from "react";
import TextArea from "../../TextArea/TextArea";
import { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = props => {
  let textarea;
  let newDescriptionRef = React.createRef();

  const [showTxt, setShowTxt] = useState(false);

  useEffect(() => {
    if (showTxt) {
      newDescriptionRef.current.focus();
    }
    return;
  });

  if (showTxt) {
    let divTxt = props.profilePage.profileDescription;
    textarea = (
      <TextArea
        refrence={newDescriptionRef}
        placeholder={divTxt}
        onBlur={txtAreaFocusOut}
        onKeyDown={onEnter}
        // cols={"60"}
        // wrap={"hard"}
      />
    );
  } else {
    textarea = null;
  }

  function onEnter(e) {
    if (e.key === "Enter") {
      e.target.value += "<br>"
      e.target.rows += 1;
      // console.log(e.target.value);
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      if (!e.target.value.trim().length) {
        e.target.rows -= 1;
      }
    }
  }

  function editDescription(e) {
    e.currentTarget.setAttribute("disabled", true);
    setShowTxt(true);
  }

  function txtAreaFocusOut(e) {
    let description = e.target.value;
    if (description.trim().length) {
      let conf = window.confirm("Save changes?");
      if (conf) {
        props.updateDescription(description.trim());
      }
    }
    setShowTxt(false);
    document
      .querySelector("[class*='descriptionBlock'] button")
      .removeAttribute("disabled");
  }

  return <ProfileInfo 
      description={props.profilePage.profileDescription}
      onClick={editDescription}
      textarea={textarea}
    /> 
};

export default ProfileInfoContainer;
