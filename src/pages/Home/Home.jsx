import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      <div>
        <h2>Home page</h2>
        <Link to="/sign-in">
          <button className={cx("signInButton")}>Sign In</button>
        </Link>
      </div>
      <div>
        <button className={cx("featuresButton")}>
          Features only can use when login
        </button>
      </div>
    </div>
  );
}

export default Home;
