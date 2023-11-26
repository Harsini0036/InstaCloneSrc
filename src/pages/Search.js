import { useEffect, useState } from "react";
import Header from "../components/Header";

import Navbar from "../components/navbar/Navbar";
import Searchbar from "../components/search/Searchbar";
import SearchResults from "../components/search/SearchResults";

function Explore() {
  useEffect(function () {
    document.title = "Instagram | Explore";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <Navbar />
      <div class="relative">
        <div class="fixed top-[100px] left-[30%] right-[20%] w-[50%] ">
          <Searchbar />
          <SearchResults />
        </div>
      </div>
    </div>
  );
}

export default Explore;
