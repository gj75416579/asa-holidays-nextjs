'use client'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'


export default function FAQ() {
    return (
        <>
      <Header />

             <div id="smooth-wrapper">
                 <div id="smooth-content">
                     {/* Breadcrumb-Wrapper Section Start */}
                    <div className="breadcrumb-wrapper-3 fix bg-cover" style={{backgroundImage: 'url(/assets/img/inner-page/breadcrumb/bg-2.jpg)'}}>
                        <div className="container">
                            <div className="page-heading">
                                <div className="breadcrumb-sub-title">
                                    <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                        FAQs
                                    </h1>
                                </div>
                                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                    <li>
                                        <a href="/">
                                        Home
                                        </a>
                                    </li>
                                    <li className="style-2 style-3">
                                        FAQs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Conatct-Us Section Start */}
                    <section className="faq-section section-padding fix">
                        <div className="container">
                            <div className="faq-wrapper">
                                <div className="row g-4">
                                    <div className="col-lg-8 col-12">
                                        <div className="faq-left-content">
                                            <div className="section-title mb-0">
                                                <h2 className="text-anim">
                                                    Frequently Asked Questions?
                                                </h2>
                                            </div>
                                            <p className="text">
                                                We&apos;ve gathered the information you need in one place you can save time and make
                                                confident decisions. And if you don&apos;t see your question answered.
                                            </p>
                                            <ul className="nav" role="tablist">
                                                <li className="nav-item style-2 wow fadeInUp" data-wow-delay=".2s">
                                                    <a href="#technical" data-bs-toggle="tab" className="nav-link active" aria-selected="false" role="tab" tabIndex={-1}>
                                                    General
                                                    </a>
                                                </li>
                                                <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                                                    <a href="#work" data-bs-toggle="tab" className="nav-link" aria-selected="true" role="tab">
                                                    Pricing Plan
                                                    </a>
                                                </li>
                                                <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                                                    <a href="#ambition" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex={-1}>
                                                    Tour Package
                                                    </a>
                                                </li>
                                                <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                                                    <a href="#skill" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex={-1}>
                                                    Privacy Policy
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="technical" className="tab-pane fade active show" role="tabpanel">
                                                    <div className="faq-box-item">
                                                        <div className="faq-items-4">
                                                            <div className="accordion" id="technicalAccordion">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingOne">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseOne" aria-expanded="false" aria-controls="technicalCollapseOne">
                                                                        1. How do I book a trip with your agency?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseOne" className="accordion-collapse collapse" aria-labelledby="technicalHeadingOne"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingTwo">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseTwo" aria-expanded="true" aria-controls="technicalCollapseTwo">
                                                                        2. Do you offer customized travel packages?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseTwo" className="accordion-collapse collapse show"
                                                                        aria-labelledby="technicalHeadingTwo" data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingThree">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseThree" aria-expanded="false"
                                                                            aria-controls="technicalCollapseThree">
                                                                        3. What payment methods do you accept?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseThree" className="accordion-collapse collapse"
                                                                        aria-labelledby="technicalHeadingThree" data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingFour">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseFour" aria-expanded="false"
                                                                            aria-controls="technicalCollapseFour">
                                                                        4. Can you assist with visas and travel documents?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseFour" className="accordion-collapse collapse" aria-labelledby="technicalHeadingFour"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingFive">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseFive" aria-expanded="false"
                                                                            aria-controls="technicalCollapseFive">
                                                                        5. What happens if I need to cancel or reschedule my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseFive" className="accordion-collapse collapse" aria-labelledby="technicalHeadingFive"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseSix" aria-expanded="false"
                                                                            aria-controls="technicalCollapseSix">
                                                                        6. Do you provide travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseSix" className="accordion-collapse collapse" aria-labelledby="technicalHeadingSix"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingSeven">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseSeven" aria-expanded="false"
                                                                            aria-controls="technicalCollapseSeven">
                                                                        7. Are your tours suitable for families and groups?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseSeven" className="accordion-collapse collapse" aria-labelledby="technicalHeadingSeven"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingEight">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseEight" aria-expanded="false"
                                                                            aria-controls="technicalCollapseEight">
                                                                        8. How can I contact you during my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseEight" className="accordion-collapse collapse" aria-labelledby="technicalHeadingEight"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingNine">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseNine" aria-expanded="false"
                                                                            aria-controls="technicalCollapseNine">
                                                                        9. How can I book a tour with you?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseNine" className="accordion-collapse collapse" aria-labelledby="technicalHeadingNine"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="technicalHeadingTen">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#technicalCollapseTen" aria-expanded="false"
                                                                            aria-controls="technicalCollapseTen">
                                                                        10. Can you help with visas and travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="technicalCollapseTen" className="accordion-collapse collapse" aria-labelledby="technicalHeadingTen"
                                                                        data-bs-parent="#technicalAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="work" className="tab-pane fade" role="tabpanel">
                                                    <div className="faq-box-item">
                                                        <div className="faq-items-4">
                                                            <div className="accordion" id="workAccordion">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingOne">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseOne" aria-expanded="false" aria-controls="workCollapseOne">
                                                                        1. How do I book a trip with your agency?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseOne" className="accordion-collapse collapse" aria-labelledby="workHeadingOne"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingTwo">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseTwo" aria-expanded="true" aria-controls="workCollapseTwo">
                                                                        2. Do you offer customized travel packages?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseTwo" className="accordion-collapse collapse show"
                                                                        aria-labelledby="workHeadingTwo" data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingThree">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseThree" aria-expanded="false"
                                                                            aria-controls="workCollapseThree">
                                                                        3. What payment methods do you accept?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseThree" className="accordion-collapse collapse"
                                                                        aria-labelledby="workHeadingThree" data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingFour">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseFour" aria-expanded="false"
                                                                            aria-controls="workCollapseFour">
                                                                        4. Can you assist with visas and travel documents?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseFour" className="accordion-collapse collapse" aria-labelledby="workHeadingFour"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingFive">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseFive" aria-expanded="false"
                                                                            aria-controls="workCollapseFive">
                                                                        5. What happens if I need to cancel or reschedule my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseFive" className="accordion-collapse collapse" aria-labelledby="workHeadingFive"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseSix" aria-expanded="false"
                                                                            aria-controls="workCollapseSix">
                                                                        6. Do you provide travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseSix" className="accordion-collapse collapse" aria-labelledby="workHeadingSix"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingSeven">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseSeven" aria-expanded="false"
                                                                            aria-controls="workCollapseSeven">
                                                                        7. Are your tours suitable for families and groups?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseSeven" className="accordion-collapse collapse" aria-labelledby="workHeadingSeven"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingEight">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseEight" aria-expanded="false"
                                                                            aria-controls="workCollapseEight">
                                                                        8. How can I contact you during my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseEight" className="accordion-collapse collapse" aria-labelledby="workHeadingEight"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingNine">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseNine" aria-expanded="false"
                                                                            aria-controls="workCollapseNine">
                                                                        9. How can I book a tour with you?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseNine" className="accordion-collapse collapse" aria-labelledby="workHeadingNine"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="workHeadingTen">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#workCollapseTen" aria-expanded="false"
                                                                            aria-controls="workCollapseTen">
                                                                        10. Can you help with visas and travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="workCollapseTen" className="accordion-collapse collapse" aria-labelledby="workHeadingTen"
                                                                        data-bs-parent="#workAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="ambition" className="tab-pane fade" role="tabpanel">
                                                    <div className="faq-box-item">
                                                        <div className="faq-items-4">
                                                            <div className="accordion" id="ambitionAccordion">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingOne">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseOne" aria-expanded="false" aria-controls="ambitionCollapseOne">
                                                                        1. How do I book a trip with your agency?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseOne" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingOne"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingTwo">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseTwo" aria-expanded="true" aria-controls="ambitionCollapseTwo">
                                                                        2. Do you offer customized travel packages?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseTwo" className="accordion-collapse collapse show"
                                                                        aria-labelledby="ambitionHeadingTwo" data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingThree">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseThree" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseThree">
                                                                        3. What payment methods do you accept?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseThree" className="accordion-collapse collapse"
                                                                        aria-labelledby="ambitionHeadingThree" data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingFour">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseFour" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseFour">
                                                                        4. Can you assist with visas and travel documents?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseFour" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingFour"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingFive">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseFive" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseFive">
                                                                        5. What happens if I need to cancel or reschedule my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseFive" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingFive"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseSix" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseSix">
                                                                        6. Do you provide travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseSix" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingSix"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingSeven">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseSeven" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseSeven">
                                                                        7. Are your tours suitable for families and groups?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseSeven" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingSeven"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingEight">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseEight" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseEight">
                                                                        8. How can I contact you during my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseEight" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingEight"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingNine">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseNine" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseNine">
                                                                        9. How can I book a tour with you?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseNine" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingNine"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="ambitionHeadingTen">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#ambitionCollapseTen" aria-expanded="false"
                                                                            aria-controls="ambitionCollapseTen">
                                                                        10. Can you help with visas and travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="ambitionCollapseTen" className="accordion-collapse collapse" aria-labelledby="ambitionHeadingTen"
                                                                        data-bs-parent="#ambitionAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="skill" className="tab-pane fade" role="tabpanel">
                                                    <div className="faq-box-item">
                                                        <div className="faq-items-4">
                                                            <div className="accordion" id="skillAccordion">
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingOne">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseOne" aria-expanded="false" aria-controls="skillCollapseOne">
                                                                        1. How do I book a trip with your agency?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseOne" className="accordion-collapse collapse" aria-labelledby="skillHeadingOne"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingTwo">
                                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseTwo" aria-expanded="true" aria-controls="skillCollapseTwo">
                                                                        2. Do you offer customized travel packages?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseTwo" className="accordion-collapse collapse show"
                                                                        aria-labelledby="skillHeadingTwo" data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingThree">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseThree" aria-expanded="false"
                                                                            aria-controls="skillCollapseThree">
                                                                        3. What payment methods do you accept?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseThree" className="accordion-collapse collapse"
                                                                        aria-labelledby="skillHeadingThree" data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingFour">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseFour" aria-expanded="false"
                                                                            aria-controls="skillCollapseFour">
                                                                        4. Can you assist with visas and travel documents?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseFour" className="accordion-collapse collapse" aria-labelledby="skillHeadingFour"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingFive">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseFive" aria-expanded="false"
                                                                            aria-controls="skillCollapseFive">
                                                                        5. What happens if I need to cancel or reschedule my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseFive" className="accordion-collapse collapse" aria-labelledby="skillHeadingFive"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingSix">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseSix" aria-expanded="false"
                                                                            aria-controls="skillCollapseSix">
                                                                        6. Do you provide travel insurance?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseSix" className="accordion-collapse collapse" aria-labelledby="skillHeadingSix"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingSeven">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseSeven" aria-expanded="false"
                                                                            aria-controls="skillCollapseSeven">
                                                                        7. Are your tours suitable for families and groups?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseSeven" className="accordion-collapse collapse" aria-labelledby="skillHeadingSeven"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingEight">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseEight" aria-expanded="false"
                                                                            aria-controls="skillCollapseEight">
                                                                        8. How can I contact you during my trip?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseEight" className="accordion-collapse collapse" aria-labelledby="skillHeadingEight"
                                                                        data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header" id="skillHeadingNine">
                                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#skillCollapseNine" aria-expanded="false"
                                                                            aria-controls="skillCollapseNine">
                                                                        9. How can I book a tour with you?
                                                                        </button>
                                                                    </h2>
                                                                    <div id="skillCollapseNine" className="accordion-collapse collapse" aria-labelledby="skillHeadingNine" data-bs-parent="#skillAccordion">
                                                                        <div className="accordion-body">
                                                                            <p>
                                                                                Yes! We specialize in tailor-made tours. You can share your preferences&mdash;destinations, activities, and budget&mdash;and we&apos;ll design a trip that suits your needs.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                                    <div className="faq-right">
                                                        <div className="faq-bg-image">
                                                            <img src="/assets/img/home-1/news/news-19.jpg" alt="img" />
                                                            <div className="tour-bg-content">
                                                                <span>xplore The World</span>
                                                                <h3>
                                                                    <a href="/tour-details">Best Tourist Place</a>
                                                                </h3>
                                                                <a href="/tour-details" className="theme-btn">Explore Tours</a>
                                                            </div>
                                                        </div>
                                                        <div className="comment-box">
                                                            <h3>Have Any Questions?</h3>
                                                            <p>Don&apos;t heisted to contact us</p>
                                                            <form action="#">
                                                                <div className="row g-2">
                                                                    <div className="col-lg-12">
                                                                        <div className="form-clt">
                                                                            <input type="text" name="name" id="name" placeholder="Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="form-clt">
                                                                            <input type="text" name="email" id="email6" placeholder="Email" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <div className="form-clt">
                                                                            <textarea name="message" id="message" placeholder="Write message"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-12">
                                                                        <button type="submit" className="theme-btn">
                                                                        Submit
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
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
                                                    Adventure Is Calling &ndash; Are You Ready?
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







