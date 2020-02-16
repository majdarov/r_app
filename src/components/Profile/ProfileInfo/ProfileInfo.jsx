import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = props => {
  return (
    <div>
      <div className={s.image}>
        {/* <img src="https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$" alt="..."/> */}
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;