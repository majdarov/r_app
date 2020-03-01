import React from "react";
import s from "./Muzik.module.css";
import { useState } from "react";

const Muzik = props => {
  
  const [text, setText] = useState("");

  function changeText(e) {
    let txt = e.currentTarget.value;
    setText(txt);
    document.getElementById("div").innerHTML = txt;
  }

  return (
    <div>
      <div className={s.item}>{props.title}</div>
      <div className={s.container}>
        <div className={s.textdiv}>
          <textarea 
            className={s.text} 
            cols={50}
            rows={15}
            value={text} 
            onChange={changeText}>
            {text}
          </textarea>
        </div>
        <div className={s.result} id="div"></div>
      </div>
    </div>
  );
};

export default Muzik;
