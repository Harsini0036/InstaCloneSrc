import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePhotos from "../hooks/usePhotos";
import Post from "./post";
import StoryOutline from "./story/StoryOutline";
function Timeline() {
  //get photos of logged in user
  const { photos } = usePhotos();
  //console.log(photos);
  // on loading photos use react skeleton
  // if we get photos, render them (post components - pics and comments)

  return (
    <div className="container col-span-2">
      <>
        <StoryOutline />
        {!photos ? (
          <>
            {[...new Array(4)].map((item, index) => (
              <Skeleton
                key={index}
                count={4}
                widht={500}
                height={300}
                className="mb-5 ml-3.5"
              />
            ))}
          </>
        ) : photos?.length > 0 ? (
          photos.map((content) => (
            <Post key={content.docId} content={content} />
          ))
        ) : (
          <p className="text-center text-2xl">Follow people to see posts!</p>
        )}
      </>
    </div>
  );
}

export default Timeline;
