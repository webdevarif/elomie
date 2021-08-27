import React, { Component } from 'react'
import './index.scss';

export class FooterHome extends Component {
    render() {
        const footer_links = [
            {
                title: "QUICK LINKS",
                classes: "col-lg-2 col-6",
                menu: [
                    {
                        id: 1,
                        title: "About Us",
                        url: '/',
                    },
                    {
                        id: 2,
                        title: "Manifesto",
                        url: '/manifesto',
                    },
                    {
                        id: 3,
                        title: "Our Apothecary",
                        url: '/our-apothecary',
                    },
                    {
                        id: 4,
                        title: "Our Products",
                        url: '/our-products',
                    },
                    {
                        id: 5,
                        title: "Our Origin",
                        url: '/our-origin',
                    },
                    {
                        id: 6,
                        title: "LE Journal",
                        url: '/le-journal',
                    },
                    {
                        id: 7,
                        title: "Lookbook",
                        url: '/lookbook',
                    }
                ]
            },
            {
                title: "Client Care",
                classes: "col-lg-2 col-6",
                menu: [
                    {
                        id: 1,
                        title: "Account",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "FAQs",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Return Policy",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Contact Us",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Order Tracking",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Shipping",
                        url: '/',
                    },
                ]
            },
            {
                title: "Quick Links",
                classes: "col-lg-2 col-6",
                menu: [
                    {
                        id: 1,
                        title: "SUPPORT",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Disclaimer",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Privacy Policy",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Cookie Policy",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Terms of Services",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "Terms of Sale",
                        url: '/',
                    },
                ]
            },
            {
                title: "Quick Links",
                classes: "col-lg-3 col-6",
                menu: [
                    {
                        id: 1,
                        title: "About Us",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "About Us",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "About Us",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "About Us",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "About Us",
                        url: '/',
                    },
                    {
                        id: 1,
                        title: "About Us",
                        url: '/',
                    },
                ]
            },
        ]
            return (
            <footer className="footer bg-dark pt-4">
                <div className="container">
                    <div className="row">
                        {footer_links.map((widget, idx) =>(
                            <div key={idx} className={widget.classes}>
                                <div className="footer-widget">
                                    <h4 className="footer-widget-title text-light">{widget.title}</h4>
                                    <ul className="list-unstyled">
                                        {widget.menu.map((link, idx) => <li key={idx}><a href={link.url}>{link.title}</a></li>)}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-copyright bg-primary-darker py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center text-light">
                                ®2021 Koldren Apothecary, All Rights Reserved Koldren, LLC
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterHome
