import React, { useState } from 'react';
import style from './NewsBox.module.css'
const NewsBox = ({width , height , pic , size , date , category , red}) => {
    const [active, setactive] = useState(false);
    return (
      <div
      style={{"width":width,"height":height}}
        onMouseEnter={() => setactive(true)}
        onMouseLeave={() => setactive(false)}
        className={`${style.container} ${size=="small" ? style.smallContainer : ""}`}
      >
        <div className={style.containerimage}>
       <img
            className={`${style.img} ${active ? style.activeimg : ""}`}
           src={pic}
            alt=""
          />
        </div>
       
       <div className={`${style.moreinfo} ${active ? style.active : ""} ${size=="small" ? style.smallMoreInfo : ""}`}>
       <div className={style.date}><div>Date posted :</div> <div> {date}</div> </div>
        
         <div className={style.category}> <div>Category :</div> <div> {category}</div> </div>

       </div>
       <div className={`${style.info } ${size=="small" ? style.smallInfo : ""}`}>
         <div className={`${style.title} ${size=="small" ? style.small : ""}`}>
      Forum Entreprise Insat
         </div>
         <div className={`${style.viewMore} ${size=="small" ? style.smallMore : ""} ${red? style.red : ""}`} >
      View More
         </div>

       </div>


     
       
  
      </div>
    )};

export default NewsBox;
