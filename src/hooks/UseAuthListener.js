import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

function UseAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(
    function () {
      const listener = firebase.auth().onAuthStateChanged((authUser) => {
        //if we have user...we can store user in localstore
        if (authUser) {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          setUser(authUser);
        } else {
          //else we don't have an authUser, therefore clear localstorage
          localStorage.removeItem("authUser");
          setUser(null);
        }
      });

      return () => listener();
    },
    [firebase]
  );
  return { user };
}

export default UseAuthListener;
