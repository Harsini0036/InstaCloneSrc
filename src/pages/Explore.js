import { useEffect, useState } from "react";
import Header from "../components/Header";

import Navbar from "../components/navbar/Navbar";

function Explore() {
  useEffect(function () {
    document.title = "Instagram | Explore";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <Navbar />

      <div class="relative">
        <div class="absolute top-[100px] left-[20%] right-[10%] w-[75%] ">
          <div class="grid grid-cols-4 gap-[10px]">
            <div>
              <img
                src="images/explore/1.jpg"
                alt=""
                className="w-full h-[400px]"
              />
            </div>
            <div class="col-span-2">
              <img
                src="images/explore/7.jpg"
                alt=""
                className="w-full h-[410px]"
              />
            </div>
            <div class="">
              <img
                src="images/explore/3.jpg"
                alt=""
                className="w-full h-[380px]"
              />
            </div>
            <div class="col-span-2 ...">
              <img
                src="images/explore/8.jpg"
                alt=""
                className="w-full h-[400px]"
              />
            </div>
            <div class="...">
              <img
                src="images/explore/5.jpg"
                alt=""
                className="w-full h-[400px]"
              />
            </div>
            <div class="...">
              <img
                src="images/explore/2.jpg"
                alt=""
                className="w-full h-[400px]"
              />
            </div>
            <div class="col-span-1 ...">
              <img
                src="images/explore/4.jpg"
                alt=""
                className="w-full h-[400px]"
              />
            </div>
            <div class="col-span-3 ...">
              <img
                src="images/explore/9.jpg"
                alt=""
                className="w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
