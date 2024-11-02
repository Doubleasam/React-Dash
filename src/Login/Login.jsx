import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.ini";
import { useState } from "react";
import LogInForn from "../Pages/LogInForn/LogInForn";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        navigate("/");
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  // const handleSingOut = () => {
  //   signOut(auth)
  //     .then((result) => {
  //       setUser(null);
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log("error", error.message);
  //     });
  // };
  return (
    <div>
      <div>
        <LogInForn></LogInForn>
      </div>
      <div className="flex items-center justify-center py-6">
        <button
          onClick={handleGoogleSingIn}
          className="flex items-center justify-center w-[40px] h-[40px] border border-[#262626] hover:bg-[#262626] hover:text-[#fff] duration-300 rounded-full"
        >
          <FaGoogle />
        </button>
        {/* <button onClick={handleSingOut}>logout</button>

        {user && (
          <div>
            <h2>user: {user.displayName}</h2>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Login;
