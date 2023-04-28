import classNames from "classnames/bind";
import styles from "./Blue.module.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Blue() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchByTitleResult, setSearchByTitleResult] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchPost = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/api/jobs?title=${searchQuery}`
    );
    setSearchResult(data.data);
  };
  //   const handleSearchPost = async (event) => {
  //     setSearchQuery(event.target.value);
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_BACKEND_API}/api/jobs?title=${searchQuery}`
  //     );
  //     setSearchResult(data.data);
  //   };
  const handleFilter = async (value) => {
    console.log(value);
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/api/jobs?skills=${value}`
    );
    setSearchByTitleResult(data.data);
  };
  const handleClear = () => {
    setSearchResult([]);
    setSearchByTitleResult([]);
    setSearchQuery("");
  };
  return (
    <div>
      <h1 className={cx("h1")}>
        Đây là trang tính năng có thể sử dụng mà không cần đăng nhập (hiển thị ở
        cả lúc đăng nhập và chưa đăng nhập)
      </h1>
      <div className={cx("div-1")}>
        <h2 className={cx("header")}>1, Tìm kiếm theo title bài post</h2>
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            //   onChange={(event) => handleSearchPost(event)}
            className={cx("searchInput")}
          />
        </div>
        <button className={cx("featuresButton")} onClick={handleSearchPost}>
          Search
        </button>

        <div className={cx("div-result")}>
          {searchResult && searchResult.map((s) => <li>{s.title}</li>)}
        </div>
      </div>
      <div className={cx("div-2")}>
        <h2 className={cx("header")}>2, Bộ lọc - filter các bài post</h2>
        <div>
          <button
            className={cx("featuresButton")}
            onClick={(event) => handleFilter(event.target.value)}
            value="Java"
          >
            Java
          </button>{" "}
          <button
            className={cx("featuresButton")}
            onClick={(event) => handleFilter(event.target.value)}
            value="Python"
          >
            Python
          </button>{" "}
          <button
            className={cx("featuresButton")}
            onClick={(event) => handleFilter(event.target.value)}
            value="SQL"
          >
            SQL
          </button>
        </div>
        <div className={cx("div-result")}>
          {searchByTitleResult &&
            searchByTitleResult.map((s) => <li>{s.title}</li>)}
        </div>
      </div>
      <div>
        <button className={cx("test-home-button")} onClick={handleClear}>
          Xóa tất cả bộ lọc
        </button>
      </div>

      <div>
        <Link to="/">
          <button className={cx("test-home-button")}>Trang chủ</button>
        </Link>
      </div>
    </div>
  );
}

export default Blue;
