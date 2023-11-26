import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(
    function () {
      //we need a function to get user id from firebase by Id
      async function getUserObjByUserId() {
        const [response] = await getUserByUserId(user.uid);
        setActiveUser(response);
      }

      if (user?.uid) {
        getUserObjByUserId();
      }
    },
    [user]
  );

  return { user: activeUser };
}

export default useUser;
