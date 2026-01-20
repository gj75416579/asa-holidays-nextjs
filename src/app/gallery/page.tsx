'use client'

export default function Gallery() {
  return (
    <>
      {/* Preloader Start */}
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner">
          </div>
          <div className="txt-loading">
            <span data-text-preloader="R" className="letters-loading">
              R
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="A" className="letters-loading">
              A
            </span>
            <span data-text-preloader="V" className="letters-loading">
              V
            </span>
            <span data-text-preloader="I" className="letters-loading">
              I
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
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

      {/* Back To Top Start */}
      <button id="back-top" className="back-to-top show">
        <i className="fa-regular fa-arrow-up"></i>
      </button>

      {/* MouseCursor Start */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h3>Get Appointment</h3>
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
                </form>
                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay"></div>

      {/* Header-Top Section Start */}
      <div className="header-top-section">
        <div className="container-fluid">
          <div className="header-top-wrapper">
            <p>Welcome to <span>Roavio</span> travel agency, need helps for travel guide <b>Let&apos;s Talk</b></p>
            <div className="header-right">
              <div className="flag-wrap">
                <i className="fa-solid fa-globe"></i>
                <div className="nice-select" tabIndex={0}>
                  <span className="current">
                    English
                  </span>
                  <ul className="list">
                    <li data-value="1" className="option selected focus">
                      English
                    </li>
                    <li data-value="1" className="option">
                      Bangla
                    </li>
                    <li data-value="1" className="option">
                      Hindi
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="header-list">
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:support@gmail.com">Email : support@gmail.com</a>
                </li>
                <li>
                  <i className="fa-solid fa-phone-flip"></i>
                  <a href="tel:1-234-567-889">Call : +1-234-567-889</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section Start */}
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <a href="index.html" className="header-logo">
                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                  </a>
                </div>
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <a href="index.html">
                            Home
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="submenu has-homemenu">
                            <li>
                              <div className="homemenu-items">
                                <div className="homemenu">
                                  <div className="homemenu-thumb">
                                    <img src="/assets/img/header/home-1.jpg" alt="img" />
                                    <div className="demo-button">
                                      <a href="index.html" className="theme-btn">
                                        Multi Page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      Home 01
                                    </h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img src="/assets/img/header/home-2.jpg" alt="img" />
                                    <div className="demo-button">
                                      <a href="index-2.html" className="theme-btn">
                                        Multi Page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      Home 02
                                    </h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img src="/assets/img/header/home-3.jpg" alt="img" />
                                    <div className="demo-button">
                                      <a href="index-3.html" className="theme-btn">
                                        Multi Page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      Home 03
                                    </h4>
                                  </div>
                                </div>
                                <div className="homemenu">
                                  <div className="homemenu-thumb mb-15">
                                    <img src="/assets/img/header/home-4.jpg" alt="img" />
                                    <div className="demo-button">
                                      <a href="index-4.html" className="theme-btn">
                                        Multi Page
                                      </a>
                                    </div>
                                  </div>
                                  <div className="homemenu-content text-center">
                                    <h4 className="homemenu-title">
                                      Home 04
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <a href="index.html" className="border-none">
                            Home
                          </a>
                          <ul className="submenu">
                            <li><a href="index.html">Home 01</a></li>
                            <li><a href="index-2.html">Home 02</a></li>
                            <li><a href="index-3.html">Home 03</a></li>
                            <li><a href="index-4.html">Home 04</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="destination-details.html">
                            Destinations
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="destination.html">Destinations 01</a></li>
                            <li><a href="destination-2.html">Destinations 02</a></li>
                            <li><a href="destination-details.html">Destination Details</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="tour-details.html">
                            Tours
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="tour-list.html">Tour List</a></li>
                            <li><a href="tour-grid.html">Tour Grid</a></li>
                            <li><a href="tour-sidebar.html">Tour sidebar</a></li>
                            <li><a href="tour-no-sidebar.html">Tour No sidebar</a></li>
                            <li><a href="tour-details.html">Tour Details</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="news-details.html">
                            Pages
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="faq.html">Our Faq</a></li>
                            <li><a href="gallery.html">Our Gallery</a></li>
                            <li><a href="404.html">404 Page</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="news-details.html">
                            Blog
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="news.html">Blog Standard</a></li>
                            <li><a href="news-grid.html">Blog Grid</a></li>
                            <li><a href="news-details.html">Blog Details</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="search-widget">
                  <form action="#">
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    <input type="text" placeholder="Search" />
                  </form>
                </div>
                <div className="header-button">
                  <a href="contact.html" className="theme-btn">Book Now</a>
                </div>
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

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb-Wrapper Section Start */}
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">
                    Gallery
                  </h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="style-2 style-3">
                    Gallery
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* gallery Section Start */}
          <section className="gallery-section section-padding fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">
                  Explore Our Photo Gallery
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">Crafting journeys, creating memories plan smarter, travel better</p>
              </div>
            </div>
            <div className="swiper gallery-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/01.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/02.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/03.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/04.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/05.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper gallery-slider-2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/06.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/07.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/08.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/09.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="tour-details.html">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section Start */}
          <section className="contact-section section-padding pb-0">
            <div className="container">
              <div className="contact-wrapper">
                <div className="row g-4 align-items-end">
                  <div className="col-lg-6">
                    <div className="contact-image">
                      <img data-speed=".8" src="/assets/img/home-1/Image.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-content">
                      <div className="logo-image">
                        <a href="index.html"><img src="/assets/img/logo/white-logo.svg" alt="img" /></a>
                      </div>
                      <div className="section-title mb-0">
                        <h2 className="sec-title text-white text-anim">
                          Adventure Is Calling - Are You Ready?
                        </h2>
                      </div>
                      <p className="text wow fadeInUp" data-wow-delay=".3s">
                        Get ready to embark on unforgettable journeys with us. whether you&apos;re seeking thrilling adventures, relaxing escapes
                      </p>
                      <a href="tour-details.html" className="theme-btn">Explore Our Tours</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section Start */}
          <footer className="footer-section fix header-bg">
            <div className="container">
              <div className="footer-widget-wrapper">
                <div className="row">
                  <div className="col-xl-2 col-md-4 col-lg-3">
                    <div className="single-footer-widget">
                      <div className="wid-title">
                        <h4>Services</h4>
                      </div>
                      <ul className="list-area">
                        <li>
                          <a href="tour-details.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Best Tour Guide
                          </a>
                        </li>
                        <li>
                          <a href="tour-details.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Tour Booking
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Hotel Booking
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Ticket Booking
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-lg-3">
                    <div className="single-footer-widget">
                      <div className="wid-title">
                        <h4>Company</h4>
                      </div>
                      <ul className="list-area">
                        <li>
                          <a href="about.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Community
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Jobs Careers
                          </a>
                        </li>
                        <li>
                          <a href="news-details.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            News Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-lg-3">
                    <div className="single-footer-widget">
                      <div className="wid-title">
                        <h4>Destinations</h4>
                      </div>
                      <ul className="list-area">
                        <li>
                          <a href="tour-details.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            African Safaris
                          </a>
                        </li>
                        <li>
                          <a href="tour-details.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Alaska &amp; Canada
                          </a>
                        </li>
                        <li>
                          <a href="tour-details.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            South America
                          </a>
                        </li>
                        <li>
                          <a href="tour-details.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Middle East
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-lg-3">
                    <div className="single-footer-widget">
                      <div className="wid-title">
                        <h4>Get In Touch</h4>
                      </div>
                      <div className="contact-item">
                        <div className="icon">
                          <i className="fa-regular fa-map-location-dot"></i>
                        </div>
                        <div className="content">
                          <h6>
                            578 Level, D-block Street <br />
                            Melbourne, Australia
                          </h6>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="icon">
                          <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="content">
                          <h6>
                            <a href="mailto:supportrevelo@gmail.com">supportrevelo@gmail.com</a>
                          </h6>
                        </div>
                      </div>
                      <div className="contact-item mb-0">
                        <div className="icon">
                          <i className="fa-regular fa-phone-volume"></i>
                        </div>
                        <div className="content">
                          <h6>
                            <a href="tel:+88012334588">+880 123 345 88</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-lg-6">
                    <div className="single-footer-widget">
                      <div className="wid-title">
                        <h4>Subscribe Our Newsletter to <br />
                          get more offer &amp; Tips
                        </h4>
                      </div>
                      <div className="newsletter-content">
                        <p>
                          Stay connected &amp; never miss a deal! subscribe
                          to our newsletter and get travel offers
                        </p>
                        <form action="#">
                          <div className="form-clt">
                            <input type="text" name="email" id="email" placeholder="Email Address" />
                            <button type="submit" className="theme-btn">
                              Subscribe
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="footer-wrapper">
                  <h2>Roavio</h2>
                  <div className="text-item">
                    <p>@Copy 2025 <span>ROAVIO,</span> All rights reserved</p>
                    <a href="#" className="icon"><i className="fa-solid fa-chevron-up"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
