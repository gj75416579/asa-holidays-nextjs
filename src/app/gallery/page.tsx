'use client'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'


export default function Gallery() {
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
                    Gallery
                  </h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">
                      Home
                    </a>
                  </li>
                  <li className="style-2 style-3">
                    Gallery
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* gallery Section Start */}
          <section className="gallery-section section-padding fix">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">
                  Explore Our Photo Gallery
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">Crafting journeys, creating memories plan smarter, travel better</p>
              </div>
            </div>
            <div className="swiper gallery-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/01.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/02.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/03.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/04.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/05.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper gallery-slider-2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/06.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/07.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/08.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="gallery-image">
                    <img src="/assets/img/inner-page/gallery/09.jpg" alt="img" />
                    <div className="gallery-content">
                      <h4>
                        <a href="/tour-details">Brown Concrete Building</a>
                      </h4>
                      <p>Tour &amp; Travel</p>
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







