import React from 'react'
import Card from '../../components/Card'
import img from '../../assets/login.png'
import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton'
import PasswordInput from '../../components/PasswordInput'
import FooterCompany from '../../components/FooterCompany'


const Register = () => {
    return (
        <Card>
            <div className='flex'>
                {/* Left side with image */}
                <div className='w-1/2 flex items-center justify-center pr-4 p-6 bg-gradient-to-l from-neutral-950 to-blue-900'>
                    <img src={img} alt="App background" className="w-xl  max-w-full h-auto" />
                </div>

                {/* Right side with form and vertical divider */}
                <div className='w-1/2 p-16 pl-11 items-center border-l justify-center border-gray-400 dark:border-gray-600'>
                    <form className="max-w-sm mx-auto">
                        <div className="mb-6">
                            <h1 className="mb-2 text-white text-4xl font-bold dark:text-gray-300">Create an account</h1>
                            <p className="mb-0 text-white text-md dark:text-gray-300">
                                Already a member? <a href="sign-in.html" className="text-blue-500 hover:underline">Sign In</a>
                            </p>
                        </div>
                        <div className="mb-5">
                            <FormInput type="email" lable="Email Id" placeholder="Enter a valid email" />
                        </div>
                        <div className="mb-5">
                            <PasswordInput label="New Password" placeholder="New Password" />
                        </div>
                        <div className="mb-5">
                            <PasswordInput label="Confirm Password" placeholder="Confirm Password" />
                        </div>
                        <div className="flex items-start mb-5">
                            <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600" required />
                            <label htmlFor="terms" className="ml-2 text-sm text-white font-medium text-gray-900 dark:text-gray-300">
                                I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                            </label>
                        </div>
                        <FormButton type="submit" label="Sign Up" />
                        <FooterCompany />
                        
                    </form>
                </div>
            </div>
        </Card>
    )
}

export default Register