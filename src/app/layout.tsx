import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sovic's Kitchen | Best Cloud Kitchen in Lajpat Nagar Delhi",
  description:
    "Order delicious North Indian and Chinese food from Sovic's Kitchen in Lajpat Nagar, New Delhi. Fast delivery, authentic taste, catering services available. Call +91 9810468377.",
  keywords: [
    "Sovic's Kitchen",
    'cloud kitchen Lajpat Nagar',
    'Indian food delivery Delhi',
    'North Indian food',
    'Chinese food delivery',
    'Lajpat Nagar restaurant',
    'dal makhani delivery',
    'paneer tikka',
    'catering Delhi',
  ],
  openGraph: {
    title: "Sovic's Kitchen | Authentic Desi Food | Lajpat Nagar",
    description:
      "Homestyle North Indian and Chinese dishes made fresh. Order online or call +91 9810468377.",
    type: 'website',
    locale: 'en_IN',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Sovic's Kitchen",
  description:
    'Cloud kitchen serving authentic North Indian and Chinese cuisine in Lajpat Nagar, New Delhi.',
  telephone: '+91-9810468377',
  url: 'https://sovics-kitchen.vercel.app',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No.1, Krishna Market, Block E, Lajpat Nagar I',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110024',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.5705,
    longitude: 77.2354,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    ],
    opens: '11:00',
    closes: '23:00',
  },
  servesCuisine: ['North Indian', 'Chinese', 'Punjabi'],
  priceRange: '₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-charcoal">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
