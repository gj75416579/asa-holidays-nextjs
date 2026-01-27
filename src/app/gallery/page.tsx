'use client'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'
import { footerContactSection } from '@/lib/footer-contact'


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
{/* Footer Section Start */}
          <Footer contactSection={footerContactSection} />
        </div>
      </div>
    </>
  )
}








