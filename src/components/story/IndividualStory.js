function IndividualStory({ username }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <img
        src={`/images/avatars/${username}.jpg`}
        alt=""
        className="rounded-full w-14 h-14 flex mr-3 border-[3px] border-red-primary transition-all duration-300  hover:scale-125"
      />
      <p className="font-semibold text-sm">{username}</p>
    </div>
  );
}

export default IndividualStory;
