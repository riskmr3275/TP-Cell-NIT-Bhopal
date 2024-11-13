import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"
import "../../../App.css";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-screen place-items-center">
      {loading ? (
        <div class="loader"> </div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}   
              <span className="font-edu-sa font-bold italic text-blue-900">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-0 w-[50%]  md:mx-10">
            <img
              src={image}
              alt="Pattern"
              className="w-full h-full mr-0 " // Increase image size on larger screens
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template

