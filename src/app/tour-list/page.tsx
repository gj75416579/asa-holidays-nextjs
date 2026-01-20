'use client'

import Header from '@/templete/Header'
import Footer from '@/templete/Footer'


export default function TourList() {
  return (
    <>
      <Header />

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
                    <a href="/">
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
                            <a href="/tour-details">Best Tourist Place</a>
                          </h3>
                          <a href="/tour-details" className="theme-btn">Explore Tours</a>
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
                            <h3><a href="/tour-details">White Canopy Tent on White Building Near Ocean</a></h3>
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
                              <a href="/tour-details" className="theme-btn">View Tour</a>
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
                            <h3><a href="/tour-details">Man And Woman Standing On Deck, Maldives</a></h3>
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
                              <a href="/tour-details" className="theme-btn">View Tour</a>
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
                            <h3><a href="/tour-details">Relinking Beach in Nusa panada island, Bali, Indonesia</a></h3>
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
                              <a href="/tour-details" className="theme-btn">View Tour</a>
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
                            <h3><a href="/tour-details">Turquoise Sea off the Coast of Bali, Indonesia</a></h3>
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
                              <a href="/tour-details" className="theme-btn">View Tour</a>
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
                            <h3><a href="/tour-details">Blue Train on Rails in Sri Lanka Idalgashinna, UP, Sri Lanka</a></h3>
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
                              <a href="/tour-details" className="theme-btn">View Tour</a>
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
                            <h3><a href="/tour-details">Traditional oriental shrine against forest on mountain</a></h3>
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
                              <a href="/tour-details" className="theme-btn">View Tour</a>
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
                            <h3><a href="/tour-details">White buildings in blue accents near the Atlantic shore.</a></h3>
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
                              <a href="/tour-details" className="theme-btn">View Tour</a>
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
                        <a href="/"><img src="/assets/img/logo/white-logo.svg" alt="img" /></a>
                      </div>
                      <div className="section-title mb-0">
                        <h2 className="sec-title text-white text-anim">
                          Adventure Is Calling 鈥?Are You Ready?
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






