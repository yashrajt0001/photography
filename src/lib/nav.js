// `live: true` = navigable. During homepage-only review, only Home is live;
// the rest still appear in the navbar but don't navigate. Flip these back to
// true (and uncomment their routes in App.jsx) to enable the inner pages.
export const NAV = [
  { label: 'Home', to: '/', live: true },
  { label: 'Wedding', to: '/wedding', live: false },
  { label: 'Films', to: '/films', live: false },
  { label: 'About Us', to: '/about', live: false },
  { label: 'Contact', to: '/contact', live: false },
]

// Placeholder social links — swap with the client's real profiles.
export const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
]

// Placeholder contact form — point to the client's form/booking link.
export const CONTACT_FORM = '#'

// TODO: replace with the client's real contact details
export const PHONE = '+91 89557 74776'
export const PHONE_TEL = '+918955774776'
export const EMAIL = 'yeshrajteli12345@gmail.com'
export const WHATSAPP = 'https://wa.me/918955774776'
