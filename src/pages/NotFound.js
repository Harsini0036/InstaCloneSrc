import { useEffect } from "react";

function NotFound() {
  useEffect(function () {
    document.title = "Not Found ";
  }, []);
  return (
    <div className="bg-gray-background">
      <div className="mx-auth max-w-screen-lg">
        <p className="text-center text-2xl font-semibold">Not Found!</p>
      </div>
    </div>
  );
}

export default NotFound;
