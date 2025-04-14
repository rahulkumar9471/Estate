import React from 'react'

const Card = ({ children }) => {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center dark:bg-gray-800 dark:border-gray-500">

            <div className="w-lvh max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-700">
                {children}
            </div>
        </div>

    )
}

export default Card