import classNames from "classnames/bind";
import styles from "./Form.module.scss";
import { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function FormWSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { username, password };
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/api/users/sign-in`, formData)
      .then((response) => {
        const data = response.data;
        if (data.status === 1) {
          alert(response.data.message);
          // lưu item token vào localstorage để dùng
          localStorage.setItem("token", data.token.accessToken);
          setSuccess(true);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while signing in");
      });
  };

  if (success) {
    window.location.href = "/";
  }
  return (
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
      <button type="submit">Sign In</button>
    </form>
  );
}

export default FormWSignIn;
