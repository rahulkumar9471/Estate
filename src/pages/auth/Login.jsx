import React from 'react'
import Card from '../../components/Card'
import img from '../../assets/login.png'
import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton'
import PasswordInput from '../../components/PasswordInput'
import FooterCompany from '../../components/FooterCompany'

const Login = () => {
  return (
    <Card>
      <div className='flex'>
        {/* Left side with image */}
        <div className='w-1/2 flex items-center justify-center pr-4 p-6 bg-gradient-to-l from-neutral-950 to-blue-900 '>
          <img src={img} alt="App background" className="w-xl  max-w-full h-auto" />
        </div>


        {/* Right side with form and vertical divider */}
        <div className='w-1/2 pl-4 p-16 pl-11 items-center border-l  justify-center border-gray-500 dark:border-gray-600'>
          <form className="max-w-sm mx-auto">
            <div className="mb-6">
              <h1 className="mb-2 text-white text-4xl font-bold dark:text-gray-300">Welcome Back</h1>
              <p className="mb-0 text-white text-md dark:text-gray-300">
                Not a member? <a href="sign-up.html" className="text-blue-500 hover:underline">Sign up</a>
              </p>
            </div>

            <div className="mb-5">
              <FormInput type="email" lable="Email Id" placeholder="Enter Your Email" />
            </div>

            <div className="mb-5">
              <PasswordInput label="Password" placeholder="Enter Your Password" />
            </div>
            <FormButton type="submit" label="Sign In" />

            <div className="flex items-center justify-between mb-4">
              {/* Remember Me */}
              <div className="flex items-center mb-0">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="remember" className="ml-2 text-xs text-white dark:text-gray-300">
                  Remember me
                </label>
              </div>

              {/* Forgot Password */}
              <p className="mb-0 text-white text-xs dark:text-gray-300">
                <a href="Forgotpassword.html" className="text-blue-500 hover:underline">
                  Forgot Password
                </a>
              </p>
            </div>

            <div >


              <FooterCompany />
            </div>
          </form>
        </div>
      </div>
    </Card>
  )
}

export default Login
