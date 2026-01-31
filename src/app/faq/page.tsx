'use client'

import type { ReactNode } from 'react'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

type FaqItem = {
  question: string
  answer: ReactNode
}

type FaqSection = {
  id: string
  title: string
  items: FaqItem[]
}

const faqSections: FaqSection[] = [
  {
    id: 'bookings',
    title: 'Bookings',
    items: [
      {
        question: 'Why book from ASA Holidays when I can book directly with hotels and airlines?',
        answer: (
          <p>
            ASA Holidays aims to provide a fuss-free travelling experience for all customers and will help resolve or
            provide advice when you encounter any problems when travelling. Furthermore, we have special deals for all
            ASA Holidays customers. Do remember to sign up for our newsletter and{' '}
            <a href="https://www.facebook.com/ASAHolidays" target="_blank" rel="noreferrer">
              like us
            </a>{' '}
            on Facebook to get the latest travel updates!
          </p>
        )
      },
      {
        question: 'Is it safe to book online?',
        answer: (
          <p>
            Yes, ASA Holidays takes privacy seriously. All bookings are handled with security measures and encryption
            parameters.
          </p>
        )
      },
      {
        question: 'Where can I make my bookings?',
        answer: (
          <p>
            You can make your bookings enquiries at{' '}
            <a href="https://asaholiday.com/" target="_blank" rel="noreferrer">
              www.asaholiday.com
            </a>{' '}
            or at our sales office, 1 Park Road #03-57 People's Park Complex Singapore 059108.
          </p>
        )
      },
      {
        question: 'I would like to extend / shorten my travel bookings. What should I do?',
        answer: (
          <p>
            In event where you need to extend / shorten your travel period, please contact our friendly customer service
            hotline at (65) 6303 5303 or drop us an email at enquiry@asaholiday.com. We will do our best to help you find
            alternatives.
          </p>
        )
      }
    ]
  },
  {
    id: 'cancellations',
    title: 'Cancellations',
    items: [
      {
        question: 'I have made a flight / hotel booking but would need to amend or cancel my bookings. What should I do?',
        answer: (
          <p>
            Bookings are processed immediately. If an amendment or cancellation is required, you can find ASA Holidays
            cancellation instructions{' '}
            <a href="/pdf/T%26C.pdf" target="_blank" rel="noreferrer">
              here
            </a>{' '}
            or call our friendly customer service hotline at (65) 6303 5303 for assistance.
          </p>
        )
      },
      {
        question: 'What happen if I need to cancel my tour package?',
        answer: (
          <p>
            You can find ASA Holidays cancellation instructions{' '}
            <a href="/pdf/T%26C.pdf" target="_blank" rel="noreferrer">
              here
            </a>{' '}
            or call our friendly customer service hotline at (65) 6303 5303 for assistance. ASA Holidays adheres
            strictly to our cancellation time frame. Depending on your tour package, please ensure to read through the
            respective Tour Terms &amp; Conditions (T&amp;Cs) before booking.
          </p>
        )
      },
      {
        question: 'Will my tour package be cancelled by ASA Holidays?',
        answer: (
          <p>
            Cancellations can be due to insufficient bookings, airline cancellation, political reasons, safety or act of
            god etc. If a decision is made to cancel any tour packages, ASA Holidays will contact all participants at our
            soonest to provide alternatives or refund if applicable.
          </p>
        )
      }
    ]
  },
  {
    id: 'refunds',
    title: 'Refunds',
    items: [
      {
        question: 'Will I get any refunds for cancellation?',
        answer: <p>Refunds are subjected to Terms &amp; Conditions. Do remember to read the Terms &amp; Conditions before booking.</p>
      }
    ]
  },
  {
    id: 'contacting',
    title: 'Contacting ASA Holidays',
    items: [
      {
        question: 'I am unable to get through the customer service hotline. What should I do?',
        answer: (
          <p>
            Please drop us an email with your booking confirmation number (if applicable) at enquiry@asaholiday.com. We
            endeavor to respond within 48 hours (excluding weekends and public holiday).
          </p>
        )
      }
    ]
  },
  {
    id: 'travelling',
    title: 'Travelling / On a Tour',
    items: [
      {
        question: 'I am overseas now. Who can I contact if I have any booking issues?',
        answer: (
          <p>
            If your booking is made under ASA Holidays, please contact our friendly customer service hotline at (65)
            6303 5303 or drop us an email with your booking confirmation number at enquiry@asaholiday.com. For after
            office hours, please call our emergency number at (65) 9664 0523.
          </p>
        )
      },
      {
        question: 'I incurred charges when contacting ASA Holidays while overseas. Can I make claims for the cost incurred?',
        answer: (
          <p>
            No. ASA Holidays will not be liable for any mobile claims. Do remember to get a international calling card to
            get the best rate to call Singapore.
          </p>
        )
      },
      {
        question: 'What happens if the flight / hotel / land tour operators do not acknowledge my bookings made under ASA Holidays?',
        answer: (
          <p>
            ASA Holidays always ensures that bookings are made and communicated clearly with the operators. In cases
            where bookings cannot be resolved with the operators, show the booking receipt to the operators to verify.
            If the issue could not be resolved on the spot, please call our friendly customer service hotline at (65)
            6303 5303. For after office hours, please call our emergency number at (65) 9664 0523.
          </p>
        )
      },
      /* {
        question: 'What happen if I miss a tour / flight due to unforeseen circumstances?',
        answer: (
          <p>
            ASA Holidays will try to make arrangement for you to meet up with the tour. However, this is subjected to
            availability and there will be additional cost incurred. ASA Holidays would like to advise customers to
            purchase travel insurance so that you will be insured in event where you miss the tour due to medical
            conditions. Compensation will be based on the travel insurance policy you purchased. You can get your travel
            insurance{' '}
            <a href="https://asaholiday.com/insurance.php" target="_blank" rel="noreferrer">
              here
            </a>
            .
          </p>
        )
      } */
    ]
  }
]

export default function FAQ() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1>FAQ</h1>
                </div>
                <ul className="breadcrumb-items">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">FAQ</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="faq-section section-padding fix">
            <div className="container">
              <div className="faq-wrapper">
                <div className="section-title text-center">
                  <h2>Frequently Asked Questions</h2>
                </div>

                <div className="accordion" id="asaFaqAccordion">
                  {faqSections.map((section) => (
                    <div key={section.id} className="accordion-item">
                      <h2 className="accordion-header" id={`faqHeading-${section.id}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faqCollapse-${section.id}`}
                          aria-expanded="false"
                          aria-controls={`faqCollapse-${section.id}`}
                        >
                          {section.title}
                        </button>
                      </h2>
                      <div
                        id={`faqCollapse-${section.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`faqHeading-${section.id}`}
                        data-bs-parent="#asaFaqAccordion"
                      >
                        <div className="accordion-body tour-richtext">
                          <ol className="faq-questions">
                            {section.items.map((item) => (
                              <li key={item.question}>
                                <strong>{item.question}</strong>
                                {item.answer}
                              </li>
                            ))}
                          </ol>
                        </div>
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
