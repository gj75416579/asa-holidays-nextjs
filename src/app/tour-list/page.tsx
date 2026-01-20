'use client'

export default function TourList() {
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
                  <a href="tel:+1-234-567-889">Call : +1-234-567-889</a>
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
          {/* Breadcrumb Section Start */}
          <div className="breadcrumb-wrapper-2 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-1.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">Tour List</h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="style-2">
                    Tour List
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tour List Section Start */}
          <section className="tour-list-section section-padding">
            <div className="container">
              <div className="tour-list-wrapper">
                <div className="row g-4">
                  <div className="col-lg-4 col-12 order-2 order-xl-1">
                    <div className="sticky-style">
                      <div className="tour-main-sideber">
                        <div className="tour-sidebar-items">
                          <div className="widget-title">
                            <h4>Filter by Price</h4>
                          </div>
                          <div className="price-filter-wrap">
                            <div className="price-slider-range"></div>
                            <div className="price">
                              <span>Price </span>
                              <input type="text" id="price" readOnly />
                            </div>
                          </div>
                        </div>
                        <div className="tour-sidebar-items">
                          <div className="widget-title">
                            <h4>By Activities</h4>
                          </div>
                          <ul className="radio-filter">
                            <li>
                              <input className="form-check-input" type="radio" defaultChecked name="ByActivities" id="activity1" />
                              <label htmlFor="activity1">Sea Beach <span>18</span></label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity2" />
                              <label htmlFor="activity2">Car Parking <span>29</span></label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity3" />
                              <label htmlFor="activity3">Laundry Service <span>23</span></label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity4" />
                              <label htmlFor="activity4">Outdoor Seating <span>25</span></label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity5" />
                              <label htmlFor="activity5">Reservations <span>26</span></label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity6" />
                              <label htmlFor="activity6">Hiking <span>28</span></label>
                            </li>
                          </ul>
                        </div>
                        <div className="tour-sidebar-items">
                          <div className="widget-title">
                            <h4>Tour Types</h4>
                          </div>
                          <ul className="radio-filter">
                            <li>
                              <input className="form-check-input" type="radio" defaultChecked name="ByActivities" id="activity7" />
                              <label htmlFor="activity7">Daily Tours</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity8" />
                              <label htmlFor="activity8">Group Tours</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity9" />
                              <label htmlFor="activity9">Family Tours</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity10" />
                              <label htmlFor="activity10">Package Tours</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity11" />
                              <label htmlFor="activity11">Holiday Tours</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByActivities" id="activity12" />
                              <label htmlFor="activity12">Private Tours</label>
                            </li>
                          </ul>
                        </div>
                        <div className="tour-sidebar-items">
                          <div className="widget-title">
                            <h4>By Languages</h4>
                          </div>
                          <ul className="radio-filter">
                            <li>
                              <input className="form-check-input" type="radio" defaultChecked name="ByLanguages" id="language13" />
                              <label htmlFor="language13">American</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByLanguages" id="language14" />
                              <label htmlFor="language14">English</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByLanguages" id="language15" />
                              <label htmlFor="language15">German</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByLanguages" id="language16" />
                              <label htmlFor="language16">Japanese</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByLanguages" id="language17" />
                              <label htmlFor="language17">Vietnamese</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByLanguages" id="language18" />
                              <label htmlFor="language18">French</label>
                            </li>
                          </ul>
                        </div>
                        <div className="tour-sidebar-items">
                          <div className="widget-title">
                            <h4>Duration</h4>
                          </div>
                          <ul className="radio-filter">
                            <li>
                              <input className="form-check-input" type="radio" defaultChecked name="Duration" id="duration19" />
                              <label htmlFor="duration19">0 - 2 hours</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="Duration" id="duration20" />
                              <label htmlFor="duration20">2 - 4 hours</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="Duration" id="duration21" />
                              <label htmlFor="duration21">4 - 8 hours</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="Duration" id="duration22" />
                              <label htmlFor="duration22">Fulda (+8 hours)</label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="Duration" id="duration23" />
                              <label htmlFor="duration23">Multi days</label>
                            </li>
                          </ul>
                        </div>
                        <div className="tour-sidebar-items border-none">
                          <div className="widget-title">
                            <h4>By Reviews</h4>
                          </div>
                          <ul className="radio-filter">
                            <li>
                              <input className="form-check-input" type="radio" defaultChecked name="ByReviews" id="review24" />
                              <label htmlFor="review24">
                                <span className="ratting">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </span>
                              </label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByReviews" id="review25" />
                              <label htmlFor="review25">
                                <span className="ratting">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star-half-alt white"></i>
                                </span>
                              </label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByReviews" id="review26" />
                              <label htmlFor="review26">
                                <span className="ratting">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star white"></i>
                                  <i className="fas fa-star-half-alt white"></i>
                                </span>
                              </label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByReviews" id="review27" />
                              <label htmlFor="review27">
                                <span className="ratting">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star white"></i>
                                  <i className="fas fa-star white"></i>
                                  <i className="fas fa-star-half-alt white"></i>
                                </span>
                              </label>
                            </li>
                            <li>
                              <input className="form-check-input" type="radio" name="ByReviews" id="review28" />
                              <label htmlFor="review28">
                                <span className="ratting">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star white"></i>
                                  <i className="fas fa-star white"></i>
                                  <i className="fas fa-star white"></i>
                                  <i className="fas fa-star-half-alt white"></i>
                                </span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tour-sidebar-bg-image-items">
                        <img src="/assets/img/inner-page/tour-sidebar/sidebar-image.jpg" alt="img" />
                        <div className="tour-bg-content">
                          <span>xplore The World</span>
                          <h3>
                            <a href="tour-details.html">Best Tourist Place</a>
                          </h3>
                          <a href="tour-details.html" className="theme-btn">Explore Tours</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 order-1 order-xl-2">
                    <div className="tour-list-wrap">
                      <div className="list-wrap">
                        <ul className="nav">
                          <li className="nav-item">
                            <a href="#grid" data-bs-toggle="tab" className="nav-link">
                              <i className="fa-regular fa-grid-2"></i>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#list" data-bs-toggle="tab" className="nav-link active">
                              <i className="fas fa-bars"></i>
                            </a>
                          </li>
                        </ul>
                        <p>34 Tours found</p>
                      </div>
                      <div className="right-item">
                        <h6>Sort By</h6>
                        <div className="form-clt">
                          <div className="nice-select" tabIndex={0}>
                            <span className="current">
                              Bali, Indonesia
                            </span>
                            <ul className="list">
                              <li data-value="1" className="option selected focus">
                                Bali, Indonesia
                              </li>
                              <li data-value="1" className="option">
                                Ella, Sri Lanka
                              </li>
                              <li data-value="1" className="option">
                                Soria, Castilla
                              </li>
                              <li data-value="1" className="option">
                                Giza, Egypt
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-content">
                      <div id="grid" className="tab-pane fade">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6">
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
                                  <h5><span>Tours Price</span>$49.00</h5>
                                </div>
                                <h3>
                                  <a href="tour-details.html">
                                    Relinking Beach in Nusa panada island, Bali, Indonesia
                                  </a>
                                </h3>
                                <ul className="tour-list">
                                  <li>
                                    <i className="fa-regular fa-location-dot"></i>
                                    Bali, Indonesia
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
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
                                  <h5><span>Tours Price</span>$49.00</h5>
                                </div>
                                <h3>
                                  <a href="tour-details.html">
                                    Scenic Kayaking Setup Along <br /> Duero River, Soria
                                  </a>
                                </h3>
                                <ul className="tour-list">
                                  <li>
                                    <i className="fa-regular fa-location-dot"></i>
                                    Soria, Castilla
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="tour-place-item">
                              <div className="tour-place-image">
                                <img src="/assets/img/home-1/tour/tour-10.jpg" alt="img" />
                                <span>13% Off</span>
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
                                    Camel safaris along desert dunes near roads and small villages
                                  </a>
                                </h3>
                                <ul className="tour-list">
                                  <li>
                                    <i className="fa-regular fa-location-dot"></i>
                                    Giza, Egypt
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
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
                                  <h5><span>Tours Price</span>$49.00</h5>
                                </div>
                                <h3>
                                  <a href="tour-details.html">
                                    Tourists Visits the Aqueduct in Segovia Spain
                                  </a>
                                </h3>
                                <ul className="tour-list">
                                  <li>
                                    <i className="fa-regular fa-location-dot"></i>
                                    Segovia, CL, Spain
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="tour-place-item">
                              <div className="tour-place-image">
                                <img src="/assets/img/home-1/tour/tour-16.jpg" alt="img" />
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
                          <div className="col-xl-6 col-lg-6 col-md-6">
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
                                  <h5><span>Tours Price</span>$49.00</h5>
                                </div>
                                <h3>
                                  <a href="tour-details.html">
                                    Relinking Beach in Nusa panada island, Bali, Indonesia
                                  </a>
                                </h3>
                                <ul className="tour-list">
                                  <li>
                                    <i className="fa-regular fa-location-dot"></i>
                                    Bali, Indonesia
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
                      <div id="list" className="tab-pane fade show active">
                        <div className="tour-list-box-items">
                          <div className="tour-image">
                            <img src="/assets/img/inner-page/tour-list/tour-01.jpg" alt="img" />
                            <span>Featured</span>
                            <div className="icon">
                              <i className="fa-regular fa-heart"></i>
                            </div>
                          </div>
                          <div className="tour-content">
                            <h3><a href="tour-details.html">White Canopy Tent on White Building Near Ocean</a></h3>
                            <ul>
                              <li>
                                <i className="fa-regular fa-location-dot"></i>
                                Santorini, Greece
                              </li>
                              <li>
                                <i className="fa-regular fa-timer"></i>
                                1 - 3 days
                              </li>
                              <li>
                                <i className="fa-solid fa-users"></i>
                                1 - 5
                              </li>
                            </ul>
                            <div className="bottom-list-items">
                              <div className="list-1">
                                <p>Start Price</p>
                                <h4>$49.00</h4>
                              </div>
                              <div className="list-2">
                                <p>Rating</p>
                                <span><i className="fa-solid fa-star-sharp"></i>4.8 (190k+)</span>
                              </div>
                              <a href="tour-details.html" className="theme-btn">View Tour</a>
                            </div>
                          </div>
                        </div>
                        <div className="tour-list-box-items">
                          <div className="tour-image">
                            <img src="/assets/img/inner-page/tour-list/tour-02.jpg" alt="img" />
                            <div className="icon">
                              <i className="fa-regular fa-heart"></i>
                            </div>
                          </div>
                          <div className="tour-content">
                            <h3><a href="tour-details.html">Man And Woman Standing On Deck, Maldives</a></h3>
                            <ul>
                              <li>
                                <i className="fa-regular fa-location-dot"></i>
                                Santorini, Greece
                              </li>
                              <li>
                                <i className="fa-regular fa-timer"></i>
                                1 - 3 days
                              </li>
                              <li>
                                <i className="fa-solid fa-users"></i>
                                1 - 5
                              </li>
                            </ul>
                            <div className="bottom-list-items">
                              <div className="list-1">
                                <p>Start Price</p>
                                <h4>$49.00</h4>
                              </div>
                              <div className="list-2">
                                <p>Rating</p>
                                <span><i className="fa-solid fa-star-sharp"></i>4.8 (190k+)</span>
                              </div>
                              <a href="tour-details.html" className="theme-btn">View Tour</a>
                            </div>
                          </div>
                        </div>
                        <div className="tour-list-box-items">
                          <div className="tour-image">
                            <img src="/assets/img/inner-page/tour-list/tour-03.jpg" alt="img" />
                            <div className="icon">
                              <i className="fa-regular fa-heart"></i>
                            </div>
                          </div>
                          <div className="tour-content">
                            <h3><a href="tour-details.html">Relinking Beach in Nusa panada island, Bali, Indonesia</a></h3>
                            <ul>
                              <li>
                                <i className="fa-regular fa-location-dot"></i>
                                Santorini, Greece
                              </li>
                              <li>
                                <i className="fa-regular fa-timer"></i>
                                1 - 3 days
                              </li>
                              <li>
                                <i className="fa-solid fa-users"></i>
                                1 - 5
                              </li>
                            </ul>
                            <div className="bottom-list-items">
                              <div className="list-1">
                                <p>Start Price</p>
                                <h4>$49.00</h4>
                              </div>
                              <div className="list-2">
                                <p>Rating</p>
                                <span><i className="fa-solid fa-star-sharp"></i>4.8 (190k+)</span>
                              </div>
                              <a href="tour-details.html" className="theme-btn">View Tour</a>
                            </div>
                          </div>
                        </div>
                        <div className="tour-list-box-items">
                          <div className="tour-image">
                            <img src="/assets/img/inner-page/tour-list/tour-04.jpg" alt="img" />
                            <div className="icon">
                              <i className="fa-regular fa-heart"></i>
                            </div>
                          </div>
                          <div className="tour-content">
                            <h3><a href="tour-details.html">Turquoise Sea off the Coast of Bali, Indonesia</a></h3>
                            <ul>
                              <li>
                                <i className="fa-regular fa-location-dot"></i>
                                Santorini, Greece
                              </li>
                              <li>
                                <i className="fa-regular fa-timer"></i>
                                1 - 3 days
                              </li>
                              <li>
                                <i className="fa-solid fa-users"></i>
                                1 - 5
                              </li>
                            </ul>
                            <div className="bottom-list-items">
                              <div className="list-1">
                                <p>Start Price</p>
                                <h4>$49.00</h4>
                              </div>
                              <div className="list-2">
                                <p>Rating</p>
                                <span><i className="fa-solid fa-star-sharp"></i>4.8 (190k+)</span>
                              </div>
                              <a href="tour-details.html" className="theme-btn">View Tour</a>
                            </div>
                          </div>
                        </div>
                        <div className="tour-list-box-items">
                          <div className="tour-image">
                            <img src="/assets/img/inner-page/tour-list/tour-05.jpg" alt="img" />
                            <span>Featured</span>
                            <div className="icon">
                              <i className="fa-regular fa-heart"></i>
                            </div>
                          </div>
                          <div className="tour-content">
                            <h3><a href="tour-details.html">Blue Train on Rails in Sri Lanka Idalgashinna, UP, Sri Lanka</a></h3>
                            <ul>
                              <li>
                                <i className="fa-regular fa-location-dot"></i>
                                Santorini, Greece
                              </li>
                              <li>
                                <i className="fa-regular fa-timer"></i>
                                1 - 3 days
                              </li>
                              <li>
                                <i className="fa-solid fa-users"></i>
                                1 - 5
                              </li>
                            </ul>
                            <div className="bottom-list-items">
                              <div className="list-1">
                                <p>Start Price</p>
                                <h4>$49.00</h4>
                              </div>
                              <div className="list-2">
                                <p>Rating</p>
                                <span><i className="fa-solid fa-star-sharp"></i>4.8 (190k+)</span>
                              </div>
                              <a href="tour-details.html" className="theme-btn">View Tour</a>
                            </div>
                          </div>
                        </div>
                        <div className="tour-list-box-items">
                          <div className="tour-image">
                            <img src="/assets/img/inner-page/tour-list/tour-06.jpg" alt="img" />
                            <div className="icon">
                              <i className="fa-regular fa-heart"></i>
                            </div>
                          </div>
                          <div className="tour-content">
                            <h3><a href="tour-details.html">Traditional oriental shrine against forest on mountain</a></h3>
                            <ul>
                              <li>
                                <i className="fa-regular fa-location-dot"></i>
                                Santorini, Greece
                              </li>
                              <li>
                                <i className="fa-regular fa-timer"></i>
                                1 - 3 days
                              </li>
                              <li>
                                <i className="fa-solid fa-users"></i>
                                1 - 5
                              </li>
                            </ul>
                            <div className="bottom-list-items">
                              <div className="list-1">
                                <p>Start Price</p>
                                <h4>$49.00</h4>
                              </div>
                              <div className="list-2">
                                <p>Rating</p>
                                <span><i className="fa-solid fa-star-sharp"></i>4.8 (190k+)</span>
                              </div>
                              <a href="tour-details.html" className="theme-btn">View Tour</a>
                            </div>
                          </div>
                        </div>
                        <div className="tour-list-box-items">
                          <div className="tour-image">
                            <img src="/assets/img/inner-page/tour-list/tour-07.jpg" alt="img" />
                            <div className="icon">
                              <i className="fa-regular fa-heart"></i>
                            </div>
                          </div>
                          <div className="tour-content">
                            <h3><a href="tour-details.html">White buildings in blue accents near the Atlantic shore.</a></h3>
                            <ul>
                              <li>
                                <i className="fa-regular fa-location-dot"></i>
                                Santorini, Greece
                              </li>
                              <li>
                                <i className="fa-regular fa-timer"></i>
                                1 - 3 days
                              </li>
                              <li>
                                <i className="fa-solid fa-users"></i>
                                1 - 5
                              </li>
                            </ul>
                            <div className="bottom-list-items">
                              <div className="list-1">
                                <p>Start Price</p>
                                <h4>$49.00</h4>
                              </div>
                              <div className="list-2">
                                <p>Rating</p>
                                <span><i className="fa-solid fa-star-sharp"></i>4.8 (190k+)</span>
                              </div>
                              <a href="tour-details.html" className="theme-btn">View Tour</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="page-nav-wrap">
                      <ul>
                        <li><a className="page-numbers active" href="#"><i className="fa-solid fa-chevron-left"></i></a></li>
                        <li><a className="page-numbers" href="#">1</a></li>
                        <li><a className="page-numbers" href="#">2</a></li>
                        <li><a className="page-numbers" href="#">3</a></li>
                        <li><a className="page-numbers style-2" href="#"><i className="fa-solid fa-chevron-right"></i></a></li>
                      </ul>
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
                          Adventure Is Calling – Are You Ready?
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
