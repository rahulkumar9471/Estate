import React from 'react'
import Card from '../../components/Card'
import img from '../../assets/signin.svg'
import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton'

const Register = () => {
    return (
        <Card>
            <div className='flex'>
                {/* Left side with image */}
                <div className='w-1/2 flex items-center justify-center pr-4'>
                    <img src={img} alt="App background" className="w-xl  max-w-full h-auto" />
                </div>

                {/* Right side with form and vertical divider */}
                <div className='w-1/2 pl-4 border-l border-gray-400 dark:border-gray-600'>
                    <form className="max-w-sm mx-auto">
                        <div className="mb-6">
                            <h1 className="mb-2 text-dark text-2xl font-bold dark:text-white">Register a new account</h1>
                            <p className="mb-0 text-dark text-xs dark:text-white">
                                Already a member? <a href="sign-in.html" className="text-blue-600 hover:underline">Log In</a>
                            </p>
                        </div>

                        <div className="mb-5">
                            <FormInput type="email" lable="Email Id" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <FormInput type="password" label="Password" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                            <FormInput type="password" />
                        </div>
                        <div className="flex items-start mb-5">
                            <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                            </label>
                        </div>
                        <FormButton type="submit" label="Register" />
                    </form>
                </div>
            </div>
        </Card>
    )
}

export default Register