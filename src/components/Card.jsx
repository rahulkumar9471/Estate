import React from 'react'

const Card = ({ children }) => {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-indigo-300 bg-cover bg-center dark:bg-navyblue-900 dark:border-gray-500">
            <div className="w-full max-w-2xl p-4 bg-neutral-300 border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-950 dark:border-gray-700">
                {children}
            </div>
        </div>

    )
}

export default Card