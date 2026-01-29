'use client'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

const positions = [
  'Accounts Executive',
  'Events and Media Executive',
  'MICE Manager',
  'Operations Executive',
  'Tour Executive',
  'Worldwide Product Managers',
  'China Products Executive',
  'China Products Manager',
  'Marketing & Promotions Manager',
  'Marketing Consultant',
  'Marketing Manager',
  'Part-Time Products Manager (Worldwide & China Products)',
  'Sales & Marketing Executives',
]

export default function Career() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="breadcrumb-wrapper-3 fix bg-cover"
            style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}
          >
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1>Career</h1>
                </div>
                <ul className="breadcrumb-items">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">Career</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="career-section section-padding fix">
            <div className="container">
              <div className="section-title text-center">
                <h2>Career Opportunities</h2>
              </div>

              <div className="career-copy">
                <p>
                  ASA Holidays is excited to announce our expansion plans and is looking for talented individuals to join our dynamic team.
                  We are hiring for the following positions:
                </p>
              </div>

              <div className="career-positions">
                <ul className="list">
                  {positions.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>

              <div className="career-copy">
                <h4>Who We&apos;re Looking For</h4>
                <p>
                  We welcome applications from Singaporeans and Permanent Residents. If you are passionate about the travel industry and eager
                  to contribute to our growth, we would love to hear from you!
                </p>
              </div>

              <div className="career-copy">
                <h4>How to Apply</h4>
                <p>
                  Please send your resume, including a recent photograph, your reason for leaving your last employment, current and previous
                  salaries, expected salary, and your availability to{' '}
                  <a href="mailto:ymtham@asaholiday.com">ymtham@asaholiday.com</a>
                </p>
              </div>

              <div className="career-copy">
                <h4>Note</h4>
                <p>
                  Only shortlisted candidates will be contacted.
                  <br />
                  Join us at ASA Holidays and be part of an exciting journey!
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  )
}
