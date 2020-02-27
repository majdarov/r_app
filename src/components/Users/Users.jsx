import React from "react";
import News from "./News/News";
import s from "./Users.module.css";

const Users = props => {
  let childElements = [];

  for (let i = 0; i < 18; i++) {
    const element = <News index={i + 1} key={i} />;
    childElements.push(element);
  }

  return (
    <div className={s.page}>
      <h1>LATEST NEWS</h1>
      <div className={s.archive}>{childElements}</div>
    </div>
  );
};

export default Users;
