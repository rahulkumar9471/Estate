import React from 'react'
import Card from '../../components/Card'
import img from '../../assets/app_bg.jpg'
import FormInput from '../../components/FormInput'

const Login = () => {
  return (
    <Card>
      <div className='flex'>
        {/* Left side with image */}
        <div className='w-1/2 flex items-center justify-center pr-4'>
          <img src={img} alt="App background" className="max-w-full h-auto" />
        </div>

        {/* Right side with form and vertical divider */}
        <div className='w-1/2 pl-4 border-l border-gray-300 dark:border-gray-600'>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <h1 className="mb-2 text-white text-4xl font-bold">Create new account</h1>
              <p className="mb-0 text-white">
                Already a member? <a href="sign-in.html" className="text-blue-400 hover:underline">Log in</a>
              </p>
            </div>

            <div className="mb-5">
              {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-sky-900 dark:text-white">Your email</label> */}
            
              <FormInput  type="email" lable="Email Id"/>
              {/* <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@flowbite.com" required /> */}
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <FormInput type="password" />
            </div>

            <div className="mb-5">
              <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
              <input type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
            </div>

            <div className="flex items-start mb-5">
              <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600" required />
              <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
              </label>
            </div>

            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Register new account
            </button>
          </form>
        </div>
      </div>
    </Card>
  )
}

export default Login
