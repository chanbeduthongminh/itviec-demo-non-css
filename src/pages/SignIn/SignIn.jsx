import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function SignIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
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
      <div>
        <Link to="/sign-up">
          <button className={cx("test-button")}> Sign Up</button>
        </Link>
      </div>
      <div>
        <Link to="/">
          <button className={cx("test-home-button")}>Back Home</button>
        </Link>
      </div>
    </div>
  );
  // return (
  //   <div className={cx("wrapper")}>
  //     <div className={cx("input-wrapper")}>
  //       <span className={cx("name-item")}>Username</span>
  //       <input />
  //     </div>
  //     <div className={cx("input-wrapper")}>
  //       <span className={cx("name-item")}>Password</span>
  //       <input />
  //     </div>
  //     <div>
  //       <button className={cx("test-button")}> Sign In</button>
  //     </div>

  //     <div>
  //       <Link to="/">
  //         <button className={cx("test-home-button")}>Back Home</button>
  //       </Link>
  //     </div>
  //   </div>
  // );
}

export default SignIn;
