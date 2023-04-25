import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";
// import { useState } from "react";
// import axios from "axios";
import FormWSignIn from "../../components/Form";

const cx = classNames.bind(styles);

function SignIn() {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/";
  }
  return (
    // {token? }
    <div>
      <FormWSignIn />
      <div>
        <Link to="/sign-up">
          <button className={cx("test-button")}> Đăng ký</button>
        </Link>
      </div>
      <div>
        <Link to="/">
          <button className={cx("test-home-button")}>Trang chủ</button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
