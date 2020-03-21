import React from "react";
import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ user, path, setUser }) => {

  return (
    <div className={s.dialog}>
      <NavLink
        to={path}
        activeClassName={s.active}
        onClick={() => setUser(user.id)}
      >
        <div className={s.image}>
          <img src={"/img/" + user.photo} alt="..." />
        </div>
        {user.name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
