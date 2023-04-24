import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SignIn.module.scss";
// import { useState } from "react";
// import axios from "axios";
import FormWSignIn from "../../components/Form";

const cx = classNames.bind(styles);

function SignIn() {
  return (
    <div>
      <FormWSignIn />
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
}

export default SignIn;
