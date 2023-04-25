import axios from "axios";

function checkTokenValid(event) {
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
        alert(data.message);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error(error.message);
      alert("An error occurred while signing innnnn");
    });
}

module.exports = { checkTokenValid };
