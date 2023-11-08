import { useState } from "react";
import img1 from "../images/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");
  const [isValidate, setIsValidate] = useState(false);

  function validate(): Record<string, string> {
    const errors: Record<string, string> = {};
    if (email === "") {
      errors.email = "Email is invalid or already taken";
    }
    return errors;
  }

  function continueEmailButtonClickedHandler(): void {
    const newError = validate();
    if (Object.keys(newError).length > 0) {
      setError(newError.email);
      setIsValidate(true);
    } else {
      setError("");
      setIsValidate(false);
    }
  }

  return (
    <section className="w-screen h-screen bg-backgroundColor ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center my-4">
          <img
            src={img1}
            className=" w-10 h-10  rounded-full px-1 "
            alt="..."
          />
          <h1 className=" font-semibold text-lg text-primaryText">Specify</h1>
        </div>

        <div className="bg-white w-1/3 h-4/5  border-solid border border-formBorder rounded shadow-sm pb-10">
          <div className="h-1/2 w-full flex flex-col my-5 justify-between items-center  ">
            <div className="w-8 h-8 mt-4 flex justify-around items-center rounded-full bg-backgroundColor ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-borderColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h3 className=" mt-4 font-bold text-base gap-4 tracking-wide text-primaryText">
              Sign up
            </h3>
            <p className=" mt-4 text-sm font-semibold text-secondaryText text-left">
              Create your Specific account with your work email to sync
            </p>
            <p className=" text-sm font-semibold text-secondaryText text-left">
              all your design data across your design system
            </p>
          </div>
          <form className="h-1/2 w-11/12 flex flex-col justify-between   ml-5 mt-10">
            <label
              htmlFor="email"
              className="text-sm text-inputLablesColor text-start px-4 font-semibold "
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
                  isValidate
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
              {error}
            </div>
            <input
              id="email"
              className={`${
                !isValidate
                  ? "w-11/12 my-2 mx-4 px-2 py-2  border rounded border-solid border-formBorder  hover:shadow-sm outline-none text-xs focus:outline-none focus:border-inputBorderColor focus:ring-2  focus:ring-focusBorder "
                  : '" w-11/12 my-2 mx-4 px-2 py-2  border rounded border-solid   hover:shadow-sm outline-none text-xs  border-errorMessageColor focus:ring-2 focus:ring-errorMessageFocusColor "'
              }`}
              placeholder="Enter your mail address"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <button
              type="button"
              onClick={continueEmailButtonClickedHandler}
              className=" w-11/12 rounded bg-primaryButtonColor border-primaryButton border-opacity-5 hover:bg-primaryButton text-white font-semibold  px-8 mx-4 my-4 py-2 text-sm focus:ring-4  focus:ring-formBorder "
            >
              Continue with email
            </button>

            <div className="flex flex-col justify-between items-start mx-4 mt-1 mb-3">
              <span className="text-sm text-secondaryText">
                By continuing, you're agreeing to our{" "}
                <Link to="">
                  <span className="text-sm hover: text-textColor font-sans ">
                    Terms and Privacy
                  </span>
                </Link>
              </span>
              <div>
                <Link to="">
                  <a className="text-sm hover: text-textColor font-sans  mb-5 ">
                    policy.
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-between items-center gap-1 mt-6 ">
          <span className=" text-sm text-primaryText font-sans">
            Already have an account?
          </span>
          <Link to="/login">
            <span className="text-sm hover: text-textColor font-sans ">
              Log in
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Signup;
