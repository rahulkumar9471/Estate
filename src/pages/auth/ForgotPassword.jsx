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
                <div className='w-1/2 flex items-center justify-center pr-4'>
                    <img src={img} alt="App background" className="w-xl  max-w-full h-auto" />
                </div>

                {/* Right side with form and vertical divider */}
                <div className='w-1/2 pl-4 border-l border-gray-400 dark:border-gray-600'>
                    <form className="max-w-sm mx-auto">
                        <div className="mb-6">
                            <h1 className="mb-2 text-dark text-2xl font-bold dark:text-white">Forgot Password</h1>
                            <p className="mb-0 text-dark text-xs dark:text-white">
                                Enter the email address associated with an account.</p>
                        </div>

                        <div className="mb-5">
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