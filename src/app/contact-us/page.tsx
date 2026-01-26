'use client'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816352022553!2d103.84034231475397!3d1.28409499906343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19749ff9d617%3A0xe4257fd7145d0676!2sASA+Holidays!5e0!3m2!1sen!2s!4v1449467689304d'

export default function ContactUs() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">
                    Contact Us
                  </h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="contact-us-section section-padding fix">
            <div className="container">
              <div className="contact-us-wrapper">
                <h2 className="text-center">HQ &amp; Sales Office (Chinatown) #03-57/58/59</h2>

                <div className="contact-map">
                  <iframe
                    src={mapEmbedUrl}
                    title="ASA Holidays HQ & Sales Office"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="row g-4 contact-info-grid">
                  <div className="col-lg-6">
                    <div className="contact-info-card">
                      <h4>Hotlines</h4>
                      <ul className="contact-info-list">
                        <li>Worldwide Tour Department: 6303 5303</li>
                        <li>China Tour Department: 6303 5333</li>
                        <li>FIT/Cruise Department: 6303 5318</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-info-card">
                      <h4>Opening Hours</h4>
                      <div className="contact-hours">
                        <div className="contact-hours-group">
                          <div className="contact-hours-title">Retail</div>
                          <div className="contact-hours-row">
                            <span>Monday to Saturday:</span>
                            <span>10.30am to 8.30pm</span>
                          </div>
                          <div className="contact-hours-row">
                            <span>Sunday:</span>
                            <span>11.00am to 7.00pm</span>
                          </div>
                        </div>
                        <div className="contact-hours-group">
                          <div className="contact-hours-title">Back Office</div>
                          <div className="contact-hours-row">
                            <span>Monday to Friday:</span>
                            <span>9.30am to 7.00pm</span>
                          </div>
                          <div className="contact-hours-row">
                            <span>Saturday &amp; Sunday:</span>
                            <span>Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  )
}
