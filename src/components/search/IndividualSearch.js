import CloseRounded from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { Link } from "react-router-dom";

function IndividualSearch({ username, fullname }) {
  const [show, setShow] = useState(true);
  return show ? (
    <div className="grid grid-cols-4 gap-1 mb-6 items-center">
      <div className="flex col-span-3">
        <img
          src={`/images/avatars/${username}.jpg`}
          alt=""
          className="rounded-full w-12 h-12 flex mr-5"
        />
        <div className="flex flex-col gap-1.25">
          <p className="font-bold text-medium">{username}</p>
          <p className="text-sm">{fullname}</p>
        </div>
      </div>
      <div className="flex col-span-1">
        <button onClick={() => setShow((show) => !show)}>
          <CloseRounded />
        </button>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default IndividualSearch;
