import React, { useState } from "react";
import "./style.css";
import logo from "./../../../src";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  getFirestore,
  doc,
  setDoc,
  swal,
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./../../config/Firebase";

export default function Index() {
  let [signInEmailData, setSignInEmailData] = useState({
    email: "",
    password: "",
  });

  const handleSignInEmailData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignInEmailData((prev) => {
      console.log(prev);
      return { ...prev, [name]: value };
    });
  };

  const signInGoogle = async () => {
    try {
      var provider = new GoogleAuthProvider();
      const result = await auth;
      await signInWithPopup(auth, provider);
      await addUserToDB();
      await swal("Congratulations!", "Loggined successfully!", "success");
    } catch (e) {
      console.log(e.message);
    }
  };
  const signInEmail = async () => {
    try {
      let email = signInEmailData.email;
      let password = signInEmailData.password;
      await createUserWithEmailAndPassword(auth, email, password);
      await addUserToDB();
      await swal("Congratulations!", "Loggined successfully!", "success");
    } catch (e) {
      console.log(e.message);
    }
  };
  const addUserToDB = async () => {
    const uid = auth.currentUser.uid;
    var userProfile = {
      email: "",
      name: "",
      photoURL: "",
      verification: "",
      lastSignIn: "",
      creationTime: "",
    };
    userProfile.email = auth.currentUser.email;
    userProfile.name = auth.currentUser.displayName;
    userProfile.photoURL = auth.currentUser.photoURL;
    userProfile.verification = auth.currentUser.emailVerified;
    userProfile.lastSignIn = auth.currentUser.lastSignInTime;
    userProfile.creationTime = auth.currentUser.creationTime;

    return setDoc(doc(db, "users", uid), userProfile);
  };

  return (
    <div>
      <div className="top">
        <p> Turo has launched in New York! Tap to explore cars. </p>
      </div>

      <div className="bootstrapNavbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="" id="navbarSupportedContent">
              <a className="navbar-brand mt-0 mt-lg-0" href="#">
                <img src="logo.png" height="30" alt="MDB Logo" loading="lazy" />
              </a>
            </div>

            <div className="d-flex align-items-center">
              <a className="text-reset me-3" href="#">
                <button className="becomeHost mx-2">Become a host</button>
              </a>

              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    className="fas fa-user-circle"
                    style={{ color: "#414143", fontSize: 25 }}
                  ></i>{" "}
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end loginDropDown"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#signupDiv"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#loginDiv"
                      href="#"
                    >
                      Log in
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-car" style={{ fontSize: 18 }}></i>{" "}
                      &nbsp;&nbsp; Become a host
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-key" style={{ fontSize: 18 }}></i>{" "}
                      &nbsp;&nbsp; How Turo works
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i
                        className="fas fa-headphones"
                        style={{ fontSize: 18 }}
                      ></i>{" "}
                      &nbsp;&nbsp; Contact support
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i
                        className="fas fa-file-contract"
                        style={{ fontSize: 18 }}
                      ></i>{" "}
                      &nbsp;&nbsp; Legal
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-tools" style={{ fontSize: 18 }}></i>{" "}
                      &nbsp;&nbsp; Host tools
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div id="signupDiv" className="modal signupModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="signupTitle">Sign up here!</h2>
              <i className="fas fa-times btnClose " data-bs-dismiss="modal"></i>
            </div>
            <div className="modal-body">
              <h2 className="welcomeSignup">Welcome to Turo</h2>
              <button
                onClick={signInGoogle}
                className="continueSignup "
                style={{ marginTop: "60px" }}
              >
                <i className="fab fa-google" style={{ fontSize: "22px" }}></i>{" "}
                &nbsp; Continue with Google
              </button>
              <button
                className="continueSignup "
                data-bs-toggle="modal"
                data-bs-target="#loginDiv"
                data-bs-dismiss="modal"
              >
                <i className="far fa-envelope" style={{ fontSize: "22px" }}></i>{" "}
                &nbsp; Continue with Email
              </button>

              <div className="loginAlready">
                Already have an account?{" "}
                <button
                  className="loginBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#loginDiv"
                  data-bs-dismiss="modal"
                >
                  Log in
                </button>
              </div>

              <p className="privacy">
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="purple">Privacy Policy</span> and{" "}
              </p>
              <p className="privacy2">
                <span className="purple">Terms of Service</span> apply
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Div */}
      <div id="loginDiv" className="modal login-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="signupTitle">Log in here!</h2>
              <i className="fas fa-times btnClose " data-bs-dismiss="modal"></i>
            </div>
            <div className="modal-body">
              <div className="loginForm">
                <div className="emailDiv">
                  Email <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={signInEmailData.name}
                    onChange={handleSignInEmailData}
                  />
                </div>
                <div className="passwordDiv">
                  Password <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={signInEmailData.password}
                    onChange={handleSignInEmailData}
                  />
                </div>
                <button onClick={signInEmail} className="loginBtnForm">Log in</button>
              </div>
              <p className="or">or</p>
              <button className="continueSignup ">
                <i
                  className="fab fa-google googleBtnLogin"
                  style={{ fontSize: "22px" }}
                ></i>{" "}
                &nbsp; Continue with Google
              </button>
              <div className="signupAlready">
                Don't have an account?{" "}
                <button
                  className="loginBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#signupDiv"
                  data-bs-dismiss="modal"
                >
                  Sign up
                </button>
              </div>

              <p className="privacy">
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="purple">Privacy Policy</span> and{" "}
              </p>
              <p className="privacy2">
                <span className="purple">Terms of Service</span> apply
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
