import React from 'react'

const FormInput = ({ className, type , lable, placeholder}) => {
  return (
    <div>
        <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lable}</lable>
        <input 
        type={type}
        placeholder={placeholder}
        className={`py-2.3 sm:py-3 ps-4 bg-gray-200 pe-10 block w-full border border-dark-100 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ` + className}
        />
    </div>
  ) 
}

export default FormInput