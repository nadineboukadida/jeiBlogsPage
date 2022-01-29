import React, { useState } from 'react';
import style from './Header.module.css'
import './Header.css'
const Header = () =>  {
const [position, setposition] = useState(1);
const [currentposition, setcurrentposition] = useState(1);

const list = function (name, num) {
  return (
    <h3
      onMouseEnter={() => {
        console.log(currentposition);

        setposition(num);
      }}
      onClick={() => {
        setcurrentposition(num);
      }}
      onMouseOut={() => {
        setposition(currentposition);
      }}
      className={`${style.li} ${position == num ? style.active : ""}`}
    >
      {name}
    </h3>
  );
};
return (
  <div className={style.container}>
    <div className={style.list}>
    {list("Projects", 1)}
    {list("Events", 2)}
    {list("Articles", 3)}
    {list("Projects", 4)}
    {list("Projects", 5)}</div>
  </div>
);
};

export default Header;
