'use client'

export default function NewsDetails() {
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
          {/* Hero Section Start */}
          <div className="breadcrumb-wrapper fix">
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">Blog Details</h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="style-2">
                    Blog Details
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* News Section Start */}
          <section className="news-details-section section-padding pt-0">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-8 col-12">
                  <div className="news-details-post">
                    <ul className="list">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="style-2">Single blog</li>
                    </ul>
                    <h2>
                      Best family-friendly travel spots around the world eco-friendly travel how to make your trips sustainable
                    </h2>
                    <ul className="list-items">
                      <li className="list">
                        Tours &amp; travel
                      </li>
                      <li className="list">
                        By Admin
                      </li>
                      <li className="list">
                        20 August 2025
                      </li>
                      <li className="list">
                        Comments (5)
                      </li>
                    </ul>
                    <div className="news-details-content">
                      <p>
                        Make every moment of your journey unforgettable with our exciting range of tour activities. from breathtaking city sightseeing and cultural heritage tours to adrenaline-pumping adventures like hiking, snorkeling, and desert safaris, we have something for every traveler.
                      </p>
                      <div className="details-thumb">
                        <img src="/assets/img/inner-page/news-details/details-1.jpg" alt="img" />
                      </div>
                      <h3>Eco-Friendly Travel How to Make Your Trips Sustainable</h3>
                      <p className="mt-2">
                        Agency plays a pivotal role in crafting memorable experiences for travelers by offering wide range services tailored to individual preferences. Whether it&apos;s a family vacation, an adventure trip, or luxury getaway well-established travel agency can handle everything from flight bookings and accommodation to guided tours .
                      </p>
                      <p className="mt-4">
                        We have something for every traveler. indulge in local cuisines, explore hidden gems, and enjoy unique experiences
                        that go beyond the ordinary. whether you&apos;re seeking relaxation or adventure, our curated activities ensure your trip is packed with memories that last a lifetime.
                      </p>
                      <div className="sideber">
                        <div className="icon">
                          <i className="flaticon-quote"></i>
                        </div>
                        <div className="content">
                          <h5>
                            &quot;In the world of tours and travel, every journey is an invitation to explore
                            the unknown, connect with cultures, and create memories that last lifetime
                            It&apos;s not just about the destination,extraordinary adventures.&quot;
                          </h5>
                          <span>Kevin F. Glasscock</span>
                        </div>
                      </div>
                      <div className="details-thumb">
                        <img src="/assets/img/inner-page/news-details/details-2.jpg" alt="img" />
                      </div>
                      <h3>Adventure Awaits Thrilling Activities for Bold Travelers</h3>
                      <p className="mt-2">
                        Stay connected and never miss a deal! subscribe to our newsletter and get exclusive travel offers, insider tips, and the latest destination trends delivered straight to your inbox. from budget-friendly deals to expert travel advice, we&apos;ll help you plan the perfect trip every time. join our community of travelers today and start exploring smarter!
                      </p>
                      <div className="row tag-share-wrap">
                        <div className="col-xl-8 col-lg-7">
                          <div className="tagcloud">
                            <span>Tags:</span>
                            <a href="news-details.html">Travel</a>
                            <a href="news-details.html">Guide</a>
                            <a href="news-details.html">Hiking</a>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                          <div className="social-share">
                            <span>Share</span>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="client-info-box">
                        <div className="client-image">
                          <img src="/assets/img/inner-page/news-details/client-1.png" alt="img" />
                        </div>
                        <div className="info-content">
                          <h5>Richard M. Fudge</h5>
                          <span>Author</span>
                          <p>
                            &quot;I&apos;ve traveled with many agencies, but this one stands out! personalized approach and attention to detail made our honeymoon unforgettable.
                          </p>
                          <div className="social-icon">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <h4>Related post</h4>
                      <div className="related-post-item">
                        <div className="recent-item">
                          <div className="recent-thumb">
                            <img src="/assets/img/inner-page/news-details/post-1.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>20 August 2025</span>
                            <h5>
                              <a href="news-details.html">
                                Best Family-Friendly Travel <br /> Spots Around the World
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="recent-item">
                          <div className="recent-thumb">
                            <img src="/assets/img/inner-page/news-details/post-2.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>23 August 2025</span>
                            <h5>
                              <a href="news-details.html">
                                Luxury Travel on a Budget <br /> Secrets Revealed
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="comment-area">
                        <h3>Comments</h3>
                        <div className="comment-item">
                          <div className="comment-image">
                            <img src="/assets/img/inner-page/news-details/comment.jpg" alt="img" />
                          </div>
                          <div className="content">
                            <h6>Lonnie B. Horwitz</h6>
                            <span><i className="far fa-calendar-alt"></i> September 25 ,2025</span>
                            <p>
                              Tours and travels play a crucial role in enriching lives by offering unique experiences, cultural exchanges, and the joy of exploration.
                            </p>
                            <a className="read-more" href="#">Reply <i className="far fa-angle-right"></i></a>
                          </div>
                        </div>
                        <div className="comment-item style-2">
                          <div className="comment-image">
                            <img src="/assets/img/inner-page/news-details/comment-2.jpg" alt="img" />
                          </div>
                          <div className="content">
                            <h6>Jaime B. Wilson</h6>
                            <span><i className="far fa-calendar-alt"></i> September 25 ,2025</span>
                            <p>
                              Tours and travels play a crucial role in enriching lives by offering unique experiences, cultural exchanges, and the joy of exploration.
                            </p>
                            <a className="read-more" href="#">Reply <i className="far fa-angle-right"></i></a>
                          </div>
                        </div>
                        <div className="comment-item">
                          <div className="comment-image">
                            <img src="/assets/img/inner-page/news-details/comment-3.jpg" alt="img" />
                          </div>
                          <div className="content">
                            <h6>Michael A. Saladin</h6>
                            <span><i className="far fa-calendar-alt"></i> September 25 ,2025</span>
                            <p>
                              Tours and travels play a crucial role in enriching lives by offering unique experiences, cultural exchanges, and the joy of exploration.
                            </p>
                            <a className="read-more" href="#">Reply <i className="far fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="comment-form-wrap">
                        <h4>Leave a comments</h4>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form action="#">
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="form-clt">
                                <input type="text" name="name" id="name" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-clt">
                                <input type="text" name="email" id="email6" placeholder="Email" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-clt">
                                <textarea name="message" id="message" placeholder="Write comment"></textarea>
                              </div>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                Save my name, email, and website in this browser for the next time I comment.
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <button type="submit" className="theme-btn">
                                Send your Comment
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="main-sideber sticky-style">
                    <div className="single-sideber-widget">
                      <div className="search-widget">
                        <form action="#">
                          <input type="text" placeholder="Search" />
                          <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                        </form>
                      </div>
                    </div>
                    <div className="single-sideber-widget">
                      <div className="widget-title">
                        <h4>Categories</h4>
                      </div>
                      <ul>
                        <li><a href="news-details.html">Beach &amp; Water Activities</a><span>(3)</span></li>
                        <li><a href="news-details.html">Wildlife &amp; Safari Tours</a><span>(5)</span></li>
                        <li><a href="news-details.html">Trekking &amp; Hiking</a><span>(8)</span></li>
                        <li><a href="news-details.html">Cruise &amp; Boat Tours</a><span>(2)</span></li>
                        <li><a href="news-details.html">Shopping &amp; Market Tours</a><span>(4)</span></li>
                        <li><a href="news-details.html">Nightlife &amp; Entertainment</a><span>(6)</span></li>
                      </ul>
                    </div>
                    <div className="single-sideber-widget">
                      <div className="widget-title">
                        <h4>Recent Post</h4>
                      </div>
                      <div className="recent-post-area">
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/home-1/news/pp-1.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>20 August 2025</span>
                            <h5>
                              <a href="news-details.html">
                                Best Family-Friendly Travel Spots Around the World
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/home-1/news/p-2.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>23 August 2025</span>
                            <h5>
                              <a href="news-details.html">
                                Luxury Travel on a Budget Secrets Revealed
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/home-1/news/pp-3.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>24 August 2025</span>
                            <h5>
                              <a href="news-details.html">
                                Ultimate Beach Destinations for Your Next Holiday
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-sideber-widget">
                      <div className="widget-title">
                        <h4>Recent Post</h4>
                      </div>
                      <div className="tagcloud">
                        <a href="news-details.html">Travel</a>
                        <a href="news-details.html">Guide</a>
                        <a href="news-details.html">Hiking</a>
                        <a href="news-details.html">Boat</a>
                        <a href="news-details.html">Wildlife</a>
                        <a href="news-details.html">Beach</a>
                        <a href="news-details.html">Activities</a>
                        <a href="news-details.html">City</a>
                        <a href="news-details.html">Road</a>
                      </div>
                    </div>
                    <div className="tour-bg-image">
                      <img src="/assets/img/home-1/news/news-19.jpg" alt="img" />
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
