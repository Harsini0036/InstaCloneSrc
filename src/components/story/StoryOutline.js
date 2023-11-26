import IndividualStory from "./IndividualStory";

const stories = ["user1", "user2", "user3", "raphael", "dali", "user3"];

function StoryOutline() {
  return (
    <div className=" px-5 py-3 flex gap-4">
      {stories.map((story, index) => (
        <IndividualStory username={story} />
      ))}
    </div>
  );
}

export default StoryOutline;
