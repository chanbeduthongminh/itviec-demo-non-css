import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home/Home";
import Blue from "../pages/Blue/Blue";
import Green from "../pages/Green/Green";
import Red from "../pages/Red/Red";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  { path: "/blue-feature", component: Blue },
  { path: "/red-feature", component: Red },
  { path: "/green-feature", component: Green },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
