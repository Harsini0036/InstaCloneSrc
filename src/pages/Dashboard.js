import { useEffect, useState } from "react";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Sidebar from "../components/sidebar/index";
import Navbar from "../components/navbar/Navbar";
import StoryOutline from "../components/story/StoryOutline";

function Dashboard() {
  useEffect(function () {
    document.title = "Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <Navbar />
      <div className="h-[60px]"></div>

      {/*  <div class="static mt-[0px] ml-[249px]">
        <StoryOutline />
      </div> */}

      <div className=" grid grid-cols-3 gap-5 justify-between mx-auto max-w-screen-lg  border-l-2 border-black-faded  pl-10 mt-[0px]">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
