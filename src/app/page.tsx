'use client'

export default function Home() {
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
                ASA Holidays is Singapore&apos;s leading travel agency with over 30 years of experience in crafting unforgettable travel experiences across the globe.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h3>Enquire Now</h3>
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
            <p>Welcome to <span>ASA Holidays</span> - Singapore&apos;s Premier Travel Agency <b>Let&apos;s Talk</b></p>
            <div className="header-right">
              <div className="flag-wrap">
                <i className="fa-solid fa-globe"></i>
                <div className="nice-select" tabIndex={0}>
                  <span className="current">English</span>
                  <ul className="list">
                    <li data-value="1" className="option selected focus">English</li>
                    <li data-value="2" className="option">中文</li>
                  </ul>
                </div>
              </div>
              <ul className="header-list">
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:enquiry@asaholiday.com">Email : enquiry@asaholiday.com</a>
                </li>
                <li>
                  <i className="fa-solid fa-phone-flip"></i>
                  <a href="tel:+65-6534-3722">Call : +65 6534 3722</a>
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
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="tour-grid.html">
                            Group Tours
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="tour-grid.html">Europe Tours</a></li>
                            <li><a href="tour-grid.html">China Tours</a></li>
                            <li><a href="tour-grid.html">Japan Tours</a></li>
                            <li><a href="tour-grid.html">Korea Tours</a></li>
                            <li><a href="tour-grid.html">Australia Tours</a></li>
                            <li><a href="tour-grid.html">View All Tours</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="tour-list.html">Free &amp; Easy</a>
                        </li>
                        <li>
                          <a href="destination.html">Cruises</a>
                        </li>
                        <li>
                          <a href="about.html">MICE</a>
                        </li>
                        <li>
                          <a href="about.html">
                            About
                            <i className="fa-solid fa-chevron-down"></i>
                          </a>
                          <ul className="submenu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Our Team</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="faq.html">FAQ</a></li>
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
          {/* Hero Section Start */}
          <section className="hero-section-1 fix">
            <div className="swiper-dot-3">
              <div className="dot"></div>
            </div>
            <div className="swiper hero-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="hero-1">
                    <div className="hero-bg bg-cover" style={{backgroundImage: 'url(/assets/img/home-1/hero/hero-bg.jpg)'}}></div>
                    <div className="container-fluid">
                      <div className="row g-4 justify-content-between align-items-end">
                        <div className="col-xl-4 col-lg-6">
                          <div className="hero-content">
                            <h1 data-animation="fadeInUp" data-delay="1.3s">
                              Your Gateway to
                              Unforgettable
                              Adventures
                            </h1>
                            <p data-animation="fadeInUp" data-delay="1.3s">
                              Singapore&apos;s premier travel agency offering curated group tours, cruises, and customized travel experiences worldwide
                            </p>
                            <a href="tour-grid.html" className="theme-btn" data-animation="fadeInUp" data-delay="1.3s">Explore Our Tours</a>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="counter-item" data-animation="fadeInUp" data-delay="1.3s">
                            <div className="content">
                              <h2><span className="count">100</span>+</h2>
                              <p>Destinations Worldwide</p>
                            </div>
                            <div className="content">
                              <h2><span className="count">30</span>+</h2>
                              <p>Years of Excellence</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-1">
                    <div className="hero-bg bg-cover" style={{backgroundImage: 'url(/assets/img/home-1/hero/hero-bg-2.jpg)'}}></div>
                    <div className="container-fluid">
                      <div className="row g-4 justify-content-between align-items-end">
                        <div className="col-xl-4 col-lg-6">
                          <div className="hero-content">
                            <h1 data-animation="fadeInUp" data-delay="1.3s">
                              Explore Europe
                              in Style with
                              ASA Holidays
                            </h1>
                            <p data-animation="fadeInUp" data-delay="1.3s">
                              Discover Switzerland, Scandinavia, Italy and Eastern Europe with our expertly guided tours
                            </p>
                            <a href="tour-grid.html" className="theme-btn" data-animation="fadeInUp" data-delay="1.3s">View Europe Tours</a>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="counter-item" data-animation="fadeInUp" data-delay="1.3s">
                            <div className="content">
                              <h2><span className="count">50</span>k+</h2>
                              <p>Happy Travelers</p>
                            </div>
                            <div className="content">
                              <h2><span className="count">98</span>%</h2>
                              <p>Customer Satisfaction</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="hero-1">
                    <div className="hero-bg bg-cover" style={{backgroundImage: 'url(/assets/img/home-1/hero/hero-bg-3.jpg)'}}></div>
                    <div className="container-fluid">
                      <div className="row g-4 justify-content-between align-items-end">
                        <div className="col-xl-4 col-lg-6">
                          <div className="hero-content">
                            <h1 data-animation="fadeInUp" data-delay="1.3s">
                              Discover Asia&apos;s
                              Hidden Treasures
                            </h1>
                            <p data-animation="fadeInUp" data-delay="1.3s">
                              From Japan&apos;s cherry blossoms to China&apos;s ancient wonders - experience the best of Asia with ASA Holidays
                            </p>
                            <a href="tour-grid.html" className="theme-btn" data-animation="fadeInUp" data-delay="1.3s">View Asia Tours</a>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="counter-item" data-animation="fadeInUp" data-delay="1.3s">
                            <div className="content">
                              <h2><span className="count">200</span>+</h2>
                              <p>Tour Packages</p>
                            </div>
                            <div className="content">
                              <h2><span className="count">24</span>/7</h2>
                              <p>Customer Support</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact-From Section Start */}
          <div className="contact-from-section header-bg wow fadeInUp" data-wow-delay=".3s">
            <div className="right-shape d-none d-xxl-block">
              <img src="/assets/img/home-1/tree.png" alt="img" />
            </div>
            <div className="container-fluid">
              <div className="contact-from-wrapper">
                <div className="contact-content">
                  <h2><span className="count">50</span>k+</h2>
                  <h6>Happy travelers served since 1992</h6>
                  <div className="grop-image">
                    <img src="/assets/img/home-1/group.png" alt="img" />
                  </div>
                </div>
                <div className="contact-right">
                  <h3>Find your perfect holiday package</h3>
                  <p>We offer more than <span className="count">200</span><b>+</b> curated tour packages</p>
                  <div className="box-item">
                    <div className="form-clt">
                      <div className="form">
                        <select className="single-select w-100">
                          <option>Select Destination</option>
                          <option>Europe</option>
                          <option>Japan</option>
                          <option>China</option>
                          <option>Korea</option>
                          <option>Australia</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-clt">
                      <div className="form">
                        <select className="single-select w-100">
                          <option>Departure Month</option>
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April - June</option>
                          <option>July - September</option>
                          <option>October - December</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-clt">
                      <div className="form">
                        <select className="single-select w-100">
                          <option>Tour Type</option>
                          <option>Group Tours</option>
                          <option>Free &amp; Easy</option>
                          <option>Cruises</option>
                          <option>MICE</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-clt">
                      <button className="theme-btn" type="submit">
                        Search Tours
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tour Section Start */}
          <section className="tour-section section-padding pt-0 fix">
            <div className="container custom-container">
              <div className="row g-1">
                <div className="col-xl-5">
                  <div className="row g-1">
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="tour-card-item">
                        <div className="tour-image">
                          <img src="/assets/img/home-1/tour/tour-1.jpg" alt="img" />
                          <span>20+ tours</span>
                          <div className="tour-content">
                            <h3>
                              <a href="tour-details.html">Swiss Alps Adventure</a>
                            </h3>
                            <p>Switzerland</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="tour-card-item wow fadeInRight" data-wow-delay=".3s">
                        <div className="tour-image style-3">
                          <img src="/assets/img/home-1/tour/tour-2.jpg" alt="img" />
                          <span>15+ tours</span>
                          <div className="tour-content">
                            <h3>
                              <a href="tour-details.html">Cherry Blossom Season</a>
                            </h3>
                            <p>Tokyo, Japan</p>
                          </div>
                        </div>
                      </div>
                      <div className="tour-card-item mt-1 wow fadeInRight" data-wow-delay=".5s">
                        <div className="tour-image style-3">
                          <img src="/assets/img/home-1/tour/tour-3.jpg" alt="img" />
                          <span>12+ tours</span>
                          <div className="tour-content">
                            <h3>
                              <a href="tour-details.html">Northern Lights</a>
                            </h3>
                            <p>Scandinavia</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="row g-1">
                    <div className="col-xl-8 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="tour-card-item">
                        <div className="tour-image style-2">
                          <img src="/assets/img/home-1/tour/tour-4.jpg" alt="img" />
                          <span>25+ tours</span>
                          <div className="tour-content">
                            <h3>
                              <a href="tour-details.html">Great Wall &amp; Forbidden City</a>
                            </h3>
                            <p>Beijing, China</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                      <div className="tour-card-item wow fadeInRight" data-wow-delay=".3s">
                        <div className="tour-image style-3">
                          <img src="/assets/img/home-1/tour/tour-5.jpg" alt="img" />
                          <span>10+ tours</span>
                          <div className="tour-content style-4">
                            <h3>
                              <a href="tour-details.html">K-Culture Experience</a>
                            </h3>
                            <p>Seoul, Korea</p>
                          </div>
                        </div>
                      </div>
                      <div className="tour-card-item mt-1 wow fadeInRight" data-wow-delay=".5s">
                        <div className="tour-image style-3">
                          <img src="/assets/img/home-1/tour/tour-6.jpg" alt="img" />
                          <span>8+ tours</span>
                          <div className="tour-content style-5">
                            <h3>
                              <a href="tour-details.html">Outback Discovery</a>
                            </h3>
                            <p>Sydney, Australia</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section Start */}
          <section className="about-section section-right fix">
            <div className="container">
              <div className="about-wrapper">
                <div className="row g-4">
                  <div className="col-xl-5 col-lg-4">
                    <div className="about-left-item">
                      <div className="section-title mb-0">
                        <h2 className="text-anim">
                          Your Trusted <br /> Travel Partner <br /> Since 1992
                        </h2>
                      </div>
                      <h6 className="wow fadeInUp" data-wow-delay=".5s">Established in 1992, <span className="count">30</span><b>+</b> years of excellence in travel</h6>
                      <div className="about-image wow img-custom-anim-left">
                        <img src="/assets/img/home-1/about/01.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-8">
                    <div className="about-right-item">
                      <div className="about-image-item">
                        <div className="about-image-2 wow img-custom-anim-left">
                          <img src="/assets/img/home-1/about/02.jpg" alt="img" />
                        </div>
                        <div className="about-box wow img-custom-anim-right">
                          <div className="icon">
                            <i className="flaticon-travel"></i>
                          </div>
                          <h5>Trusted &amp; Secure</h5>
                          <p>
                            Your safety and trust are our top priorities.
                          </p>
                        </div>
                      </div>
                      <div className="content">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                          ASA Holidays is Singapore&apos;s leading travel agency, specializing in curated group tours, free &amp; easy packages, cruises, and MICE services. We pride ourselves on delivering exceptional travel experiences with professional guides and personalized service.
                        </p>
                        <div className="list-item wow fadeInUp" data-wow-delay=".5s">
                          <ul className="list">
                            <li>
                              <i className="fa-solid fa-check"></i>
                              Expert Tour Guides
                            </li>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              Curated Itineraries
                            </li>
                          </ul>
                          <ul className="list">
                            <li>
                              <i className="fa-solid fa-check"></i>
                              Competitive Pricing
                            </li>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              24/7 Support
                            </li>
                          </ul>
                          <ul className="list">
                            <li>
                              <i className="fa-solid fa-check"></i>
                              Travel Insurance
                            </li>
                            <li>
                              <i className="fa-solid fa-check"></i>
                              Flexible Payments
                            </li>
                          </ul>
                        </div>
                        <a href="about.html" className="theme-btn wow fadeInUp" data-wow-delay=".3s">Learn More About Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tour-place Section Start */}
          <section className="tour-place-section section-padding fix">
            <div className="container custom-container-2">
              <div className="section-title text-center">
                <h2 className="text-anim">Popular Tour Packages</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">Discover our most loved destinations with <span className="count">200</span><b>+</b> curated tour packages</p>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-8.jpg" alt="img" />
                      <span>10% Off</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>From</span>$2,888</h5>
                      </div>
                      <h3>
                        <a href="tour-details.html">
                          10D Switzerland Grand Tour with Glacier Express
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Switzerland
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          10 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          Group Tour
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-9.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>From</span>$1,688</h5>
                      </div>
                      <h3>
                        <a href="tour-details.html">
                          8D Japan Cherry Blossom Tour Tokyo to Osaka
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Tokyo, Japan
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          8 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          Group Tour
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-10.jpg" alt="img" />
                      <span>Early Bird</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>From</span>$1,288</h5>
                      </div>
                      <h3>
                        <a href="tour-details.html">
                          6D China Beijing &amp; Shanghai Highlights Tour
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Beijing, China
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          6 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          Group Tour
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-11.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>From</span>$988</h5>
                      </div>
                      <h3>
                        <a href="tour-details.html">
                          5D Korea Seoul &amp; Jeju Island Discovery
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Seoul, Korea
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          5 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          Group Tour
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-12.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>Tours Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="tour-details.html">
                          Train on Nine Arches Bridge in <br /> Sri Lanka
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Ella, Sri Lanka
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          3 persons
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-13.jpg" alt="img" />
                      <span>8% Off</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>Tours Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="tour-details.html">
                          White buildings with blue <br /> accents near the Atlantic shore.
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Galle, Sri Lanka
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          3 persons
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-14.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>Tours Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="tour-details.html">
                          Man Sitting on Rocks next to <br /> Creek in Mountains
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Nepal
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          3 persons
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-15.jpg" alt="img" />
                      <span>23% Off</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content">
                      <div className="rating-item">
                        <div className="star">
                          <span>Rating</span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star-half-stroke"></i>
                        </div>
                        <h5><span>Tours Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="tour-details.html">
                          Aerial Photography of Cinque <br /> Terre in Italy
                        </a>
                      </h3>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Liguria, Italy
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                        <li>
                          <i className="fa-regular fa-users"></i>
                          3 persons
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefit-Tour Section Start */}
          <section className="benefit-tour-section section-padding fix header-bg">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-white text-anim">How to Benefit Our Tours</h2>
                <p className="text-white wow fadeInUp" data-wow-delay=".5s">Make the most of your travel experience with our carefully <br />
                  curated tours designed to offer convenience
                </p>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay=".3s">
                  <div className="benefit-tour-item">
                    <div className="icon">
                      <i className="flaticon-traveling"></i>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="tour-details.html">Expert Travel Guide</a>
                      </h5>
                      <p>
                        Travel professionals who help destinations, accommodations,
                        and activities tailored.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-4 col-md-6 wow img-custom-anim-top">
                  <div className="benefit-tour-image">
                    <img src="/assets/img/home-1/tour/tour-7.jpg" alt="img" />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay=".5s">
                  <div className="benefit-tour-item">
                    <div className="icon">
                      <i className="flaticon-roadmap"></i>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="tour-details.html">Custom Tour Plan</a>
                      </h5>
                      <p>
                        Enjoy trips designed around your preferences, whether you want a relaxing beach holiday
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="benefit-tour-item">
                    <div className="icon">
                      <i className="flaticon-mouse"></i>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="tour-details.html">Hassle-Free Booking</a>
                      </h5>
                      <p>
                        Save time and effort with a single platform to book flights, hotels, activities, transportation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="benefit-tour-item">
                    <div className="icon">
                      <i className="flaticon-promotion"></i>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="tour-details.html">Deals &amp; Discounts</a>
                      </h5>
                      <p>
                        Save time and effort with a single platform to book flights, hotels, activities, transportation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="benefit-tour-item">
                    <div className="icon">
                      <i className="flaticon-tourist"></i>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="tour-details.html">Local Guides Authentic</a>
                      </h5>
                      <p>
                        Immerse yourself local culture with trusted guides who provide
                        insider tips and hidden
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="benefit-tour-item">
                    <div className="icon">
                      <i className="flaticon-insurance"></i>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="tour-details.html">Travel Insurance</a>
                      </h5>
                      <p>
                        Stay protected with insurance options and on-ground support for a worry-free experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Adventure Section Start */}
          <section className="adventure-section section-padding fix">
            <div className="container">
              <div className="adventure-wrapper">
                <div className="row g-4">
                  <div className="col-xl-8">
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6">
                        <div className="section-title mb-0">
                          <h2 className="text-anim">Special Offers Sort
                            Time Adventures
                          </h2>
                        </div>
                        <p className="text wow fadeInUp" data-wow-delay=".5s">
                          Don&apos;t miss out our exclusive special deals, designed make your dream vacation more affordable than ever.
                        </p>
                        <div className="adventure-image wow img-custom-anim-left">
                          <img src="/assets/img/home-1/adventure/01.jpg" alt="img" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="adventure-image wow img-custom-anim-top">
                          <img src="/assets/img/home-1/adventure/02.jpg" alt="img" />
                        </div>
                        <div className="adventure-box wow img-custom-anim-bottom">
                          <h3>
                            <a href="tour-details.html">
                              18+ years of experience
                              in travel services
                            </a>
                          </h3>
                          <div className="info-item">
                            <img src="/assets/img/home-1/adventure/client.png" alt="img" />
                            <div className="content">
                              <h5>Mickel z Ponkoz</h5>
                              <span>Travel guide</span>
                            </div>
                          </div>
                          <div className="shape">
                            <img src="/assets/img/home-1/adventure/shape.png" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="adventure-thumb wow img-custom-anim-right">
                      <img src="/assets/img/home-1/adventure/03.jpg" alt="img" />
                      <div className="adventure-content">
                        <h6>23% Discount</h6>
                        <h3>
                          <a href="tour-details.html">Hotel &amp; Resort</a>
                        </h3>
                        <div className="booking-item">
                          <div className="content">
                            <h4>$1500</h4>
                            <span>per night 4 star rating</span>
                          </div>
                          <a href="tour-details.html" className="theme-btn">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Section Start */}
          <section className="feature-section section-padding fix pt-0">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">All-in-one Travel Assistance</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">Crafting journeys, creating memories plan smarter, travel better</p>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="feature-item">
                    <div className="feature-icon-item">
                      <div className="icon">
                        <i className="flaticon-traveling-1"></i>
                      </div>
                      <h4>
                        Flight Booking &amp; Reservation
                      </h4>
                    </div>
                    <p>
                      Take the stress to travel with our seamless flight booking and reservation services.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="feature-item">
                    <div className="feature-icon-item">
                      <div className="icon">
                        <i className="flaticon-hot-air-balloon"></i>
                      </div>
                      <h4>
                        Hotel &amp; Resort Accommodation
                      </h4>
                    </div>
                    <p>
                      Enjoy a perfect stay with our carefully selected hotels and resorts.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="feature-item">
                    <div className="feature-icon-item">
                      <div className="icon style-2">
                        <i className="flaticon-passport"></i>
                      </div>
                      <h4>
                        Visa &amp; Travel <br /> Assistance
                      </h4>
                    </div>
                    <p>
                      Travel confidently with our comprehensive Visa &amp; Travel Assistance services.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="feature-item">
                    <div className="feature-icon-item">
                      <div className="icon style-2">
                        <i className="flaticon-tent"></i>
                      </div>
                      <h4>
                        Customized &amp; <br /> Private Tours
                      </h4>
                    </div>
                    <p>
                      We design itineraries that match your interests, schedule, and budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Counter Section Start */}
          <section className="counter-section section-padding fix bg-cover" style={{backgroundImage: 'url(/assets/img/home-1/bg.png)'}}>
            <div className="container">
              <div className="counter-wrapper">
                <div className="section-title text-center mb-0">
                  <h2 className="text-white text-anim">Unlimited Travel Experience</h2>
                  <p className="text-white wow fadeInUp" data-wow-delay=".5s">Crafting journeys, creating memories plan smarter, travel better</p>
                </div>
                <div className="row">
                  <div className="counter-main-item">
                    <div className="counter-item wow fadeInUp" data-wow-delay=".3s">
                      <div className="icon">
                        <i className="flaticon-costumer"></i>
                      </div>
                      <div className="content">
                        <h3><span className="count">30</span>k+</h3>
                        <p>Total worldwide satisfied clients</p>
                      </div>
                    </div>
                    <div className="counter-item wow fadeInUp" data-wow-delay=".5s">
                      <div className="icon">
                        <i className="flaticon-suitcase"></i>
                      </div>
                      <div className="content">
                        <h3><span className="count">500</span>+</h3>
                        <p>World tours available in toun</p>
                      </div>
                    </div>
                    <div className="counter-item wow fadeInUp" data-wow-delay=".7s">
                      <div className="icon">
                        <i className="flaticon-excursion"></i>
                      </div>
                      <div className="content">
                        <h3><span className="count">20</span>+</h3>
                        <p>Professional local tour guides</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activities Section Start */}
          <section className="activities-section section-padding fix">
            <div className="container custom-container">
              <div className="activities-wrapper row g-4 g-xl-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-1">
                <div className="col activities-card-item wow fadeInUp">
                  <div className="activities-image">
                    <img src="/assets/img/home-1/activiti/01.jpg" alt="img" />
                  </div>
                  <div className="activities-content">
                    <h4>
                      <a href="destination-details.html">Snorkeling &amp; Scuba Diving</a>
                    </h4>
                  </div>
                </div>
                <div className="col activities-card-item wow fadeInUp" data-wow-delay=".2s">
                  <div className="activities-image">
                    <img src="/assets/img/home-1/activiti/02.jpg" alt="img" />
                  </div>
                  <div className="activities-content">
                    <h4>
                      <a href="destination-details.html">Desert Safari &amp; Camel Rides</a>
                    </h4>
                  </div>
                </div>
                <div className="col activities-card-item wow fadeInUp" data-wow-delay=".4s">
                  <div className="activities-image">
                    <img src="/assets/img/home-1/activiti/03.jpg" alt="img" />
                  </div>
                  <div className="activities-content">
                    <h4>
                      <a href="destination-details.html">Hiking &amp; Nature Trails</a>
                    </h4>
                  </div>
                </div>
                <div className="col activities-card-item wow fadeInUp" data-wow-delay=".6s">
                  <div className="activities-image">
                    <img src="/assets/img/home-1/activiti/04.jpg" alt="img" />
                  </div>
                  <div className="activities-content">
                    <h4>
                      <a href="destination-details.html">Cultural Heritage Tours</a>
                    </h4>
                  </div>
                </div>
                <div className="col activities-card-item wow fadeInUp" data-wow-delay=".8s">
                  <div className="activities-image">
                    <img src="/assets/img/home-1/activiti/05.jpg" alt="img" />
                  </div>
                  <div className="activities-content">
                    <h4>
                      <a href="destination-details.html">Wildlife Safaris</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section Start */}
          <section className="testimonial-section section-padding fix bg-cover" style={{backgroundImage: 'url(/assets/img/home-1/testimonial/bg.jpg)'}}>
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-white text-anim">100k+ Customer Say Us</h2>
                <p className="text-white wow fadeInUp" data-wow-delay=".5s">Join over 100,000 satisfied travelers who have experienced</p>
              </div>
              <div className="testimonial-wrapper">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <div className="swiper testimonial-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="content">
                              <div className="icon">
                                <i className="flaticon-left-quote"></i>
                              </div>
                              <p>
                                &quot;Booking with this agency was
                                the best decision for our Bali trip!
                                from flights to accommodations!&quot;
                              </p>
                              <div className="client-image">
                                <img src="/assets/img/home-1/testimonial/client.png" alt="img" />
                              </div>
                              <h4>Michael Thompson</h4>
                              <span>World traveler</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="content">
                              <div className="icon">
                                <i className="flaticon-left-quote"></i>
                              </div>
                              <p>
                                &quot;Booking with this agency was
                                the best decision for our Bali trip!
                                from flights to accommodations!&quot;
                              </p>
                              <div className="client-image">
                                <img src="/assets/img/home-1/testimonial/client.png" alt="img" />
                              </div>
                              <h4>Michael Thompson</h4>
                              <span>World traveler</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="content">
                              <div className="icon">
                                <i className="flaticon-left-quote"></i>
                              </div>
                              <p>
                                &quot;Booking with this agency was
                                the best decision for our Bali trip!
                                from flights to accommodations!&quot;
                              </p>
                              <div className="client-image">
                                <img src="/assets/img/home-1/testimonial/client.png" alt="img" />
                              </div>
                              <h4>Michael Thompson</h4>
                              <span>World traveler</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="content">
                              <div className="icon">
                                <i className="flaticon-left-quote"></i>
                              </div>
                              <p>
                                &quot;Booking with this agency was
                                the best decision for our Bali trip!
                                from flights to accommodations!&quot;
                              </p>
                              <div className="client-image">
                                <img src="/assets/img/home-1/testimonial/client.png" alt="img" />
                              </div>
                              <h4>Michael Thompson</h4>
                              <span>World traveler</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-dot">
                        <div className="dot2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="testimonial-right-item">
                      <div className="row g-2">
                        <div className="col-xl-7 col-md-6 wow img-custom-anim-left">
                          <div className="testimonial-image">
                            <img src="/assets/img/home-1/testimonial/01.jpg" alt="img" />
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-6 wow img-custom-anim-right">
                          <div className="testimonial-image">
                            <img src="/assets/img/home-1/testimonial/02.jpg" alt="img" />
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-6 wow img-custom-anim-left">
                          <div className="testimonial-image">
                            <img src="/assets/img/home-1/testimonial/03.jpg" alt="img" />
                          </div>
                        </div>
                        <div className="col-xl-7 col-md-6 wow img-custom-anim-right">
                          <div className="testimonial-image">
                            <img src="/assets/img/home-1/testimonial/04.jpg" alt="img" />
                            <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                              <i className="fa-duotone fa-play"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* News Section Start */}
          <section className="news-section section-padding fix">
            <div className="container custom-container-2">
              <div className="section-title text-center">
                <h2 className="text-anim">
                  Read Our Latest News &amp; Blog
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">Crafting journeys, creating memories plan smarter, travel better</p>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="news-card-items">
                    <div className="news-image">
                      <img src="/assets/img/home-1/news/news-1.jpg" alt="img" />
                      <span>18 August</span>
                    </div>
                    <div className="news-content">
                      <span>Tours &amp; travel</span>
                      <h3>
                        <a href="news-details.html">
                          Highlight trending destinations and why they&apos;re worth exploring.
                        </a>
                      </h3>
                      <a href="news-details.html" className="link-btn">Read More <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="news-card-items">
                    <div className="news-image">
                      <img src="/assets/img/home-1/news/news-2.jpg" alt="img" />
                      <span>20 August</span>
                    </div>
                    <div className="news-content">
                      <span>Tours &amp; travel</span>
                      <h3>
                        <a href="news-details.html">
                          Tips on itinerary planning, booking, and travel hacks.
                        </a>
                      </h3>
                      <a href="news-details.html" className="link-btn">Read More <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="news-card-items">
                    <div className="news-image">
                      <img src="/assets/img/home-1/news/news-3.jpg" alt="img" />
                      <span>23 August</span>
                    </div>
                    <div className="news-content">
                      <span>Tours &amp; travel</span>
                      <h3>
                        <a href="news-details.html">
                          Focus on destinations suitable for families with kids.
                        </a>
                      </h3>
                      <a href="news-details.html" className="link-btn">Read More <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="news-card-items">
                    <div className="news-image">
                      <img src="/assets/img/home-1/news/news-4.jpg" alt="img" />
                      <span>24 August</span>
                    </div>
                    <div className="news-content">
                      <span>Tours &amp; travel</span>
                      <h3>
                        <a href="news-details.html">
                          Guide to enjoying luxury stays and experiences without overspending.
                        </a>
                      </h3>
                      <a href="news-details.html" className="link-btn">Read More <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Section Start */}
          <section className="brand-section section-padding fix">
            <div className="container custom-container-2">
              <div className="brand-wrapper">
                <h6>Relied upon by top-performing teams worldwide</h6>
                <div className="swiper brand-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="brand-image text-center">
                        <img src="/assets/img/home-1/brand/01.png" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image text-center">
                        <img src="/assets/img/home-1/brand/02.png" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image text-center">
                        <img src="/assets/img/home-1/brand/03.png" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image text-center">
                        <img src="/assets/img/home-1/brand/04.png" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image text-center">
                        <img src="/assets/img/home-1/brand/05.png" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image text-center">
                        <img src="/assets/img/home-1/brand/06.png" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-image text-center">
                        <img src="/assets/img/home-1/brand/07.png" alt="img" />
                      </div>
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
                          Ready for Your Next Adventure?
                        </h2>
                      </div>
                      <p className="text wow fadeInUp" data-wow-delay=".3s">
                        Let ASA Holidays take you on a journey of a lifetime. From Europe to Asia, we have the perfect tour package waiting for you.
                      </p>
                      <a href="tour-grid.html" className="theme-btn">Browse All Tours</a>
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
                  <div className="col-xl-2 col-md-4 col-lg-3 wow fadeInUp">
                    <div className="single-footer-widget">
                      <div className="wid-title">
                        <h4>Services</h4>
                      </div>
                      <ul className="list-area">
                        <li>
                          <a href="tour-grid.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Group Tours
                          </a>
                        </li>
                        <li>
                          <a href="tour-list.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Free &amp; Easy
                          </a>
                        </li>
                        <li>
                          <a href="destination.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Cruises
                          </a>
                        </li>
                        <li>
                          <a href="about.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            MICE Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
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
                          <a href="team.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Careers
                          </a>
                        </li>
                        <li>
                          <a href="faq.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            FAQ
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-md-4 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                    <div className="single-footer-widget">
                      <div className="wid-title">
                        <h4>Destinations</h4>
                      </div>
                      <ul className="list-area">
                        <li>
                          <a href="tour-grid.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Europe
                          </a>
                        </li>
                        <li>
                          <a href="tour-grid.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Japan
                          </a>
                        </li>
                        <li>
                          <a href="tour-grid.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            China
                          </a>
                        </li>
                        <li>
                          <a href="tour-grid.html">
                            <i className="fa-solid fa-chevron-right"></i>
                            Korea &amp; Australia
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".6s">
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
                            101 Upper Cross Street #05-36 <br />
                            People&apos;s Park Centre, Singapore 058357
                          </h6>
                        </div>
                      </div>
                      <div className="contact-item">
                        <div className="icon">
                          <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="content">
                          <h6>
                            <a href="mailto:enquiry@asaholiday.com">enquiry@asaholiday.com</a>
                          </h6>
                        </div>
                      </div>
                      <div className="contact-item mb-0">
                        <div className="icon">
                          <i className="fa-regular fa-phone-volume"></i>
                        </div>
                        <div className="content">
                          <h6>
                            <a href="tel:+6565343722">+65 6534 3722</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay=".8s">
                    <div className="single-footer-widget">
                      <div className="wid-title">
                        <h4>Subscribe to Our Newsletter <br />
                          for Exclusive Deals
                        </h4>
                      </div>
                      <div className="newsletter-content">
                        <p>
                          Stay updated with the latest tour packages,
                          special promotions and travel tips from ASA Holidays
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
            <div className="footer-bottom style-1">
              <div className="container">
                <div className="footer-wrapper">
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">ASA Holidays</h2>
                  <div className="text-item wow fadeInUp" data-wow-delay=".5s">
                    <p>&copy; 2025 <span>ASA Holidays,</span> All rights reserved</p>
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
