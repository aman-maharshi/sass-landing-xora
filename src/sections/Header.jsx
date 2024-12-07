import React, { useState } from 'react'
import { Link as LinkScroll } from "react-scroll"
import clsx from 'clsx'

const NavLink = ({ title }) => (
  <LinkScroll
    className='base-bold uppercase cursor-pointer transition-colors duration-500 hover:text-p1 max-lg:my-4 max-lg:h5'
  >
    {title}
  </LinkScroll>
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed left-0 top-0 w-full z-50 py-10'>
      <div className='container flex h-14 items-center max-lg:px-5'>
        <a href="#" className='lg:hidden flex-1 cursor-pointer z-2'>
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        <div className={clsx("w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2", isOpen ? "max-lg:opacity-100" : "max-lg:opacity-0 pointer-events-none")}>
          <div className='max-lg:relative max-lg:min-h-screen max-lg:flex max-lg:flex-col max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
              <ul className='flex max-lg:block max-lg:px-12'>
                <li className='nav-li'>
                  <NavLink title='features' />
                  <div className='dot' />
                  <NavLink title='pricing' />
                </li>
                <li className='nav-logo'>
                  <LinkScroll
                    className='max-lg:hidden'
                  >
                    <img src="/images/xora.svg" width={160} height={55} alt="logo" />
                  </LinkScroll>
                </li>
                <li className='nav-li'>
                  <NavLink title='faq' />
                  <div className='dot' />
                  <NavLink title='download' />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(prev => !prev)}
          className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex items-center justify-center'
        >
          <img
            className='size-1/2 object-contain'
            src={`/images/${isOpen ? 'close' : 'magic'}.svg`}
            alt="magic"
          />

        </button>

      </div>
    </header>
  )
}

export default Header