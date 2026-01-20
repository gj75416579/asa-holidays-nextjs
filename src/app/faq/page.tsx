'use client'

export default function FAQ() {
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
                                Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
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
                    <div className="breadcrumb-wrapper-3 fix bg-cover" style={{backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)'}}>
                        <div className="container">
                            <div className="page-heading">
                                <div className="breadcrumb-sub-title">
                                    <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                        FAQs
                                    </h1>
                                </div>
                                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                    <li>
                                        <a href="index.html">
                                        Home
                                        </a>
                                    </li>
                                    <li className="style-2 style-3">
                                        FAQs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Conatct-Us Section Start */}
                    <section className="faq-section section-padding fix">
                        <div className="container">
                            <div className="faq-wrapper">
                                <div className="row g-4">
                                    <div className="col-lg-8 col-12">
                                        <div className="faq-left-content">
                                            <div className="section-title mb-0">
                                                <h2 className="text-anim">
                                                    Frequently Asked Questions?
                                                </h2>
                                            </div>
                                            <p className="text">
                                                We&apos;ve gathered the information you need in one place you can save time and make
                                                confident decisions. And if you don&apos;t see your question answered.
                                            </p>
                                            <ul className="nav" role="tablist">
                                                <li className="nav-item style-2 wow fadeInUp" data-wow-delay=".2s">
                                                    <a href="#technical" data-bs-toggle="tab" className="nav-link active" aria-selected="false" role="tab" tabIndex={-1}>
                                                    General
                                                    </a>
                                                </li>
                                                <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                                                    <a href="#work" data-bs-toggle="tab" className="nav-link" aria-selected="true" role="tab">
                                                    Pricing Plan
                                                    </a>
                                                </li>
                                                <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                                                    <a href="#ambition" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex={-1}>
                                                    Tour Package
                                                    </a>
                                                </li>
                                                <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                                                    <a href="#skill" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex={-1}>
                                                    Privacy Policy
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="technical" className="tab-pane fade active show" role="tabpanel">
                                                    <div className="faq-box-item">
                                                        <div className="faq-items-4">
                                                            <div className="accordion" id="technicalAccordion">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingOne">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseOne" aria-expanded="false" aria-controls="technicalCollapseOne">
                                                                        1. How do I book a trip with your agency?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseOne" className="accordion-collapse collapse" aria-labelledby="technicalHeadingOne"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingTwo">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseTwo" aria-expanded="true" aria-controls="technicalCollapseTwo">
                                                                        2. Do you offer customized travel packages?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseTwo" className="accordion-collapse collapse show"
                                                                        aria-labelledby="technicalHeadingTwo" data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingThree">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseThree" aria-expanded="false"
                                                                            aria-controls="technicalCollapseThree">
                                                                        3. What payment methods do you accept?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseThree" className="accordion-collapse collapse"
                                                                        aria-labelledby="technicalHeadingThree" data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingFour">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseFour" aria-expanded="false"
                                                                            aria-controls="technicalCollapseFour">
                                                                        4. Can you assist with visas and travel documents?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseFour" className="accordion-collapse collapse" aria-labelledby="technicalHeadingFour"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingFive">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseFive" aria-expanded="false"
                                                                            aria-controls="technicalCollapseFive">
                                                                        5. What happens if I need to cancel or reschedule my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseFive" className="accordion-collapse collapse" aria-labelledby="technicalHeadingFive"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseSix" aria-expanded="false"
                                                                            aria-controls="technicalCollapseSix">
                                                                        6. Do you provide travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseSix" className="accordion-collapse collapse" aria-labelledby="technicalHeadingSix"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingSeven">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseSeven" aria-expanded="false"
                                                                            aria-controls="technicalCollapseSeven">
                                                                        7. Are your tours suitable for families and groups?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseSeven" className="accordion-collapse collapse" aria-labelledby="technicalHeadingSeven"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingEight">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseEight" aria-expanded="false"
                                                                            aria-controls="technicalCollapseEight">
                                                                        8. How can I contact you during my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseEight" className="accordion-collapse collapse" aria-labelledby="technicalHeadingEight"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingNine">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseNine" aria-expanded="false"
                                                                            aria-controls="technicalCollapseNine">
                                                                        9. How can I book a tour with you?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseNine" className="accordion-collapse collapse" aria-labelledby="technicalHeadingNine"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingTen">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseTen" aria-expanded="false"
                                                                            aria-controls="technicalCollapseTen">
                                                                        10. Can you help with visas and travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseTen" className="accordion-collapse collapse" aria-labelledby="technicalHeadingTen"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="work" className="tab-pane fade" role="tabpanel">
                                                    <div className="faq-box-item">
                                                        <div className="faq-items-4">
                                                            <div className="accordion" id="workAccordion">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingOne">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseOne" aria-expanded="false" aria-controls="workCollapseOne">
                                                                        1. How do I book a trip with your agency?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseOne" className="accordion-collapse collapse" aria-labelledby="workHeadingOne"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingTwo">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseTwo" aria-expanded="true" aria-controls="workCollapseTwo">
                                                                        2. Do you offer customized travel packages?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseTwo" className="accordion-collapse collapse show"
                                                                        aria-labelledby="workHeadingTwo" data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingThree">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseThree" aria-expanded="false"
                                                                            aria-controls="workCollapseThree">
                                                                        3. What payment methods do you accept?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseThree" className="accordion-collapse collapse"
                                                                        aria-labelledby="workHeadingThree" data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingFour">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseFour" aria-expanded="false"
                                                                            aria-controls="workCollapseFour">
                                                                        4. Can you assist with visas and travel documents?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseFour" className="accordion-collapse collapse" aria-labelledby="workHeadingFour"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingFive">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseFive" aria-expanded="false"
                                                                            aria-controls="workCollapseFive">
                                                                        5. What happens if I need to cancel or reschedule my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseFive" className="accordion-collapse collapse" aria-labelledby="workHeadingFive"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseSix" aria-expanded="false"
                                                                            aria-controls="workCollapseSix">
                                                                        6. Do you provide travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseSix" className="accordion-collapse collapse" aria-labelledby="workHeadingSix"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingSeven">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseSeven" aria-expanded="false"
                                                                            aria-controls="workCollapseSeven">
                                                                        7. Are your tours suitable for families and groups?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseSeven" className="accordion-collapse collapse" aria-labelledby="workHeadingSeven"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingEight">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseEight" aria-expanded="false"
                                                                            aria-controls="workCollapseEight">
                                                                        8. How can I contact you during my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseEight" className="accordion-collapse collapse" aria-labelledby="workHeadingEight"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingNine">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseNine" aria-expanded="false"
                                                                            aria-controls="workCollapseNine">
                                                                        9. How can I book a tour with you?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseNine" className="accordion-collapse collapse" aria-labelledby="workHeadingNine"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingTen">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseTen" aria-expanded="false"
                                                                            aria-controls="workCollapseTen">
                                                                        10. Can you help with visas and travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseTen" className="accordion-collapse collapse" aria-labelledby="workHeadingTen"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="ambition" className="tab-pane fade" role="tabpanel">
                                                    <div className="faq-box-item">
                                                        <div className="faq-items-4">
                                                            <div className="accordion" id="ambitionAccordion">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingOne">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseOne" aria-expanded="false" aria-controls="ambitionCollapseOne">
                                                                        1. How do I book a trip with your agency?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseOne" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingOne"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingTwo">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseTwo" aria-expanded="true" aria-controls="ambitionCollapseTwo">
                                                                        2. Do you offer customized travel packages?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseTwo" className="accordion-collapse collapse show"
                                                                        aria-labelledby="ambitionHeadingTwo" data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingThree">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseThree" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseThree">
                                                                        3. What payment methods do you accept?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseThree" className="accordion-collapse collapse"
                                                                        aria-labelledby="ambitionHeadingThree" data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingFour">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseFour" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseFour">
                                                                        4. Can you assist with visas and travel documents?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseFour" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingFour"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingFive">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseFive" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseFive">
                                                                        5. What happens if I need to cancel or reschedule my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseFive" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingFive"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseSix" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseSix">
                                                                        6. Do you provide travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseSix" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingSix"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingSeven">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseSeven" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseSeven">
                                                                        7. Are your tours suitable for families and groups?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseSeven" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingSeven"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingEight">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseEight" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseEight">
                                                                        8. How can I contact you during my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseEight" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingEight"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingNine">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseNine" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseNine">
                                                                        9. How can I book a tour with you?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseNine" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingNine"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingTen">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseTen" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseTen">
                                                                        10. Can you help with visas and travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseTen" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingTen"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="skill" className="tab-pane fade" role="tabpanel">
                                                    <div className="faq-box-item">
                                                        <div className="faq-items-4">
                                                            <div className="accordion" id="skillAccordion">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingOne">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseOne" aria-expanded="false" aria-controls="skillCollapseOne">
                                                                        1. How do I book a trip with your agency?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseOne" className="accordion-collapse collapse" aria-labelledby="skillHeadingOne"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingTwo">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseTwo" aria-expanded="true" aria-controls="skillCollapseTwo">
                                                                        2. Do you offer customized travel packages?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseTwo" className="accordion-collapse collapse show"
                                                                        aria-labelledby="skillHeadingTwo" data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingThree">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseThree" aria-expanded="false"
                                                                            aria-controls="skillCollapseThree">
                                                                        3. What payment methods do you accept?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseThree" className="accordion-collapse collapse"
                                                                        aria-labelledby="skillHeadingThree" data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingFour">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseFour" aria-expanded="false"
                                                                            aria-controls="skillCollapseFour">
                                                                        4. Can you assist with visas and travel documents?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseFour" className="accordion-collapse collapse" aria-labelledby="skillHeadingFour"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingFive">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseFive" aria-expanded="false"
                                                                            aria-controls="skillCollapseFive">
                                                                        5. What happens if I need to cancel or reschedule my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseFive" className="accordion-collapse collapse" aria-labelledby="skillHeadingFive"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseSix" aria-expanded="false"
                                                                            aria-controls="skillCollapseSix">
                                                                        6. Do you provide travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseSix" className="accordion-collapse collapse" aria-labelledby="skillHeadingSix"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingSeven">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseSeven" aria-expanded="false"
                                                                            aria-controls="skillCollapseSeven">
                                                                        7. Are your tours suitable for families and groups?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseSeven" className="accordion-collapse collapse" aria-labelledby="skillHeadingSeven"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingEight">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseEight" aria-expanded="false"
                                                                            aria-controls="skillCollapseEight">
                                                                        8. How can I contact you during my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseEight" className="accordion-collapse collapse" aria-labelledby="skillHeadingEight"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingNine">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseNine" aria-expanded="false"
                                                                            aria-controls="skillCollapseNine">
                                                                        9. How can I book a tour with you?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseNine" className="accordion-collapse collapse" aria-labelledby="skillHeadingNine" data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                                    <div className="faq-right">
                                                        <div className="faq-bg-image">
                                                            <img src="/assets/img/home-1/news/news-19.jpg" alt="img" />
                                                            <div className="tour-bg-content">
                                                                <span>xplore The World</span>
                                                                <h3>
                                                                    <a href="tour-details.html">Best Tourist Place</a>
                                                                </h3>
                                                                <a href="tour-details.html" className="theme-btn">Explore Tours</a>
                                                            </div>
                                                        </div>
                                                        <div className="comment-box">
                                                            <h3>Have Any Questions?</h3>
                                                            <p>Don&apos;t heisted to contact us</p>
                                                            <form action="#">
                                                                <div className="row g-2">
                                                                    <div className="col-lg-12">
                                                                        <div className="form-clt">
                                                                            <input type="text" name="name" id="name" placeholder="Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="form-clt">
                                                                            <input type="text" name="email" id="email6" placeholder="Email" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="form-clt">
                                                                            <textarea name="message" id="message" placeholder="Write message"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <button type="submit" className="theme-btn">
                                                                        Submit
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
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
                                                    Adventure Is Calling &ndash; Are You Ready?
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
