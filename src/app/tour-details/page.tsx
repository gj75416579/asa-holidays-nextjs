'use client';

export default function TourDetails() {
  return (
    <>
      {/* Preloader Start */}
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
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
          {/* Hero Section Start */}
          <div className="breadcrumb-wrapper fix">
            <div className="container">
              <div className="page-heading style-2">
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="style-2 style-3">
                    Tour Details
                  </li>
                </ul>
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">
                    Relinking Beach in Nusa panada <br />
                    island, Bali, Indonesia
                  </h1>
                </div>
                <ul className="list">
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

          {/* tour-details Section Start */}
          <section className="tour-details-section section-padding pt-0 fix">
            <div className="container">
              <div className="tour-details-wrappers">
                <div className="row g-2">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-1.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-2.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-3.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-4.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-5.jpg" alt="img" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="details-image">
                      <img src="/assets/img/inner-page/tour-details/details-6.jpg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="tour-details-content">
                  <div className="row g-4">
                    <div className="col-lg-8 col-12">
                      <div className="tour-left-content">
                        <h3>Tours Overview</h3>
                        <p className="mt-3 mb-3">
                          Bali, often called &quot;The Island of Gods&quot;, is one of the world&apos;s most captivating travel destinations. Located in Indonesia, this tropical paradise is famous for its pristine beaches, lush rice terraces, vibrant nightlife, and deeply spiritual culture. Whether you&apos;re seeking adventure, relaxation, or cultural immersion, Bali offers an experience like no other.
                        </p>
                        <p className="mb-5">
                          Visitors can unwind on stunning beaches like Kuta, Seminyak, and Nusa Dua, or escape to bud for peaceful retreat surrounded by rice fields, art galleries, and yoga centers. Adventure seekers can explore volcano hikes at Mount Batur, diving in crystal-clear waters, or surfing world-class waves. Bali is also rich in tradition, with thousands of temples, colorful ceremonies, and warm hospitality from locals.
                        </p>
                        <div className="row g-4 mb-5">
                          <div className="col-lg-6">
                            <div className="list-item">
                              <h3>Included and Excluded</h3>
                              <ul className="list">
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Pick and Drop Services
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  1 Meal Per Day
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Cruise Dinner &amp; Music Event
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Visit 7 Best Places in the City
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Bottled Water on Buses
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Transportation Luxury Tour Bus
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="list-item">
                              <h3>Excluded</h3>
                              <ul className="list">
                                <li>
                                  <i className="fa-solid fa-xmark"></i>
                                  Gratuities
                                </li>
                                <li>
                                  <i className="fa-solid fa-xmark"></i>
                                  Hotel pickup and drop-off
                                </li>
                                <li>
                                  <i className="fa-solid fa-xmark"></i>
                                  Lunch, Food &amp; Drinks
                                </li>
                                <li>
                                  <i className="fa-solid fa-xmark"></i>
                                  Optional upgrade to a glass
                                </li>
                                <li>
                                  <i className="fa-solid fa-xmark"></i>
                                  Additional Services
                                </li>
                                <li>
                                  <i className="fa-solid fa-xmark"></i>
                                  Insurance
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <h3>Top Highlights</h3>
                        <p className="mt-3">
                          Bali is more than just a tropical destination—it&apos;s a paradise filled with unforgettable experiences. from its sacred temples perched on dramatic cliffs to golden beaches that stretch for miles, every corner of the island offers something unique.
                        </p>
                        <ul className="list-2">
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Explore iconic sites like Tanah Lot, Uluwatu, and Besakih Temple.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Relax on Kuta, Seminyak, Nusa Dua, and Jimbaran Bay.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Discover rice terraces, art markets, yoga retreats, and monkey forests.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Hike an active volcano for breathtaking sunrise views.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Experience beach clubs, rooftop bars, and live music in Seminyak and Canggu.
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Visit Tegenungan, Gitgit, and Sekumpul waterfalls for adventure and serenity.
                          </li>
                        </ul>
                        <h3>Itinerary</h3>
                        <div className="accordion-two" id="faq-accordion-two">
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoOne" aria-expanded="false" aria-controls="collapseTwoOne">
                                Day 1 - Arrive at campground
                              </button>
                            </h5>
                            <div id="collapseTwoOne" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTwo" aria-expanded="false" aria-controls="collapseTwoTwo">
                                Day 2 - Wake up early and embark on a day hike
                              </button>
                            </h5>
                            <div id="collapseTwoTwo" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoThree" aria-expanded="false" aria-controls="collapseTwoThree">
                                Day 3 - Join a guided ranger-led nature walk
                              </button>
                            </h5>
                            <div id="collapseTwoThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoFour" aria-expanded="false" aria-controls="collapseTwoFour">
                                Day 4 - Take a break from hiking
                              </button>
                            </h5>
                            <div id="collapseTwoFour" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoFive" aria-expanded="false" aria-controls="collapseTwoFive">
                                Day 5 - Pack a lunch and embark on a longer hike
                              </button>
                            </h5>
                            <div id="collapseTwoFive" className="accordion-collapse collapse" data-bs-parent="#faq-accordion-two">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3>Frequently Asked Questions</h3>
                        <div className="accordion-one mt-25 mb-60" id="faq-accordion">
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                01_How do I book a tour or travel package?
                              </button>
                            </h5>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                02_What is included in the travel package?
                              </button>
                            </h5>
                            <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                03_What is your cancellation and refund policy?
                              </button>
                            </h5>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                04_Can I customize my tour or travel package?
                              </button>
                            </h5>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h5 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                05_What documents do I need to travel?
                              </button>
                            </h5>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                              <div className="accordion-body">
                                <p>
                                  The early start ensures you can fully immerse yourself in the tranquility of nature before the world fully awakens. As the morning light filters through the trees, you&apos;ll experience the crisp, fresh air and the peaceful sounds of the forest. The trail ahead offers both a physical challenge promise of breathtaking.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3>Maps</h3>
                        <div className="map-items">
                          <div className="googpemap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                          </div>
                        </div>
                        <h3>Clients Reviews</h3>
                        <div className="courses-reviews-box-items">
                          <div className="courses-reviews-box">
                            <div className="reviews-box">
                              <h2><span className="count">4.8</span></h2>
                              <p>856 Reviews</p>
                              <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                            </div>
                            <div className="reviews-ratting-right">
                              <div className="reviews-ratting-item">
                                <span>Services</span>
                                <div className="progress">
                                  <div className="progress-value style-two"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                              </div>
                              <div className="reviews-ratting-item">
                                <span>Guides</span>
                                <div className="progress">
                                  <div className="progress-value style-three"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                              </div>
                              <div className="reviews-ratting-item">
                                <span>Price</span>
                                <div className="progress">
                                  <div className="progress-value style-three"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                              </div>
                              <div className="reviews-ratting-item">
                                <span>Safety</span>
                                <div className="progress">
                                  <div className="progress-value style-four"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                  <i className="far fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                              </div>
                              <div className="reviews-ratting-item">
                                <span>Foods</span>
                                <div className="progress">
                                  <div className="progress-value style-five"></div>
                                </div>
                                <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3>Add Reviews</h3>
                        <div className="contact-box">
                          <h4>Leave Feedback</h4>
                          <form action="contact.php" id="contact-form1" method="POST" className="contact-form-items">
                            <div className="row g-4">
                              <div className="col-lg-6">
                                <div className="form-clt">
                                  <span>Name</span>
                                  <input type="text" name="name" id="name331" placeholder="Full Name" />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-clt">
                                  <span>Phone</span>
                                  <input type="text" name="name" id="name22" placeholder="Phone Number" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-clt">
                                  <span>Email</span>
                                  <input type="text" name="name" id="email11" placeholder="Your email" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-clt">
                                  <span>Comments</span>
                                  <textarea name="message" id="message1" placeholder="Type your message"></textarea>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <button type="submit" className="theme-btn">
                                  Send Your Reviews
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12">
                      <div className="tour-details-side">
                        <div className="tour-details-sidebar sticky-style">
                          <div className="tour-sidebar-items">
                            <h3>Tour Booking</h3>
                            <ul className="form-list">
                              <li>
                                From Date:
                                <div className="form-clt">
                                  <div className="date mb-25">
                                    <input type="date" />
                                  </div>
                                </div>
                              </li>
                              <li>
                                Time:
                                <div className="form-clt d-flex gap-3">
                                  <label className="checkbox-single">
                                    <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                      <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                      </span>
                                      <span className="text-color">
                                        12:00
                                      </span>
                                    </span>
                                  </label>
                                  <label className="checkbox-single">
                                    <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                      <span className="checkbox-area d-center">
                                        <input type="checkbox" />
                                        <span className="checkmark d-center"></span>
                                      </span>
                                      <span className="text-color">
                                        10:00
                                      </span>
                                    </span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                            <div className="tickets-list">
                              <p>Tickets</p>
                              <ul>
                                <li>
                                  18+ Years: <b>$168</b>
                                  <div className="form-clt">
                                    <div className="form">
                                      <select className="single-select w-100">
                                        <option> 01</option>
                                        <option> 02</option>
                                        <option> 03</option>
                                        <option> 04</option>
                                      </select>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  18- Years: <b>$100</b>
                                  <div className="form-clt">
                                    <div className="form">
                                      <select className="single-select w-100">
                                        <option> 01</option>
                                        <option> 02</option>
                                        <option> 03</option>
                                        <option> 04</option>
                                      </select>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="extra-items">
                              <p>Add Extra:</p>
                              <label className="checkbox-single d-flex justify-content-between align-items-center">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                  <span className="checkbox-area d-center">
                                    <input type="checkbox" />
                                    <span className="checkmark d-center"></span>
                                  </span>
                                  <span className="text-color">
                                    Add service per booking
                                  </span>
                                </span>
                                <span className="text-color">$45</span>
                              </label>
                              <label className="checkbox-single d-flex justify-content-between align-items-center">
                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                  <span className="checkbox-area d-center">
                                    <input type="checkbox" />
                                    <span className="checkmark d-center"></span>
                                  </span>
                                  <span className="text-color">
                                    Add service per personal
                                  </span>
                                </span>
                                <span className="text-color">$35</span>
                              </label>
                            </div>
                            <ul className="total-list">
                              <li>
                                Total:
                              </li>
                              <li>
                                $80
                              </li>
                            </ul>
                            <button className="theme-btn" type="submit">
                              Book Now
                            </button>
                            <p className="text">Need some help?</p>
                          </div>
                          <div className="widget-contact">
                            <h3>Need Help?</h3>
                            <ul className="list-style-one">
                              <li><i className="far fa-envelope"></i> <a href="mailto:helpxample@gmail.com">helpxample@gmail.com</a></li>
                              <li><i className="far fa-phone-volume"></i> <a href="tel:+000(123)45688">+000 (123) 456 88</a></li>
                            </ul>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tour Grid Section Start */}
          <section className="tour-grid-section section-padding pt-0 fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">Related Trips You Might Also Like</h2>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
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
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
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
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
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
  );
}
