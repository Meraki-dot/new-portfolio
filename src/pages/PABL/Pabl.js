import React from "react";
import Navbar from "../../General/Navbar";
import live_website from "./live_website.png";
import pabl_homepage from "./pabl_homepage.png";
import pabl_home_makeup from "./pabl_home_makeup.png";
import pabl_home_event from "./pabl_home_event.png";
import pabl_meet from "./pabl_meet.png";
import pabl_makeup from "./pabl_makeup.jpg";
import pabl_event from "./pabl_event.jpg";

const Pabl = () => {
  return (
    <div className="main-container" id="project-container">
      <Navbar />
      <div className="project-title-container">
        <h1>Polish · Refine</h1>
      </div>
      <div className="project-overview">
        <p>
          This was a reimagining of a current live website for a wedding
          planner/makeup artist. The client was using a Squarespace template to
          design and develop her website. She wanted to have something clean and
          elegant but the most important characteristic was that she wanted the
          website to make sense. So, the vision of the website was to produce a
          website design that not only portrayed a wedding's beauty but also had
          to make logical sense in terms of navigation, placement of elements,
          color palettes, etc.
        </p>
      </div>
      <div className="project-goals">
        <p>
          High-level goals were:
          <ol>
            <li>
              The target audience were couples who were diving into the wedding
              process. That means, a specific aesthetic is often expected from
              websites like these. I wanted to fulfill those expectations as
              much as possible but also produce a modernized look that drifted
              away from the standard brush script look.
            </li>
            <li>
              Navigation had to make logical sense to the person who was
              browsing. There should be a clear flow of progression and with
              each step, the user should grow in confidence of the services they
              are reading.
            </li>
            <li>
              As with any service-based business, the website must illicit trust
              and feeling of security for the user.
            </li>
          </ol>
        </p>
      </div>
      <div className="project-challenges">
        <div className="project-title-container">
          <h1>The Challenge</h1>
        </div>
        <div className="project-challenges-text">
          <p>
            The greatest challenge, although incredibly cliche, was to not be
            like everyone else. There is a "wedding aesthetic" if you will that
            people have come to expect. It's generally overused, overdone and
            has grown stale and we didn't want this website to be stale. Call to
            actions shouldn't necessarily be inviting but bold and in your face.
            The client's strong will and personality needed to come across the
            website. Additionally, we needed to modernize the current website
            and to do that we couldn't reuse many of the elements the current
            site used.
          </p>
        </div>
      </div>
      <div className="img-group">
        <img id="project-first-img" src={live_website} />
      </div>
      <div className="project-challenges">
        <div className="project-title-container">
          <h1>The Process</h1>
        </div>
        <div className="project-challenges-text">
          <p>
            As soon as a user loads up the website there are a few things the
            user is confronted with. Big, bold text can grab the attention and
            gives a sense of importance. There are three call to actions that
            the user can choose from. Of course, if the user is simply there to
            peruse, they are welcome to scroll down where they can see an
            overview of each service and casually see what the business has to
            offer.
          </p>
        </div>
      </div>
      <div className="img-group">
        <img src={pabl_homepage} />
        <img src={pabl_home_makeup} />
        <img src={pabl_home_event} />
      </div>
      <div className="project-challenges-text">
        <p>
          The first element in the navigation bar is to "meet the team." The
          reason this element came first was so that users can immediately make
          the choice if they want to see who they would be working with and it
          would also give the team a chance to share their credibility and their
          personality.
        </p>
      </div>
      <div className="img-group">
        <img src={pabl_meet} />
      </div>
      <div className="project-challenges-text">
        <p>
          From there, users can look through the details of the team's makeup
          and event planning services. The titles of these pages also displays a
          direct quote so that the user continues to feel more connected to the
          team. The colors allow for easier viewing of images and text as well
          as produce elegance to the website.
        </p>
      </div>
      <div className="img-group">
        <img src={pabl_makeup} />
        <img src={pabl_event} />
      </div>
      <div className="project-conclusion">
        <div className="project-title-container">
          <h1>Conclusions</h1>
        </div>
        <div className="project-conclusion-text">
          <p>
            Most of the feedback was positive. Many felt like that the
            navigational experience had a lot more logical sense than the
            previous website. Others commented and reacted positively on the
            overall aesthetic and modernized look of the website. Ultimately, with increased clarity of menu items, website flow and information hypothetically will produce more traffic and more sales of services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pabl;
