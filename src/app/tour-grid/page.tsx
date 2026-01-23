'use client'

import Header from '@/templete/Header'
import Footer from '@/templete/Footer'


export default function TourGrid() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb Section Start */}
          <div className="breadcrumb-wrapper-2 style-tour-page bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-4.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">Tour Grid</h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">
                      Home
                    </a>
                  </li>
                  <li className="style-2">
                    Tour Grid
                  </li>
                </ul>
                <div className="from-box wow fadeInUp" data-wow-delay=".3s">
                  <h3>Find adventure that suits your needs</h3>
                  <div className="box-item-2">
                    <div className="form-clt">
                      <div className="form">
                        <select className="single-select w-100">
                          <option>Where to go</option>
                          <option>Travel destinations</option>
                          <option>Local places</option>
                          <option>Adventure</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-clt">
                      <div className="form">
                        <select className="single-select w-100">
                          <option>Where to go</option>
                          <option>Travel destinations</option>
                          <option>Local places</option>
                          <option>Adventure</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-clt">
                      <div className="form">
                        <select className="single-select w-100">
                          <option>Travel type</option>
                          <option>Travel destinations</option>
                          <option>Local places</option>
                          <option>Adventure</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-clt">
                      <button className="theme-btn" type="submit">
                        Find Tours
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tour Grid Section Start */}
          <section className="tour-grid-section section-padding fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">Uncover Unique Tours Places</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">One site <span className="count">30,500</span><b>+</b> most popular experience you&apos;ll remember</p>
              </div>
              <div className="box-item-5">
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Filter by price</option>
                      <option>0</option>
                      <option>5,000</option>
                      <option>10,000</option>
                    </select>
                  </div>
                </div>
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Tour Types</option>
                      <option>Travel destinations</option>
                      <option>Local places</option>
                      <option>Adventure</option>
                    </select>
                  </div>
                </div>
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Destinations</option>
                      <option>Singapore</option>
                      <option>Thailand</option>
                      <option>Maldives</option>
                    </select>
                  </div>
                </div>
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Language</option>
                      <option>Bangla</option>
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </div>
                <div className="form-clt">
                  <div className="form">
                    <select className="single-select w-100">
                      <option>Durations</option>
                      <option>1 Day</option>
                      <option>2 Day</option>
                      <option>3 Day</option>
                    </select>
                  </div>
                </div>
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
                        <a href="/tour-details">
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
                        <a href="/tour-details">
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
                        <a href="/tour-details">
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
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
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
                        <a href="/tour-details">
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
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
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
                        <a href="/tour-details">
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
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
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
                        <a href="/tour-details">
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
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
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
                        <a href="/tour-details">
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
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
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
                        <a href="/tour-details">
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
                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
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
                        <a href="/tour-details">
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
              <div className="page-nav-wrap text-center">
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






