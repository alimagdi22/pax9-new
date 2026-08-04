import { SeoConfig } from '../services/seo.service';

/**
 * Centralized Static SEO Metadata Configuration for PAX.9
 * Static titles, descriptions, keywords, and OpenGraph values for each route.
 */
export const SEO_METADATA: Record<string, SeoConfig> = {
  home: {
    title: 'PAX.9 - Discover & Book Cheap Flights Worldwide',
    description: 'Search, compare, and book cheap flights to your favorite destinations worldwide with PAX.9.',
    keywords: 'flights, cheap flights, flight booking, travel, airline tickets, PAX.9',
    ogTitle: 'PAX.9 - Discover & Book Cheap Flights Worldwide',
    ogDescription: 'Search, compare, and book cheap flights to your favorite destinations worldwide with PAX.9.',
    ogImage: 'public/images/og-home.jpg',
    robots: 'index, follow',
  },
  aboutUs: {
    title: 'About Us - PAX.9',
    description: 'Learn more about PAX.9, our mission, vision, and how we deliver seamless flight booking experiences.',
    keywords: 'about PAX.9, travel company, flight search engine, about us',
    ogTitle: 'About Us - PAX.9',
    ogDescription:
      'Learn more about PAX.9, our mission, vision, and how we deliver seamless flight booking experiences.',
    robots: 'index, follow',
  },
  contactUs: {
    title: 'Contact Us & Customer Support - PAX.9',
    description: 'Get in touch with PAX.9 customer support for assistance with flight bookings, inquiries, and help.',
    keywords: 'contact PAX.9, customer support, help center, flight help',
    ogTitle: 'Contact Us & Customer Support - PAX.9',
    ogDescription: 'Get in touch with PAX.9 customer support for assistance with flight bookings, inquiries, and help.',
    robots: 'index, follow',
  },
  terms: {
    title: 'Terms & Conditions - PAX.9',
    description:
      'Read the official terms and conditions of service for using PAX.9 flight search and booking platform.',
    keywords: 'terms of service, terms and conditions, legal, PAX.9 terms',
    ogTitle: 'Terms & Conditions - PAX.9',
    ogDescription:
      'Read the official terms and conditions of service for using PAX.9 flight search and booking platform.',
    robots: 'index, follow',
  },
  privacyPolicy: {
    title: 'Privacy Policy - PAX.9',
    description: 'Learn how PAX.9 collects, uses, protects, and respects your privacy and personal data.',
    keywords: 'privacy policy, data protection, privacy, PAX.9 privacy',
    ogTitle: 'Privacy Policy - PAX.9',
    ogDescription: 'Learn how PAX.9 collects, uses, protects, and respects your privacy and personal data.',
    robots: 'index, follow',
  },
  flightsResults: {
    title: 'Flight Search Results - PAX.9',
    description: 'Compare best fares and schedules across top airlines on PAX.9.',
    ogTitle: 'Flight Search Results - PAX.9',
    ogDescription: 'Compare best fares and schedules across top airlines on PAX.9.',
    robots: 'noindex, follow',
  },
  flightsCheckout: {
    title: 'Flight Checkout & Passenger Details - PAX.9',
    description: 'Complete your passenger details and secure your flight booking on PAX.9.',
    ogTitle: 'Flight Checkout - PAX.9',
    ogDescription: 'Complete your passenger details and secure your flight booking on PAX.9.',
    robots: 'noindex, nofollow',
  },
  userManagement: {
    title: 'Account Settings & Booking History - PAX.9',
    description: 'Manage your profile details, passenger saved data, and view your flight booking history.',
    ogTitle: 'Account Settings - PAX.9',
    ogDescription: 'Manage your profile details, passenger saved data, and view your flight booking history.',
    robots: 'noindex, nofollow',
  },
  paymentResult: {
    title: 'Booking Confirmation - PAX.9',
    description: 'View your flight booking confirmation and e-ticket status on PAX.9.',
    ogTitle: 'Booking Confirmation - PAX.9',
    ogDescription: 'View your flight booking confirmation and e-ticket status on PAX.9.',
    robots: 'noindex, nofollow',
  },
};
