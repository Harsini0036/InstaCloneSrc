import { useEffect } from "react";
import Header from "../components/Header";

import Navbar from "../components/navbar/Navbar";
import useUser from "../hooks/useUser";

import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

function Notifications() {
  const {
    user: { username, fullname },
  } = useUser();
  useEffect(
    function () {
      document.title = `Instagram | Notifications`;
    },
    [fullname, username]
  );

  return (
    <div className="bg-gray-background">
      <Header />
      <Navbar />
      <div class="relative">
        <div class="absolute top-[60px] left-[30%] right-[20%] w-[50%] ">
          <div class="flex gap-[20px] flex-col ">
            <div>
              <div className="p-[10px] flex flex-col gap-[10px] items-center ">
                <h1 className="font-bold text-[30px]">Notifications</h1>
                <div className="flex gap-[20px] justify-between mt-3 pb-3 w-[250px] ">
                  <img
                    src="/images/avatars/user1.jpg"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-bold text-md">Follow requests</p>
                    <p className="text-sm">user1 + 2 others</p>
                  </div>
                </div>

                <div className="text-left w-[500px] mt-1 border-t border-black-light">
                  <p className="font-bold text-[20px]">Today</p>
                </div>
                <div className="flex gap-[20px] justify-between mt-3 w-[500px]">
                  <img
                    src="/images/avatars/default.png"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />

                  <p className="text-sm">
                    Your contact Jeya is on instagram as @jesya1123
                  </p>

                  <button class="bg-blue-light hover:bg-blue-medium w-[130px] font-bold text-sm px-[10px] py-[3px] rounded-lg text-gray-background">
                    Follow
                  </button>
                </div>

                <div className="text-left w-[500px] mt-1 border-t border-black-light">
                  <p className="font-bold text-[20px]">Last week</p>
                </div>
                <div className="flex gap-[20px] justify-between mt-3 w-[500px]">
                  <img
                    src="/images/avatars/default.png"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />

                  <p className="text-sm">
                    Your contact Neha is on instagram as @neha1123
                  </p>

                  <button class="bg-blue-light hover:bg-blue-medium w-[130px] font-bold text-sm px-[10px] py-[3px] rounded-lg text-gray-background">
                    Follow
                  </button>
                </div>
                <div className="flex gap-[20px] justify-between mt-3 w-[500px]">
                  <img
                    src="/images/avatars/user2.jpg"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />

                  <p className="text-sm">Neo requested to follow you</p>

                  <button class="bg-blue-light hover:bg-blue-medium w-[130px] font-bold text-sm  rounded-lg text-gray-background">
                    Confirm
                  </button>
                  <button class="bg-gray-base hover:bg-black-light w-[130px] font-bold text-sm  rounded-lg text-gray-background">
                    Delete
                  </button>
                </div>

                <div className="text-left w-[500px] mt-1 border-t border-black-light">
                  <p className="font-bold text-[20px]">Last Month</p>
                </div>
                <div className="flex gap-[20px] justify-between mt-3 w-[500px]">
                  <img
                    src="/images/avatars/default.png"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />

                  <p className="text-sm">
                    Your contact Neha is on instagram as @neha1123
                  </p>

                  <button class="bg-blue-light hover:bg-blue-medium w-[130px] font-bold text-sm px-[10px] py-[3px] rounded-lg text-gray-background">
                    Follow
                  </button>
                </div>
                <div className="flex gap-[20px] justify-between mt-3 w-[500px]">
                  <img
                    src="/images/avatars/user2.jpg"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />

                  <p className="text-sm">Neo requested to follow you</p>

                  <button class="bg-blue-light hover:bg-blue-medium w-[130px] font-bold text-sm  rounded-lg text-gray-background">
                    Confirm
                  </button>
                  <button class="bg-gray-base hover:bg-black-light w-[130px] font-bold text-sm  rounded-lg text-gray-background">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
