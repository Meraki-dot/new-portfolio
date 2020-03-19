import React from 'react';
import Navbar from '../../General/Navbar';
import iphone_mockup from './iphone_mockup.png';
import homepage_mockup from './homepage_mockup.png';
import Project_Overview_Mockup from './Project_Overview_Mockup.png';
import collage from './collage.png';

const Angela_website = () => {
    return (
        <div className="main-container" id="project-container">
            <Navbar />
            <div className="project-title-container">
                <h1>Timeless · Story Telling</h1>
            </div>
            <div className="project-overview">
                <p>
                    The goal of this project was to create a website for an artist located in Pasadena, CA. The client had no way to publicisize her work and garner attention. My ambition for the website was to create a website that emulated that of a museum. The user should feel as if they are walking through the halls learning about each art piece and enjoying the mixtures of colors, shapes and stories. With the use of warm colors, antique-looking fonts and smooth navigation flow, I hope that the vision described was attained.
                </p>
            </div>
            <div className="project-goals">
                <p>
                    High-level goals were:
                    <ol>
                        <li>The client's audience was as young as early 20s and old as late 70s in years. This meant that making an easy and clear navigation experience was essential to the website.</li>
                        <li>Every art piece has a story and every story must be told. The hope is that people do not just click through the paintings but are compelled to also read the stories behind each piece.</li>
                    </ol>
                </p>
            </div>
            <div className="space"></div>
            <img id="project-first-img" id="angela_first_image" src={iphone_mockup} />
            <div className="space"></div>
            <div className="project-challenges">
                <div className="project-title-container">
                    <h1>The Challenge</h1>
                </div>
                <div className="project-challenges-text">
                    <p>
                        Most artist webpages were very white and used a lot of grids to showcase as much of their work as possible. It's actually a very sensible design however, these designs encouraged users to flip through every image as if they were scrolling through Instagram or Facebook. The challenge was, how we were going to encourage users and browsers to click on the image and learn about the painting and join in the experience of understanding the origin of every piece.
                    </p>
                </div>
            </div>
            <div className="img-space"></div>
            <img src={Project_Overview_Mockup} />
            <div className="space"></div>
            <div className="project-challenges">
                <div className="project-title-container">
                    <h1>The Process</h1>
                </div>
                <div className="project-challenges-text">
                    <p>
                        The artist's work is separated into projects and users can click on each project to see the individual pieces that make it up. The thumbnail for projects are displayed as black and white so that the user feels a sense of incompletion. As the user hovers over the image, the image comes to life full of color and vibrance. Hypothetically, the immediate feedback of color and contrast would entice users to click on the image to see the rest of the project.
                    </p>
                </div>
            </div>
            <div className="img-space"></div>
            <img src={collage} />
            <div className="project-challenges-text">
                <p>
                    Once a user selects a project they are sent to a page that shows them all the pieces in one scrollable motion. The pieces are named and now the user gets to see what pieces make up this project. Of course, the user is able to then click each individual piece and find the background to each artwork. This emulates a museum because people normally walk into a gallery. Once inside a gallery, individuals get a general idea of what the gallery is about by looking at all the artworks from holistical point of view. They then analyze at a more granular level to understand each piece's contribution to the overall gallery.
                </p>
                <div className="img-space"></div>
            </div>
            <div className="space"></div>
            <div className="project-conclusion">
                <div className="project-title-container" >
                    <h1>Conclusions</h1>
                </div>
                <div className="space"></div>
                <img src={homepage_mockup} />
                <div className="project-conclusion-text">
                    <p>
                        The project is currently ongoing and is currently in the front-end development stage. After the development stage is finished the website will go through user testing where more changes may come to further enhance the experience.
                    </p>
                </div>
                <div className="ending-space"></div>
            </div>
        </div>
    )
}

export default Angela_website;