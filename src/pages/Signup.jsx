import signupImg from "../..//public/hh2.jpg"
import Template from "../component/core/Auth/Template"

function Signup() {
  return (
    <Template
      title=""
      description1="Create an account to access training and placement opportunities easily."
      description2="Join for career resources and opportunities."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup