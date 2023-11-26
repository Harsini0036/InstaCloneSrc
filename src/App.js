import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseAuthListener from "./hooks/UseAuthListener";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import * as ROUTES from "./constants/routes";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import UserContext from "./context/user";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import AddPost from "./components/AddPost";

function App() {
  const { user } = UseAuthListener();
  return (
    <div>
      <UserContext.Provider value={{ user }}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.SEARCH} element={<Search />} />
            <Route path={ROUTES.EXPLORE} element={<Explore />} />
            <Route path={ROUTES.MESSAGES} element={<Messages />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.NOTIFICATION} element={<Notifications />} />
            <Route path={ROUTES.ADDPOST} element={<AddPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
