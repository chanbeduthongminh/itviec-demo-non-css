import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";
import axios from "axios";
import React, { useState } from "react";

const cx = classNames.bind(styles);

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { username, email, password };

    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/api/users/sign-up`, formData)
      .then((response) => {
        if (response.data.status === 1) {
          console.log(response.data);
          setSuccess(true);
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
    alert("Đăng ký thành công");
    window.location.href = "/sign-in";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={cx("form-row")}>
          <label htmlFor="username" className={cx("form-label")}>
            Username:
          </label>
          <div className={cx("form-input")}>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={cx("form-row")}>
          <label htmlFor="email" className={cx("form-label")}>
            Email:
          </label>
          <div className={cx("form-input")}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={cx("form-row")}>
          <label htmlFor="password" className={cx("form-label")}>
            Password:
          </label>
          <div className={cx("form-input")}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <Link to="/">
          <button className={cx("test-home-button")}>Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
