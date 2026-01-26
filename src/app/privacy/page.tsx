'use client'

import type { ReactNode } from 'react'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

type PolicySection = {
  id: string
  title: string
  content: ReactNode
}

const policySections: PolicySection[] = [
  {
    id: 'personal-info',
    title: 'What personal information do we collect from the people that visit our blog, website or app?',
    content: (
      <p>
        When making travel booking or registering on our site, as appropriate, you may be asked to enter your name,
        email address, mailing address, phone number, credit card information, national registration identity card
        (NRIC) or other details to help you with your experience.
      </p>
    ),
  },
  {
    id: 'collect-when',
    title: 'When do we collect information?',
    content: (
      <p>
        We collect information from you when you register on our site, place a travel booking, provide us with feedback
        on our products or services, subscribe to a newsletter, respond to a survey, fill out a form, use Live Chat,
        open a support ticket or enter information on our site.
      </p>
    ),
  },
  {
    id: 'use-info',
    title: 'How do we use your information?',
    content: (
      <>
        <p>
          We may use the information we collect from you when you register, make a purchase, sign up for our newsletter,
          respond to a survey or marketing communication, browse the website, or use certain other site features in the
          following ways:
        </p>
        <ul>
          <li>
            To personalize your experience and to allow us to deliver the type of content and product offerings in
            which you are most interested.
          </li>
          <li>To improve our website, products and services in order to better serve you.</li>
          <li>To allow us to better service you in responding to your customer service requests.</li>
          <li>To administer a contest, promotion, survey or other site feature.</li>
          <li>To manage your account including rewarding you as part of our reward and recognition programme that you choose to participate.</li>
          <li>To quickly process your transactions.</li>
          <li>To ask for ratings and reviews of our services or products.</li>
          <li>To follow up with them after correspondence (live chat, email or phone inquiries).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'protect-info',
    title: 'How do we protect your information?',
    content: (
      <>
        <p>
          We do not use vulnerability scanning and/or scanning to PCI standards. An external PCI compliant payment
          gateway handles all credit card transactions. We use regular Malware Scanning.
        </p>
        <p>
          Your personal information is contained behind secured networks and is only accessible by a limited number of
          persons who have special access rights to such systems, and are required to keep the information confidential.
          In addition, all sensitive/credit card information you supply is encrypted via Secure Socket Layer (SSL)
          technology.
        </p>
        <p>
          We implement a variety of security measures when a user places an order enters, submits, or accesses their
          information to maintain the safety of your personal information.
        </p>
        <p>
          For your convenience, we may store your credit card information for more than 60 days in order to expedite
          future orders, refunds and to automate the billing process.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: "Do we use 'cookies'?",
    content: (
      <>
        <p>
          Yes. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive
          through your Web browser (if you allow) that enables the site&apos;s or service provider&apos;s systems to recognize
          your browser and capture and remember certain information. For instance, we use cookies to help us remember
          and process the items in your shopping cart. They are also used to help us understand your preferences based
          on previous or current site activity, which enables us to provide you with improved services. We also use
          cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better
          site experiences and tools in the future. We may also use trusted third-party services that track this
          information on our behalf.
        </p>
        <p>
          You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off
          all cookies. You do this through your browser settings. Since browser is a little different, look at your
          browser&apos;s Help Menu to learn the correct way to modify your cookies.
        </p>
        <p>
          If you turn cookies off, some of the features that make your site experience more efficient may not function
          properly.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-disclosure',
    title: 'Third-party disclosure',
    content: (
      <>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information
          unless we provide users with advance notice. This does not include website hosting partners and other parties
          who assist us in operating our website, conducting our business, or serving our users, so long as those parties
          agree to keep this information confidential. We may also release information when its release is appropriate
          to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property or safety.
        </p>
        <p>
          However, non-personally identifiable visitor information may be provided to other parties for marketing,
          advertising, or other uses.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: 'Third-party links',
    content: (
      <>
        <p>
          Occasionally, at our discretion, we may include or offer third-party products or services on our website.
          These third-party sites have separate and independent privacy policies. We therefore have no responsibility or
          liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity
          of our site and welcome any feedback about these sites.
        </p>
        <strong>We have implemented the following:</strong>
        <p>
          We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics
          cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to
          compile data regarding user interactions with ad impressions and other ad service functions as they relate to
          our website.
        </p>
      </>
    ),
  },
  {
    id: 'dnt',
    title: 'How does our site handle Do Not Track signals?',
    content: (
      <p>
        We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT)
        browser mechanism is in place.
      </p>
    ),
  },
  {
    id: 'behavioral-tracking',
    title: 'Does our site allow third-party behavioral tracking?',
    content: <p>It&apos;s also important to note that we do not allow third-party behavioral tracking.</p>,
  },
  {
    id: 'can-spam',
    title: 'CAN SPAM Act',
    content: (
      <>
        <p>
          The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial
          messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough
          penalties for violations.
        </p>
        <strong>We collect your email address in order to:</strong>
        <ul>
          <li>Send information, respond to inquiries, and/or other requests or questions</li>
          <li>Process orders and to send information and updates pertaining to orders.</li>
          <li>Send you additional information related to your product and/or service</li>
          <li>Market to our mailing list or continue to send emails to our clients after the original transaction has occurred.</li>
        </ul>
        <strong>To be in accordance with CANSPAM, we agree to the following:</strong>
        <ul>
          <li>Not use false or misleading subjects or email addresses.</li>
          <li>Identify the message as an advertisement in some reasonable way.</li>
          <li>Include the physical address of our business or site headquarters.</li>
          <li>Monitor third-party email marketing services for compliance, if one is used.</li>
          <li>Honor opt-out/unsubscribe requests quickly.</li>
          <li>Allow users to unsubscribe by using the link at the bottom of each email.</li>
        </ul>
        <p>
          If at any time you would like to unsubscribe from receiving future emails, you can email us at
          customerservice@asaholiday.com or follow the instructions at the bottom of each email and we will promptly
          remove you from all correspondence.
        </p>
      </>
    ),
  },
  {
    id: 'contacting',
    title: 'Contacting Us',
    content: (
      <>
        <p>If there are any questions regarding this privacy policy, you may contact us using the information below.</p>
        <p>
          1 Park Road, People&apos;s Park Complex #03-43
          <br />
          Singapore 059108
          <br />
          Email:{' '}
          <a href="mailto:customerservice@asaholiday.com">customerservice@asaholiday.com</a>
          <br />
          Telp: +65 6303 5303
        </p>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1>Privacy Statement</h1>
                </div>
                <ul className="breadcrumb-items">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">Privacy Statement</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="privacy-section section-padding fix">
            <div className="container">
              <div className="privacy-wrapper">
                <div className="section-title text-center">
                  <h2>Privacy Statement</h2>
                </div>
                <p className="privacy-intro">
                  This privacy statement has been compiled by us, Air Sino-Euro Associates Travel Pte Ltd (ASA Holidays),
                  and our subsidiaries and associated companies, to better serve those who are concerned with how their
                  &quot;Personally Identifiable Information&quot; (PII) is being used. PII is information that can be used on its
                  own or with other information to identify, contact, or locate a single person, or to identify an
                  individual in context. Please read our privacy policy carefully to get a clear understanding of how we
                  collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with
                  our website and consistent with the Personal Data Protection Act 2012 of Singapore.
                </p>

                <div className="accordion" id="privacyAccordion">
                  {policySections.map((section) => (
                    <div key={section.id} className="accordion-item">
                      <h2 className="accordion-header" id={`privacyHeading-${section.id}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#privacyCollapse-${section.id}`}
                          aria-expanded="false"
                          aria-controls={`privacyCollapse-${section.id}`}
                        >
                          {section.title}
                        </button>
                      </h2>
                      <div
                        id={`privacyCollapse-${section.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`privacyHeading-${section.id}`}
                        data-bs-parent="#privacyAccordion"
                      >
                        <div className="accordion-body tour-richtext">{section.content}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="privacy-updated">Last updated on 2018-01-11</p>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  )
}
