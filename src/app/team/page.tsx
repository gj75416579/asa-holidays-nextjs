'use client';

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'
import { footerContactSection } from '@/lib/footer-contact'


export default function Team() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb-Wrapper Section Start */}
          <div className="breadcrumb-wrapper-4 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="breadcrumb-top-items">
                <div className="page-heading">
                  <div className="breadcrumb-sub-title">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s">
                      Team Member
                    </h1>
                  </div>
                  <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                    <li>
                      <a href="/">
                        Home
                      </a>
                    </li>
                    <li className="style-2 style-3">
                      Team Member
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <h2><span className="count">100</span>+</h2>
                  <p>Professional Team Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tour-Dedicated Section Start */}
          <section className="tour-dedicated-section section-padding fix">
            <div className="container">
              <div className="tour-dedicated-wrapper">
                <div className="row g-4">
                  <div className="col-lg-7">
                    <div className="tour-dedicated-content">
                      <div className="section-title mb-0">
                        <h2 className="text-anim">
                          Dedicated Travel Specialists
                          Your Dream Tours Care
                        </h2>
                        <p className="text">
                          We provide personalized guidance to ensure every journey is smooth, enjoyable, and unforgettable. From planning the perfect itinerary to offering 24/7 support, our trusted specialists are here to make your travel experience truly exceptional.
                        </p>
                        <div className="tour-dedicated-item">
                          <div className="left-icon-item">
                            <div className="icon-item">
                              <div className="icon">
                                <i className="flaticon-traveling"></i>
                              </div>
                              <div className="content">
                                <h5>Travel Specialists</h5>
                                <p>
                                  Our travel specialists bring years of expertise.
                                </p>
                              </div>
                              <a href="team-details.html" className="theme-btn">Meet Our Team</a>
                            </div>
                            <div className="icon-item">
                              <div className="icon">
                                <i className="flaticon-destination"></i>
                              </div>
                              <div className="content">
                                <h5>Trusted &amp; secure</h5>
                                <p>
                                  At our travel agency, your safety and trust priorities
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="thumb">
                            <img src="/assets/img/inner-page/tour-details/01.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="tour-image">
                      <img data-speed=".8" src="/assets/img/inner-page/tour-details/02.jpg" alt="img" />
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

          {/* Team Section Start */}
          <section className="team-single-section section-padding fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">Meet Our Travel Guide</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">The leadership team guiding Togo&apos;s success</p>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="team-single-item">
                    <div className="team-image">
                      <img src="/assets/img/home-2/team/01.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3><a href="team-details.html">Emma Williams</a></h3>
                      <p>Senior Tour Guide</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="team-single-item">
                    <div className="team-image">
                      <img src="/assets/img/home-2/team/02.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3><a href="team-details.html">James Anderson</a></h3>
                      <p>Travel Specialist</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="team-single-item">
                    <div className="team-image">
                      <img src="/assets/img/home-2/team/03.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3><a href="team-details.html">Sophia Martinez</a></h3>
                      <p>Cultural Guide</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="team-single-item">
                    <div className="team-image">
                      <img src="/assets/img/home-2/team/04.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3><a href="team-details.html">Ava Thompson</a></h3>
                      <p>Holiday Planner</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="team-single-item">
                    <div className="team-image">
                      <img src="/assets/img/home-2/team/05.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3><a href="team-details.html">Michael Anderson</a></h3>
                      <p>Holiday Planner</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="team-single-item">
                    <div className="team-image">
                      <img src="/assets/img/home-2/team/06.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3><a href="team-details.html">Christopher Hughes</a></h3>
                      <p>Holiday Planner</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="team-single-item">
                    <div className="team-image">
                      <img src="/assets/img/home-2/team/07.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3><a href="team-details.html">Matthew Johnson</a></h3>
                      <p>Holiday Planner</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="team-single-item">
                    <div className="team-image">
                      <img src="/assets/img/home-2/team/08.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3><a href="team-details.html">Sarah Thompson</a></h3>
                      <p>Holiday Planner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
{/* Footer Section Start */}
          <Footer contactSection={footerContactSection} />
        </div>
      </div>
    </>
  );
}








