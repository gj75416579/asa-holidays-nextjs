'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Header() {
  const pathname = usePathname() || '/'
  const searchParams = useSearchParams()
  const productTypeParam = searchParams.get('productType')
  const isTourList = pathname.startsWith('/tour-list')
  const isHome = pathname === '/'
  const isGroupTours =
    pathname.startsWith('/tour-details') ||
    pathname.startsWith('/tour-grid') ||
    (isTourList && productTypeParam !== '2')
  const isFreeEasy = isTourList && productTypeParam === '2'
  const isCruises = pathname.startsWith('/destination')
  const isAbout = pathname === '/about' || pathname.startsWith('/faq')
  const isContact = pathname.startsWith('/contact')

  const handleLetsTalk = () => {
    if (typeof window === 'undefined') {
      return
    }
    const tawkApi = (window as any).Tawk_API
    if (tawkApi && typeof tawkApi.maximize === 'function') {
      tawkApi.maximize()
      return
    }
    console.warn('Tawk API not ready yet.')
  }

  useEffect(() => {
    const preloader = document.querySelector('.preloader') as HTMLElement | null
    if (!preloader) {
      return
    }
    preloader.classList.add('loaded')
    preloader.style.opacity = '0'
    preloader.style.visibility = 'hidden'
    preloader.style.pointerEvents = 'none'
    const timeout = setTimeout(() => {
      preloader.style.display = 'none'
    }, 800)
    return () => clearTimeout(timeout)
  }, [pathname, searchParams])

  return (
    <>
      {/* Preloader Start */}
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="A" className="letters-loading">A</span>
            <span data-text-preloader="S" className="letters-loading">S</span>
            <span data-text-preloader="A" className="letters-loading">A</span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* MouseCursor Start */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="/">
                    <img src="/assets/img/logo/asa-logo.png" alt="ASA Holidays logo" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                ASA Holidays is Singapore&apos;s leading travel agency with over 30 years of experience in crafting unforgettable travel experiences across the globe.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                {/* <h3>Enquire Now</h3>
                <form action="#" id="contact-form" method="POST" className="contact-form-items">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input type="text" name="name" id="name33" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input type="text" name="name" id="email33" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea name="message" id="message2" placeholder="Enter message..."></textarea>
                      </div>
                    </div>
                  </div>
                </form> */}
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/ASAHolidays"><i className="fab fa-facebook-f"></i></a>
                  <a href="http://www.weibo.com/AsaHoliday"><i className="fab fa-weibo"></i></a>
                  <a href="https://www.instagram.com/asa.holidays/"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.youtube.com/user/asaholidayvideo"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      <div className="header-top-section">
        <div className="container-fluid">
          <div className="header-top-wrapper">
            <div className="header-left">
              <ul className="header-list">
                <li>
                  <i className="fa-solid fa-phone-flip"></i>
                  <a href="tel:+6563035303">(+65) 6303 5303</a>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:enquiry@asaholiday.com?subject=Enquiry">enquiry@asaholiday.com</a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="social-icon d-flex align-items-center">
                <a href="https://www.facebook.com/ASAHolidays"><i className="fab fa-facebook-f"></i></a>
                <a href="http://www.weibo.com/AsaHoliday"><i className="fab fa-weibo"></i></a>
                <a href="https://www.instagram.com/asa.holidays/"><i className="fab fa-instagram"></i></a>
              </div>
              <ul className="header-list">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/career">Career</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/member/login">Member Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <a href="/" className="header-logo">
                    <img src="/assets/img/logo/asa-logo.png" alt="ASA Holidays logo" height={65} />
                  </a>
                </div>
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className={isHome ? 'active' : ''}>
                          <a href="/">Home</a>
                        </li>
                        <li className={isGroupTours ? 'active' : ''}>
                          <a href="/tour-list?productType=1">Group Tours</a>
                        </li>
                        <li className={isFreeEasy ? 'active' : ''}>
                          <a href="/tour-list?productType=2">Free &amp; Easy</a>
                        </li>
                        {/* <li className={isCruises ? 'active' : ''}>
                          <a href="/destination">Cruises</a>
                        </li>
                        <li>
                          <a href="/">Vouchers</a>
                        </li> */}
                        <li>
                          <a href="/mice">MICE</a>
                        </li>
                        <li className={isAbout ? 'active' : ''}>
                          <a href="/about">
                            About
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/faq">FAQ</a></li>
                          </ul>
                        </li>
                        <li className={isContact ? 'active' : ''}>
                          <a href="/contact-us">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                {/* <div className="search-widget">
                  <form action="#">
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder="Search" />
                  </form>
                </div>
                <div className="header-button">
                  <a href="/contact-us" className="theme-btn">Book Now</a>
                </div> */}
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
