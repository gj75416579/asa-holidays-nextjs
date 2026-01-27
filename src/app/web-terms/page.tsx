'use client'

import type { ReactNode } from 'react'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

type WebTermsSection = {
  id: string
  title: string
  content: ReactNode
}

const webTermsSections: WebTermsSection[] = [
  {
    id: 'terms-of-use',
    title: 'Website Terms Of Use',
    content: (
      <>
        <p>
          By accepting these terms and conditions and registering with Air Sino-Euro Associates Travel Pte Ltd, you
          agree to be bound by the following terms and conditions and to carry out your obligations as stipulated in
          this document.
        </p>
        <p>
          You must register with the company should you wish to make any bookings, reservations or transact with The
          Company through our web site.
        </p>
        <p>
          It is the user&apos;s obligation to provide truthful and accurate information to The Company when submitting
          information and/or making requests of any kind with, whether through e-mail, by using the forms at our web
          site, or by other means of communication.
        </p>
        <p>As a member of our website, you will receive periodic e-mail on travel promotions and travel information and any other information we may provide.</p>
        <p>
          The Company strongly discourages online users from revealing their Login IDs and passwords to anyone and to
          change the password regularly as a security/safety precaution.
        </p>
      </>
    ),
  },
  {
    id: 'online-bookings',
    title: 'Online Bookings And Reservations',
    content: (
      <>
        <p>
          The Company acts as agent for all travel, tour and other services and productions purchased and is not be
          liable to the Customer for any claims against non-fulfillment, unsatisfactory or nonperformance of services
          and products purchased on the Customer&apos;s behalf by the Company from third parties such as (but not limited to)
          airlines, hotels, tour operators, car hire companies.
        </p>
        <p>
          The Customer understands and agrees that all services and products purchased require fulfillment and
          documentation, such as issuance of air tickets and travel vouchers. Fulfillment is performed during normal
          office hours. Any travel requests and bookings made may require a processing time of minimum half a working
          day&apos;s notice subjecting to the specific conditions applicable to the type of service or product purchased.
        </p>
        <p>
          The company will not be held liable for any claims for damages or compensation against nonfulfillment, should
          a user purchase a service or product that cannot be fulfilled between the time of booking and the time of
          departure, on condition that all unutilized monies collected from the user for that purchase are refunded in
          full.
        </p>
        <p>
          The Company reserves the right to decline any purchase from the Customer without giving any reason and will
          not be held liable for any claims for damages or compensation against nonfulfillment on condition that The
          Company shall refund all utilized monies collected from the Customer in full should a user purchase a service
          or product that cannot be fulfilled between the time of booking and the time of departure.
        </p>
        <p>The user agrees to bear the cost of any penalties and administration fees for services booked and cancellations but not utilized for any reason.</p>
        <p>The user agrees that multiple over-lapping bookings for the same traveler/s are not allowed and shall be liable for any penalties resulting thereof.</p>
        <p>
          In the event that The Company is rendered wholly or partly unable to perform the terms of this Agreement or
          its obligations by reason of causes beyond its control including (but not limited to) equipment, system or
          transmission link malfunction or failure, fire, flood, explosion, acts of God, accidents, power blackouts or
          failure, labour disputes, acts, demands or requirements of the law or by other causes which it cannot
          reasonably be expected to avoid, the performance of the obligations of The Company as they are affected by
          such cases shall be excused for the continuance of any inability so caused. The Company shall not be liable for
          any delay, loss, damage or inconvenience whatsoever caused by or arising from or in connection with anyone or
          more of the abovementioned causes.
        </p>
      </>
    ),
  },
]

export default function WebTermsPage() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1>Website Terms &amp; Conditions</h1>
                </div>
                <ul className="breadcrumb-items">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">Website Terms &amp; Conditions</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="web-terms-section section-padding fix">
            <div className="container">
              <div className="web-terms-wrapper">
                <div className="section-title text-center">
                  <h2>Website Terms &amp; Conditions</h2>
                </div>

                <div className="accordion" id="webTermsAccordion">
                  {webTermsSections.map((section) => (
                    <div key={section.id} className="accordion-item">
                      <h2 className="accordion-header" id={`webTermsHeading-${section.id}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#webTermsCollapse-${section.id}`}
                          aria-expanded="false"
                          aria-controls={`webTermsCollapse-${section.id}`}
                        >
                          {section.title}
                        </button>
                      </h2>
                      <div
                        id={`webTermsCollapse-${section.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`webTermsHeading-${section.id}`}
                        data-bs-parent="#webTermsAccordion"
                      >
                        <div className="accordion-body tour-richtext">{section.content}</div>
                      </div>
                    </div>
                  ))}
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
