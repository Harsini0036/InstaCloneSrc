import useUser from "../../hooks/useUser";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

function MessageHeader() {
  const {
    user: { username },
  } = useUser();
  console.log(username);
  return (
    <div className="p-2">
      <div className="flex items-center justify-between p-1">
        <p className="font-bold text-lg">{username} </p>
        <p className="text-lg">
          <CreateRoundedIcon />
        </p>
      </div>
      <div className="flex items-center justify-between mt-[10px] ">
        <p className="font-bold text-md">Messages </p>
        <p className="font-bold text-sm">Requests</p>
      </div>
    </div>
  );
}

export default MessageHeader;
