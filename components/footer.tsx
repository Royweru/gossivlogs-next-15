/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { SearchIcon } from "lucide-react";
import { useSearhModalFilter } from "@/hooks/use-search-modal-filter";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  label: string;
  value: string;
};

type Contact = {
  label: string;
  phone: string;
  email: string;
};

type Props = {
  logo: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer = (props: Footer3Props) => {
  const {
    logo,
    address,
    contact,
    columnLinks,
    socialMediaLinks,
    footerText,
    footerLinks,
  } = {
    ...Footer3Defaults,
    ...props,
  };
  const { open } = useSearhModalFilter();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-black/90">
      <div className="container ">
        <div className=" w-full relative lg:mb-6 mb-4">
          <div className=" w-full">
            <input
              placeholder="Search gossipremier"
              onClick={open}
              className=" w-full p-4  border-slate-100/85 rounded-lg text-gray-900 
                border  font-montserrat font-semibold"
            />
            <button
              onClick={open}
              className=" absolute right-4 bottom-4
             bg-transparent hover:bg-transparent cursor-pointer"
            >
              <SearchIcon className=" size-5 font-bold text-accents-charcoalBlack " />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            {/* <div className="rb-6 mb-6 md:mb-8">
              <a href={logo.url}>
                <img src={logo.src} alt={logo.alt} className="inline-block" />
              </a>
            </div> */}
            <div className="rb-6 mb-6 md:mb-8 ">
              <div>
                <p className="mb-1 text-sm font-semibold text-neutral-50">
                  {address.label}
                </p>
                <p className="mb-5 text-sm md:mb-6 text-neutral-50">
                  {address.value}
                </p>
              </div>
              <div className=" text-neutral-50">
                <p className="mb-1 text-sm font-semibold">{contact.label}</p>
                <p className="flex flex-col text-sm underline decoration-black underline-offset-1 md:mb-6">
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3 text-neutral-100">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            {columnLinks.map((column, index) => (
              <ul key={index}>
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="py-2 text-white text-sm font-semibold"
                  >
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-white" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0 text-neutral-100">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline text-neutral-50">
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const Footer3Defaults: Props = {
  logo: {
    url: "/",
    src: "/logo.png",
    alt: "Logo image",
  },
  address: {
    label: "Address:",
    value: "Level 1, 12 Sample St, Sydney NSW 2000",
  },
  contact: {
    label: "Contact:",
    phone: "1800 123 4567",
    email: "info@relume.io",
  },
  columnLinks: [
    {
      links: [
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
        { title: "Videos", url: "/videos" },
        { title: "Podcast", url: "/podcast" },
        { title: "Trending", url: "/category/Entertainment" },
      ],
    },
    {
      links: [
        { title: "Lifestyle", url: "/category/Lifestyle" },
        { title: "Politics", url: "/category/Politics" },
        { title: "Culture", url: "/category/Culture" },
        { title: "Entertainment", url: "/category/Entertainment" },
        { title: "Sports", url: "/category/Sports" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
    { url: "#", icon: <BiLogoInstagram className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    { url: "#", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: "© 2025 Gossipremier. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
