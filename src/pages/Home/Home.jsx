import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Home() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [profile, setProfile] = useState();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const handleFeaturesClick = (showImage, setShowImage) => {
    setShowImage(!showImage);
    // image ? setImage(false) : setImage(true);
  };

  const handleShowProfile = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/api/users/posts`, config)
      .then((response) => {
        const data = response.data;

        if (data.status === 1) {
          setProfile(JSON.stringify(data.user));
          // console.log(JSON.stringify(profile), "profile");
          setShowProfile(!showProfile);
          // alert(data.message);
        } else {
          setToken(localStorage.removeItem("token"));
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error(error.message);
        alert("An error occurred while signing innnnn");
      });
  };
  useEffect(() => {}, [token]);
  return (
    <div>
      <div>
        <h2>Home page</h2>
        {token ? (
          <button className={cx("logoutButton")} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/sign-in">
            <button className={cx("signInButton")}>Sign In</button>
          </Link>
        )}
      </div>
      {token && (
        <div>
          <div>
            <button
              className={cx("featuresButton")}
              onClick={() => handleFeaturesClick(showImage1, setShowImage1)}
            >
              Features only can use when login (login)
            </button>
            {showImage1 && (
              <div>
                <img
                  className={cx("featuresImage")}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCjqVf1rJwbakOXBlfk7zSiLNHgaI1V9NPg&usqp=CAU"
                  alt="An example image"
                />
              </div>
            )}
          </div>
          <div>
            <button
              className={cx("profile")}
              // onClick={() => handleFeaturesClick(showProfile, setShowProfile)}
              onClick={handleShowProfile}
            >
              Profile ( login)
            </button>

            {showProfile && (
              <div>
                <h1>{profile}</h1>
              </div>
            )}
          </div>
          <div>
            <button className={cx("profile")}>
              Features only can use when login (login + logout)
            </button>
          </div>
        </div>
      )}
      <div>
        <button
          className={cx("profile")}
          onClick={() => handleFeaturesClick(showImage2, setShowImage2)}
        >
          Feature can use without login (login + logout)
        </button>
        {showImage2 && (
          <div>
            <img
              className={cx("featuresImage")}
              src="data:image/jpeg;base64,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"
              alt="An example image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
