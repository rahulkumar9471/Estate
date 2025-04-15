import React from 'react'

const FooterCompany = () => {
    const year = new Date().getFullYear();

    return (
      <footer className="w-full text-center py-4 border-gray-200 dark:border-neutral-700 text-sm text-gray-700 dark:text-neutral-400">
        ©{year} <span className="font-medium">Estate</span>. Built by <span className="font-medium">Rippers</span>.
      </footer>
  )
}

export default FooterCompany