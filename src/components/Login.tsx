import { useState } from "react";
import img1 from "../images/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [isEmailValidate, setEmailValidate] = useState<boolean>(false);
  const [isPasswordValidate, setPasswordValidate] = useState<boolean>(false);
  function validate(): Record<string, string> {
    const errors: Record<string, string> = {};

    switch (email === "") {
      case true:
        errors.email = "Please enter a email.";

        break;
      case false:
        break;
    }
    switch (password === "") {
      case true:
        errors.password = "Please enter a password.";

        break;
      case false:
        break;
    }

    return errors;
  }

  function loginButtonClickedHandler(): void {
    const newError = validate();
    if (Object.keys(newError).length > 0) {
      setEmailError(newError.email);
      setPasswordError(newError.password);
      setPasswordValidate(true);
      setEmailValidate(true);
    } else {
      setEmailError("");
      setPasswordError("");
      setEmailValidate(false);
      setPasswordValidate(false);
    }
  }

  return (
    <section className="w-screen h-screen bg-backgroundColor">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mt-3 mb-4">
          <img
            src={img1}
            className=" w-10 h-10  rounded-full px-1 "
            alt="..."
          />
          <h1 className=" font-semibold text-lg text-primaryText">Specify</h1>
        </div>

        <div className="bg-white w-1/3 h-4/5  border-solid border border-formBorder rounded ">
          <div className="h-1/2 w-full flex flex-col my-5 justify-between items-center ">
            <div className="w-8 h-8 mt-4 flex justify-around items-center rounded-full bg-backgroundColor ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-borderColor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <h3 className=" mt-4 font-bold text-xl px-2 tracking-wide text-primaryText">
              Log in with your work email
            </h3>
            <h5 className=" my-4 text-sm font-semibold text-secondaryText">
              Use your work email to log in to your team workspace.
            </h5>
          </div>

          <form className=" flex flex-col justify-between   h-1/2 w-full  px-5 ">
            <label
              htmlFor="email"
              className="text-sm text-inputLablesColor text-start  font-semibold px-4"
            >
              Email
            </label>
            <div className=" flex text-xs text-errorMessageColor  font-semibold text-start ml-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${
                  isEmailValidate
                    ? '"  w-4 h-4 text-errorMessageColor "'
                    : '" invisible w-0 h-0"'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              {emailError}
            </div>
            <input
              id="email"
              className={`${
                !isEmailValidate
                  ? "w-11/12 my-2 mx-4 px-2 py-2  border rounded border-solid border-formBorder  hover:shadow-sm outline-none text-xs focus:outline-none focus:border-inputBorderColor focus:ring-2  focus:ring-focusBorder "
                  : '" w-11/12 my-2 mx-4 px-2 py-2  border rounded border-solid   hover:shadow-sm outline-none text-xs focus:outline-none border-errorMessageColor focus:ring-2 focus:ring-errorMessageFocusColor "'
              }`}
              placeholder="yourname@company.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="flex  justify-between items-center px-4 ">
              <label
                htmlFor="text"
                className="text-sm text-inputLablesColor text-start mt-4 font-semibold "
              >
                Password
              </label>
              <button className="text-sm hover: text-textColor font-sans mt-4 text-end ">
                Forgot password?
              </button>
            </div>
            <div className=" flex text-xs text-errorMessageColor  font-semibold text-start ml-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${
                  isPasswordValidate
                    ? '"  w-4 h-4 text-errorMessageColor "'
                    : '" invisible w-0 h-0"'
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              {passwordError}
            </div>
            <div className="relative ">
              <input
                id="password"
                className={`${
                  !isPasswordValidate
                    ? "w-11/12 my-2 mx-4 px-2 py-2  border rounded border-solid border-formBorder  hover:shadow-sm outline-none text-xs focus:outline-none focus:border-inputBorderColor focus:ring-2  focus:ring-focusBorder "
                    : '" w-11/12 my-2 mx-4 px-2 py-2  border rounded border-solid   hover:shadow-sm outline-none text-xs  border-errorMessageColor focus:ring-2 focus:ring-errorMessageFocusColor "'
                }`}
                placeholder="Enter your password"
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button className="absolute inset-y-0 right-0 flex items-center  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mb-2 mr-10 text-borderColor  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>

            <button
              type="button"
              onClick={loginButtonClickedHandler}
              className=" w-11/12 rounded bg-primaryButtonColor border-primaryButton border-opacity-5 hover:bg-primaryButton focus:ring-4 focus:ring-focusBorder text-white font-semibold mb-10 px-2 mx-4 mt-2 py-2 text-sm"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="flex justify-between items-center gap-1 my-5">
          <p className=" text-sm text-secondaryText font-sans">
            Don't have an account yet?
          </p>
          <Link to="/signup">
            <button className="text-sm hover: text-textColor font-sans ">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
