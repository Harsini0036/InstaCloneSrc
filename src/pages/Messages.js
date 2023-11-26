import { useEffect } from "react";
import Header from "../components/Header";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";

import Navbar from "../components/navbar/Navbar";
import MessageHeader from "../components/messages/MessageHeader";
import Chats from "../components/messages/Chats";

const styleForPaper = {
  width: "8vw",
  height: "8vh",

  display: "inline-block",
};

function Messages() {
  useEffect(function () {
    document.title = "Instagram | Chats";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <Navbar />

      <div class="relative">
        <div class="absolute top-[60px] left-[15%] right-[10%] w-[75%] ">
          <div class="grid grid-cols-3 gap-[20px]">
            <div className=" border p-[20px] border-black-faded  h-[90vh]">
              <MessageHeader />
              <Chats />
            </div>
            <div className="col-span-2 p-[20px] flex flex-col justify-center items-center h-[90vh]">
              <div className="p-[20px] flex flex-col gap-[10px] items-center">
                <CommentRoundedIcon style={styleForPaper} />
                <p className="font-bold">Your messages</p>
                <p>Send private photos and messages to a friend or group</p>
                <button class="bg-blue-light hover:bg-blue-medium w-[130px] font-bold text-sm p-2 rounded-lg text-gray-background">
                  Send Messages
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
