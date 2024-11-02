import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.ini";
import { useState } from "react";
import LogInForn from "../Pages/LogInForn/LogInForn";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <div>
        <LogInForn></LogInForn>
      </div>
      <div className="mt-8 ml-8">
        <button
          onClick={handleGoogleSingIn}
          className="flex items-center justify-center"
        >
          <FaGoogle />
        </button>
        <button onClick={handleSingOut}>logout</button>

        {user && (
          <div>
            <h2>user: {user.displayName}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
