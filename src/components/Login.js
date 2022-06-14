import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Events from "./Events";
import { Link } from "react-router-dom";
import "../index.css";

function Login() {
  const clientId =
    "425736982623-7br81njloujarotr8rm6u6tgqa7s57eq.apps.googleusercontent.com";
  const [accessToken, setaccessToken] = useState();
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [email, setemail] = useState("");
  const [profilePhoto, setprofilePhoto] = useState("");
  const onLoginSuccess = (res) => {
    // console.log(res);
    setprofilePhoto(res.Ru.IN);
    // console.log(res.Ru.IN);
    setemail(res.Ru.tf);
    setaccessToken(res.accessToken);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();

    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(accessToken));
  }, [accessToken]);

  return (
    <div>
      {showloginButton ? (
        <div className="header">
          <h4 className="loginstatus">Please login to see events!</h4>

          <GoogleLogin
            className="header-btn-login"
            clientId={clientId}
            buttonText="Sign In"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      ) : null}

      {showlogoutButton ? (
        <div className="headerlg">
          <div className="header__left">
            {profilePhoto ? (
              <img
                className="USER_PHOTO"
                src={profilePhoto}
                alt="Profile picture loading"
              />
            ) : (
              <img
                className="USER_PHOTO"
                src={
                  "https://lh3.googleusercontent.com/a-/AOh14Gjm43oiqsd2UafN04-f9uBV93L2EUM0KSRJswG-=s96-c"
                }
                alt="User profile loading"
              />
            )}
            <h4 className="loginstatus">
              Hii 👋, <span className="user__email">{email} !</span>
            </h4>
          </div>
          <div className="header__right">
            <Link to="/import">
              <button className="import header-btn">Import</button>
            </Link>
            <GoogleLogout
              className="header-btn"
              clientId={clientId}
              buttonText="Sign Out"
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          </div>
        </div>
      ) : null}

      {showloginButton === false ? <Events access={accessToken} /> : ""}
    </div>
  );
}
export default Login;
