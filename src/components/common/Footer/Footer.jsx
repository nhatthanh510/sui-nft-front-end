import Link from 'next/link';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const footerLinks = [
  {
    title: 'Marketplace',
    links: [
      {
        text: 'Explore',
        link: 'explore',
      },
      {
        text: 'Art',
        link: 'art',
      },
      {
        text: 'Collectibles',
        link: 'collectibles',
      },
      {
        text: 'Domain Names',
        link: 'domain-name',
      },
      {
        text: 'Copyright Policy',
        link: 'copyright-policy',
      },
    ],
  },
  {
    title: 'My Account',
    links: [
      {
        text: 'Profile',
        link: 'profile',
      },
      {
        text: 'Favorites',
        link: 'favorites',
      },
      {
        text: 'Watchlist',
        link: 'watchlist',
      },
      {
        text: 'My Collections',
        link: 'my-collections',
      },
      {
        text: 'Settings',
        link: 'settings',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        text: 'Contact Us',
        link: 'contact-us',
      },
      {
        text: 'Partners',
        link: 'partners',
      },
      {
        text: 'Docs',
        link: 'docs',
      },
      {
        text: 'Guide',
        link: 'guide',
      },
      {
        text: 'FAQs',
        link: 'faqs',
      },
    ],
  },
];

const FooterCol = () => {
  return (
    <div className="flex flex-row gap-40">
      {footerLinks.map((footerLink) => (
        <ul key={footerLink.title}>
          <li className="pb-2 capitalize">{footerLink.title}</li>
          {footerLink.links.map((link) => (
            <li key={link.link} className="mt-4 text-sm capitalize opacity-70">
              <Link href={link.link} className=" gradient-text">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-32 border-t border-[#343434] pt-12 pb-56">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="" className="gradient-text flex flex-row items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5865f2]">
                <FaDiscord className="text-base text-main" />
              </span>
              Discord
            </Link>
          </li>
          <li>
            <Link href="" className="gradient-text flex flex-row items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2197d4]">
                <FaTelegramPlane className="text-base text-main" />
              </span>
              Telegram
            </Link>
          </li>
          <li>
            <Link href="" className="gradient-text flex flex-row items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5a99ec]">
                <AiOutlineTwitter className="text-base text-main" />
              </span>
              Twitter
            </Link>
          </li>
        </ul>
        <div>
          <FooterCol />
        </div>
      </div>
    </div>
  );
};

export default Footer;
