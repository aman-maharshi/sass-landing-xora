import React from 'react'

const Header = () => {
  return (
    <header className='border fixed left-0 top-0 w-full z-50 py-10'>
      <div className='border container flex h-14 items-center max-lg:px-5'>
        <a href="#" className='lg:hidden flex-1 cursor-pointer z-2'>
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>
      </div>
    </header>
  )
}

export default Header