'use client'

import type { ReactNode } from 'react'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'

type TermsSection = {
  id: string
  title: string
  content: ReactNode
}

const termsSections: TermsSection[] = [
  {
    id: 'reservations',
    title: 'Reservations & Deposit',
    content: (
      <>
        <p>
          A deposit is required upon reservation. If your minimum deposit is less than the required amount, kindly top
          up the difference within the next two (2) days.
        </p>
        <p>
          Payment of deposit does not constitute confirmation of the tour. All groups are subject to a minimum group size
          in order to depart (as determined by the company), in order for the confirmation to be effected and for the
          departure to be finalized.
        </p>
        <div className="terms-table-wrap">
          <table className="terms-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>Tour Type</th>
                <th style={{ textAlign: 'center' }}>Deposit required per person</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Group Tour Packages</strong>
                </td>
                <td>
                  All group tour packages:
                  <br />
                  S$1000/pax unless otherwise specified
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Free &amp; Easy Packages</strong>
                </td>
                <td>50% - 80% of total tour fare</td>
              </tr>
              <tr>
                <td>
                  <strong>Tours on Chartered Flights</strong>
                </td>
                <td rowSpan={2}>Amount as per Terms and Conditions stipulated by principal suppliers</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    Tours organised by third parties (e.g. luxury cruise, overseas land operators, airlines etc)
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Group tours with special and or promotional airfares require amount per terms and conditions stipulated by
          principal suppliers.
        </p>
        <p>
          In the event of an increment of taxes and fuel surcharge imposed by relevant authorities and airlines, the
          Company reserves the right to request for a top-up on initial deposit for immediate issuance of air tickets, to
          avoid incurring additional surcharges.
        </p>
        <p>
          The Company is GST-registered and endeavours to deliver on its commitment to avoid over or undercharging its
          itineraries, prices and services by ensuring correct change is returned to its customer. The Company reserves
          the right to revise the tour fares and to determine the date of commencement of such revised tour fares.{' '}
          <strong>
            The above apply for transfer of tours due to no group size. All prior special discounts given will not be
            extended for the alternative tours.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: 'payment-cancellation',
    title: 'Payment & Cancellation Policies',
    content: (
      <>
        <p>
          All prices/charges are expressed in Singapore Dollars unless otherwise explicitly stated. Payment may be made
          in cash, NETS, cheques or credit cards (Visa, MasterCard) where available. Cheques will only be accepted if
          presented at least 5 working days before departure. A service fee will be imposed for certain payment
          instruments and this will be made known to the customer upon payment. Payment by instalment plan, where
          applicable, is valid for selected banks and subject to banks&apos; approval bounded by their terms &amp; conditions.
        </p>
        <p>
          Full payment is required minimum sixteen (16) days before departure or once group tour is confirmed departure.
          The Company reserves the right to request for deposit top-up or full payment more than 16 days when required
          by principal supplier. For group tours, full payment is required minimum sixteen (16) days before departure.
          For tours on chartered flights, full payment must be made one month before departure. As chartered flights are
          subject to governments&apos; or local authorities&apos; approval, ASA Holidays has the final discretion to confirm tour
          departure within 7 days or less. For free and easy packages, full payment is required upon confirmation of air
          reservations and land arrangement, before issuance of travel documents.
        </p>
        <p>
          All taxes and fuel surcharge are subject to change without prior notice and in the event of any surcharge
          imposed by relevant authorities and airlines, the Company will collect the difference even after full payment
          is made before tour departure. The Company reserves the right to forfeit any deposit and cancel the reservation
          following the customer&apos;s failure to comply with the aforementioned policies. The fees payable by the customer
          are:
        </p>
        <div className="terms-table-wrap">
          <table className="terms-table">
            <thead>
              <tr>
                <th rowSpan={2} style={{ textAlign: 'center' }}>
                  NO. OF DAYS BETWEEN DEPARTURE AND RECEIPT OF CANCELLATION NOTICE
                </th>
                <th colSpan={2} style={{ textAlign: 'center' }}>
                  CANCELLATION FEES PER PASSENGER
                </th>
              </tr>
              <tr>
                <th style={{ textAlign: 'center' }}>
                  All tours (except tours on chartered flight &amp; free and easy packages)
                </th>
                <th style={{ textAlign: 'center' }}>Tours on chartered flights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>35 days and above</strong>
                </td>
                <td>Full deposit*</td>
                <td>Full deposit*</td>
              </tr>
              <tr>
                <td>17-34 days before departure</td>
                <td>50% of tour fare or full deposit whichever is higher*</td>
                <td rowSpan={3}>Full tour fare*</td>
              </tr>
              <tr>
                <td>08-16 days before departure</td>
                <td>75% of tour fare or full deposit whichever is higher*</td>
              </tr>
              <tr>
                <td>07 days and less</td>
                <td>Non-Refundable*</td>
              </tr>
              <tr>
                <td colSpan={3}>
                  * The above cancellation charges apply if the air ticket is not issued. If the air ticket is issued, the
                  air ticket value will be added onto the cancellation charges. If the deposit amount is insufficient to
                  cover the cancellation, the passenger must pay for the difference.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          For free and easy packages, administrative fees and /or one night hotel rate will be imposed for those travel
          documents not issued. Once issuance of travel documents, there will be no changes allowed and no refund value.
        </p>
        <p>
          Terms above apply only to tours operated by the Company. For tours or components supplied by third party e.g.
          luxury cruise, overseas land operators, hotels, airlines, car rentals, trains etc, cancellation terms &amp;
          conditions shall apply with a handling fee of S$50 per service per customer.
        </p>
        <p>
          Travel vouchers issued by the Company as part of its promotional activities are subjected to the same terms
          &amp; conditions. Additional terms &amp; conditions stipulated in the travel vouchers apply.
        </p>
        <p>Cancellation of bookings must be made in writing to avoid misunderstanding.</p>
        <p>
          The Company reserves the right to withdraw any passenger as a member of the tour if it appears to the Company
          that the behaviour or conduct of such person/s is deemed detrimental to or incompatible with the health,
          safety, interests, harmony and welfare of the other tour participants and the group as a whole. Under such
          circumstances, the Company shall be under no liability thereafter to any such person.
        </p>
      </>
    ),
  },
  {
    id: 'amendment',
    title: 'Amendment',
    content: (
      <>
        <p>
          A minimum amendment fee of S$75 per customer per amendment will apply for any changes made to existing
          booking. Any replacement or changes of passenger will be considered as a cancellation and not an amendment.
          This term is applicable to all cases, including but not restricted to medical and pregnancy cases.
        </p>
        <p>
          For changes to flight component of the tour, a minimum administrative fee of S$50 per ticket on top of any
          airline charges will be levied for any amendment, except for all special fares and promotional air tickets
          including tax reserved are non-negotiable, non-endorsable, non-refundable and non-reroutable. No refund will
          be made for any unused air ticket.
        </p>
        <p>
          A postponement of tour by customer for any reason is a tour cancellation. Under such circumstances, the above
          Payment &amp; Cancellation Policies will apply. The Company makes reasonable effort to avoid changes in
          itinerary. However, the Company reserves the right to make reasonable changes at any time without
          compensation, especially due to unforeseen circumstances.
        </p>
      </>
    ),
  },
  {
    id: 'extension',
    title: 'Extension Of Stay And Deviation',
    content: (
      <p>
        Extension/deviation of stay may be permitted at the end of the tour, subjected to maximum validity and
        restriction of air tickets, seat confirmation and availability of hotel prior to commencement of the tour. It
        is the customer&apos;s responsibility to hold confirmation for the return flight. When extension/deviation of stay
        cannot be confirmed two weeks prior to departure, the customer is deemed to be returning with the original
        group schedule. All extra cost incurred to process the extension will be borne by the customer. Please note
        that extension/deviation of stay will be at customer&apos;s own expense and transfers to and fro airports will not
        be provided. Extension/deviation of stay is not permitted for tours operated with chartered flights.
      </p>
    ),
  },
  {
    id: 'refund',
    title: 'Refund Policies',
    content: (
      <>
        <p>
          At times, due to low subscription for a group tour, the Company may choose to cancel the entire tour 14 days
          prior to departure. The company may, if it so chooses, recommend alternative tours preferably to the same
          destination or other tours, based on current tour fare. In case of free &amp; easy tours, accommodation and all
          services are strictly on request and subject to confirmation. The Company may recommend alternatives if
          available; sometimes with surcharges.
        </p>
        <p>
          All chartered flights are subject to approval by relevant government authorities. In the event that the
          required approval is not granted one (1) week before the scheduled departure date, alternative travel
          arrangement which may involve scheduled flights on other carriers may be arranged for departure on the
          schedule departure dates or an alternative date as determined by the Company to be appropriate. Should the
          customer decide not to accept the alternatives, all refunds (exclude Visa Fee) will be paid accordingly without
          further obligation or liabilities on the part of the Company. There shall be no claim for inconvenience, loss
          of leave and transportation cost due to the cancellation of tour. For cheque or cash payment, refund will be
          made in the form of a cheque and process within 2 to 4 weeks. For credit card payment, refund will be made
          through the credit card&apos;s company and process between 4 - 6 weeks. During peak periods, the refund process
          may be longer due to the increase in transactions.
        </p>
        <p>
          No refund will be made to accommodation, meals, sightseeing tour or any other services included in the tour
          fare but not utilised by the customer, either in part or full, or where the customer amends, cancels or
          otherwise varies the arrangement after commencement of the tour. There shall be no additional claim due to the
          cancellation of tour.
        </p>
        <p>
          The company shall not be liable for such cancellation, save that the Company shall make the necessary refunds
          of deposits or tour fares set out herein.
        </p>
        <p>
          Certain tour inclusions may involve the Government&apos;s facilities. In the event they are taken back by the
          government, a replacement or refund deemed appropriate will be made by the Company.
        </p>
      </>
    ),
  },
  {
    id: 'advertising',
    title: 'Advertising & Promotions',
    content: (
      <>
        <p>
          The Company seeks to advertise and portray accurate information in accordance to the Singapore Code of
          Advertising Practice (SCAP) set by the Advertising Standards Authority of Singapore (ASAS) as much as
          possible. Information will be made to be as accurate as at the time of print, whether in print and / or digital
          media.
        </p>
        <p>New bookings that are made with travel credit will not be entitled to any special promotion gifts.</p>
      </>
    ),
  },
  {
    id: 'fare-includes',
    title: 'Tour Fare Includes',
    content: (
      <ul>
        <li>Return economy class group tour air ticket</li>
        <li>
          Where stipulated in the tour itinerary, domestic flights, train tickets, transfers, admission fees, meals and
          sightseeing
        </li>
        <li>
          Accommodation based on twin or triple sharing room. For triple room, the third bed may be a &apos;roll-away&apos; bed.
          For single passengers, a single supplement charge applies.
        </li>
        <li>
          The Company seeks to provide the most value for money tour fares to the customers and strive to display
          discounted prices as accurately as possible at a point in time. Nonetheless, the Company reserves the right to
          amend prices thereafter due to unforeseen changes from its suppliers such as but not restricted to airlines and
          hotels charges.
        </li>
      </ul>
    ),
  },
  {
    id: 'fare-excludes',
    title: 'Tour Fare Excludes',
    content: (
      <ul>
        <li>All taxes and fuel surcharges imposed by relevant authorities and airlines.</li>
        <li>Visa application fees.</li>
        <li>
          Excess baggage charges, room service, beverage, laundry charges, travel insurance and all items of personal
          nature.
        </li>
        <li>Gratuities to drivers, tour guides, tour leaders, hotel porters etc.</li>
      </ul>
    ),
  },
  {
    id: 'child-fare',
    title: 'Child Fare',
    content: (
      <p>
        Child fare is applicable to children under the age of twelve (12) on the scheduled date of departure. It is
        calculated based on the child sharing a room with two or three adults in the same room with no extra bed. A
        surcharge will apply in the event where an extra bed is required or when the child is sharing room with only one
        adult. In some countries, due to fire regulation, it is compulsory for each person to have their own bed.
        Booking with four persons in a room will not be allowed unless the hotel has quad sharing rooms available.
      </p>
    ),
  },
  {
    id: 'special-request',
    title: 'Special Request',
    content: (
      <p>
        Any special requests such as special meals, dietary requirements, adjoining/adjacent rooms etc shall be
        communicated to the Company upon reservation. Please note, however, that such requests are subject to
        availability and confirmation by the respective airlines and hotels.
      </p>
    ),
  },
  {
    id: 'travel-docs',
    title: 'Travel Documents/Visa',
    content: (
      <>
        <p>
          It is the customer&apos;s sole responsibility to ensure that his/her international passport has a validity of at
          least six (6) months beyond the conclusion of the tour as well as the necessary visas and have at least four
          (4) blank pages side by side, relevant visas and vaccinations, health certificates and all necessary travel
          documents (e.g. exit permit, work permit, social visitor pass etc) as required by the various government
          authorities of the countries to be visited. Please ensure all photos in the passports are updated by the
          Immigration Authority prior to departure.
        </p>
        <p>For foreign passport holders, it is the passenger&apos;s responsibility to hold valid re-entry Visas.</p>
        <p>
          Different embassies/consulates require varying lengths of time to process visa applications. The Company
          renders assistance in visa application wherever possible. The Company cannot, however, guarantee the approval
          of such visa application. This service is subject to (auxiliary) charges.
        </p>
        <p>
          If, for any reason, application for visa or exit permit is rejected, full refund of all monies paid (excluding
          visa application fees paid to the respective embassies and an administrative fee imposed by the Company) will
          be made if the result is made known to the Company at least 45 days prior to departure. If less than 45 days&apos;
          notice is given, the cancellation policy as stated under the section &quot;Payment &amp; Cancellation Policies&quot; and/or
          in the addendums to the terms &amp; conditions, will apply.
        </p>
        <p>
          The Company will not be responsible for any expenses, reimbursement or refund of the tour fare if the
          passenger is deported or refused entry by immigration authorities on the tour for whatever reasons, including
          improper travel documents, quarantine, custom regulations, and possession of unlawful items or irregularities
          that may cause harm/damage to person or property.
        </p>
      </>
    ),
  },
  {
    id: 'insurance',
    title: 'Travel Insurance',
    content: (
      <p>
        Arrangement for travel insurance is strongly recommended to cover unforeseen circumstances such as trip
        cancellation, loss of personal belongings, baggage &amp; medical attention etc. Under no circumstances shall the
        Company be construed as a carrier under a contract of carriage of a passenger and his/her baggage and
        belongings. The Company shall not be responsible for any loss or damage in relation of trip cancellation.
      </p>
    ),
  },
  {
    id: 'baggage',
    title: 'Baggage',
    content: (
      <p>
        Each passenger is entitled to check in one bag not exceeding twenty (20) kilogrammes and one (1) hand-carried
        bag not exceeding seven (7) kilogrammes and/or subject to individual airlines&apos; baggage allowance. Excess
        baggage charge must be paid by the passenger upon check in.
      </p>
    ),
  },
  {
    id: 'seat-rotation',
    title: 'Seat Rotation',
    content: (
      <p>
        For the convenience of all members of a tour group, passengers may be requested to rotate seating arrangement
        on the coach or other mode of transportation for the duration of the tour.
      </p>
    ),
  },
  {
    id: 'responsibility',
    title: 'Responsibility & Liability',
    content: (
      <>
        <p>
          The Company acts as agent for the airlines, transport companies, hotels and other principals of the tour
          packages and is not liable for changes made by suppliers but will render assistance where possible. All
          tickets, coupons and orders are furnished and issued, subject in every respect to those terms and conditions
          under which the means of transportation or other services provided thereby are offered or supplied by owners,
          operators, managing agents or agents of public carriers.
        </p>
        <p>
          The company accepts no responsibility for any injury, damage, accident, loss, delay or irregularities that may
          be caused to the person or property where such occur as a result of circumstances beyond its control
          (including but not limited to the below circumstances).
        </p>
        <ol type="a">
          <li>
            Mechanical breakdown, government actions, political unrest, force majeure, acts of God, strikes, compulsory
            quarantine, industrial action or other circumstances beyond its reasonable control
          </li>
          <li>Traffic congestion and obstruction of any public/private roads or highways.</li>
          <li>Failure of the customer to obtain required documentation</li>
          <li>Failure of the customer to follow reasonable instructions including but not limited to meeting time and venue</li>
          <li>All purchases made at designated shopping outlets during the tour</li>
          <li>Accidents of any kind occurring during passenger&apos;s independent activities</li>
          <li>Theft, robbery or lost property</li>
        </ol>
        <p>All verbal agreement must be stated in writing, duly signed.</p>
        <p>
          No tour guides, tour leaders or other employees or agents of the Company are authorized to commit the Company
          to any liability whatsoever and the Company shall not be bound by any statement or representation unless it is
          in writing and signed by a Management Executive of the Company.
        </p>
      </>
    ),
  },
  {
    id: 'no-variation',
    title: 'No Variation Of Conditions',
    content: (
      <p>These terms and conditions shall not be amended or waived except by written agreement between you and the Company.</p>
    ),
  },
  {
    id: 'complaints',
    title: 'Complaints And Claims',
    content: (
      <p>
        Any complaint and/or claim shall be made known to the Company in writing within fourteen (14) days from the date
        of return to Singapore. In the event customers require assistance from the Company to make a claim against a 3rd
        party, a service fee will be imposed. No responsibility is accepted if any complaint and/or claim is not made.
        The Company will strive to resolve any complaints within 3 months from the date of complaint. Should there be
        no feedback received from the customers within 14 days, it shall be deemed that the customers are satisfied
        with the services rendered.
      </p>
    ),
  },
  {
    id: 'service-guarantee',
    title: 'Service Guarantee',
    content: (
      <p>
        We are committed to offer goods &amp; services of satisfactory quality to the customer as defined in the Consumer
        Protection (Fair Trading) Act and will provide timely information for changes in any itineraries, tour
        components should they differ from our tour brochures and/or tour shelves. The Company shall set out to ensure
        satisfactory quality as defined in the Sales of Goods Act Section 14(2).
      </p>
    ),
  },
  {
    id: 'non-disclosure',
    title: 'Non-Disclosure Of Information',
    content: (
      <>
        <p>
          The Company highly values the privacy and confidentiality of its customers. Therefore, the Company endeavour
          to safeguard and protect any information of the customers by limiting the collection and usage of such data
          unless necessary in the context of serving the customer. The abovementioned data will not be compromised
          unless absolutely required to by the law.
        </p>
        <p>
          The company reserves the right to change, amend, insert or delete any of Terms and Conditions or policies
          contained in this document, as the case of may be, without prior notice.
        </p>
      </>
    ),
  },
  {
    id: 'confidentially',
    title: 'Confidentially and Privacy',
    content: (
      <>
        <p>
          We will comply with all relevant obligations under the Personal Data Protection Act 2012 (PDPA) governing the
          collection, use, disclosure and care of your personal data in accordance with our privacy statement, a copy of
          which can be found at{' '}
          <a href="https://asaholiday.com/privacy.php" target="_blank" rel="noreferrer">
            https://asaholiday.com/privacy.php
          </a>
          .
        </p>
        <p>
          We may take photographs and videos of travellers participating in our Package Tours for our advertising and
          publicity materials (e.g. brochures, Social Media Posting, Website etc) and by joining our Package Tours, all
          travellers shall be deemed to have consented to such collection and/or use on our part.
        </p>
        <p>
          Notwithstanding, any traveller who wishes to withdraw his or her consent to our collection or use of any
          photographs or videos that may feature such traveller, may notify us at{' '}
          <a href="mailto:customerservice@asaholiday.com">customerservice@asaholiday.com</a>, whereupon we will endeavour,
          as soon as reasonably practicable, to remove any reference to such traveller from our advertising and
          publicity materials and/or related media programmes; provided always that we shall not be liable to recall or
          change any such materials or media programmes which have been produced, publicly distributed or disseminated
          by us prior to receiving such notice.
        </p>
      </>
    ),
  },
]

export default function TourTerms() {
  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="breadcrumb-wrapper-3 fix bg-cover" style={{ backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)' }}>
            <div className="container">
              <div className="page-heading">
                <div className="breadcrumb-sub-title">
                  <h1>Tour Terms &amp; Conditions</h1>
                </div>
                <ul className="breadcrumb-items">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="style-2 style-3">Tour Terms &amp; Conditions</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="tour-terms-section section-padding fix">
            <div className="container">
              <div className="tour-terms-wrapper">
                <div className="section-title text-center">
                  <h2>Tour Terms &amp; Conditions</h2>
                </div>
                <p className="tour-terms-intro">
                  Customers are deemed to have read, understood &amp; accepted the following conditions upon booking. Air
                  Sino-Euro Associates Travel Pte Ltd shall be known as &quot;The Company&quot; in the conditions below.
                </p>

                <div className="accordion" id="tourTermsAccordion">
                  {termsSections.map((section) => (
                    <div key={section.id} className="accordion-item">
                      <h2 className="accordion-header" id={`tourTermsHeading-${section.id}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#tourTermsCollapse-${section.id}`}
                          aria-expanded="false"
                          aria-controls={`tourTermsCollapse-${section.id}`}
                        >
                          {section.title}
                        </button>
                      </h2>
                      <div
                        id={`tourTermsCollapse-${section.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`tourTermsHeading-${section.id}`}
                        data-bs-parent="#tourTermsAccordion"
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
