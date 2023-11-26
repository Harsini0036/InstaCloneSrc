import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { memo } from "react";

const User = ({ username, fullname }) => {
  console.log(username);
  return !username || !fullname ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          src={`/images/avatars/${username}.jpg`}
          alt=""
          className="rounded-full w-12 h-12 flex mr-3"
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullname}</p>
      </div>
    </Link>
  );
};

export default memo(User);
User.propTypes = {
  username: PropTypes.string,
  fullname: PropTypes.string,
};

User.whyDidYouRender = true;
