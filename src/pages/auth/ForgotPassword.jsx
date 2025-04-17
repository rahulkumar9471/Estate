import React from 'react'
import Card from '../../components/Card'
import img from '../../assets/login.png'
import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton'
import FooterCompany from '../../components/FooterCompany'

const ForgotPassword = () => {
    return (
        <Card>
            <div className='flex'>
                {/* Left side with image */}
                <div className='w-1/2 flex items-center justify-center pr-4 p-6 bg-gradient-to-l from-neutral-950 to-blue-900'>
                    <img src={img} alt="App background" className="w-xl  max-w-full h-auto" />
                </div>

                {/* Right side with form and vertical divider */}
                <div className='w-1/2 p-16 pl-11 pt-15 border-l border-neutral-900 dark:border-gray-600'>
                    <form className="max-w-sm mx-auto">
                        <div className="mb-6">
                            <h1 className="mb-2 text-white text-4xl font-bold dark:text-gray-300">Forgot Password</h1>
                            <p className="mb-0 text-white text-sm dark:text-gray-300">
                                Enter the email address associated with an account.</p>
                        </div>

                        <div className="mb-7">
                            <FormInput type="email" lable="Email Id" placeholder="Enter Registered Email" />
                        </div>
                        <FormButton type="submit" label="Sign In" />
                        <div>
                            <FooterCompany />
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    )
}

export default ForgotPassword