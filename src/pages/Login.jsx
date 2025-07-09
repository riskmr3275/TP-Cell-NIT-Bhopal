import loginImg from "../../public/hh2.jpg"
import Template from "../component/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Login to explore exclusive training and placement resources for students"
      description2="Access career resources and opportunities."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login