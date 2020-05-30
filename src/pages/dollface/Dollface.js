import React from "react";
import Dollface_design from "./Dollface_Design_Process.png";
import Dollface_Color_Scheme from "./Dollface_Color_Scheme.png";
import Dollface_font from "./Dollface_font.png";
import Dollface_low_fidelity from "./Dollface_Low_Fidelity.png";
import dollface_desktop_demo from "./dollface_desktop_demo.mp4";
import mobile_low_fidelity from "./mobile_low_fidelity.png";
import Dollface_mobile_demo from "./mobile_video_demo.mp4";
import DollfaceHome from "./dollface-home.jpg";
import DollfaceMobileMenu from "./dollface-mobile-menu.jpg";
import DollfaceServices from "./dollface-services.jpg";
import Navbar from "../../General/Navbar";

const Dollface = () => {

  const onClick = e => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  };

  return (
    <div className="main-container" id="project-container">
      <Navbar />
      <div className="project-title-container">
        <h1>Dollface Permanent Makeup</h1>
      </div>
      <div className="project-overview">
        <p id="quick-description">
          <em>Website Development</em>
        </p>
        <p id="quick-summary">
          Book your next eyebrow tattoo appointment with an amazing, independent
          artist at Dollface Permanent Makeup, a business operating in
          Anaheim, CA.
        </p>
        <div>
          <img src={DollfaceHome} />
        </div>
      </div>
      <div id="summary-container">
        <h1>Summary</h1>
        <div id="summary-detail-container">
          <div>
            <p className="first-col">Duration</p>
            <p className="second-col">4 weeks</p>
          </div>
          <div>
            <p className="first-col">Theme</p>
            <p className="second-col">Beauty, clean, minimalist</p>
          </div>
          <div>
            <p className="first-col">My Role</p>
            <p className="second-col">
              UX research <br />
              Website hierarchy/flow <br />
              Low and high fidelity wireframes <br />
              Prototype <br />
              User testing <br />
              Deployment <br />
            </p>
          </div>
          <div>
            <p className="first-col">Tools & Technologies</p>
            <p className="second-col">
              Adobe XD
              <br />
              ReactJS
              <br />
              HTML
              <br />
              CSS
            </p>
          </div>
          <div>
            <p className="first-col">Problem</p>
            <p className="second-col">
              Rapidly growing business had no way to present service information
              through the web. Lack of online presence meant less exposure to
              potential clients in the surrounding areas. Without online tools,
              the business couldn't track and book appointments online and had
              to do everything manually over text message.
            </p>
          </div>
          <div>
            <p className="first-col">Solution</p>
            <p className="second-col">
              Create and develop a website that presented information to
              customers so that they can make well-informed decisions. Design a
              navigation system that was simple and easy to use for newcomers.
              Save the business time by connecting with an online scheduling
              service that imported booked appointments into the calendar.
            </p>
          </div>
        </div>
      </div>
      <div id="design-process">
        <h1>Design Process</h1>
        <img src={Dollface_design} alt="design process for dollface" />
        <p className="design_process_text">
          In order to design Dollface PMU's website, I followed the design
          process detailed above. I first had to identify what problems and
          issues existed due to the business not having a website. In order to
          discover solutions to those problems, research was conducted and
          sketches of possible designs were created. The design and prototype
          was developed through Adobe XD. Lastly, the website went through user
          testing to gain user feedback about the ease of use and the clarity of
          information of the website.
        </p>
      </div>
      <div id="user-research">
        <h1>User Research</h1>
        <p>
          Individuals were screened through a multiple choice survey to create a
          pool of testers that were interested in beauty, searched
          beauty-related products and/or services once every few weeks. <br />
          <strong>Goal:</strong>{" "}
          <em>
            Find and pool an audience that had relevant interests in Dollface
            PMU's services.
          </em>
        </p>
        <p>
          There were a total of 15 individuals that passed the screening. A
          total of 7 volunteered to be interviewed via phone call. It was vital
          to the project that I found what users expected when first visiting a
          beauty service website, what information they wanted to see quickly
          and conveniently and how much information they really needed when
          reviewing services. <br />
          <strong>Goal:</strong>{" "}
          <em>
            Identify needs of users to create a fluid and easy-to-understand
            navigation system.
          </em>
        </p>
        <h4 className="quote">
          "I expect to be able to book an appointment as soon as I load the
          page."
        </h4>
        <p>
          It was very apparent that there were users who appreciated a blatantly
          quick and easy way to book without any distractions. Many users that
          shared the same sentiment all generally stated that they already knew
          what they wanted because they've had the service done before and did
          not need too much information.
        </p>
        <h4 className="quote">
          "Honestly, it's the worst when these kinds of websites are just
          cramped with words. It's an eyesore and makes it really hard to stay
          focused on what I'm reading."
        </h4>
        <p>
          Users frequently compained that websites with similar offerings had
          readability issues due to the cramped kerneling and line heights of
          the texts. This is a very big issue as services like these have
          multiple steps of preparation and aftercare that the client is
          responsible for. Additionally, for clients to make an informed
          decision text must be read without inducing stress on the user.
        </p>
        <h4 className="quote">
          "I think my main issue with websites is when their menus have a
          million submenus that I need to go through."
        </h4>
        <p>
          Submenus are popular in beauty websites because of how many services
          are available. However, most users expressed frustrations with this
          style due to the overwhelming nature of it.
        </p>
        <h2 className="subtitle">Key Takeaways</h2>
        <div id="takeaway-container">
          <ul>
            <li>
              Users appreciate an easy way for them to quickly book an
              appoinment.
            </li>
            <li>
              Users need to have adequate letter spacing and legible fonts to
              enhance their reviewing and learning experience.
            </li>
            <li>
              Navigation should lead users to where they need to go and not
              overwhelm users with options.
            </li>
          </ul>
        </div>
      </div>
      <div id="style-guide">
        <h1>Style Guide</h1>
        <p>
          In the style guide, I chose colors and typography that would both be
          modern and professional to match the brand. I kept keywords in mind so
          that it would be easier to create the design.
        </p>
        <h2 className="subtitle">Color</h2>
        <p>
          Dollface PMU is a brand that prides itself on how straight forward and
          clean it is, I wanted to strengthen the minimalist but powerful
          identity of the brand by using only black and white. The mostly
          monochromatic style would provide users an environment that was free
          of distraction that made reading and studying information a less
          strenuous task.
        </p>
        <img src={Dollface_Color_Scheme} alt="brand colors" />
        <p className="img-descriptions">
          <em>Dollface PMU color scheme</em>
        </p>
        <h2 className="subtitle">Typography</h2>
        <p>
          The two fonts that we decided to use were Helvetica and neue Haas
          Unica. The repeating sans combination worked perfectly for the website
          to emphasize clarity and readability, as well as, make the website
          have a clean and modern feeling.
        </p>
        <img src={Dollface_font} alt="brand typography" />
        <p className="img-descriptions">
          <em>Dollface PMU typography</em>
        </p>
        <h2 className="subtitle">Prototyping - Desktop</h2>
        <p>
          The homepage immediately captures the attention of the users with the
          large CTA on the left side of the hero panel. Users can easily see the
          "book an appointment" and make a quick decision if they are able.
          <br />
          <br />
          Every page is separated by large, bold title headers to provide
          clarity and mental organization for easier recall for the user. I
          wanted to utilize large amounts of white space to simulate reading a
          book on paper as much as possible. This would provide distractionless
          reading and enable users to focus on storing the information in their
          long term memories.
          <br />
          <br />
          The navigation system is clearly seen at the top and organized the way
          the user should logically understand information. Users should know
          policies, general preparation and aftercare procedures, then
          descriptions of services and finally create an appointment. This
          enables users to be fully informed before booking which provides the
          users clearly defined expectations.
        </p>
        <img
          src={Dollface_low_fidelity}
          alt="dollface low fidelity wireframe"
        />
        <p className="img-descriptions">
          <em>Dollface PMU low fidelity desktop wireframe</em>
        </p>
        <video
          loop="true"
          autoplay="autoplay"
          alt="dollface desktop video demo"
          src={dollface_desktop_demo} type="video/mp4"
          muted
          playsinline="1"
        >
        </video>
        <p className="vid-descriptions">
          <em>Dollface PMU desktop video demo</em>
        </p>
        <h2 className="subtitle">Prototyping - Mobile</h2>
        <p>
          On the mobile front, I wanted the website to still hold true to its
          identity while adapting to the smaller screen of a smartphone. The
          menu was collapsed into a hamburger menu that has a fixed position so
          that users can always access the menu when required.
        </p>
        <img
          src={mobile_low_fidelity}
          alt="dollface low fidelity mobile wireframe"
        />
        <br />
        <br />
        <p className="img-descriptions">
          <em>Dollface PMU low fidelity mobile wireframe</em>
        </p>
        <div></div>
        <div className="lessons_learned">
          <h1>Lessons Learned</h1>
          <h2 className="subtitle">User Research</h2>
          <p>
            Research via over the phone interviews were key to this project's
            success. The interviews unlocked a deep lake of insight that allowed
            myself to formulate a website that locked on to user painpoints and
            create solutions that were intuitive and pleaseing.
          </p>
          <h2 className="subtitle">User Testing</h2>
          <p>
            User testing ultimately helped me to design for people and not
            myself or my client. It's very easy for me to think that people
            think like I do but through user testing, the objective fact is
            that, I don't speak for the entire populus. Having feedback of what
            worked and what didn't was an immense help to finishing the final
            product.
          </p>
          <div className="project_links">
            <h1>Links</h1>
            <a className="subtitle" href="https://dollfacepmu.com" target="_blank">
              <p>www.dollfacepmu.com</p>
            </a>
            <a className="subtitle" href="https://github.com/Meraki-dot/dollfacepmu" target="_blank">
              <p>github</p>
            </a>
          </div>
        </div>
        <button className="top-button" onClick={onClick}>
          <p>to the top</p>
        </button>
      </div>
    </div>
  );
};

export default Dollface;
