import React from "react";
import "./Hero.css";
import assets from "../../assets/assets";

function Hero() {
  return (
    <>
      <div className="main">
        <div className="compOne">
          <video autoPlay muted loop id="backgroundVideo">
            <source
              src={require("../../assets/images/herobg.mp4")}
              type="video/mp4"
            />
          </video>
          <div className="nav">
            <div className="name">
              <p>Prakhar Srivastava</p>
              <div className="nameP">
                <p>AI & Data Science Visionary | Strategic Problem Solver</p>
                <i className="fa-solid fa-user-secret userSecret"></i>
              </div>
            </div>
            <div className="profile">
              <img srcSet={assets.photo} alt="PRAKHAR KUMAR SRIVASTAVA" />
            </div>
            <div className="reach">
              <a
                href="https://drive.google.com/file/d/1Fgncg_iYY9Mk_mAMlSl1t1OYiqrpHwDu/view?usp=sharing"
                className="downcv"
              >
                Download CV
              </a>
              <a href="mailto:prakharkumar.srivastava.22cse@bmu.edu.in">
                <i className="fa-regular fa-message"></i>
              </a>
            </div>
          </div>
          <div className="mid">
            <h4>prakhar</h4>
            <h1>
              Turning Complex Challenges into <br />
              Scalable, Intelligent Solutions
            </h1>
            <h3>
              I craft AI-powered systems that merge design, data <br /> and
              strategy to create lasting impact.
            </h3>
          </div>
          <div className="work">
            <p>AI-Driven Web & App Development</p>
            <p>Scalable System Architecture & Complex Solutions</p>
            <p>Business-Centric Tech Innovation</p>
          </div>
          <div className="lastDown">
            <div className="dOne">
              <a href="https://github.com/prakharr5">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/prakhar5/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/prakhar_5_/?igsh=eW84OHllNW1zcndp&utm_source=qr">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="dMid">
              <a href="#projects">
                <i className="fa-solid fa-angle-down"></i>
              </a>
            </div>
            <div className="dLast">
              <a href="#projects">Projects</a>
              <a href="#skillsp">Skills</a>
              <a href="#aboutp">About</a>
              <a
                href="mailto:prakharsrivastava586@gmail.com"
                className="contactLink"
              >
                Contact <i className="fa-solid fa-circle-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="compTwo" id="projects">
          <div className="type">
            <h2>Projects</h2>
            <p>
              I have a proven track record of my work and over 15+ projects that
              have helped me gain experience.
            </p>
          </div>
          <div className="desc">
            <div className="container">
              <div className="box">
                <div className="vid">
                  <p className="tag">FULL-STACK</p>
                  <video autoPlay muted loop id="backgroundVideoTwo">
                    <source
                      src={require("../../assets/images/prjOne.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="about">
                  <h3>
                    CafeSerenityBites
                    <span className="spanG">/ Academic Project</span>
                  </h3>
                  <p>
                    A web development project of cloud kitchen, creating an
                    intuitive and responsive user interface that streamlined the
                    online ordering process.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="vid">
                  <a
                    href="https://bpalloys.in/"
                    target="_blank"
                    className="tag"
                  >
                    VISIT
                  </a>
                  <video autoPlay muted loop id="backgroundVideoTwo">
                    <source
                      src={require("../../assets/images/prjTwo.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="about">
                  <h3>
                    B.P. Alloys Limited{" "}
                    <span className="spanG">/ Internship</span>
                  </h3>
                  <p>
                    Designed and developed the official website of the company
                    from scratch.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="box">
                <div className="vid">
                  <a href="https://subsaft.com/" className="tag">
                    VISIT
                  </a>
                  <video autoPlay muted loop id="backgroundVideoTwo">
                    <source
                      src={require("../../assets/images/prjsub.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="about">
                  <h3>
                    SUBSAFT <span className="spanG">/ Freelancing</span>
                  </h3>
                  <p>Designed & developed website for a startup.</p>
                </div>
              </div>
              <div className="box">
                <div className="vid">
                  <a href="https://acmbmu.com/" className="tag">
                    VISIT
                  </a>
                  <video autoPlay muted loop id="backgroundVideoTwo">
                    <source
                      src={require("../../assets/images/prjFour.mp4")}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="about">
                  <h3>
                    ACMBMU
                    <span className="spanG">/ Official Student Chapter</span>
                  </h3>
                  <p>
                    Had my major contribution in the developement of the
                    official website.
                  </p>
                </div>
              </div>
            </div>

            <div className="others">
              <h3>Other Projects</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="namePrj">
                      Indoor Navigation System{" "}
                      <i className="fa-solid fa-caret-down"></i>
                    </td>
                    <td className="detailsHidden">
                      An app developed to solve navigation challenges within the
                      college campus containing over 90 faculty offices. The app
                      displays office numbers and directions upon searching a
                      faculty member’s name.
                    </td>
                    <td className="detailsHidden">Python, GUI Development</td>
                  </tr>

                  <tr>
                    <td className="namePrj">
                      Smoke Detector Necklace (IoT Project)
                    </td>
                    <td className="detailsHidden">
                      A wearable prototype that counts the number of puffs taken
                      by a smoker. Aims to aid in quitting smoking by providing
                      personalized plans based on smoking patterns.
                    </td>
                    <td className="detailsHidden">
                      IoT, Sensors, Embedded Systems, Prototyping
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">
                      StatFlow – Web Platform for Data Analysis
                    </td>
                    <td className="detailsHidden">
                      A web app that enables users to upload datasets and
                      generate various visualizations like histograms, box
                      plots, scatter plots, etc.
                    </td>
                    <td className="detailsHidden">
                      Python, Flask, Matplotlib, Seaborn, HTML, CSS
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">IoT Home Surveillance System</td>
                    <td className="detailsHidden">
                      Integrated with CCTV, this system detects motion in images
                      and sends captured pictures to the user, enhancing home
                      security.
                    </td>
                    <td className="detailsHidden">
                      IoT, Motion Detection, Image Processing
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">IoT Traffic Signal Optimization</td>
                    <td className="detailsHidden">
                      Simulated on Wokwi, the system gives red lights to empty
                      lanes and prioritizes emergency vehicles like ambulances
                      and fire brigades.
                    </td>
                    <td className="detailsHidden">
                      IoT, Embedded Systems, Simulation, Sensor-based Logic
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">Web Development Projects</td>
                    <td className="detailsHidden">
                      Developed multiple websites including: Cloud Kitchen
                      Website, Spotify Clone, and an E-Commerce site.
                    </td>
                    <td className="detailsHidden">
                      HTML, CSS, JavaScript, React.js, Node.js
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">
                      UniGigs – Android Event Booking App
                    </td>
                    <td className="detailsHidden">
                      A mobile app for discovering and booking college fests,
                      hackathons, concerts, sports events, etc., similar to
                      BookMyShow.
                    </td>
                    <td className="detailsHidden">
                      Android Development, Java/Kotlin, Firebase
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">
                      Social Media Follower Prediction
                    </td>
                    <td className="detailsHidden">
                      A machine learning model designed to predict social media
                      follower counts based on engagement metrics.
                    </td>
                    <td className="detailsHidden">
                      Python, Scikit-learn, Regression Models
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">Human Activity Recognition</td>
                    <td className="detailsHidden">
                      ML model that identifies human activities from uploaded
                      images such as sleeping, laughing, crying, etc.
                    </td>
                    <td className="detailsHidden">
                      Python, Computer Vision, CNN, Image Classification
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">Weed Detection in Paddy Crops</td>
                    <td className="detailsHidden">
                      Implemented YOLOv5, YOLOv8, and UNet models to segment
                      weeds in paddy fields for smart agriculture. Enhanced
                      detection precision for real-time usage.
                    </td>
                    <td className="detailsHidden">
                      Python, PyTorch, TensorFlow, YOLOv5, YOLOv8, UNet, OpenCV
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">Ethereum Fraud Detection</td>
                    <td className="detailsHidden">
                      Developed models using Random Forest, Logistic Regression,
                      and XGBoost to identify fraudulent Ethereum transactions.
                      Addressed class imbalance using SMOTE.
                    </td>
                    <td className="detailsHidden">
                      Python, Pandas, Scikit-learn, XGBoost, SMOTE
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">TrackAI – AI Playing Trackmania</td>
                    <td className="detailsHidden">
                      Designed a reinforcement learning agent using CNNs and IQN
                      to navigate the Trackmania racing game via image and
                      sensor input.
                    </td>
                    <td className="detailsHidden">
                      Python, TensorFlow, OpenAI Gym, CNN, IQN
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">E-Commerce Console Platform</td>
                    <td className="detailsHidden">
                      Built a Java-based console application simulating a
                      shopping management system.
                    </td>
                    <td className="detailsHidden">
                      Java, OOP, Console-based UI
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">Gamified Learning System</td>
                    <td className="detailsHidden">
                      A MERN stack platform where students earn points by
                      completing quizzes, tests, and learning modules. Designed
                      with principles of engagement psychology.
                    </td>
                    <td className="detailsHidden">
                      React.js, Node.js, MongoDB, Express.js, Figma, UI/UX
                      Design
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">Generative AI with StyleGAN</td>
                    <td className="detailsHidden">
                      Developed a model that synthesizes images using StyleGAN
                      by extracting features from multiple source images.
                      Included a visualization interface and evaluated output
                      quality.
                    </td>
                    <td className="detailsHidden">
                      Python, StyleGAN, GANs, Feature Extraction, GUI
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">
                      Jotto Problem (Ongoing Research)
                    </td>
                    <td className="detailsHidden">
                      A research-based word game solver utilizing scalable,
                      graph-theoretic algorithms and statistical distribution
                      analysis. Includes automated testing via Selenium.
                    </td>
                    <td className="detailsHidden">
                      Graph Theory, Python, Flask, Selenium, Probability
                    </td>
                  </tr>

                  <tr>
                    <td className="namePrj">
                      NLP-based E-Commerce Recommendation System
                    </td>
                    <td className="detailsHidden">
                      Built a context-aware product recommendation engine using
                      NLP techniques like DistilBERT and TF-IDF to understand
                      user intent via natural language queries.
                    </td>
                    <td className="detailsHidden">
                      Python, NLP, DistilBERT, TF-IDF, Semantic Search
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="compTwo exp" id="aboutp">
          <div className="type">
            <h2>Professional Experience & Leadership</h2>
            <p>
              A mix of professional roles, freelance projects, and leadership
              positions that enhanced my technical expertise and soft skills.
            </p>
          </div>

          <div className="desc">
            {/* Professional Experience */}
            <div className="container">
              <div className="boxTwo">
                <div className="detail">
                  <h3>R&D Intern – Benciti Technologies Pvt. Ltd.</h3>
                  <p>
                    • Tested and evaluated the company’s e-learning platform
                    Nudge (built in C++), identifying bugs and providing
                    structured feedback to the development team.
                    <br />
                    • Collaborated with QA and product teams to enhance
                    application accuracy and user experience before final
                    release.
                    <br />• Documented usability issues and improvement
                    suggestions, contributing to product refinement.
                  </p>
                </div>
                <p>Jun’24 – Jul’24</p>
              </div>

              <div className="boxTwo">
                <div className="detail">
                  <h3>Web Developer Intern – B.P. Alloys Limited</h3>
                  <p>
                    • Conducted on-site visits to gather requirements from
                    stakeholders.
                    <br />
                    • Designed, developed and hosted a responsive corporate
                    website using Figma and ReactJS.
                    <br />• Managed the full project lifecycle independently,
                    from concept to deployment.
                  </p>
                </div>
                <p>Jun’24 – Jul’24</p>
              </div>
            </div>

            <div className="container">
              <div className="boxTwo">
                <div className="detail">
                  <h3>Freelance Web Developer – SubSaFT</h3>
                  <p>
                    • Designed and developed the official website for a startup
                    using WordPress, HTML, CSS and Figma.
                    <br />• Integrated plugins, implemented SEO optimizations,
                    and created documentation for client handover.
                  </p>
                </div>
                <p>Jul’24 – Aug’24</p>
              </div>
            </div>

            {/* Leadership & Positions of Responsibility */}
            <div className="container">
              <div className="boxTwo">
                <div className="detail">
                  <h3>Conference Chair – STELMAR 2025</h3>
                  <p>
                    • Led BMU’s inaugural multidisciplinary research conference
                    with 33+ delegates, 20+ jury members, keynote speakers,
                    deans, and professors.
                    <br />
                    • Created and managed the conference budget, securing
                    approvals and ensuring 100% plan execution.
                    <br />
                    • Partnered with Springer Nature’s Cureus Journal for
                    academic collaboration and publications.
                    <br />• Directed logistics, scheduling, stakeholder
                    coordination, and on-site execution.
                  </p>
                </div>
                <p>Feb’25 – Apr’25</p>
              </div>

              <div className="boxTwo">
                <div className="detail">
                  <h3>Web Master – BMU ACM Student Chapter</h3>
                  <p>
                    • Designed, deployed, and maintained the ACM Student Chapter
                    website.
                    <br />
                    • Led tech team to deliver updates for 15+ major events.
                    <br />• Organized workshops, mentored juniors, and directed
                    the flagship 3-day annual event.
                  </p>
                </div>
                <p>Aug’23 – Apr’25</p>
              </div>
            </div>

            <div className="container">
              <div className="boxTwo">
                <div className="detail">
                  <h3>Technical Lead – HackBMU</h3>
                  <p>
                    • Led technical team for the flagship hackathon with 150+
                    developers nationwide.
                    <br />
                    • Oversaw website development, maintenance, and participant
                    onboarding.
                    <br />• Managed databases for check-ins and submissions,
                    ensuring smooth event execution.
                  </p>
                </div>
                <p>Feb’24 – Apr’24</p>
              </div>
            </div>
          </div>
        </div>
        {/* Achievements Section */}
        <div className="compTwo achievements">
          <div className="type">
            <h2>Achievements</h2>
          </div>
          <div className="desc">
            <div className="container">
              <div className="boxTwo">
                <div className="detail">
                  <h3>Best Paper Award – STELMAR 2025</h3>
                  <p>
                    • Designed a scalable solver supporting 3–8 letter words
                    (including duplicates) using graph-based feedback pruning,
                    enhancing efficiency in combinatorial problem solving.
                    <br />
                    • Validated solver performance through extensive
                    Selenium-based automated testing, ensuring reliability
                    across varied datasets.
                    <br />• Conducted statistical distribution analysis,
                    identifying strong alignment with Beta, Exponential, and
                    Exponpow models for predictive modeling insights.
                  </p>
                </div>
                <p>Apr’25</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="compTwo skills" id="skillsp">
          <div className="type">
            <h2>Skills</h2>
          </div>
          <div className="desc skills-list">
            <div className="skill-category">
              <h3>Technical Skills</h3>
              <p>
                <strong>Proficient:</strong> Python, SQL, Git/GitHub, Excel,
                Word, PowerPoint, Figma, React.js, MySQL, HTML, CSS, Canva, Data
                Visualization
                <br />
                <strong>Familiar:</strong> MERN Stack, Power BI, Tableau,
                Alteryx, Feature Engineering, SMOTE, AWS, DSA, Java, C++, R
              </p>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <p>
                Communication, Teamwork, Leadership, Problem-Solving, Public
                Speaking, Event Management, Analytical Thinking, Research &
                Analysis
              </p>
            </div>
          </div>
        </div>

        <div className="compTwo contact">
          <div className="type">
            <h2>Contacts</h2>
          </div>
          <div className="desc">
            <div className="container">
              <div className="boxthree">
                <p>
                  feel&nbsp;free&nbsp;to&nbsp;contact&nbsp;at{" "}
                  <a href="mailto:prakharsrivastava586@gmail.com">
                    prakharsrivastava2857@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
