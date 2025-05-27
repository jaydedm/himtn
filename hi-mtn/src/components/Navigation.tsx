'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function Navigation() {
  const pathName = usePathname();

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark py-lg-4'
      id='mainNav'
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 2
      }}
      >
      <div className='container'>
        <a
          className='
            navbar-brand
            text-uppercase text-expanded
            font-weight-bold
            d-lg-none
          '
          href='index.html'
        >
          Hi-Mountain
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav mx-auto'>
            <li
              className={`nav-item ${
                pathName === '/' ? 'active' : ''
              } px-lg-4`}
            >
              <Link className='nav-link text-uppercase text-expanded' href='/'>
                Home
              </Link>
            </li>
            <li className='nav-item px-lg-4'>
              <a
                className='nav-link text-uppercase text-expanded'
                href='img/Menu/HiMtnMenuJune2024.pdf'
                download
              >
                Menu
              </a>
            </li>
            <li
              className={`nav-item ${
                pathName === '/hours' ? 'active' : ''
              } px-lg-4`}
            >
              <Link
                className={`nav-link text-uppercase text-expanded`}
                href='hours'
              >
                Hours
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
