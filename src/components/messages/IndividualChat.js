function IndividualChat({ username, fullname, lastMsg, lastSeen }) {
  return (
    <div className="p-[5px] flex cursor-auto hover:bg-gray-primary border-b border-black-faded">
      <div className="grid grid-cols-5 gap-4 mb-6 items-center">
        <div className="flex items-center justify-between col-span-1">
          <img
            src={`/images/avatars/${username}.jpg`}
            alt=""
            className="rounded-full w-11 h-11 flex"
          />
        </div>
        <div className="col-span-3">
          <p className="font-bold text-sm">{fullname}</p>
          <p className="text-sm">{lastMsg}</p>
        </div>
        <p className="font-semibold text-sm">{lastSeen}</p>
      </div>
    </div>
  );
}

export default IndividualChat;
