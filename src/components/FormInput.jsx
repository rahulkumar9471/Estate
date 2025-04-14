import React from 'react'

const FormInput = ({ className, type , lable}) => {
  return (
    <div>
        <lable className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{lable}</lable>
        <input 
        type={type}
        className={`shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ` + className}
        />
    </div>
  ) 
}

export default FormInput