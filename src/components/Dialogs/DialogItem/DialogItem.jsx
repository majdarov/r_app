import React from "react";
import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { setCurrentUserAC } from "../../../redux/dialogsReduser";

const DialogItem = props => {
  let path = "/dialogs/" + props.user.id;

  function setUser(id) {
    props.dispatch(setCurrentUserAC(id));
  }

  return (
    <div className={s.dialog}>
      <NavLink
        to={path}
        activeClassName={s.active}
        onClick={() => setUser(props.user.id)}
      >
        <div className={s.image}>
          <img src={"/img/" + props.user.photo} alt="..." />
        </div>
        {props.user.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
