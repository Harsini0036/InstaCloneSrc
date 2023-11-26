import { useEffect, useState } from "react";
import Header from "../components/Header";

import Navbar from "../components/navbar/Navbar";
import useUser from "../hooks/useUser";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

const styleForPaper = {
  width: "8vw",
  height: "8vh",

  display: "inline-block",
};

function Profile() {
  const {
    user: { username, fullname },
  } = useUser();
  useEffect(
    function () {
      document.title = `${fullname} (@${username}) | Instagram`;
    },
    [fullname, username]
  );

  return (
    <div className="bg-gray-background">
      <Header />
      <Navbar />
      <div class="relative">
        <div class="absolute top-[100px] left-[30%] right-[20%] w-[50%] ">
          <div class="grid grid-cols-3 gap-4 ">
            <div class="col-span-3 flex gap-[100px] pb-[40px] border-b border-black-faded">
              <img
                src={`/images/avatars/${username}.jpg`}
                alt=""
                className="rounded-full w-[150px] h-[150px] flex mr-5"
              />
              <div className="flex flex-col gap-[15px] ">
                <div className="flex gap-[50px] items-left justify-between">
                  <span className="font-bold text-lg">{username}</span>
                  <span>
                    <button className="rounded-lg bg-blue-light text-gray-background py-1.5 px-2.5 text-sm hover:bg-blue-medium">
                      Edit profile
                    </button>
                  </span>
                  <span>
                    <HexagonOutlinedIcon />
                  </span>
                </div>

                <div className="flex gap-[50px] items-center justify-between">
                  <span className="font-semibold text-lg">0 posts</span>
                  <span className="font-semibold text-lg">3 followers</span>
                  <span className="font-semibold text-lg">5 following</span>
                </div>
                <p className="font-bold text-lg">{fullname}</p>
              </div>
            </div>
            <div className="col-span-3 text-center ">
              <div className="flex w-[65%] mx-[35%] gap-[60px]">
                <button className="hover:bg-gray-primary py-1.5 px-2.5 rounded-lg">
                  <span className="font-semibold mr-[10px]">
                    <AddBoxOutlinedIcon />
                  </span>
                  Posts
                </button>
                <button className="hover:bg-gray-primary py-1.5 px-2.5 rounded-lg">
                  <span className="font-semibold mr-[10px]">
                    <SaveAltOutlinedIcon />
                  </span>
                  Saved
                </button>
                <button className="hover:bg-gray-primary py-1.5 px-2.5 rounded-lg">
                  <span className="font-semibold mr-[10px]">
                    <TagOutlinedIcon />
                  </span>
                  Tagged
                </button>
              </div>
            </div>
            <div className="col-span-3 text-center">
              <div className="p-[20px] flex flex-col gap-[10px] items-center">
                <AddAPhotoOutlinedIcon style={styleForPaper} />
                <p className="font-bold text-[30px] text-black-light">
                  Share Photos
                </p>
                <p>When you share photos, they will appear on your profile.</p>
                <p className="text-blue-light text-sm">
                  Share your first photo
                </p>
                <button class="bg-blue-light hover:bg-blue-medium w-[130px] font-bold text-sm p-2 rounded-lg text-gray-background">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
