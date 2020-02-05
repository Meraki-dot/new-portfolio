import React from 'react';
import DollfaceHome from './images/dollface-home.jpg';
import DollfaceMobileMenu from './images/dollface-mobile-menu.jpg';
import Navbar from '../General/Navbar';

const Dollface = () => {
    return (
        <div className="main-container" id="dollface-container">
            <Navbar />
            <div className="dollface-title-container">
                <h1>Clean · Minimalist · Beauty</h1>
            </div>
            <div className="project-overview">
                <p>The goal of this project was to create a website for an eyebrow tattoo business. Before this project, the client was dependent on her Instagram to generate and market her business and manually had to keep track of all upcoming appointments. My ambition for the website was to make it a tool for the client to captivate her audience with her brilliant work and give potential customers a feeling of trust and transparency while roaming the website.
                </p>
            </div>
            <div className="project-goals">
                <p>
                    High-level goals were:
                    <ol>
                        <li>No clutter and a clear, fluid navigational experience.</li>
                        <li>Deliver the client’s desire for transparency to the customer to build trust.</li>
                        <li>As a business servicing the beauty industry, create a website with a minimalist design that was aesthetically pleasing to the eye.</li>
                    </ol>
                </p>
            </div>
            <div className="space"></div>
            <img id="dollface-first-img" src={DollfaceHome} />
            <div className="space"></div>
            <div className="dollface-project-challenges">
                <div className="dollface-title-container">
                    <h1>The Challenge</h1>
                </div>
                <div className="dollface-project-challenges-text">
                    <p>
                        Many similar businesses opted for a nearly identical style and feel for their website. I had to figure out how to create a website that stood out and was unique in a sea of similarities. After taking the time to research, I found another common theme in other eyebrow tattoo website. They all wanted to portray an image of elegant beauty with the use of script-themed fonts, floral patterns, and gold-brown color accents. I decided to create a website that utilized a color scheme that only involved black, white, and grey. I also opted for no design patterns and used two fonts to help the customer distinguish between title and content. One font was thicker in weight and blockier in style, and the other was a simple sans-serif type font. The sharp differences allowed the fonts to work together to make the reading experience pleasurable.
                    </p>
                </div>
            </div>
            <div className="space"></div>
            <img src={DollfaceMobileMenu} />
            <div className="space"></div>
            <div className="dollface-project-conclusion">
                <div className="dollface-title-container" >
                    <h1>Conclusions</h1>
                </div>
                <div className="dollface-project-conclusion-text">
                    <p>
                    The vision for the website has seemingly been obtained. The site is currently going through user testing before becoming live. After a few months of the website being live, a more thoughtful and more explicit conclusion will be given.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dollface;
