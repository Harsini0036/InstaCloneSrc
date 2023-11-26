import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import { useState, useContext, useEffect } from "react";
import * as ROUTES from "../constants/routes";
function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate(ROUTES.DASHBOARD);
    } catch (err) {
      setEmail("");
      setPassword("");
      setError(err.message);
    }
  }

  useEffect(function () {
    document.title = "Login-Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt=""
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div
          className="flex flex-col items-center bg-white basis-4
        border border-gray-primary mb-4 p-4 rounded"
        >
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form action="" onSubmit={handleLogin} method="POST">
            <input
              type="text"
              aria-label="Enter your email address"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-4 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <input
              type="password"
              aria-label="Enter your email password"
              placeholder="Email password"
              className="text-sm text-gray-base w-full mr-3 py-4 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary rounded">
          <p className="text-sm">
            Don't have an account? {``}
            <Link to="/signup" className="font-bold text-blue-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
