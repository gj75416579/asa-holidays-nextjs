'use client';

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'


export default function Contact() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Breadcrumb-Wrapper Section Start */}
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">
                    Contact
                  </h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">
                      Home
                    </a>
                  </li>
                  <li className="style-2 style-3">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conatct-Us Section Start */}
          <section className="conatct-us-section-3 section-padding fix">
            <div className="container">
              <div className="contact-us-wrapper-3">
                <div className="row g-4">
                  <div className="col-xl-5 col-lg-6">
                    <div className="contact-us-content">
                      <div className="section-title mb-0">
                        <h2 className="text-anim">
                          Start Your Adventure
                          Contact Us Today
                        </h2>
                      </div>
                      <p className="text">
                        Have questions or ready to plan your next adventure? Our travel experts are here to guide you every step of the way.
                      </p>
                      <div className="contact-us-item">
                        <div className="content">
                          <h5>
                            <i className="fa-solid fa-envelope"></i>
                            Email us
                          </h5>
                          <h6>
                            <a href="mailto:supportroavio@gmail.com">supportroavio@gmail.com</a>
                          </h6>
                          <h6>
                            <a href="mailto:www.roavio247.com">www.roavio247.com</a>
                          </h6>
                        </div>
                        <div className="content">
                          <h5>
                            <i className="fa-solid fa-phone"></i>
                            Call Us
                          </h5>
                          <h6>
                            <a href="tel:+11234567890">+1 123456 7890</a>
                          </h6>
                          <h6>
                            Available 24/7 hours
                          </h6>
                        </div>
                      </div>
                      <div className="contact-us-item mb-0">
                        <div className="content">
                          <h5>
                            <i className="fas fa-alarm-clock"></i>
                            Working Hours
                          </h5>
                          <h6>
                            Sunday to Friday <br /> 08:00 AM - 06:00 PM
                          </h6>
                        </div>
                        <div className="content">
                          <h5>
                            <i className="fa-solid fa-earth-americas"></i>
                            USA Office
                          </h5>
                          <h6>
                            20 Cooper Square, New <br />
                            York, NY 10003, USA
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6">
                    <div className="contact-box">
                      <form action="contact.php" id="contact-form1" method="POST" className="contact-form-items">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Full Name</span>
                              <input type="text" name="name" id="name331" placeholder="Full Name" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Phone</span>
                              <input type="text" name="name" id="name22" placeholder="Phone Number" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Email Address</span>
                              <input type="text" name="name" id="email11" placeholder="Your email" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Subject</span>
                              <input type="text" name="name" id="name24" placeholder="Subject" />
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
              </div>
            </div>
          </section>

          {/* Map Section Start */}
          <div className="map-section section-padding fix pt-0">
            <div className="container">
              <div className="map-items">
                <div className="googpemap">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>

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
                          Adventure is calling - Are You Ready?
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
  );
}







