import IndividualChat from "./IndividualChat";

const chats = [
  {
    username: "user1",
    fullname: "Rita Ryan",
    lastmsg: "Okay bye Ryan",
    lastseen: "12h",
  },
  {
    username: "dali",
    fullname: "Salvador Dali",
    lastmsg: "Done dali!",
    lastseen: "2d",
  },
  {
    username: "user4",
    fullname: "Sita Raj",
    lastmsg: "Tc Sita",
    lastseen: "1w",
  },
  {
    username: "raphael",
    fullname: "Raphael Sanzio",
    lastmsg: "See you soon!",
    lastseen: "3w",
  },
  {
    username: "user2",
    fullname: "Nia Kane",
    lastmsg: "Bye ❣",
    lastseen: "6w",
  },
];
function Chats() {
  return (
    <div className="m-[3px]">
      {chats.map((chat) => (
        <IndividualChat
          username={chat.username}
          fullname={chat.fullname}
          lastMsg={chat.lastmsg}
          lastSeen={chat.lastseen}
        />
      ))}
    </div>
  );
}

export default Chats;
