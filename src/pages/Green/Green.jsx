import classNames from "classnames/bind";
import styles from "./Green.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Green() {
  return (
    <div>
      <h1 className={cx("h1")}>
        Tính năng chỉ có thể dùng sau khi đăng nhập (hiển thị ở cả lúc đăng nhập
        và chưa đăng nhập)
      </h1>

      <div>
        <Link to="/">
          <button className={cx("test-home-button")}>Trang chủ</button>
        </Link>
      </div>
    </div>
  );
}

export default Green;
