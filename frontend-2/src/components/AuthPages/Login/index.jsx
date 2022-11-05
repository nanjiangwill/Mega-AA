import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleLogo from "../../../assets/images/google-logo.svg";
import titleShape from "../../../assets/images/shape/title-shape.svg";
import InputCom from "../../Helpers/Inputs/InputCom";
import AuthLayout from "../AuthLayout";

export default function Login() {
  const [checked, setValue] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };

  // email
  const [email, setMail] = useState("example@quomodosoft.com");
  const handleEmail = (e) => {
    setMail(e.target.value);
  };
  // password
  const [password, setPassword] = useState("123456");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const doLogin = () => {
    if (email !== "" && password !== "") {
      if (email === "example@quomodosoft.com") {
        localStorage.setItem("email", `${email}`);
        setLoginLoading(true);
        setTimeout(() => {
          toast.success("Login Successfully");
          navigate("/", { replace: true });
          setLoginLoading(false);
        }, 2000);
      } else {
        toast.error("Invalid Credential");
      }
    }
  };

  return (
    <>
      <AuthLayout
        slogan="Welcome to  Nftmax
Admin Panel"
      >
        <div className="content-wrapper w-full  flex justify-center items-center xl:bg-white 2xl:w-[828px] xl:w-[500px] 2xl:h-[818px] xl:h-[600px] rounded-xl 2xl:px-[164px] xl:px-[56px] sm:px-7 px-5 ">
          <div className="w-full">
            <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
              <h1 className="text-5xl font-bold leading-[74px] text-dark-gray">
                Log In
              </h1>
              <div className="shape -mt-5">
                <img src={titleShape} alt="shape" />
              </div>
            </div>
            <div className="input-area">
              <div className="input-item mb-5">
                <InputCom
                  value={email}
                  inputHandler={handleEmail}
                  placeholder="example@quomodosoft.com"
                  label="Email Address"
                  name="email"
                  type="email"
                  iconName="message"
                />
              </div>
              <div className="input-item mb-5">
                <InputCom
                  value={password}
                  inputHandler={handlePassword}
                  placeholder="● ● ● ● ● ●"
                  label="Password"
                  name="password"
                  type="password"
                  iconName="password"
                />
              </div>
              <div className="forgot-password-area flex justify-between items-center mb-7">
                <div className="remember-checkbox flex items-center space-x-2.5">
                  <button
                    onClick={rememberMe}
                    type="button"
                    className="w-5 h-5 text-dark-gray flex justify-center items-center border border-light-gray"
                  >
                    {checked && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                  <span
                    onClick={rememberMe}
                    className="text-base text-dark-gray"
                  >
                    Remember Me
                  </span>
                </div>
                <a href="/forgot-password" className="text-base text-purple">
                  Forgot Password
                </a>
              </div>
              <div className="signin-area mb-3.5">
                <div className="flex justify-center">
                  <button
                    onClick={doLogin}
                    type="button"
                    className={`btn-login  rounded-[50px] mb-6 text-xl text-white font-bold flex justify-center bg-purple items-center ${
                      loginLoading ? "active" : ""
                    }`}
                  >
                    {loginLoading ? (
                      <div className="signup btn-loader"></div>
                    ) : (
                      <span>Sign In</span>
                    )}
                  </button>
                </div>
                <a
                  href="#"
                  className="w-full border border-light-purple rounded-[50px] h-[58px] flex justify-center bg-[#FAFAFA] items-center"
                >
                  <img className="mr-3" src={googleLogo} alt="google logo" />
                  <span className="text-lg text-thin-light-gray font-normal">
                    Sign In with Google
                  </span>
                </a>
              </div>
              <div className="signup-area flex justify-center">
                <p className="sm:text-lg text-sm text-thin-light-gray font-normal">
                  Dont’t have an aceount ?
                  <a href="/signup" className="ml-2 text-dark-gray">
                    Sign up free
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
