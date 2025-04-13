import React from 'react'

const Card = ({ children }) => {
    return (

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            {children}
        </div>

    )
}

export default Card