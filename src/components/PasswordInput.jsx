import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = ({label, placeholder}) => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-sm mx-auto">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          id="password"
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={placeholder}
          className="py-2.5 sm:py-3 bg-gray-200 ps-4 pe-10 block w-full border border-dark-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        />
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className=" absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
        >
          {show ? <EyeOff className="shrink-0 size-4" /> : <Eye className="shrink-0 size-4" />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
