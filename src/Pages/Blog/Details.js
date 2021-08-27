import React, { Component } from 'react'
import BlogLayout from '../../Components/Layout/BlogLayout'
import { IoArrowRedoSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import { FiEye, FiFlag, FiShare2, FiSmile } from 'react-icons/fi';
import Config from '../../Utils/Config';
export class BlogDetails extends Component {
    render() {
        const Share_links = [
            {
                id: 1,
                name: "facebook",
                icon: <FaFacebookF />,
                url: "#",
            },
            {
                id: 2,
                name: "instagram",
                icon: <FaInstagram />,
                url: "#",
            },
            {
                id: 3,
                name: "linkedin",
                icon: <FaLinkedinIn />,
                url: "#",
            },
            {
                id: 4,
                name: "twitter",
                icon: <FaTwitter />,
                url: "#",
            },
            {
                id: 5,
                name: "pinterest",
                icon: <FaPinterestP />,
                url: "#",
            },
        ]
        return (
            <BlogLayout>
                <div className="card">
                    <div className="post__features">
                        <img src="https://via.placeholder.com/1920x590" alt="" />
                    </div>
                    <div className="card-header">                        
                        <h3 className="post__title mb-2">Cosy Bright Office In Yellow And Grey Colors</h3>
                        <ul className="post__details d-flex flex-wrap list-unstyled">
                            <li className="mb-2 me-3">
                                <img className="me-2 rounded-circle" src="https://via.placeholder.com/30" alt="" />
                                Discover
                            </li>
                            <li className="mb-2 me-3">
                                <img className="me-2 rounded-circle" src="https://via.placeholder.com/30" alt="" />
                                Discover
                            </li>
                            <li className="mb-2 me-3">
                                <img className="me-2 rounded-circle" src="https://via.placeholder.com/30" alt="" />
                                <a href="//">Jhone Doe</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <p><strong>It’s no secret</strong> that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.</p>
                        <p>Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux ompanion app.</p>
                        <h5>Why Integrate Side Projects?</h5>
                        <p>Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.</p>
                        <p><strong>It’s no secret</strong> that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.</p>
                        <p>Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux ompanion app.</p>
                        <h5>Why Integrate Side Projects?</h5>
                        <p>Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.</p>
                        <p><strong>It’s no secret</strong> that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.</p>
                        <p>Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux ompanion app.</p>
                        <h5>Why Integrate Side Projects?</h5>
                        <p>Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.</p>
                        <p><strong>It’s no secret</strong> that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.</p>
                        <p>Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux ompanion app.</p>
                        <h5>Why Integrate Side Projects?</h5>
                        <p>Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.</p>

                        <div className="post__share">
                            <span><IoArrowRedoSharp /></span>
                            {Share_links.map((link, idx) => <a key={idx} title={link.title} className={link.name} href={link.url}>{link.icon}</a>)}
                        </div>

                    </div>
                    <div className="post-footer bg-light border-top">
                        <ul className="post_action_tools list-inline list-unstyled">
                            <li>
                                <FiShare2 />
                            </li>
                            <li>
                                <FiEye className="me-2"/>
                                <span className="counter">841</span>
                            </li>
                            <li>
                                <FiFlag />
                            </li>
                            <li>
                                <FiSmile className="react" />
                                <span>( {Config.numFormatter(1166)} )</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </BlogLayout>
        )
    }
}

export default BlogDetails
