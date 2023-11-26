import PropTypes, { func } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  updateFollowedUserFollowers,
  updateLoggedInUserFollowing,
} from "../../services/firebase";

function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);
  // console.log(loggedInUserDocId, profileDocId, profileId, userId);

  async function handleFollowUser() {
    setFollowed(true);
    //update following array of logged in user
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, followed);
    // update followers of user in firebase
    await updateFollowedUserFollowers(profileDocId, userId, followed);
  }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/karl.jpg`;
          }}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium hover:text-blue-light"
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}

export default SuggestedProfile;

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
