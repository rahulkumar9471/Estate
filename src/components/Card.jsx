import React from 'react'

const Card = ({ children }) => {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-indigo-300 bg-cover bg-center dark:bg-navyblue-900 dark:border-gray-500">
            <div className="w-full max-w-3xl p-4 bg-neutral-100 border border-white-100 rounded-lg shadow-sm sm:p-10 md:p-12 dark:bg-gray-950 dark:border-gray-700">
                {children}
            </div>
        </div>

    )
}

export default Card