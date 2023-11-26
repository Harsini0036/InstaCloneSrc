import useUser from "../../hooks/useUser";
import User from "./User";
import Suggestions from "./Suggestions";
import { useState } from "react";

function Sidebar() {
  const {
    user: { docId, fullname, username, userId, following },
  } = useUser();
  //console.log(userId, following, docId);

  return (
    <div className="p-4">
      <User username={username} fullname={fullname} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}

export default Sidebar;
