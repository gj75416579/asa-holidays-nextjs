'use client'

import { footerContactSection } from '@/lib/footer-contact'

type FooterContactSection = {
  image: string
  logo: string
  title: string
  description: string
  cta: {
    href: string
    label: string
  }
}

type FooterProps = {
  contactSection?: FooterContactSection | null
}

export default function Footer({ contactSection }: FooterProps) {
  const resolvedContactSection = contactSection ?? footerContactSection
  return (
    <>
      {resolvedContactSection ? (
        <section className="contact-section section-padding pb-0">
          <div className="container">
            <div className="contact-wrapper">
              <div className="row g-4 align-items-end">
                <div className="col-lg-6">
                  <div className="contact-image">
                    <img data-speed=".8" src={resolvedContactSection.image} alt="img" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-content">
                    {/* <div className="logo-image">
                      <a href="/">
                        <img src={resolvedContactSection.logo} alt="img" />
                      </a>
                    </div> */}
                    <div className="section-title mb-0">
                      <h2 className="sec-title text-white text-anim">{resolvedContactSection.title}</h2>
                    </div>
                    <p className="text wow fadeInUp" data-wow-delay=".3s">
                      {resolvedContactSection.description}
                    </p>
                    <a href={resolvedContactSection.cta.href} className="theme-btn">
                      {resolvedContactSection.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <footer className="footer-section fix header-bg">
        <div className="container">
          <div className="footer-widget-wrapper">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-3 wow fadeInUp">
                <div className="single-footer-widget">
                  <div className="wid-title">
                    <h4>Services</h4>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="/tour-list/?productType=1">
                        <i className="fa-solid fa-chevron-right"></i>
                        Group Tours
                      </a>
                    </li>
                    <li>
                      <a href="/tour-list/?productType=2">
                        <i className="fa-solid fa-chevron-right"></i>
                        Free &amp; Easy
                      </a>
                    </li>
                    {/* <li>
                      <a href="/destination">
                        <i className="fa-solid fa-chevron-right"></i>
                        Cruises
                      </a>
                    </li> */}
                    <li>
                      <a href="/mice">
                        <i className="fa-solid fa-chevron-right"></i>
                        MICE Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s">
                <div className="single-footer-widget">
                  <div className="wid-title">
                    <h4>Company</h4>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="/about">
                        <i className="fa-solid fa-chevron-right"></i>
                        About Us
                      </a>
                    </li>
                    {/* <li>
                      <a href="/team">
                        <i className="fa-solid fa-chevron-right"></i>
                        Our Team
                      </a>
                    </li> */}
                    <li>
                      <a href="/career">
                        <i className="fa-solid fa-chevron-right"></i>
                        Career
                      </a>
                    </li>
                    <li>
                      <a href="/faq">
                        <i className="fa-solid fa-chevron-right"></i>
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div className="single-footer-widget">
                  <div className="wid-title">
                    <h4>Destinations</h4>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="/tour-list/?sectorId=1">
                        <i className="fa-solid fa-chevron-right"></i>
                        Europe
                      </a>
                    </li>
                    <li>
                      <a href="/tour-list/?sectorId=5">
                        <i className="fa-solid fa-chevron-right"></i>
                        Japan
                      </a>
                    </li>
                    <li>
                      <a href="/tour-list/?sectorId=2">
                        <i className="fa-solid fa-chevron-right"></i>
                        China
                      </a>
                    </li>
                    <li>
                      <a href="/tour-list/?sectorId=6">
                        <i className="fa-solid fa-chevron-right"></i>
                        Korea
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".6s">
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
                        1 Park Road #03-57 <br />
                        People&apos;s Park Complex, Singapore 059108
                      </h6>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="mailto:enquiry@asaholiday.com">enquiry@asaholiday.com</a>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-item mb-0">
                    <div className="icon">
                      <i className="fa-regular fa-phone-volume"></i>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="tel:+6563035303">+65 6303 5303</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h4>Subscribe to Our Newsletter <br />
                    for Exclusive Deals
                  </h4>
                </div>
                <div className="newsletter-content">
                  <p>
                    Stay updated with the latest tour packages,
                    special promotions and travel tips from ASA Holidays
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
            </div> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom style-1">
          <div className="container">
            <div className="footer-wrapper">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">ASA Holidays</h2>
              <div className="text-item wow fadeInUp" data-wow-delay=".5s">
                <p>&copy; 2025 <span>Air Sino-Euro Associates Travel Pte. Ltd.</span> All rights reserved</p>
                <a href="#" className="icon"><i className="fa-solid fa-chevron-up"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
