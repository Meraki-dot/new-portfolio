import React from "react";
import Navbar from "../../General/Navbar";
import { Link } from "react-router-dom";
//images
import homepage_mockup from "./homepage_mockup.png";
import design_process_banner from "./Icons_Banner_Image.png";
import Colors from "./Angela_Colors.png";
import Typography from "./Angela_Typography.png";
import Low_Fidelity from "./Low_fidelity_wireframe.png";
import Mobile_Low_Fidelity from "./Mobile_low_fidelity.png";
import Mobile_High_Fidelity from "./Mobile_high_fidelity.png";
import High_Fidelity from "./High_fidelity_wireframe.png";

const Angela_website = () => {
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
      <div className="project-title-container">
        <h1>Angela Contreras Portfolio</h1>
      </div>
      <div className="project-overview">
        <p id="quick-description">
          <em>Ongoing Website Development</em>
        </p>
        <p id="quick-summary">
          Portfolio website development for a local artist based in Pasadena.
          Her current project consists of rescue dog-themed paintings that
          showcase her immense love for animals.
        </p>
        <div>
          <img src={homepage_mockup} alt="Angela Contreras homepage" />
        </div>
        <p className="img-descriptions">
          <em>Angela Contreras' homepage</em>
        </p>
      </div>
      <div id="summary-container">
        <h1>Summary</h1>
        <div id="summary-detail-container">
          <div>
            <p className="first-col">Duration</p>
            <p className="second-col">Ongoing</p>
          </div>
          <div>
            <p className="first-col">Theme</p>
            <p className="second-col">Antique, vintage, minimalist</p>
          </div>
          <div>
            <p className="first-col">My Role</p>
            <p className="second-col">
              UX research <br />
              Website hierarchy/flow <br />
              Low and high fidelity wireframes <br />
              Prototype <br />
              User testing <br />
              Front end development <br />
              Deployment <br />
            </p>
          </div>
          <div>
            <p className="first-col">Tools & Technologies</p>
            <p className="second-col">
              Adobe XD
              <br />
              Photoshop
              <br />
              ReactJS
              <br />
              HTML
              <br />
              SASS
            </p>
          </div>
          <div>
            <p className="first-col">Problem</p>
            <p className="second-col">
              A local artist has limited exposure due to having a lack of an
              online presence. People local to the Pasadena community regularly
              reach out to her for commissions and paintings. The artist has a
              desire to expand her reach by having a portfolio website.
            </p>
          </div>
          <div>
            <p className="first-col">Solution</p>
            <p className="second-col">
              Produce a website where people can browse through artwork, read on
              the story of each piece and reach out to the artist for possible
              commissions.
            </p>
          </div>
        </div>
      </div>
      <div id="design-process">
        <h1>Design Process</h1>
        <img
          src={design_process_banner}
          alt="design process for Angela Contreras"
        />
        <p className="design_process_text">
          Designing Angela's portfolio website was a challenge because I had to
          identify what people looked for when browsing through an artist's
          website. The beginning stages of research was focused on studying the
          competition to see how they handled the organization of their artwork
          and the hierarchy of their website. The second stage of research
          utilized insights from over the phone interviews. Ideation consisted
          of sketching out placements and writing words to describe the
          website's overall aesthetic. Finally, prototyping was executed using
          Adobe XD and I conducted user testing to get more feedback.
        </p>
      </div>
      <div id="user-research">
        <h1>User Research</h1>
        <div className="research-text-container">
          <p>
            The first stage of research was concentrated on competitive
            research. Moodboards were created, and other similar websites were
            analyzed. <br />
            <strong>Goal:</strong>{" "}
            <em>
              Identify what color palettes, design styles, and website flows
              other similar portfolios were using.
            </em>
          </p>
          <p>
            A total of 6 individuals volunteered to be interviewed via phone
            call. It was vital to the project that I what contributed to a
            pleasurable image viewing, gallery-browsing experience. The
            interviews conducted provided a clearer understanding of what gave
            people an easy-going and enjoying browsing experience. <br />
            <strong>Goal:</strong>{" "}
            <em>
              Unearth elements that people felt were essential for reading a
              story and browsing images.
            </em>
          </p>
          <h4 className="quote">
            "If I am expected to read as if I'm reading a book, then it needs to
            feel like a book."
          </h4>
          <p>
            Although this explanation is vague, it still provided insight into
            what users deemed valuable when visiting a site that has the intent
            of telling a story. Creating an environment that is akin to that of
            reading a physical book was a common statement across all those who
            were interviewed.
          </p>
          <h4 className="quote">
            "My eyes hurt when the colors of the websites are harsh. Very white
            and blue websites make me feel like I need to read in a rush so that
            my eyes don't hurt too much."
          </h4>
          <p>
            Users commented on a trend in small businesses or local websites:
            They are all too white. Many people know that blue light is a
            leading reason for eye strain and when telling a story, the text and
            images need to be presented on a canvas that allows the eyes to
            relax and be immersed.
          </p>
        </div>
        <h2 className="subtitle">Key Takeaways</h2>
        <div id="takeaway-container">
          <ul>
            <li>
              The website should capture the feeling of reading a physical book.
            </li>
            <li>
              The background of the website needs to be warm and easy on the
              eyes to enhance immersion.
            </li>
            <li>
              A user should be able to navigate through the website as if it was
              a museum or a page on a book. The familiarity of common settings
              is key for a seamless experience for the user.
            </li>
          </ul>
        </div>
      </div>
      <div id="style-guide">
        <h1>Style Guide</h1>
        <p>
          For Angela's style guide, I chose colors that would be warm and easy
          on the eyes. The colors were chosen to create a vintage-like, worn
          paper environment for the user. I chose a Serif font for headers and a
          Sans font for the body to enable users to quickly distinguish where to
          begin browsing.
        </p>
        <h2 className="subtitle">Color</h2>
        <p>
          Instead of using pure black as the color for the main text, I used a
          darker grey so that reading wouldn't be harsh on the eyes. Other
          pieces of subtext used a very light grey to blend into the background
          enough to not be a distraction but to also have enough contrast to be
          noticeable. Pure black was used for elements such as artwork titles to
          help readers immediately locate a starting point. The off white,
          greyish background was used to emulate worn paper with a reading light
          shining on it to invoke a feeling of familiarity for the user.
          Grey-purple was used very sparingly as an accent color to draw
          attention to images.
        </p>
        <img src={Colors} alt="brand colors" />
        <p className="img-descriptions">
          <em>Angela Contrera's color scheme</em>
        </p>
        <h2 className="subtitle">Typography</h2>
        <p>
          The headers used the Noe Display font to attract the reader's
          attention while the body texts used Neue Haas Unica for easy
          readability. Noe Display colored dark grey gave the website a sense of
          antiquity that is commonly associated with physical books. Neue Haas
          Unica perfectly complemented Noe Display by allowing the website to
          still hold onto a modern look that people have grown accustomed to.
        </p>
        <img className="typography" src={Typography} alt="brand typography" />
        <p className="img-descriptions">
          <em>Angela Contrera's typography</em>
        </p>
        <h2 className="subtitle">Prototyping</h2>
        <p>
          The first adaptation sported a more modernized look rather than
          vintage. Initially, the artist felt taht the website needed to be
          familiar to the modern-day community and so the first iteration of a
          project's page utilized large fonts that were placed behind the project's
          image.
        </p>
        <img src={Low_Fidelity} alt="Angela Contreras low fidelity wireframe" />
        <p className="img-descriptions" id="angela_low_fidelity">
          <em>Angela Contrera's low fidelity desktop wireframe</em>
        </p>
        <img
          src={Mobile_Low_Fidelity}
          alt="Angela Contreras low fidelity mobile wireframe"
        />
        <p className="img-descriptions" id="angela_low_fidelity">
          <em>Angela Contrera's low fidelity mobile wireframe</em>
        </p>
        <p>
          As the project developed, however, I couldn't ignore the results I had
          from the research interviews. More and more the design shifted to
          focusing on emulating a book or a museum as suggested in the research.
          The project pages adopted a recognizable structure that's common in
          other artists' websites while providing better readability through
          color and font selection.
        </p>
        <img
          src={High_Fidelity}
          alt="Angela Contreras high fidelity wireframe"
        />
        <p className="img-descriptions" id="angela_high_fidelity">
          <em>Angela Contrera's high fidelity desktop wireframe</em>
        </p>
        <img
          src={Mobile_High_Fidelity}
          alt="Angela Contreras high fidelity mobile wireframe"
        />
        <p className="img-descriptions" id="angela_high_fidelity">
          <em>Angela Contrera's high fidelity mobile wireframe</em>
        </p>
        <div className="lessons_learned">
          <h1>Lessons Learned</h1>
          <h2 className="subtitle">Competitive Research</h2>
          <p>
            Research is always an incredibly valuable part of the entire design
            process. The research of the competition allowed me to find what
            worked and what elements seemed to be overused. With insight from
            the research, I was able to produce a design that was familiar to
            users but unique and different from other portfolio websites.
          </p>
          <h2 className="subtitle">Colors</h2>
          <p>
            Throughout development, the major reason I couldn't ignore They user
            research was not necessarily because I remembered but it was because
            the colors pushed the design a certain way. Although I was aware
            that color is immensely important to a design, this project allowed
            me to see that color is often the primary factor as to where the design is
            headed.
          </p>
          <div className="project_links">
            <h1>Links</h1>
            <a
              href="https://github.com/Meraki-dot/angela_website"
              target="_blank"
            >
              <p>github</p>
            </a>
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

export default Angela_website;
