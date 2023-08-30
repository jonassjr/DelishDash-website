import discountIcon from '../assets/discount-icon.svg'
import freeShippingIcon from '../assets/free-shipping-icon.svg'
import paymentIcon from '../assets/payment-icon.svg'


import pizza from '../assets/pizza.png'
import hamburger from '../assets/hamburger.png'
import salad from '../assets/salad.png'

import { Facebook, Instagram, Twitter } from 'lucide-react'

export const NavLinks = [
    { id: "home", href: "#home", label: "Home" },
    { id: "services", href: "#services", label: "Services" },
    { id: "about-us", href: "#about-us", label: "About Us" },
    { id: "trending", href: "#trending", label: "Trending" },
]

export const ServicesItems = [
    {
        title: "Special Discount",
        subTitle: "Get special promo",
        icon: discountIcon
    },
    {
        title: "Free Shipping",
        subTitle: "Orders over $120",
        icon: freeShippingIcon
    },
    {
        title: "Rapid Payment",
        subTitle: "secure payment",
        icon: paymentIcon
    }
]

export const AboutUsItems = [
    {label: "Speedy Delivery"},
    {label: "Vast Culinary Selection"},
    {label: "Quality Ingredients"},
    {label: "User-Friendly Experience"},
    {label: "Customization"},
    {label: "Hygiene and Safety"}
]


export const TrendingItems = [
    {id:1, label: "Pizza", img: pizza, note:"5.0"},
    {id:2, label: "Hamburger", img: hamburger, note:"4.5"},
    {id:3, label: "Salad", img: salad, note:"5.0"},
    {id:4, label: "Pizza", img: pizza, note:"5.0"},
    {id:5, label: "Hamburger", img: hamburger, note:"4.5"},
    {id:6, label: "Salad", img: salad, note:"5.0"},
]


export const FooterLinks = [
    {
        title: "Our Company",
        links: [
            {name: "Home", link: "#home"},
            {name: "Services", link: "#services"},
            {name: "About Us", link: "#about-us"},
            {name: "Trending", link: "#trending"}
        ]
    },
    {
        title: "Terms & Policies",
        links: [
            {name: "Terms of Service", link: "" },
            {name: "Privacy Policy", link: "" },
            
        ]
    },
    {
        title: "Our Address",
        links: [
            {name: "0123 - somewhere"},
            {name: "Out there - 54321"},
            {name: "222-333-444"}
        ]
    }
]


export const SocialMedia = [
    {
      id: "social-media-1",
      icon: Instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: Facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: Twitter,
      link: "https://www.twitter.com/",
    }
]