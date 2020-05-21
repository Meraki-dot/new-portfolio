import React from "react";
import DollfaceHome from "./dollface-home.jpg";
import DollfaceMobileMenu from "./dollface-mobile-menu.jpg";
import DollfaceServices from "./dollface-services.jpg";
import Navbar from "../../General/Navbar";

const Dollface = () => {
  return (
    <div className="main-container" id="project-container">
      <Navbar />
      <div className="project-title-container">
        <h1>Clean · Beauty</h1>
      </div>
      <div className="project-overview">
        <p>
          The goal of this project was to create a website for an eyebrow tattoo
          business. Before this project, the client was dependent on her
          Instagram to generate and market her business and manually had to keep
          track of all upcoming appointments. My ambition for the website was to
          make it a tool for the client to captivate her audience with her
          brilliant work and give potential customers a feeling of trust and
          transparency while roaming the website.
        </p>
      </div>
      <div className="project-goals">
        <p>
          High-level goals were:
          <ol>
            <li>No clutter and a clear, fluid navigational experience.</li>
            <li>
              Deliver the client’s desire for transparency to the customer to
              build trust.
            </li>
            <li>
              As a business servicing the beauty industry, create a website with
              a minimalist design that was aesthetically pleasing to the eye.
            </li>
          </ol>
        </p>
      </div>
      <div className="img-group">
        <img src={DollfaceHome} />
      </div>
      <div className="project-challenges">
        <div className="project-title-container">
          <h1>The Challenge</h1>
        </div>
        <div className="project-challenges-text" id="dollface-challenge">
          <p>
            Many similar businesses opted for a nearly identical style and feel
            for their website. I had to figure out how to create a website that
            stood out and was unique in a sea of similarities. After taking the
            time to research, I found another common theme in other eyebrow
            tattoo websites and that was that they all wanted to portray an
            image of elegant beauty through the use of script-based fonts,
            floral patterns, and gold-brown color accents. I decided to create a
            website that utilized a color scheme that only involved black,
            white, and grey to show users a website that was clear cut and
            simple, much like the service they would be receiving. I also opted
            for no design patterns as to not distract the user from the task at
            hand which was to book an appointment.
          </p>
        </div>
      </div>
      <div className="img-group">
        <img src={DollfaceMobileMenu} />
      </div>
      <div className="project-conclusion">
        <div className="project-title-container">
          <h1>Conclusions</h1>
        </div>
        <div className="project-conclusion-text">
          <p>
            Users enjoyed the simple interface and felt as if the website
            portrayed the business very well. We randomly selected 20
            individuals which provided a mixture of interests and age groups.
            Ultimately, this gave us a clearer picture of how fluid and easy to
            use the website was. 18 out of the 20 individuals commented that the
            website was very simple and very easy to use and all participants
            gave a score of 3 or lower when asked to rate how easy the website
            was to navigate from 1 - 10 (1 being the easiest and 10 being the
            hardest). Addtionally, 16 out of 20 said that they would recommend
            the website to colleagues, friends and family if they knew someone
            interested in permanent makeup services. The color scheme, sharp
            edges, and minimistic layout allowed people from all kinds of
            background to easily navigate through the webiste without much
            difficulty which would in theory, not only enable users to find
            information they need but also to easily book appointments for their
            next permanent makeup service.
          </p>
        </div>
        <div className="img-group">
          <img src={DollfaceServices} />
        </div>
      </div>
    </div>
  );
};

export default Dollface;
