import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getPhotos, getUserByUserId } from "../services/firebase";

function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(
    function () {
      async function getTimelinePhotos() {
        const [{ following }] = await getUserByUserId(userId);
        let followedUserPhotos = [];
        //console.log("following", following, "userId", userId);

        if (following.length > 0) {
          followedUserPhotos = await getPhotos(userId, following);
          //setPhotos(followedUserPhotos);
          //console.log("followedUserPhoto", followedUserPhotos);
        }

        //recent photos first
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }

      getTimelinePhotos();
    },
    [userId]
  );

  return { photos };
}

export default usePhotos;
