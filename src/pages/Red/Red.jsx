import classNames from "classnames/bind";
import styles from "./Red.module.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Red() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [success, setSuccess] = useState(false);

  const formData = { oldPassword, newPassword, confirmNewPassword };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmNewPassword !== newPassword) {
      alert("Mật khẩu xác nhận không giống nhau");
      return;
    }
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}/api/users/change-password`,
        formData,
        config
      )
      .then((response) => {
        if (response.data.status === 1) {
          // console.log(response.data);
          setSuccess(true);
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
        // handle success response
      })
      .catch((error) => {
        console.error(error);
        // handle error response
      });
  };
  if (success) {
    window.location.href = "/";
  }
  return (
    <div>
      <h1 className={cx("h1")}>
        Tính năng chỉ có thể dùng sau khi đăng nhập (chỉ hiển thị sau khi đăng
        nhập)
      </h1>
      <div className={cx("div-1")}>
        <h2 className={cx("header")}>1, Đổi mật khẩu</h2>
        <form onSubmit={handleSubmit}>
          <div className={cx("form-row")}>
            <label htmlFor="password" className={cx("form-label")}>
              Mật khẩu cũ:
            </label>
            <div className={cx("form-input")}>
              <input
                type="password"
                id="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={cx("form-row")}>
            <label htmlFor="password" className={cx("form-label")}>
              Mật khẩu mới:
            </label>
            <div className={cx("form-input")}>
              <input
                type="password"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={cx("form-row")}>
            <label htmlFor="password" className={cx("form-label")}>
              Xác nhận:
            </label>
            <div className={cx("form-input")}>
              <input
                type="password"
                id="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button className={cx("featuresButton")} type="submit">
            Đổi mật khẩu
          </button>
        </form>
      </div>
      <div>
        <Link to="/">
          <button className={cx("test-home-button")}>Trang chủ</button>
        </Link>
      </div>
    </div>
  );
}

export default Red;
