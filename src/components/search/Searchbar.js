import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

function Searchbar() {
  return (
    <div class="input-group rounded">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search for posts, accounts, reels"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
}

export default Searchbar;
