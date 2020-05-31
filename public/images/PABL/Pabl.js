import React from "react";
import Navbar from "../../General/Navbar";
import { Link } from "react-router-dom";
//images
import design_process_banner from "./Pure_artistry_design_banner.png";
import Colors from "./Pure_artistry_colors.png";
import Typography from "./Pure_artistry_fonts.png";
import Low_fidelity from "./Low_fidelity.png";
import High_fidelity from "./High_fidelity.png";
import live_website from "./live_website.png";
import pabl_homepage from "./pabl_homepage.png";
import pabl_event from "./pabl_event.jpg";

const Pabl = () => {
  const onClick = (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-container" id="project-container">
      <Navbar />
      <div className="project-title-container">
        <h1>Pure Artistry By Lynne</h1>
      </div>
      <div className="project-overview">
        <p id="quick-description">
          <em>Website Redesign</em>
        </p>
        <p id="quick-summary">
          Website redesign for a small wedding planning business based in
          Southern California.
        </p>
        <div>
          <img src={pabl_event} alt="PABL event page" />
        </div>
        <p className="img-descriptions">
          <em>Pure Artistry's event page</em>
        </p>
      </div>
      <div id="summary-container">
        <h1>Summary</h1>
        <div id="summary-detail-container">
          <div>
            <p className="first-col">Duration</p>
            <p className="second-col">2 Weeks</p>
          </div>
          <div>
            <p className="first-col">Theme</p>
            <p className="second-col">Warm, Elegant, Inviting</p>
          </div>
          <div>
            <p className="first-col">My Role</p>
            <p className="second-col">
              UX research <br />
              Website hierarchy/flow for desktop only
              <br />
              Low and high fidelity wireframes for desktop only
              <br />
              Prototype for desktop only
              <br />
              User testing for desktop only
              <br />
            </p>
          </div>
          <div>
            <p className="first-col">Tools & Technologies</p>
            <p className="second-col">
              Adobe XD
              <br />
              Photoshop
            </p>
          </div>
          <div>
            <p className="first-col">Problem</p>
            <p className="second-col">
              Small business had an outdated design for their website. The
              website also had a confusing layout and flow to it.
            </p>
          </div>
          <div>
            <p className="first-col">Solution</p>
            <p className="second-col">
              Modernize the website and develop an inviting environment for
              users. Create a flow that makes sense to users so that information
              is more easily accessible and booking services is simple.
            </p>
          </div>
        </div>
      </div>
      <div id="design-process">
        <h1>Design Process</h1>
        <img
          src={design_process_banner}
          alt="design process for Pure Artistry"
        />
        <p className="design_process_text">
          To redesign Pure Artistry's website, I had to begin with research so
          that I could identify what the current pain points were of the
          website. Research began with a comment based survey asking for
          people's opinions of the current website. After collecting responses,
          I recorded what words were commonly associated with the live website
          and what words users felt were commonly associated with a successful
          website with similar services.
        </p>
      </div>
      <div id="user-research">
        <h1>User Research</h1>
        <p className="research_point">
          I used a comment based survey to discover what users didn't like about
          the current website and what they would like to see. <br />
          <strong>Goal:</strong>{" "}
          <em>Identify user pain points of the website.</em>
        </p>
        <p className="research_point">
          In the same survey, I asked users to write down what they felt like
          was missing in the current website. <br />
          <strong>Goal:</strong>{" "}
          <em>
            Discover essential elements of a wedding/event planning website.
          </em>
        </p>
        <p className="research_point">
          Lastly, users were asked to write down what made a website a pleasure
          to use. <br />
          <strong>Goal:</strong>{" "}
          <em>
            Find out what users deem to be enjoyable functions or styles in a
            website.
          </em>
        </p>
        <br />
        <br />
        <p className="img-descriptions">
          <em>Pure Artistry's current homepage</em>
        </p>
        <h4 className="quote">
          "The website is confusing, there just seems to be no cohesion."
        </h4>
        <p>
          This comment was the most common opinion of the current website. When
          a user visits the website they aren't at the homepage but immediately
          get's routed the makeup page. It's quite a jarring experience and it
          confuses the user on where to even begin. Additionally, the fact the
          user is not taken to the homepage is very bizzare and users expressed
          that, that was one of the main reasons why they couldn't understand
          the website's flow.
        </p>
        <h4 className="quote">
          "The navigation is really frustrating. When I click on it I expected
          to take me somewhere. I know there was a drop down menu but I still
          expect to get taken somewhere, maybe an overview of that page."
        </h4>
        <p>
          The navigation menu interactions did not meet users' expectations and
          created an awkward experience. When a user gets visual feedback such
          as a change of color, they expect that button to not only be clickable
          but to take them somewhere related to that navigation item.
        </p>
        <h4 className="quote">
          "Service-based websites need to have a clear flow."
        </h4>
        <p>
          Users all generally agreed that a website without a good flow of
          information and direction, would mean they would leave the website for
          something better.
        </p>
        <h4 className="quote">
          "When I think of weddings, I think of warmth, invitations, flowers and
          love. When I think of wedding planning, I think of security and
          trust."
        </h4>
        <p>
          Weddings and event planning have a certain persona that people
          naturally gravitate towards. Being warm, inviting, and secure all add
          to the user's browsing experience and influences their decision
          whether to book services or not.
        </p>
        <h2 className="subtitle">Key Takeaways</h2>
        <div id="takeaway-container">
          <ul>
            <li>
              The navigation system and website flow needs to completely be
              revamped
            </li>
            <li>
              Colors and fonts need to express a warm, inviting and secure
              environment.
            </li>
            <li>
              Users do not appreciate "fake" links, all interactions must have a
              purpose to increase a user's browsing experience.
            </li>
          </ul>
        </div>
      </div>
      <div id="style-guide">
        <h1>Style Guide</h1>
        <p>
          For the style guide, I chose colors that would invoke warmth and feels
          inviting. Pastel colors were selected to have a website that wasn't
          "in-your-face" but was charming and welcoming. I chose a Serif font
          for headers and a Sans font for the body to enable users to quickly
          distinguish where to begin browsing.
        </p>
        <h2 className="subtitle">Color</h2>
        <p>
          Pastel colors were chose to welcome users to their "happiest moment."
          The colors encourages users to browse through the joyful images of
          celebration and to click on other links to discover what services the
          business provides. The comforting colors allow users to be open minded
          and positive as they browse.
        </p>
        <img src={Colors} alt="brand colors" />
        <p className="img-descriptions">
          <em>Pure Artistry's color scheme</em>
        </p>
        <h2 className="subtitle">Typography & Key Words</h2>
        <p>
          Playfair Display was used for the headers to grab the user's gaze and
          to set the flow for their browsing. The playful serifs produced a
          casual, non-business like vibe which worked perfectly for the
          website's serviecs. The body texts utilized the sans font, Raleway to
          modernize the website and continue the theme of warm welcoming and
          easy reading. I also wrote down words that captured the aesthetic of
          the website to focus and drive in the goal of the design into the
          website.
        </p>
        <img
          className="typography"
          src={Typography}
          alt="Pure artistry typography"
        />
        <p className="img-descriptions">
          <em>Pure Artistry's typography and key words</em>
        </p>
        <h2 className="subtitle">Prototyping - Desktop</h2>
        <p>
          I wanted the hero message to not be blown up like they normally are to
          set an unburdensome experience. Instead, the hero panel was comprised
          of medium-sized headers and two boxes that held the primary call to
          actions. I also wanted to somehow put a large volume of color without
          overwhelming the user. My solution is shown in the high fidelity
          mockup.
        </p>
        <img src={Low_fidelity} alt="Pure Artistry's low fidelity wireframe" />
        <p className="img-descriptions" id="pure_artistry_fidelity">
          <em>Pure Artistry's low fidelity desktop wireframe</em>
        </p>
        <p>
          Color was used in large accent boxes. The pastel colors of the boxes
          provided a playfulness and comfort that worked perfectly for the
          website's thematic. The idea was to use these boxes as a way to
          present wedding planning as an exciting, joyful and pleasing time that
          anyone should look forward to.
          <br />
          <br />
          Using Photoshop, images were changed to match the color scheme of the
          website as much as possible. The colors of the images were
          desauturated and slightly overexposed so that they wouldn't pop out
          too much but would blend in with the background much like the pastel
          box accents.
          <br />
          <br />
          In each service section, there was a header that gave a quick way for
          users to understand what the page was about but also a quote from Pure
          Artistry. Users explained that they wanted to feel a sense of trust
          when booking for an event planner of any sort. The quote provided some
          personality for a business that is initially foreign to the user.
          Through the quote, the website presented a more personable service
          rather than a purely professional one that would induce feelings of
          trust in a user.
          <br />
          <br />
          The navigation system was setup in a way where user would always have
          access to it due to its fixed scroll position and show a clear,
          understandable flow for the user to follow. The website needed to be
          personable and the best way for it present itself in that way was to
          showcase who the user would potentially be working with. Meet the team
          was first as a way to informally introduce the team and have users
          feel as if they are booking with someone they already knew. Right
          after that, the primary service of the business of makeup followed
          after, then event planning then their gallery.
        </p>
        <img
          src={High_fidelity}
          alt="Pure Artistry's high fidelity wireframe"
        />
        <p className="img-descriptions" id="pure_artistry_high_fidelity">
          <em>Pure Artistry's high fidelity desktop wireframe</em>
        </p>
        <div className="lessons_learned">
          <h1>Lessons Learned</h1>
          <h2 className="subtitle">Empthasize with Users</h2>
          <p>
            Interestingly enough, part of being objective in UX is to be
            emotional. Touching on the emotional frustration that come with UX
            issues is imperative to produce user friendly UX. In this case, an
            outdated, jarring navigation experience and unprofressional and cold
            thematic detered users from using the current iteration of Pure
            Artistry's website for very long. This understanding painted the way
            for the redesign of the website and revamped the site in a way that
            made sense for not only the business but for their potential
            clients.
          </p>
          <div className="comparison-container">
            <div>
              <img src={live_website}  alt="PABL current homepage" />
              <p className="img-descriptions">
                <em>Pure Artistry's current homepage</em>
              </p>
            </div>
            <div>
              <img src={pabl_homepage} alt="PABL redesigned homepage" />
              <p className="img-descriptions">
                <em>Pure Artistry's redesigned homepage</em>
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-nav">
          <Link to="/dollface" className="prev-button">
            <p>Dollface PMU</p>
          </Link>
          <button className="top-button" onClick={onClick}>
            <p>top</p>
          </button>
          <Link to="/pabl" className="next-button">
            <p>Pure Artistry</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pabl;
