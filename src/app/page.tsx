'use client'

import { useEffect, useState } from 'react'

import Header from '@/templete/HeaderWithSuspense'
import Footer from '@/templete/Footer'
import ApiMaintenanceNotice from '@/templete/ApiMaintenanceNotice'

type HomeApiData = {
  hotTours: unknown | null
  sectorLevels: unknown | null
  banners: unknown | null
  sectors: unknown | null
}

type TourSectionCard = {
  id?: string
  image?: string
  badge?: string
  title?: string
  location?: string
  href?: string
  animationClass?: string
  delay?: string
  imageClass?: string
  contentClass?: string
  wrapperClass?: string
}

type ResolvedTourSection = {
  leftLarge: TourSectionCard | null
  leftStack: (TourSectionCard | null)[]
  rightLarge: TourSectionCard | null
  rightStack: (TourSectionCard | null)[]
}
type TourPlaceItem = {
  id: string | number
  image: string
  badge?: string
  productCode: string
  priceLabel: string
  price: string
  title: string
  titleLine2?: string
  location: string
  duration: string
  group: string
  delay: string
  href?: string
}

type TourPlaceSection = {
  subtitle: {
    pre: string
    count: string
    suffix: string
    post: string
  }
  rating: {
    label: string
    stars: number
    halfStar: boolean
  }
  items: TourPlaceItem[]
}
const homeApiEndpoints = {
  hotTours: '/api/tour/hot-list',
  sectorLevels: '/api/tour/sector',
  banners: '/api/banners?position=Home Page',
  sectors: '/api/sectors',
}

const homeApiPayloads = {
  hotTours: {
    type: 0,
    count: 10,
    page: 0,
  },
  sectorLevels: {
    level: 1,
    type: 1,
    popular: -1,
    exists: 1,
    containtPicture: 1,
  },
  sectors: {},
}

const homeApiInitialData: HomeApiData = {
  hotTours: null,
  sectorLevels: null,
  banners: null,
  sectors: null,
}

const apiMode = process.env.NEXT_PUBLIC_API_MODE ?? 'dev'
const shouldFallback = apiMode !== 'prod'

const heroSlides = [
  {
    id: 'hero-1',
    bgImage: '/assets/img/home-1/hero/hero-bg.jpg',
    title: 'Your Gateway to Unforgettable Adventures',
    description: "Singapore's premier travel agency offering curated group tours, cruises, and customized travel experiences worldwide",
    cta: {
      href: '/tour-grid',
      label: 'Explore Our Tours',
    },
    counters: [
      {
        value: '100',
        suffix: '+',
        label: 'Destinations Worldwide',
      },
      {
        value: '30',
        suffix: '+',
        label: 'Years of Excellence',
      },
    ],
  },
  {
    id: 'hero-2',
    bgImage: '/assets/img/home-1/hero/hero-bg-2.jpg',
    title: 'Explore Europe in Style with ASA Holidays',
    description: 'Discover Switzerland, Scandinavia, Italy and Eastern Europe with our expertly guided tours',
    cta: {
      href: '/tour-grid',
      label: 'View Europe Tours',
    },
    counters: [
      {
        value: '50',
        suffix: 'k+',
        label: 'Happy Travelers',
      },
      {
        value: '98',
        suffix: '%',
        label: 'Customer Satisfaction',
      },
    ],
  },
  {
    id: 'hero-3',
    bgImage: '/assets/img/home-1/hero/hero-bg-3.jpg',
    title: "Discover Asia's Hidden Treasures",
    description: "From Japan's cherry blossoms to China's ancient wonders - experience the best of Asia with ASA Holidays",
    cta: {
      href: '/tour-grid',
      label: 'View Asia Tours',
    },
    counters: [
      {
        value: '200',
        suffix: '+',
        label: 'Tour Packages',
      },
      {
        value: '24/7',
        suffix: '',
        label: 'Customer Support',
      },
    ],
  },
]

const contactForm = {
  rightShapeImage: '/assets/img/home-1/tree.png',
  stats: {
    value: '50',
    suffix: 'k+',
    label: 'Happy travelers served since 1992',
    image: '/assets/img/home-1/group.png',
  },
  heading: 'Find your perfect holiday package',
  subtext: {
    pre: 'We offer more than',
    count: '200',
    suffix: '+',
    post: 'curated tour packages',
  },
  selects: [
    {
      placeholder: 'Select Destination',
      options: ['Europe', 'Japan', 'China', 'Korea', 'Australia'],
    },
    {
      placeholder: 'Departure Month',
      options: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    {
      placeholder: 'Tour Type',
      options: ['Group Tours', 'Free & Easy'],
    },
  ],
  buttonText: 'Search Tours',
}

const tourSection = {
  leftLarge: {
    image: '/assets/img/home-1/tour/tour-1.jpg',
    badge: '20+ tours',
    title: 'Swiss Alps Adventure',
    location: 'Switzerland',
    href: '/tour-details',
    animationClass: 'wow fadeInUp',
    delay: '.3s',
  },
  leftStack: [
    {
      id: 'tour-left-1',
      image: '/assets/img/home-1/tour/tour-2.jpg',
      badge: '15+ tours',
      title: 'Cherry Blossom Season',
      location: 'Tokyo, Japan',
      href: '/tour-details',
      imageClass: 'style-3',
      animationClass: 'wow fadeInRight',
      delay: '.3s',
    },
    {
      id: 'tour-left-2',
      image: '/assets/img/home-1/tour/tour-3.jpg',
      badge: '12+ tours',
      title: 'Northern Lights',
      location: 'Scandinavia',
      href: '/tour-details',
      imageClass: 'style-3',
      animationClass: 'wow fadeInRight',
      delay: '.5s',
      wrapperClass: 'mt-1',
    },
  ],
  rightLarge: {
    image: '/assets/img/home-1/tour/tour-4.jpg',
    badge: '25+ tours',
    title: 'Great Wall & Forbidden City',
    location: 'Beijing, China',
    href: '/tour-details',
    imageClass: 'style-2',
    animationClass: 'wow fadeInUp',
    delay: '.3s',
  },
  rightStack: [
    {
      id: 'tour-right-1',
      image: '/assets/img/home-1/tour/tour-5.jpg',
      badge: '10+ tours',
      title: 'K-Culture Experience',
      location: 'Seoul, Korea',
      href: '/tour-details',
      imageClass: 'style-3',
      contentClass: 'style-4',
      animationClass: 'wow fadeInRight',
      delay: '.3s',
    },
    {
      id: 'tour-right-2',
      image: '/assets/img/home-1/tour/tour-6.jpg',
      badge: '8+ tours',
      title: 'Outback Discovery',
      location: 'Sydney, Australia',
      href: '/tour-details',
      imageClass: 'style-3',
      contentClass: 'style-5',
      animationClass: 'wow fadeInRight',
      delay: '.5s',
      wrapperClass: 'mt-1',
    },
  ],
}

const aboutSection = {
  titleLines: ['Your Trusted', 'Travel Partner', 'Since 1992'],
  subtitle: {
    pre: 'Established in 1992,',
    value: '30',
    suffix: '+',
    post: 'years of excellence in travel',
  },
  imagePrimary: '/assets/img/home-1/about/01.jpg',
  imageSecondary: '/assets/img/home-1/about/02.jpg',
  box: {
    iconClass: 'flaticon-travel',
    title: 'Trusted & Secure',
    description: 'Your safety and trust are our top priorities.',
  },
  description:
    "ASA Holidays is Singapore's leading travel agency, specializing in curated group tours, free & easy packages, cruises, and MICE services. We pride ourselves on delivering exceptional travel experiences with professional guides and personalized service.",
  featureGroups: [
    ['Expert Tour Guides', 'Curated Itineraries'],
    ['Competitive Pricing', '24/7 Support'],
    ['Travel Insurance', 'Flexible Payments'],
  ],
  cta: {
    href: '/about',
    label: 'Learn More About Us',
  },
}

const tourPlaceSection: TourPlaceSection = {
  subtitle: {
    pre: 'Discover our most loved destinations with',
    count: '200',
    suffix: '+',
    post: 'curated tour packages',
  },
  rating: {
    label: 'Rating',
    stars: 4,
    halfStar: true,
  },
  items: [
    {
      id: 'tour-place-1',
      image: '/assets/img/home-1/tour/tour-8.jpg',
      badge: '10% Off',
      productCode: '',
      priceLabel: 'From',
      price: '$2,888',
      title: '10D Switzerland Grand Tour with Glacier Express',
      location: 'Switzerland',
      duration: '10 days',
      group: 'Group Tour',
      delay: '.2s',
    },
    {
      id: 'tour-place-2',
      image: '/assets/img/home-1/tour/tour-9.jpg',
      productCode: '',
      priceLabel: 'From',
      price: '$1,688',
      title: '8D Japan Cherry Blossom Tour Tokyo to Osaka',
      location: 'Tokyo, Japan',
      duration: '8 days',
      group: 'Group Tour',
      delay: '.4s',
    },
    {
      id: 'tour-place-3',
      image: '/assets/img/home-1/tour/tour-10.jpg',
      badge: 'Early Bird',
      productCode: '',
      priceLabel: 'From',
      price: '$1,288',
      title: '6D China Beijing & Shanghai Highlights Tour',
      location: 'Beijing, China',
      duration: '6 days',
      group: 'Group Tour',
      delay: '.6s',
    },
    {
      id: 'tour-place-4',
      image: '/assets/img/home-1/tour/tour-11.jpg',
      productCode: '',
      priceLabel: 'From',
      price: '$988',
      title: '5D Korea Seoul & Jeju Island Discovery',
      location: 'Seoul, Korea',
      duration: '5 days',
      group: 'Group Tour',
      delay: '.8s',
    },
    {
      id: 'tour-place-5',
      image: '/assets/img/home-1/tour/tour-12.jpg',
      productCode: '',
      priceLabel: 'Tours Price',
      price: '$49.00',
      title: 'Train on Nine Arches Bridge in',
      titleLine2: 'Sri Lanka',
      location: 'Ella, Sri Lanka',
      duration: '1 - 3 days',
      group: '3 persons',
      delay: '.2s',
    },
    {
      id: 'tour-place-6',
      image: '/assets/img/home-1/tour/tour-13.jpg',
      badge: '8% Off',
      productCode: '',
      priceLabel: 'Tours Price',
      price: '$49.00',
      title: 'White buildings with blue',
      titleLine2: 'accents near the Atlantic shore.',
      location: 'Galle, Sri Lanka',
      duration: '1 - 3 days',
      group: '3 persons',
      delay: '.4s',
    },
    {
      id: 'tour-place-7',
      image: '/assets/img/home-1/tour/tour-14.jpg',
      productCode: '',
      priceLabel: 'Tours Price',
      price: '$49.00',
      title: 'Man Sitting on Rocks next to',
      titleLine2: 'Creek in Mountains',
      location: 'Nepal',
      duration: '1 - 3 days',
      group: '3 persons',
      delay: '.6s',
    },
    {
      id: 'tour-place-8',
      image: '/assets/img/home-1/tour/tour-15.jpg',
      badge: '23% Off',
      productCode: '',
      priceLabel: 'Tours Price',
      price: '$49.00',
      title: 'Aerial Photography of Cinque',
      titleLine2: 'Terre in Italy',
      location: 'Liguria, Italy',
      duration: '1 - 3 days',
      group: '3 persons',
      delay: '.8s',
    },
  ],
}

const benefitTourSection = {
  title: 'How to Benefit Our Tours',
  descriptionLines: [
    'Make the most of your travel experience with our carefully',
    'curated tours designed to offer convenience',
  ],
  blocks: [
    {
      type: 'item',
      id: 'benefit-1',
      iconClass: 'flaticon-traveling',
      title: 'Expert Travel Guide',
      href: '/tour-details',
      description: 'Travel professionals who help destinations, accommodations, and activities tailored.',
      colClass: 'col-xl-3 col-lg-4 col-md-6',
      wowClass: 'fadeInLeft',
      delay: '.3s',
    },
    {
      type: 'image',
      id: 'benefit-image',
      image: '/assets/img/home-1/tour/tour-7.jpg',
      colClass: 'col-xl-6 col-lg-4 col-md-6',
      wowClass: 'img-custom-anim-top',
    },
    {
      type: 'item',
      id: 'benefit-2',
      iconClass: 'flaticon-roadmap',
      title: 'Custom Tour Plan',
      href: '/tour-details',
      description: 'Enjoy trips designed around your preferences, whether you want a relaxing beach holiday',
      colClass: 'col-xl-3 col-lg-4 col-md-6',
      wowClass: 'fadeInRight',
      delay: '.5s',
    },
    {
      type: 'item',
      id: 'benefit-3',
      iconClass: 'flaticon-mouse',
      title: 'Hassle-Free Booking',
      href: '/tour-details',
      description: 'Save time and effort with a single platform to book flights, hotels, activities, transportation',
      colClass: 'col-xl-3 col-lg-4 col-md-6',
      wowClass: 'fadeInUp',
      delay: '.2s',
    },
    {
      type: 'item',
      id: 'benefit-4',
      iconClass: 'flaticon-promotion',
      title: 'Deals & Discounts',
      href: '/tour-details',
      description: 'Save time and effort with a single platform to book flights, hotels, activities, transportation',
      colClass: 'col-xl-3 col-lg-4 col-md-6',
      wowClass: 'fadeInUp',
      delay: '.4s',
    },
    {
      type: 'item',
      id: 'benefit-5',
      iconClass: 'flaticon-tourist',
      title: 'Local Guides Authentic',
      href: '/tour-details',
      description: 'Immerse yourself local culture with trusted guides who provide insider tips and hidden',
      colClass: 'col-xl-3 col-lg-4 col-md-6',
      wowClass: 'fadeInUp',
      delay: '.6s',
    },
    {
      type: 'item',
      id: 'benefit-6',
      iconClass: 'flaticon-insurance',
      title: 'Travel Insurance',
      href: '/tour-details',
      description: 'Stay protected with insurance options and on-ground support for a worry-free experience.',
      colClass: 'col-xl-3 col-lg-4 col-md-6',
      wowClass: 'fadeInUp',
      delay: '.8s',
    },
  ],
}

const adventureSection = {
  titleLines: ['Special Offers Sort', 'Time Adventures'],
  description: "Don't miss out our exclusive special deals, designed make your dream vacation more affordable than ever.",
  leftImage: '/assets/img/home-1/adventure/01.jpg',
  rightImage: '/assets/img/home-1/adventure/02.jpg',
  experience: {
    titleLines: ['18+ years of experience', 'in travel services'],
    href: '/tour-details',
    client: {
      image: '/assets/img/home-1/adventure/client.png',
      name: 'Mickel z Ponkoz',
      role: 'Travel guide',
    },
    shapeImage: '/assets/img/home-1/adventure/shape.png',
  },
  rightThumb: {
    image: '/assets/img/home-1/adventure/03.jpg',
    discountLabel: '23% Discount',
    title: 'Hotel & Resort',
    href: '/tour-details',
    price: '$1500',
    priceNote: 'per night 4 star rating',
    ctaLabel: 'Book Now',
    ctaHref: '/tour-details',
  },
}

const featureSection = {
  title: 'All-in-one Travel Assistance',
  subtitle: 'Crafting journeys, creating memories plan smarter, travel better',
  items: [
    {
      id: 'feature-1',
      iconClass: 'flaticon-traveling-1',
      title: 'Flight Booking & Reservation',
      description: 'Take the stress to travel with our seamless flight booking and reservation services.',
      delay: '.2s',
    },
    {
      id: 'feature-2',
      iconClass: 'flaticon-hot-air-balloon',
      title: 'Hotel & Resort Accommodation',
      description: 'Enjoy a perfect stay with our carefully selected hotels and resorts.',
      delay: '.4s',
    },
    {
      id: 'feature-3',
      iconClass: 'flaticon-passport',
      iconWrapperClass: 'style-2',
      title: 'Visa & Travel',
      titleLine2: 'Assistance',
      description: 'Travel confidently with our comprehensive Visa & Travel Assistance services.',
      delay: '.6s',
    },
    {
      id: 'feature-4',
      iconClass: 'flaticon-tent',
      iconWrapperClass: 'style-2',
      title: 'Customized &',
      titleLine2: 'Private Tours',
      description: 'We design itineraries that match your interests, schedule, and budget.',
      delay: '.8s',
    },
  ],
}

const counterSection = {
  backgroundImage: '/assets/img/home-1/bg.png',
  title: 'Unlimited Travel Experience',
  subtitle: 'Crafting journeys, creating memories plan smarter, travel better',
  items: [
    {
      id: 'counter-1',
      iconClass: 'flaticon-costumer',
      value: '30',
      suffix: 'k+',
      label: 'Total worldwide satisfied clients',
      delay: '.3s',
    },
    {
      id: 'counter-2',
      iconClass: 'flaticon-suitcase',
      value: '500',
      suffix: '+',
      label: 'World tours available in toun',
      delay: '.5s',
    },
    {
      id: 'counter-3',
      iconClass: 'flaticon-excursion',
      value: '20',
      suffix: '+',
      label: 'Professional local tour guides',
      delay: '.7s',
    },
  ],
}

const activitiesSection = [
  {
    id: 'activity-1',
    image: '/assets/img/home-1/activiti/01.jpg',
    title: 'Snorkeling & Scuba Diving',
    href: 'destination-details.html',
  },
  {
    id: 'activity-2',
    image: '/assets/img/home-1/activiti/02.jpg',
    title: 'Desert Safari & Camel Rides',
    href: 'destination-details.html',
    delay: '.2s',
  },
  {
    id: 'activity-3',
    image: '/assets/img/home-1/activiti/03.jpg',
    title: 'Hiking & Nature Trails',
    href: 'destination-details.html',
    delay: '.4s',
  },
  {
    id: 'activity-4',
    image: '/assets/img/home-1/activiti/04.jpg',
    title: 'Cultural Heritage Tours',
    href: 'destination-details.html',
    delay: '.6s',
  },
  {
    id: 'activity-5',
    image: '/assets/img/home-1/activiti/05.jpg',
    title: 'Wildlife Safaris',
    href: 'destination-details.html',
    delay: '.8s',
  },
]

const testimonialSection = {
  backgroundImage: '/assets/img/home-1/testimonial/bg.jpg',
  title: '100k+ Customer Say Us',
  subtitle: 'Join over 100,000 satisfied travelers who have experienced',
  slides: [
    {
      id: 'testimonial-1',
      quote: 'Nam Ho Travel made our family vacation to Japan absolutely perfect! The attention to detail and personalized service exceeded our expectations.',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'Sarah Johnson',
      role: 'Japan Cherry Blossom Tour',
    },
    {
      id: 'testimonial-2',
      quote: 'Professional, reliable, and knowledgeable. Our guide was fantastic and the itinerary was well-planned. Highly recommend Nam Ho Travel!',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'Michael Chen',
      role: 'Thailand Adventure Package',
    },
    {
      id: 'testimonial-3',
      quote: 'Best travel agency experience! They took care of everything from start to finish. Will definitely book with them again.',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'Emily Tan',
      role: 'Korea Cultural Experience',
    },
    {
      id: 'testimonial-4',
      quote: 'An amazing trip to Vietnam, all thanks to Nam Ho. The custom itinerary was perfect for our interests. Flawless execution.',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'David Lee',
      role: 'Vietnam Highlights',
    },
    {
      id: 'testimonial-5',
      quote: 'Great value and a very well-organized tour of Europe. The accommodations were excellent and the pace was just right.',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'Jessica Wang',
      role: 'European Wonders',
    },
    {
      id: 'testimonial-6',
      quote: 'Our cruise booking was handled so smoothly. The team was very responsive and found us a fantastic deal. Can\'t wait for the next one!',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'Alex Tan',
      role: 'Royal Caribbean Cruise',
    },
    {
      id: 'testimonial-7',
      quote: 'From flights to hotels to local tours in New Zealand, everything was seamlessly arranged. A truly stress-free holiday.',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'Priya Sharma',
      role: 'New Zealand Adventure',
    },
    {
      id: 'testimonial-8',
      quote: 'The free and easy package to Taiwan gave us the flexibility we wanted with the support we needed. Great recommendations from the team.',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'Ben Chong',
      role: 'Taiwan Free & Easy',
    },
    {
      id: 'testimonial-9',
      quote: 'A memorable journey through the historical sites of Turkey. The local guides were exceptional. Thank you, Nam Ho!',
      clientImage: '/assets/img/home-1/testimonial/client.png',
      name: 'Fatimah Binte Omar',
      role: 'Turkish Delights',
    },
  ],
  gallery: [
    {
      id: 'testimonial-image-1',
      image: '/assets/img/home-1/testimonial/01.jpg',
      colClass: 'col-xl-7 col-md-6',
      animationClass: 'wow img-custom-anim-left',
    },
    {
      id: 'testimonial-image-2',
      image: '/assets/img/home-1/testimonial/02.jpg',
      colClass: 'col-xl-5 col-md-6',
      animationClass: 'wow img-custom-anim-right',
    },
    {
      id: 'testimonial-image-3',
      image: '/assets/img/home-1/testimonial/03.jpg',
      colClass: 'col-xl-5 col-md-6',
      animationClass: 'wow img-custom-anim-left',
    },
    {
      id: 'testimonial-image-4',
      image: '/assets/img/home-1/testimonial/04.jpg',
      colClass: 'col-xl-7 col-md-6',
      animationClass: 'wow img-custom-anim-right',
      videoLink: 'https://www.youtube.com/watch?v=Cn4G2lZ_g2I',
    },
  ],
}

const newsSection = {
  title: 'Read Our Latest News & Blog',
  subtitle: 'Crafting journeys, creating memories plan smarter, travel better',
  items: [
    {
      id: 'news-1',
      image: '/assets/img/home-1/news/news-1.jpg',
      date: '18 August',
      category: 'Tours & travel',
      title: "Highlight trending destinations and why they're worth exploring.",
      href: '/news-details',
      delay: '.2s',
    },
    {
      id: 'news-2',
      image: '/assets/img/home-1/news/news-2.jpg',
      date: '20 August',
      category: 'Tours & travel',
      title: 'Tips on itinerary planning, booking, and travel hacks.',
      href: '/news-details',
      delay: '.4s',
    },
    {
      id: 'news-3',
      image: '/assets/img/home-1/news/news-3.jpg',
      date: '23 August',
      category: 'Tours & travel',
      title: 'Focus on destinations suitable for families with kids.',
      href: '/news-details',
      delay: '.6s',
    },
    {
      id: 'news-4',
      image: '/assets/img/home-1/news/news-4.jpg',
      date: '24 August',
      category: 'Tours & travel',
      title: 'Guide to enjoying luxury stays and experiences without overspending.',
      href: '/news-details',
      delay: '.8s',
    },
  ],
}

const brandSection = {
  title: 'Relied upon by top-performing teams worldwide',
  logos: [
    { id: 'brand-1', image: '/assets/img/home-1/brand/01.png' },
    { id: 'brand-2', image: '/assets/img/home-1/brand/02.png' },
    { id: 'brand-3', image: '/assets/img/home-1/brand/03.png' },
    { id: 'brand-4', image: '/assets/img/home-1/brand/04.png' },
    { id: 'brand-5', image: '/assets/img/home-1/brand/05.png' },
    { id: 'brand-6', image: '/assets/img/home-1/brand/06.png' },
    { id: 'brand-7', image: '/assets/img/home-1/brand/07.png' },
  ],
}

const contactSection = {
  image: '/assets/img/home-1/Image.jpg',
  logo: '/assets/img/logo/white-logo.svg',
  title: 'Ready for Your Next Adventure?',
  description:
    'Let ASA Holidays take you on a journey of a lifetime. From Europe to Asia, we have the perfect tour package waiting for you.',
  cta: {
    href: '/tour-grid',
    label: 'Browse All Tours',
  },
}

type ApiRecord = Record<string, unknown>

const isRecord = (value: unknown): value is ApiRecord => !!value && typeof value === 'object'

const parseJsonResponse = async (res: Response) => {
  const text = await res.text()
  if (!res.ok) {
    throw new Error(text || `HTTP ${res.status}`)
  }
  return text ? JSON.parse(text) : {}
}

const extractList = (data: unknown): ApiRecord[] => {
  if (Array.isArray(data)) {
    return data as ApiRecord[]
  }
  if (!isRecord(data)) {
    return []
  }

  const candidates = [data.data, data.list, data.items, data.records, data.rows, data.result]
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) {
      return candidate as ApiRecord[]
    }
    if (isRecord(candidate)) {
      const nested = candidate as ApiRecord
      const nestedCandidates = [nested.data, nested.list, nested.items, nested.records, nested.rows, nested.result]
      for (const nestedCandidate of nestedCandidates) {
        if (Array.isArray(nestedCandidate)) {
          return nestedCandidate as ApiRecord[]
        }
      }
    }
  }

  return []
}

const pickString = (record: ApiRecord, keys: string[]): string => {
  for (const key of keys) {
    const value = record[key]
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
    if (typeof value === 'number') {
      return String(value)
    }
  }
  return ''
}

const formatPrice = (value: unknown): string => {
  if (value === null || value === undefined) {
    return ''
  }
  const raw = typeof value === 'number' ? value.toString() : String(value)
  const trimmed = raw.trim()
  if (!trimmed) {
    return ''
  }
  return trimmed.startsWith('$') ? trimmed : `$${trimmed}`
}

const formatDuration = (value: unknown): string => {
  if (value === null || value === undefined) {
    return ''
  }
  if (typeof value === 'number') {
    return `${value} days`
  }
  return String(value).trim()
}

const formatPeople = (value: unknown): string => {
  if (value === null || value === undefined) {
    return ''
  }
  if (typeof value === 'number') {
    return `${value} persons`
  }
  return String(value).trim()
}

const resolveHeroSlides = (
  data: unknown,
  fallback: typeof heroSlides,
  fallbackEnabled: boolean
) => {
  const list = extractList(data)
  if (!list.length) {
    return fallbackEnabled ? fallback : []
  }

  return list.map((item, index) => {
    const base = fallback[index] ?? fallback[0]
    const title = typeof item.name === 'string' ? item.name.trim() : ''
    const description = ''
    const images = isRecord(item.images) ? (item.images as ApiRecord) : null
    const image = typeof images?.desktop === 'string' ? images.desktop.trim() : ''
    const link = typeof item.url === 'string' ? item.url.trim() : ''

    return {
      ...base,
      id: base?.id ?? `hero-${index + 1}`,
      bgImage: image || (fallbackEnabled ? base?.bgImage : ''),
      title: title || (fallbackEnabled ? base?.title : ''),
      description: description || (fallbackEnabled ? base?.description : ''),
      cta: {
        href: link || (fallbackEnabled ? base?.cta.href : '/'),
        label: base?.cta.label ?? 'View Tours',
      },
      counters: base?.counters ?? [],
    }
  })
}

const resolveContactForm = (
  data: unknown,
  fallback: typeof contactForm,
  fallbackEnabled: boolean
) => {
  const list = extractList(data)
  const options = list
    .map((item) => {
      if (typeof item.name === 'string') {
        return item.name.trim()
      }
      if (isRecord(item.name) && typeof item.name.EN === 'string') {
        return item.name.EN.trim()
      }
      return ''
    })
    .filter((value) => value)

  console.log('Select Destination options:', options)

  if (!options.length) {
    if (!fallbackEnabled) {
      return {
        ...fallback,
        selects: [
          { ...fallback.selects[0], options: [] },
          ...fallback.selects.slice(1),
        ],
      }
    }
    return fallback
  }

  return {
    ...fallback,
    selects: [
      { ...fallback.selects[0], options },
      ...fallback.selects.slice(1),
    ],
  }
}

const resolveTourSection = (
  data: unknown,
  fallback: typeof tourSection,
  fallbackEnabled: boolean
): ResolvedTourSection => {
  const list = extractList(data)
  const emptySection: ResolvedTourSection = {
    leftLarge: null,
    leftStack: [],
    rightLarge: null,
    rightStack: [],
  }

  if (!list.length) {
    return fallbackEnabled ? fallback : emptySection
  }

  const baseCards: TourSectionCard[] = [
    fallback.leftLarge,
    ...fallback.leftStack,
    fallback.rightLarge,
    ...fallback.rightStack,
  ]

  const mappedCards = list.slice(0, baseCards.length).map((item, index) => {
    const base = baseCards[index]
    const nameValue =
      typeof item.name === 'string'
        ? item.name.trim()
        : isRecord(item.name) && typeof item.name.EN === 'string'
          ? item.name.EN.trim()
          : ''
    const imageValue = typeof item.picture === 'string' ? item.picture.trim() : ''
    const countValue =
      typeof item.tourCount === 'number'
        ? item.tourCount
        : typeof item.tourCount === 'string'
          ? item.tourCount.trim()
          : ''
    const badge = countValue ? `${countValue}+ tours` : ''
    const parentName = typeof item.parentName === 'string' ? item.parentName.trim() : ''
    const uri = typeof item.uri === 'string' ? item.uri.trim() : ''
    const href = uri ? (uri.startsWith('/') ? uri : `/${uri}`) : ''

    return {
      ...base,
      title: nameValue || (fallbackEnabled ? base.title : ''),
      location: parentName || (fallbackEnabled ? base.location : ''),
      image: imageValue || (fallbackEnabled ? base.image : ''),
      badge: badge || (fallbackEnabled ? base.badge : ''),
      href: href || (fallbackEnabled ? base.href : ''),
    }
  })

  const fillCard = (index: number) => mappedCards[index] ?? (fallbackEnabled ? baseCards[index] : null)

  return {
    leftLarge: fillCard(0),
    leftStack: [fillCard(1), fillCard(2)],
    rightLarge: fillCard(3),
    rightStack: [fillCard(4), fillCard(5)],
  }
}

const resolveTourPlaceSection = (
  data: unknown,
  fallback: TourPlaceSection,
  fallbackEnabled: boolean
): TourPlaceSection => {
  const list = extractList(data)
  if (!list.length) {
    return fallbackEnabled ? fallback : { ...fallback, items: [] }
  }

  const maxItems = fallback.items.length
  const mappedItems = list.slice(0, maxItems).map((item, index) => {
    const base = fallback.items[index] ?? fallback.items[0]
    const nameValue =
      typeof item.name === 'string'
        ? item.name.trim()
        : isRecord(item.name) && typeof item.name.EN === 'string'
          ? item.name.EN.trim()
          : ''
    const sectorValue = typeof item.sector === 'string' ? item.sector.trim() : ''
    const priceValue = formatPrice(item.price)
    const durationValue =
      typeof item.duration === 'number'
        ? formatDuration(item.duration)
        : typeof item.duration === 'string'
          ? item.duration.trim()
          : ''
    const imageValue = typeof item.cover === 'string' ? item.cover.trim() : ''
    const badgeValue = typeof item.badge === 'string' ? item.badge.trim() : ''
    const productCodeValue = typeof item.productCode === 'string' ? item.productCode.trim() : ''
    const uriValue = typeof item.uri === 'string' ? item.uri.trim() : ''
    const idValue = typeof item.id === 'number' ? item.id : base.id
    const hrefValue = uriValue
      ? `/tour-details?uri=${encodeURIComponent(uriValue)}`
      : typeof idValue === 'number'
        ? `/tour-details?id=${idValue}`
        : ''

    return {
      ...base,
      id: idValue,
      image: imageValue,
      title: nameValue,
      titleLine2: '',
      location: sectorValue,
      price: priceValue,
      priceLabel: priceValue ? base.priceLabel : '',
      duration: durationValue,
      group: '',
      badge: badgeValue,
      productCode: productCodeValue,
      href: hrefValue,
    }
  })

  return {
    ...fallback,
    items: mappedItems,
  }
}
export default function Home() {
  const [homeApiData, setHomeApiData] = useState(homeApiInitialData)
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    let isActive = true

    const postJson = async (url: string, payload: unknown) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload ?? {}),
      })

      return parseJsonResponse(res)
    }

    const fetchHomeApi = async () => {
      try {
        if (isActive) {
          setApiError(false)
        }
        const [hotTours, sectorLevels, banners, sectors] = await Promise.all([
          postJson(homeApiEndpoints.hotTours, homeApiPayloads.hotTours),
          postJson(homeApiEndpoints.sectorLevels, homeApiPayloads.sectorLevels),
          fetch(homeApiEndpoints.banners).then((res) => parseJsonResponse(res)),
          postJson(homeApiEndpoints.sectors, homeApiPayloads.sectors),
        ])

        console.log('Home API raw data:', {
          hotTours,
          sectorLevels,
          banners,
          sectors,
        })

        if (isActive) {
          setHomeApiData({ hotTours, sectorLevels, banners, sectors })
        }
      } catch (error) {
        console.error('Home API fetch error:', error)
        if (isActive) {
          setApiError(true)
        }
      }
    }

    fetchHomeApi()

    return () => {
      isActive = false
    }
  }, [])

  const resolvedHeroSlides = resolveHeroSlides(homeApiData.banners, heroSlides, shouldFallback)
  const resolvedContactForm = resolveContactForm(homeApiData.sectors, contactForm, shouldFallback)
  const resolvedTourSection = resolveTourSection(homeApiData.sectorLevels, tourSection, shouldFallback)
  const resolvedTourPlaceSection = resolveTourPlaceSection(homeApiData.hotTours, tourPlaceSection, shouldFallback)

  const selectOptionsKey = resolvedContactForm.selects[0]?.options.join('|') ?? ''

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const $ = (window as any).jQuery
    if (!$ || !$.fn || !$.fn.niceSelect) {
      return
    }

    const $select = $('.contact-from-section .single-select')
    if (!$select.length) {
      return
    }

    if ($select.next('.nice-select').length) {
      $select.niceSelect('update')
    } else {
      $select.niceSelect()
    }
  }, [selectOptionsKey])

  return (
    <>
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ApiMaintenanceNotice visible={apiError} />
          {/* Hero Section Start */}
          <section className="hero-section-1 fix">
            <div className="swiper-dot-3">
              <div className="dot"></div>
            </div>
            <div className="swiper hero-slider">
              <div className="swiper-wrapper">
                {resolvedHeroSlides.map((slide) => (
                  <div key={slide.id} className="swiper-slide">
                    <div className="hero-1">
                      <div className="hero-bg bg-cover" style={{ backgroundImage: `url(${slide.bgImage})` }}></div>
                      <div className="container-fluid">
                        <div className="row g-4 justify-content-between align-items-end">
                          <div className="col-xl-4 col-lg-6">
                            <div className="hero-content">
                              {slide.title ? (
                                <h1 data-animation="fadeInUp" data-delay="1.3s">
                                  {slide.title}
                                </h1>
                              ) : null}
                              {slide.description ? (
                                <p data-animation="fadeInUp" data-delay="1.3s">
                                  {slide.description}
                                </p>
                              ) : null}
                              {slide.cta.href ? (
                                <a href={slide.cta.href} className="theme-btn" data-animation="fadeInUp" data-delay="1.3s">
                                  {slide.cta.label}
                                </a>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="counter-item" data-animation="fadeInUp" data-delay="1.3s">
                              {slide.counters.map((counter) => (
                                <div key={counter.label} className="content">
                                  <h2>
                                    <span className="count">{counter.value}</span>
                                    {counter.suffix}
                                  </h2>
                                  <p>{counter.label}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact-From Section Start */}
          <div className="contact-from-section header-bg wow fadeInUp" data-wow-delay=".3s">
            <div className="right-shape d-none d-xxl-block">
              <img src={resolvedContactForm.rightShapeImage} alt="img" />
            </div>
            <div className="container-fluid">
              <div className="contact-from-wrapper">
                <div className="contact-content">
                  <h2>
                    <span className="count">{resolvedContactForm.stats.value}</span>
                    {resolvedContactForm.stats.suffix}
                  </h2>
                  <h6>{resolvedContactForm.stats.label}</h6>
                  <div className="grop-image">
                    <img src={resolvedContactForm.stats.image} alt="img" />
                  </div>
                </div>
                <div className="contact-right">
                  <h3>{resolvedContactForm.heading}</h3>
                  <p>
                    {resolvedContactForm.subtext.pre} <span className="count">{resolvedContactForm.subtext.count}</span>
                    <b>{resolvedContactForm.subtext.suffix}</b> {resolvedContactForm.subtext.post}
                  </p>
                  <div className="box-item">
                    {resolvedContactForm.selects.map((select) => (
                      <div key={select.placeholder} className="form-clt">
                        <div className="form">
                          <select className="single-select w-100">
                            <option>{select.placeholder}</option>
                            {select.options.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ))}
                    <div className="form-clt">
                      <button className="theme-btn" type="submit">
                        {resolvedContactForm.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tour Section Start */}
          <section className="tour-section section-padding pt-0 fix">
            <div className="container custom-container">
              <div className="row g-1">
                <div className="col-xl-5">
                  <div className="row g-1">
                    {resolvedTourSection.leftLarge ? (
                      <div
                        className={`col-xl-6 col-lg-6 ${resolvedTourSection.leftLarge.animationClass}`}
                        data-wow-delay={resolvedTourSection.leftLarge.delay}
                      >
                        <div className="tour-card-item">
                          <div className="tour-image">
                            {resolvedTourSection.leftLarge.image ? (
                              <img src={resolvedTourSection.leftLarge.image} alt="img" />
                            ) : null}
                            {resolvedTourSection.leftLarge.badge ? (
                              <span>{resolvedTourSection.leftLarge.badge}</span>
                            ) : null}
                            <div className="tour-content">
                              {resolvedTourSection.leftLarge.title ? (
                                <h3>
                                  {resolvedTourSection.leftLarge.href ? (
                                    <a href={resolvedTourSection.leftLarge.href}>{resolvedTourSection.leftLarge.title}</a>
                                  ) : (
                                    <span>{resolvedTourSection.leftLarge.title}</span>
                                  )}
                                </h3>
                              ) : null}
                              {resolvedTourSection.leftLarge.location ? (
                                <p>{resolvedTourSection.leftLarge.location}</p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="col-xl-6 col-lg-6">
                      {resolvedTourSection.leftStack.map((card, index) =>
                        card ? (
                          <div key={`stack-${index}`} className={`tour-card-item ${card.wrapperClass ?? ''} ${card.animationClass}`.trim()} data-wow-delay={card.delay}>
                            <div className={`tour-image ${card.imageClass ?? ''}`.trim()}>
                              {card.image ? <img src={card.image} alt="img" /> : null}
                              {card.badge ? <span>{card.badge}</span> : null}
                              <div className="tour-content">
                                {card.title ? (
                                  <h3>
                                    {card.href ? (
                                      <a href={card.href}>{card.title}</a>
                                    ) : (
                                      <span>{card.title}</span>
                                    )}
                                  </h3>
                                ) : null}
                                {card.location ? <p>{card.location}</p> : null}
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="row g-1">
                    {resolvedTourSection.rightLarge ? (
                      <div
                        className={`col-xl-8 col-lg-6 ${resolvedTourSection.rightLarge.animationClass}`}
                        data-wow-delay={resolvedTourSection.rightLarge.delay}
                      >
                        <div className="tour-card-item">
                          <div className={`tour-image ${resolvedTourSection.rightLarge.imageClass ?? ''}`.trim()}>
                            {resolvedTourSection.rightLarge.image ? (
                              <img src={resolvedTourSection.rightLarge.image} alt="img" />
                            ) : null}
                            {resolvedTourSection.rightLarge.badge ? (
                              <span>{resolvedTourSection.rightLarge.badge}</span>
                            ) : null}
                            <div className="tour-content">
                              {resolvedTourSection.rightLarge.title ? (
                                <h3>
                                  {resolvedTourSection.rightLarge.href ? (
                                    <a href={resolvedTourSection.rightLarge.href}>{resolvedTourSection.rightLarge.title}</a>
                                  ) : (
                                    <span>{resolvedTourSection.rightLarge.title}</span>
                                  )}
                                </h3>
                              ) : null}
                              {resolvedTourSection.rightLarge.location ? (
                                <p>{resolvedTourSection.rightLarge.location}</p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    <div className="col-xl-4 col-lg-6">
                      {resolvedTourSection.rightStack.map((card, index) =>
                        card ? (
                          <div key={`stack-${index}`} className={`tour-card-item ${card.wrapperClass ?? ''} ${card.animationClass}`.trim()} data-wow-delay={card.delay}>
                            <div className={`tour-image ${card.imageClass ?? ''}`.trim()}>
                              {card.image ? <img src={card.image} alt="img" /> : null}
                              {card.badge ? <span>{card.badge}</span> : null}
                              <div className={`tour-content ${card.contentClass ?? ''}`.trim()}>
                                {card.title ? (
                                  <h3>
                                    {card.href ? (
                                      <a href={card.href}>{card.title}</a>
                                    ) : (
                                      <span>{card.title}</span>
                                    )}
                                  </h3>
                                ) : null}
                                {card.location ? <p>{card.location}</p> : null}
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section Start */}
          <section className="about-section section-right fix">
            <div className="container">
              <div className="about-wrapper">
                <div className="row g-4">
                  <div className="col-xl-5 col-lg-4">
                    <div className="about-left-item">
                      <div className="section-title mb-0">
                        <h2 className="text-anim">
                          {aboutSection.titleLines[0]} <br /> {aboutSection.titleLines[1]} <br /> {aboutSection.titleLines[2]}
                        </h2>
                      </div>
                      <h6 className="wow fadeInUp" data-wow-delay=".5s">
                        {aboutSection.subtitle.pre} <span className="count">{aboutSection.subtitle.value}</span>
                        <b>{aboutSection.subtitle.suffix}</b> {aboutSection.subtitle.post}
                      </h6>
                      <div className="about-image wow img-custom-anim-left">
                        <img src={aboutSection.imagePrimary} alt="img" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-8">
                    <div className="about-right-item">
                      <div className="about-image-item">
                        <div className="about-image-2 wow img-custom-anim-left">
                          <img src={aboutSection.imageSecondary} alt="img" />
                        </div>
                        <div className="about-box wow img-custom-anim-right">
                          <div className="icon">
                            <i className={aboutSection.box.iconClass}></i>
                          </div>
                          <h5>{aboutSection.box.title}</h5>
                          <p>{aboutSection.box.description}</p>
                        </div>
                      </div>
                      <div className="content">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                          {aboutSection.description}
                        </p>
                        <div className="list-item wow fadeInUp" data-wow-delay=".5s">
                          {aboutSection.featureGroups.map((group) => (
                            <ul key={group.join('-')} className="list">
                              {group.map((item) => (
                                <li key={item}>
                                  <i className="fa-solid fa-check"></i>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        <a href={aboutSection.cta.href} className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                          {aboutSection.cta.label}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tour-place Section Start */}
          <section className="tour-place-section section-padding fix">
            <div className="container custom-container-2">
              <div className="section-title text-center">
                <h2 className="text-anim">Popular Tour Packages</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  {resolvedTourPlaceSection.subtitle.pre} <span className="count">{resolvedTourPlaceSection.subtitle.count}</span>
                  <b>{resolvedTourPlaceSection.subtitle.suffix}</b> {resolvedTourPlaceSection.subtitle.post}
                </p>
              </div>
              <div className="row">
                {resolvedTourPlaceSection.items.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.delay}>
                    <div className="tour-place-item">
                      <div className={`tour-place-image${item.image ? '' : ' is-empty'}`}>
                        {item.image ? <img src={item.image} alt="img" /> : null}
                        {item.badge ? <span>{item.badge}</span> : null}
                        <div className="icon">
                          <i className="fa-regular fa-heart"></i>
                        </div>
                      </div>
                      <div className="tour-place-content">
                        <div className="rating-item">
                          {item.productCode ? <div className="product-code">{item.productCode}</div> : null}
                          {item.price ? (
                            <h5>
                              <span>{item.priceLabel}</span>
                              {item.price}
                            </h5>
                          ) : null}
                        </div>
                        {item.title ? (
                          <h3 title={[item.title, item.titleLine2].filter(Boolean).join(' ')}>
                            {item.href ? (
                              <a href={item.href}>{item.title}</a>
                            ) : (
                              <span>{item.title}</span>
                            )}
                            {item.titleLine2 ? (
                              <>
                                <br /> {item.titleLine2}
                              </>
                            ) : null}
                          </h3>
                        ) : null}
                        <ul className="tour-list">
                          {item.location ? (
                            <li>
                              <i className="fa-regular fa-location-dot"></i>
                              {item.location}
                            </li>
                          ) : null}
                          {item.duration ? (
                            <li>
                              <i className="fa-regular fa-clock"></i>
                              {item.duration}
                            </li>
                          ) : null}
                          {item.group ? (
                            <li>
                              <i className="fa-regular fa-users"></i>
                              {item.group}
                            </li>
                          ) : null}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefit-Tour Section Start */}
          <section className="benefit-tour-section section-padding fix header-bg">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-white text-anim">{benefitTourSection.title}</h2>
                <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                  {benefitTourSection.descriptionLines[0]} <br />
                  {benefitTourSection.descriptionLines[1]}
                </p>
              </div>
              <div className="row">
                {benefitTourSection.blocks.map((block) => {
                  if (block.type === 'image') {
                    return (
                      <div key={block.id} className={`${block.colClass} wow ${block.wowClass}`.trim()}>
                        <div className="benefit-tour-image">
                          <img src={block.image} alt="img" />
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div key={block.id} className={`${block.colClass} wow ${block.wowClass}`.trim()} data-wow-delay={block.delay}>
                      <div className="benefit-tour-item">
                        <div className="icon">
                          <i className={block.iconClass}></i>
                        </div>
                        <div className="content">
                          <h5>
                            <a href={block.href}>{block.title}</a>
                          </h5>
                          <p>{block.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Adventure Section Start */}
          <section className="adventure-section section-padding fix">
            <div className="container">
              <div className="adventure-wrapper">
                <div className="row g-4">
                  <div className="col-xl-8">
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6">
                        <div className="section-title mb-0">
                          <h2 className="text-anim">
                            {adventureSection.titleLines[0]}
                            <br />
                            {adventureSection.titleLines[1]}
                          </h2>
                        </div>
                        <p className="text wow fadeInUp" data-wow-delay=".5s">
                          {adventureSection.description}
                        </p>
                        <div className="adventure-image wow img-custom-anim-left">
                          <img src={adventureSection.leftImage} alt="img" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="adventure-image wow img-custom-anim-top">
                          <img src={adventureSection.rightImage} alt="img" />
                        </div>
                        <div className="adventure-box wow img-custom-anim-bottom">
                          <h3>
                            <a href={adventureSection.experience.href}>
                              {adventureSection.experience.titleLines[0]}
                              <br />
                              {adventureSection.experience.titleLines[1]}
                            </a>
                          </h3>
                          <div className="info-item">
                            <img src={adventureSection.experience.client.image} alt="img" />
                            <div className="content">
                              <h5>{adventureSection.experience.client.name}</h5>
                              <span>{adventureSection.experience.client.role}</span>
                            </div>
                          </div>
                          <div className="shape">
                            <img src={adventureSection.experience.shapeImage} alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="adventure-thumb wow img-custom-anim-right">
                      <img src={adventureSection.rightThumb.image} alt="img" />
                      <div className="adventure-content">
                        <h6>{adventureSection.rightThumb.discountLabel}</h6>
                        <h3>
                          <a href={adventureSection.rightThumb.href}>{adventureSection.rightThumb.title}</a>
                        </h3>
                        <div className="booking-item">
                          <div className="content">
                            <h4>{adventureSection.rightThumb.price}</h4>
                            <span>{adventureSection.rightThumb.priceNote}</span>
                          </div>
                          <a href={adventureSection.rightThumb.ctaHref} className="theme-btn">
                            {adventureSection.rightThumb.ctaLabel}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Section Start */}
          <section className="feature-section section-padding fix pt-0">
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-anim">{featureSection.title}</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">{featureSection.subtitle}</p>
              </div>
              <div className="row">
                {featureSection.items.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.delay}>
                    <div className="feature-item">
                      <div className="feature-icon-item">
                        <div className={`icon ${item.iconWrapperClass ?? ''}`.trim()}>
                          <i className={item.iconClass}></i>
                        </div>
                        <h4>
                          {item.title}
                          {item.titleLine2 ? (
                            <>
                              <br /> {item.titleLine2}
                            </>
                          ) : null}
                        </h4>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Counter Section Start */}
          <section className="counter-section section-padding fix bg-cover" style={{ backgroundImage: `url(${counterSection.backgroundImage})` }}>
            <div className="container">
              <div className="counter-wrapper">
                <div className="section-title text-center mb-0">
                  <h2 className="text-white text-anim">{counterSection.title}</h2>
                  <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                    {counterSection.subtitle}
                  </p>
                </div>
                <div className="row">
                  <div className="counter-main-item">
                    {counterSection.items.map((item) => (
                      <div key={item.id} className="counter-item wow fadeInUp" data-wow-delay={item.delay}>
                        <div className="icon">
                          <i className={item.iconClass}></i>
                        </div>
                        <div className="content">
                          <h3>
                            <span className="count">{item.value}</span>
                            {item.suffix}
                          </h3>
                          <p>{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activities Section Start */}
          <section className="activities-section section-padding fix">
            <div className="container custom-container">
              <div className="activities-wrapper row g-4 g-xl-2 row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-1">
                {activitiesSection.map((activity) => (
                  <div key={activity.id} className="col activities-card-item wow fadeInUp" data-wow-delay={activity.delay}>
                    <div className="activities-image">
                      <img src={activity.image} alt="img" />
                    </div>
                    <div className="activities-content">
                      <h4>
                        <a href={activity.href}>{activity.title}</a>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Section Start */}
          <section
            className="testimonial-section section-padding fix bg-cover"
            style={{ backgroundImage: `url(${testimonialSection.backgroundImage})` }}
          >
            <div className="container">
              <div className="section-title text-center">
                <h2 className="text-white text-anim">{testimonialSection.title}</h2>
                <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                  {testimonialSection.subtitle}
                </p>
              </div>
              <div className="testimonial-wrapper">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <div className="swiper testimonial-slider">
                        <div className="swiper-wrapper">
                          {testimonialSection.slides.map((slide) => (
                            <div key={slide.id} className="swiper-slide">
                              <div className="content">
                                <div className="icon">
                                  <i className="flaticon-left-quote"></i>
                                </div>
                                <p>&quot;{slide.quote}&quot;</p>
                                <div className="client-image">
                                  <img src={slide.clientImage} alt="img" />
                                </div>
                                <h4>{slide.name}</h4>
                                <span>{slide.role}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="swiper-dot">
                        <div className="dot2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="testimonial-right-item">
                      <div className="row g-2">
                        {testimonialSection.gallery.map((item) => (
                          <div key={item.id} className={`${item.colClass} ${item.animationClass}`.trim()}>
                            <div className="testimonial-image">
                              <img src={item.image} alt="img" />
                              {item.videoLink ? (
                                <a href={item.videoLink} className="video-btn video-popup">
                                  <i className="fa-duotone fa-play"></i>
                                </a>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* News Section Start */}
          <section className="news-section section-padding fix">
            <div className="container custom-container-2">
              <div className="section-title text-center">
                <h2 className="text-anim">{newsSection.title}</h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">{newsSection.subtitle}</p>
              </div>
              <div className="row">
                {newsSection.items.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.delay}>
                    <div className="news-card-items">
                      <div className="news-image">
                        <img src={item.image} alt="img" />
                        <span>{item.date}</span>
                      </div>
                      <div className="news-content">
                        <span>{item.category}</span>
                        <h3>
                          <a href={item.href}>{item.title}</a>
                        </h3>
                        <a href={item.href} className="link-btn">
                          Read More <i className="fa-solid fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Brand Section Start */}
          <section className="brand-section section-padding fix">
            <div className="container custom-container-2">
              <div className="brand-wrapper">
                <h6>{brandSection.title}</h6>
                <div className="swiper brand-slider">
                  <div className="swiper-wrapper">
                    {brandSection.logos.map((logo) => (
                      <div key={logo.id} className="swiper-slide">
                        <div className="brand-image text-center">
                          <img src={logo.image} alt="img" />
                        </div>
                      </div>
                    ))}
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
                      <img data-speed=".8" src={contactSection.image} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-content">
                      <div className="logo-image">
                        <a href="/">
                          <img src={contactSection.logo} alt="img" />
                        </a>
                      </div>
                      <div className="section-title mb-0">
                        <h2 className="sec-title text-white text-anim">{contactSection.title}</h2>
                      </div>
                      <p className="text wow fadeInUp" data-wow-delay=".3s">
                        {contactSection.description}
                      </p>
                      <a href={contactSection.cta.href} className="theme-btn">
                        {contactSection.cta.label}
                      </a>
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











