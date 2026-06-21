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

export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/thephotostore.in/' },
  { label: 'Facebook', href: 'https://www.facebook.com/thephotostore.in/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCs_WiWXDxJH1Pi5h9hMxmLw/videos' },
]

export const CONTACT_FORM =
  'https://app.studioninja.co/contactform/hosted/0a800fc8-8c59-1afd-818c-a4c4979d3c6f/0a800fc8-8ca5-1573-818c-aa42d13a2d09'

// TODO: replace with the client's real contact details
export const PHONE = '+91 98765 43210'
export const PHONE_TEL = '+919876543210'
export const EMAIL = 'hello@thephotostore.in'
export const WHATSAPP = 'https://wa.me/919876543210'
