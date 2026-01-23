'use client'

import Header from '@/templete/Header'
import Footer from '@/templete/Footer'


export default function Destination() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb-Wrapper Section Start */}
          <div className="breadcrumb-wrapper-4 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-3.jpg)' }}>
            <div className="container">
              <div className="breadcrumb-top-items">
                <div className="page-heading">
                  <div className="breadcrumb-sub-title">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s">
                      Destinations
                    </h1>
                  </div>
                  <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                    <li>
                      <a href="/">
                        Home
                      </a>
                    </li>
                    <li className="style-2 style-3">
                      Destinations
                    </li>
                  </ul>
                </div>
                <div className="content style-2">
                  <div className="text">
                    <h2><span className="count">500</span>+</h2>
                    <p>Explore 500+ Destinations</p>
                  </div>
                  <div className="text">
                    <h2><span className="count">10</span>+</h2>
                    <p>Professional Team Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Destination Section-4 Start */}
          <section className="destination-section-4 section-padding fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">Explore Popular Destinations</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">One site <span className="count">30,500</span><b>+</b> most popular experience you&apos;ll remember</p>
              </div>
              <div className="destination-one-wrapper">
                <div className="row g-3">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/01.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">London</a>
                          </h3>
                          <p>United kingdom</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/02.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">Australia</a>
                          </h3>
                          <p>Mausoleum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/03.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">Pagoda</a>
                          </h3>
                          <p>Japan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/04.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">Rome, Italy</a>
                          </h3>
                          <p>Mausoleum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/05.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">Istanbul, Turkey</a>
                          </h3>
                          <p>Bosporus Strait</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/06.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">Indonesia</a>
                          </h3>
                          <p>Waterfalls</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/07.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">Santorini, Greece</a>
                          </h3>
                          <p>Canopy Tent</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/08.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">Scotland</a>
                          </h3>
                          <p>Gray Cathedral</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-6">
                    <div className="destination-image-item">
                      <div className="destination-image">
                        <img src="/assets/img/inner-page/destination/09.jpg" alt="img" />
                        <div className="destination-content">
                          <h3>
                            <a href="destination-details.html">Bern, BE, Switzerland</a>
                          </h3>
                          <p>Silver Vehicle</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Section-2 Start */}
          <section className="feature-section-2 bg-cover" style={{ backgroundImage: 'url(/assets/img/home-2/feature-bg.jpg)' }}>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-9">
                  <div className="feature-bg-content">
                    <h2 className="text-anim">
                      Wildlife
                      <img src="/assets/img/home-2/client-image.png" alt="img" />
                      Safaris
                    </h2>
                    <h2 className="text wow fadeInUp" data-wow-delay=".5s">Camping</h2>
                    <div className="feature-bottom-content wow fadeInUp" data-wow-delay=".3s">
                      <p>Experience the thrill of nature never
                        before with our exclusive wildlife safaris.</p>
                      <h3>$2000</h3>
                      <a href="destination-details.html" className="theme-btn" data-animation="fadeInUp" data-delay="1.3s">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tour-place Section Start */}
          <section className="tour-place-section section-padding fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">Uncover Unique Tours Places</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">One site <span className="count">30,500</span><b>+</b> most popular experience you&apos;ll remember</p>
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
                    <div className="tour-place-content style-2">
                      <div className="rating-item">
                        <div className="star">
                          <span>(4.8)</span>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h5><span>Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Relinking Beach in Nusa panada island, Bali, Indonesia
                        </a>
                      </h3>
                      <p>
                        Bali, Indonesia, often called the Island the Gods, is a paradise known for its....
                      </p>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Bali, Indonesia
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-16.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content style-2">
                      <div className="rating-item">
                        <div className="star">
                          <span>(4.8)</span>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h5><span>Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Red Camper Van Among Tall Pine Trees Outdoors
                        </a>
                      </h3>
                      <p>
                        Escape into nature with the charm of a red camper van nestled among......
                      </p>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Netherlands
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-17.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content style-2">
                      <div className="rating-item">
                        <div className="star">
                          <span>(4.8)</span>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h5><span>Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Scenic Kayaking Setup Along Duero River, Soria
                        </a>
                      </h3>
                      <p>
                        Soria, located in the region of Castilla y Leon, Spain, is a charming city......
                      </p>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Soria, Castilla
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-18.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content style-2">
                      <div className="rating-item">
                        <div className="star">
                          <span>(4.8)</span>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h5><span>Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Tourists Visits the Aqueduct in Segovia Spain
                        </a>
                      </h3>
                      <p>
                        Bali, Indonesia, often called the Island the Gods, is a paradise known for its....
                      </p>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Nepal
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-19.jpg" alt="img" />
                      <span>10% Off</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content style-2">
                      <div className="rating-item">
                        <div className="star">
                          <span>(4.8)</span>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h5><span>Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Camel safaris desert dunes near roads and small villages
                        </a>
                      </h3>
                      <p>
                        Embark on a magical camel safari across golden desert dunes, where.....
                      </p>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Giza, Egypt
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-20.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content style-2">
                      <div className="rating-item">
                        <div className="star">
                          <span>(4.8)</span>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h5><span>Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Tourists Visits the Aqueduct in Segovia Spain
                        </a>
                      </h3>
                      <p>
                        Bali, Indonesia, often called the Island the Gods, is a paradise known for its....
                      </p>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Segovia, Spain
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-21.jpg" alt="img" />
                      <span>10% Off</span>
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content style-2">
                      <div className="rating-item">
                        <div className="star">
                          <span>(4.8)</span>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h5><span>Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Train on Nine Arches Bridge in Sri Lanka
                        </a>
                      </h3>
                      <p>
                        The iconic Nine Arches Bridge in Ella, Sri Lanka, is a breathtaking sight.....
                      </p>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Sri Lanka
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                  <div className="tour-place-item">
                    <div className="tour-place-image">
                      <img src="/assets/img/home-1/tour/tour-22.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    </div>
                    <div className="tour-place-content style-2">
                      <div className="rating-item">
                        <div className="star">
                          <span>(4.8)</span>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h5><span>Price</span>$49.00</h5>
                      </div>
                      <h3>
                        <a href="/tour-details">
                          Relinking Beach in Nusa panada island, Bali, Indonesia
                        </a>
                      </h3>
                      <p>
                        Bali, Indonesia, often called the Island the Gods, is a paradise known for its....
                      </p>
                      <ul className="tour-list">
                        <li>
                          <i className="fa-regular fa-location-dot"></i>
                          Bali, Indonesia
                        </li>
                        <li>
                          <i className="fa-regular fa-clock"></i>
                          1 - 3 days
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
                        <a href="/"><img src="/assets/img/logo/white-logo.svg" alt="img" /></a>
                      </div>
                      <div className="section-title mb-0">
                        <h2 className="sec-title text-white text-anim">
                          Adventure Is Calling - Are You Ready?
                        </h2>
                      </div>
                      <p className="text wow fadeInUp" data-wow-delay=".3s">
                        Get ready to embark on unforgettable journeys with us. whether you&apos;re seeking thrilling adventures, relaxing escapes
                      </p>
                      <a href="/tour-details" className="theme-btn">Explore Our Tours</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section Start */}
          <Footer />
        </div>
      </div>
    </>
  )
}






