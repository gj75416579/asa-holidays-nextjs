'use client'

import Header from '@/templete/Header'
import Footer from '@/templete/Footer'


export default function NewsDetails() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Hero Section Start */}
          <div className="breadcrumb-wrapper fix">
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1 className="wow fadeInUp" data-wow-delay=".3s">Blog Details</h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <a href="/">
                      Home
                    </a>
                  </li>
                  <li className="style-2">
                    Blog Details
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* News Section Start */}
          <section className="news-details-section section-padding pt-0">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-8 col-12">
                  <div className="news-details-post">
                    <ul className="list">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="style-2">Single blog</li>
                    </ul>
                    <h2>
                      Best family-friendly travel spots around the world eco-friendly travel how to make your trips sustainable
                    </h2>
                    <ul className="list-items">
                      <li className="list">
                        Tours &amp; travel
                      </li>
                      <li className="list">
                        By Admin
                      </li>
                      <li className="list">
                        20 August 2025
                      </li>
                      <li className="list">
                        Comments (5)
                      </li>
                    </ul>
                    <div className="news-details-content">
                      <p>
                        Make every moment of your journey unforgettable with our exciting range of tour activities. from breathtaking city sightseeing and cultural heritage tours to adrenaline-pumping adventures like hiking, snorkeling, and desert safaris, we have something for every traveler.
                      </p>
                      <div className="details-thumb">
                        <img src="/assets/img/inner-page/news-details/details-1.jpg" alt="img" />
                      </div>
                      <h3>Eco-Friendly Travel How to Make Your Trips Sustainable</h3>
                      <p className="mt-2">
                        Agency plays a pivotal role in crafting memorable experiences for travelers by offering wide range services tailored to individual preferences. Whether it&apos;s a family vacation, an adventure trip, or luxury getaway well-established travel agency can handle everything from flight bookings and accommodation to guided tours .
                      </p>
                      <p className="mt-4">
                        We have something for every traveler. indulge in local cuisines, explore hidden gems, and enjoy unique experiences
                        that go beyond the ordinary. whether you&apos;re seeking relaxation or adventure, our curated activities ensure your trip is packed with memories that last a lifetime.
                      </p>
                      <div className="sideber">
                        <div className="icon">
                          <i className="flaticon-quote"></i>
                        </div>
                        <div className="content">
                          <h5>
                            &quot;In the world of tours and travel, every journey is an invitation to explore
                            the unknown, connect with cultures, and create memories that last lifetime
                            It&apos;s not just about the destination,extraordinary adventures.&quot;
                          </h5>
                          <span>Kevin F. Glasscock</span>
                        </div>
                      </div>
                      <div className="details-thumb">
                        <img src="/assets/img/inner-page/news-details/details-2.jpg" alt="img" />
                      </div>
                      <h3>Adventure Awaits Thrilling Activities for Bold Travelers</h3>
                      <p className="mt-2">
                        Stay connected and never miss a deal! subscribe to our newsletter and get exclusive travel offers, insider tips, and the latest destination trends delivered straight to your inbox. from budget-friendly deals to expert travel advice, we&apos;ll help you plan the perfect trip every time. join our community of travelers today and start exploring smarter!
                      </p>
                      <div className="row tag-share-wrap">
                        <div className="col-xl-8 col-lg-7">
                          <div className="tagcloud">
                            <span>Tags:</span>
                            <a href="/news-details">Travel</a>
                            <a href="/news-details">Guide</a>
                            <a href="/news-details">Hiking</a>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                          <div className="social-share">
                            <span>Share</span>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="client-info-box">
                        <div className="client-image">
                          <img src="/assets/img/inner-page/news-details/client-1.png" alt="img" />
                        </div>
                        <div className="info-content">
                          <h5>Richard M. Fudge</h5>
                          <span>Author</span>
                          <p>
                            &quot;I&apos;ve traveled with many agencies, but this one stands out! personalized approach and attention to detail made our honeymoon unforgettable.
                          </p>
                          <div className="social-icon">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <h4>Related post</h4>
                      <div className="related-post-item">
                        <div className="recent-item">
                          <div className="recent-thumb">
                            <img src="/assets/img/inner-page/news-details/post-1.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>20 August 2025</span>
                            <h5>
                              <a href="/news-details">
                                Best Family-Friendly Travel <br /> Spots Around the World
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="recent-item">
                          <div className="recent-thumb">
                            <img src="/assets/img/inner-page/news-details/post-2.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>23 August 2025</span>
                            <h5>
                              <a href="/news-details">
                                Luxury Travel on a Budget <br /> Secrets Revealed
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="comment-area">
                        <h3>Comments</h3>
                        <div className="comment-item">
                          <div className="comment-image">
                            <img src="/assets/img/inner-page/news-details/comment.jpg" alt="img" />
                          </div>
                          <div className="content">
                            <h6>Lonnie B. Horwitz</h6>
                            <span><i className="far fa-calendar-alt"></i> September 25 ,2025</span>
                            <p>
                              Tours and travels play a crucial role in enriching lives by offering unique experiences, cultural exchanges, and the joy of exploration.
                            </p>
                            <a className="read-more" href="#">Reply <i className="far fa-angle-right"></i></a>
                          </div>
                        </div>
                        <div className="comment-item style-2">
                          <div className="comment-image">
                            <img src="/assets/img/inner-page/news-details/comment-2.jpg" alt="img" />
                          </div>
                          <div className="content">
                            <h6>Jaime B. Wilson</h6>
                            <span><i className="far fa-calendar-alt"></i> September 25 ,2025</span>
                            <p>
                              Tours and travels play a crucial role in enriching lives by offering unique experiences, cultural exchanges, and the joy of exploration.
                            </p>
                            <a className="read-more" href="#">Reply <i className="far fa-angle-right"></i></a>
                          </div>
                        </div>
                        <div className="comment-item">
                          <div className="comment-image">
                            <img src="/assets/img/inner-page/news-details/comment-3.jpg" alt="img" />
                          </div>
                          <div className="content">
                            <h6>Michael A. Saladin</h6>
                            <span><i className="far fa-calendar-alt"></i> September 25 ,2025</span>
                            <p>
                              Tours and travels play a crucial role in enriching lives by offering unique experiences, cultural exchanges, and the joy of exploration.
                            </p>
                            <a className="read-more" href="#">Reply <i className="far fa-angle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="comment-form-wrap">
                        <h4>Leave a comments</h4>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form action="#">
                          <div className="row g-4">
                            <div className="col-lg-6">
                              <div className="form-clt">
                                <input type="text" name="name" id="name" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-clt">
                                <input type="text" name="email" id="email6" placeholder="Email" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-clt">
                                <textarea name="message" id="message" placeholder="Write comment"></textarea>
                              </div>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                Save my name, email, and website in this browser for the next time I comment.
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <button type="submit" className="theme-btn">
                                Send your Comment
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="main-sideber sticky-style">
                    <div className="single-sideber-widget">
                      <div className="search-widget">
                        <form action="#">
                          <input type="text" placeholder="Search" />
                          <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                        </form>
                      </div>
                    </div>
                    <div className="single-sideber-widget">
                      <div className="widget-title">
                        <h4>Categories</h4>
                      </div>
                      <ul>
                        <li><a href="/news-details">Beach &amp; Water Activities</a><span>(3)</span></li>
                        <li><a href="/news-details">Wildlife &amp; Safari Tours</a><span>(5)</span></li>
                        <li><a href="/news-details">Trekking &amp; Hiking</a><span>(8)</span></li>
                        <li><a href="/news-details">Cruise &amp; Boat Tours</a><span>(2)</span></li>
                        <li><a href="/news-details">Shopping &amp; Market Tours</a><span>(4)</span></li>
                        <li><a href="/news-details">Nightlife &amp; Entertainment</a><span>(6)</span></li>
                      </ul>
                    </div>
                    <div className="single-sideber-widget">
                      <div className="widget-title">
                        <h4>Recent Post</h4>
                      </div>
                      <div className="recent-post-area">
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/home-1/news/pp-1.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>20 August 2025</span>
                            <h5>
                              <a href="/news-details">
                                Best Family-Friendly Travel Spots Around the World
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/home-1/news/p-2.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>23 August 2025</span>
                            <h5>
                              <a href="/news-details">
                                Luxury Travel on a Budget Secrets Revealed
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="recent-items">
                          <div className="recent-thumb">
                            <img src="/assets/img/home-1/news/pp-3.jpg" alt="img" />
                          </div>
                          <div className="recent-content">
                            <span>24 August 2025</span>
                            <h5>
                              <a href="/news-details">
                                Ultimate Beach Destinations for Your Next Holiday
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-sideber-widget">
                      <div className="widget-title">
                        <h4>Recent Post</h4>
                      </div>
                      <div className="tagcloud">
                        <a href="/news-details">Travel</a>
                        <a href="/news-details">Guide</a>
                        <a href="/news-details">Hiking</a>
                        <a href="/news-details">Boat</a>
                        <a href="/news-details">Wildlife</a>
                        <a href="/news-details">Beach</a>
                        <a href="/news-details">Activities</a>
                        <a href="/news-details">City</a>
                        <a href="/news-details">Road</a>
                      </div>
                    </div>
                    <div className="tour-bg-image">
                      <img src="/assets/img/home-1/news/news-19.jpg" alt="img" />
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






