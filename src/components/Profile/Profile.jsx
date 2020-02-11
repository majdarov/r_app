import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
  return (
    <div>
      <div className={s.image}>
        {/* <img src="https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$" alt="..."/> */}
      </div>
      <div>
        ava + description
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
}

export default Content;