import { useState } from "react";
import img1 from "../images/logo.png";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="w-screen h-screen bg-backgroundColor ">
      <div className="flex flex-col justify-center items-center">
        {/* this div for logo and titile */}
        <div className="flex flex-row justify-center items-center my-4">
          <img
            src={img1}
            className=" w-10 h-10  rounded-full px-1 "
            alt="..."
          />
          <h1 className=" font-semibold text-lg text-primaryText">Specify</h1>
        </div>
        {/* div for form  */}
        <div className="bg-white w-1/3 h-4/5  border-solid border border-formBorder rounded shadow-sm">
          {/* div to contain  contains icon,2 heading  */}
          <div className="h-1/2 w-full flex flex-col my-5 justify-between items-center ">
            <div className="w-8 h-8 mt-4 flex flex-row justify-around items-center rounded-full bg-backgroundColor ">
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
            <h3 className=" mt-4 font-bold text-base px-2 tracking-wide text-primaryText">
              Sign up
            </h3>
            <p className=" mt-4 text-sm font-semibold text-secondaryText text-left">
              Create your Specific account with your work email to sync
            </p>
            <p className=" text-sm font-semibold text-secondaryText text-left">
              all your design data across your design system
            </p>
          </div>
          <form className=" flex flex-col justify-between  h-1/2 w-11/12 ml-7 pt-10">
            <label
              htmlFor="email"
              className="text-sm text-inputLablesColor text-start px-5 font-semibold "
            >
              Email
            </label>

            <input
              id="email"
              className=" w-11/12 my-2 mx-4 px-2 py-2  border rounded border-solid border-formBorder  hover:shadow-sm outline-none text-xs focus:outline-none focus:border-inputBorderColor focus:ring-2 focus:ring-focusRing focus:ring-focusBorder"
              placeholder="Enter your mail address"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <button
              type="button"
              //    onClick={}
              className=" w-11/12 rounded bg-primaryButtonColor border-primaryButton border-opacity-5 hover:bg-primaryButton text-white font-semibold  px-8 mx-4 my-4 py-2 text-sm"
            >
              Continue with email
            </button>
          </form>
          <div className="flex flex-col justify-between items-start px-10 mt-1 mb-3">
          <span className="text-sm text-secondaryText">
            By continuing, you're agreeing to our{" "}
            <button className="text-sm hover: text-textColor font-sans ">
              Terms and Privacy 
            </button>
          </span>
          <button className="text-sm hover: text-textColor font-sans  mb-5 ">
              policy.
            </button>
          </div>
          
        </div>
        <div className="flex flex-row gap-1 my-5">
          <p className=" text-sm text-secondaryText font-sans">
            Already have an account?
          </p>

          <button className="text-sm hover: text-textColor font-sans ">
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};
export default SignupScreen;
