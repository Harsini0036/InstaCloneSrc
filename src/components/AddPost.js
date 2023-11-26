import { useEffect } from "react";
import Header from "../components/Header";

import Navbar from "../components/navbar/Navbar";

import AddAPhotoOutlined from "@mui/icons-material/AddAPhotoOutlined";

const styleForPaper = {
  width: "12vw",
  height: "12vh",
  color: "white",
  display: "inline-block",
};

function AddPost() {
  useEffect(function () {
    document.title = "Instagram | Add-Post";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <Navbar />
      <div class="relative">
        <div class="fixed top-[100px] left-[30%] right-[20%] w-[50%] ">
          <div className="flex flex-col justify-center items-center h-[80vh]">
            <div className="flex flex-col items-center h-[500px] w-[500px] bg-black-light rounded-[30px]">
              <p className="text-gray-background text-md font-bold my-2">
                Create new Post
              </p>
              <div className="p-[20px] flex flex-col gap-[10px] items-center justify-center h-[400px]">
                <AddAPhotoOutlined style={styleForPaper} />

                <p className="text-gray-background text-lg">
                  Drag photos and videos here
                </p>

                <button class="bg-blue-light hover:bg-blue-medium w-auto font-bold text-sm p-2 rounded-lg text-gray-background">
                  Select from computer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
