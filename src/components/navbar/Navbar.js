import React, { useState } from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import AddPost from "../AddPost";

function Navbar({ handleSearch }) {
  const {
    user: { username },
  } = useUser();
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="border-r border-black-faded">
      <div className="sidenav">
        <img
          className="sidenav__logo"
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt="Instagram Logo"
        />
        <div className="sidenav__buttons">
          <button
            className="sidenav__button"
            onClick={() => {
              navigate("/");
            }}
          >
            <HomeIcon />
            <span className="">Home</span>
          </button>
          <button
            className="sidenav__button"
            onClick={() => {
              navigate("/search");
            }}
          >
            <SearchIcon />
            <span>Search</span>
          </button>
          <button
            className="sidenav__button"
            onClick={() => {
              navigate("/explore");
            }}
          >
            <ExploreIcon />
            <span>Explore</span>
          </button>
          <button className="sidenav__button">
            <SlideshowIcon />
            <span>Reels</span>
          </button>
          <button
            className="sidenav__button"
            onClick={() => {
              navigate("/messages");
            }}
          >
            <ChatIcon />
            <span>Messages</span>
          </button>
          <button
            className="sidenav__button"
            onClick={() => {
              navigate("/notifications");
            }}
          >
            <FavoriteBorderIcon />
            <span>Notifications</span>
          </button>
          <button
            className="sidenav__button"
            onClick={() => navigate("/add-post")}
          >
            <AddCircleOutlineIcon />
            <span>Create</span>
          </button>
          <button
            className="profile"
            onClick={() => {
              navigate(`/p/:${username}`);
            }}
          >
            <img
              src={`/images/avatars/${username}.jpg`}
              alt=""
              className="rounded-full w-12 h-12 flex mr-3"
            />
          </button>
          <button>
            <div className="sidenav__more">
              <button className="sidenav__button">
                <MenuIcon />
                <span className="sidenav__buttonText">More</span>
              </button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
