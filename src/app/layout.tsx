import ScriptLoader from './ScriptLoader'

export const metadata = {
  title: 'ASA Holidays - Your Gateway to Unforgettable Travel Experiences',
  description: "ASA Holidays - Singapore's Premier Travel Agency for Group Tours, Free & Easy, Cruises & MICE",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon.svg" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/flacticon.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/asa-custom.css" />
      </head>
      <body>
        {children}
        <ScriptLoader />
      </body>
    </html>
  )
}
