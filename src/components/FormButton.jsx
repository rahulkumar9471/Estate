import React from 'react'

const FormButton = ({ label }) => {
    return (
        <div className="flex justify-center items-center">
    <button
        type="button"
        className="flex items-center justify-center text-dark dark:text-white 
                   bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
                   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                   shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
                   font-medium rounded-lg text-sm px-25 py-2.5 text-center mb-2"
    >
        {label}
    </button>
</div>

    )
}

export default FormButton