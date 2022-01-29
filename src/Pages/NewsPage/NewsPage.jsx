import React from "react";
import style from "./NewsPage.module.css";
import svg1 from "./../../assets/svg/svg2.svg";
import svg2 from "./../../assets/svg/svg1.svg";
import search from "../../assets/svg/search.svg";
import NewsBox from "../../components/NewsBox/NewsBox";
import pic1 from "../../assets/pics/1.jpg";
import pic2 from "../../assets/pics/2.jpg";
import pic3 from "../../assets/pics/3.jpg";
import pic4 from "../../assets/pics/4.jpg";
import pic5 from "../../assets/pics/5.jpg";
import pic6 from "../../assets/pics/6.jpg";
import pic7 from "../../assets/pics/7.jpg";
import pic8 from "../../assets/pics/8.jpg";
import pic9 from "../../assets/pics/9.jpg";
import pic10 from "../../assets/pics/10.jpg";

import BlogsHeader from "../../components/BlogsHeader/BlogsHeader";

const NewsPage = () => {
  return (
    <div className={style.container}>
      <img src={svg1} className={style.svg1} alt="" />
      <img src={svg2} className={style.svg2} alt="" />

      <div className={style.title}>Latest News</div>
      <div className={style.latest}>
        <NewsBox
          width={"50%"}
          height={"65vh"}
          pic={pic1}
          date={" 20-02-2001"}
          category={"Projects "}
        ></NewsBox>
        <div className={style.second}>
          <NewsBox
            width={"70%"}
            height={"30vh"}
            size={"small"}
            pic={pic2}
            date={"20-02-2001"}
            category={"projects projects"}
          ></NewsBox>
          <NewsBox
            width={"70%"}
            height={"30vh"}
            pic={pic3}
            size={"small"}
            date={"20-02-2001"}
            category={"projects projects"}
          ></NewsBox>
        </div>
      </div>
      <div className={style.secondPart}>
        <div className={style.header}>
          <BlogsHeader></BlogsHeader>
        </div>
        <div className={style.filter}>
          <div class={style.searchBar}>
            <input type="text" placeholder="Search anything .." />

            <button type="submit">
              <img className={style.search} src={search} alt="" />
            </button>
          </div>
          <div className={style.filterBar}>
            <select name="filter" id="filter">
              <option value="new">new first</option>
              <option value="old">old first</option>

            </select>
          </div>
        </div>
        <div className={style.containerBlogs}>
          <NewsBox
            width={"40%"}
            height={"55vh"}
            pic={pic3}
            date={" 20-02-2001"}
            category={"Projects "}
            red={true}
          ></NewsBox>
          <NewsBox
            width={"40%"}
            height={"55vh"}
            pic={pic4}
            date={" 20-02-2001"}
            category={"Projects "}
            red={true}
          ></NewsBox>
          <NewsBox
            width={"40%"}
            height={"55vh"}
            pic={pic1}
            date={" 20-02-2001"}
            category={"Projects "}
            red={true}
          ></NewsBox>
          <NewsBox
            width={"40%"}
            height={"55vh"}
            pic={pic2}
            date={" 20-02-2001"}
            category={"Projects "}
            red={true}
          ></NewsBox>
          <NewsBox
            width={"40%"}
            height={"55vh"}
            pic={pic3}
            date={" 20-02-2001"}
            category={"Projects "}
            red={true}
          ></NewsBox>
          <NewsBox
            width={"40%"}
            height={"55vh"}
            pic={pic4}
            date={" 20-02-2001"}
            category={"Projects "}
            red={true}
          ></NewsBox>
          <NewsBox
            width={"40%"}
            height={"55vh"}
            pic={pic3}
            date={" 20-02-2001"}
            category={"Projects "}
            red={true}
          ></NewsBox>
          <NewsBox
            width={"40%"}
            height={"55vh"}
            pic={pic1}
            date={" 20-02-2001"}
            category={"Projects "}
            red={true}
          ></NewsBox>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
