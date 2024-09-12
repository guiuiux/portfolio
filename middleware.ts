import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing'; // Assuming you have a routing file

export default createMiddleware(routing);

export const config = {
  // Match internationalized pathnames for all supported locales
  matcher: ['/', '/(pt|en)/:path*'] // Include 'pt' for Portuguese
};
