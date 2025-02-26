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
                <p>AI & Data Science Enthusiast | Tech Innovator</p>
                <i className="fa-solid fa-user-secret userSecret"></i>
              </div>
            </div>
            <div className="profile">
              <img srcSet={assets.photo} alt="PRAKHAR KUMAR SRIVASTAVA" />
            </div>
            <div className="reach">
              <a
                href="https://drive.google.com/file/d/1R4yZkSDFqMOap2fdkq9GrxBSeH6Byt6e/view?usp=sharing"
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
              Innovative Tech Solutions <br /> & Full-Stack Development
            </h1>
            <h3>
              Building intelligent web apps and AI-powered solutions, <br />I
              merge design, data, and technology to drive impact and innovation.
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
              <a href="#projects">Skills</a>
              <a href="#projects">About</a>
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
                <tr>
                  <td className="namePrj">
                    Indoor Navigation System{" "}
                    <i className="fa-solid fa-caret-down"></i>
                  </td>
                  <td className="detailsHidden">
                    An app-based navigation system tailored for our college
                    campus to assist students in locating specific faculty
                    offices within a complex of 89 cabins on a single floor.
                  </td>
                  <td className="detailsHidden">Group Project</td>
                  <td className="detailsHidden">2022</td>
                </tr>
                <tr>
                  <td className="namePrj">SoulSpace</td>
                  <td>
                    A web-based platform providing a secure and anonymous
                    environment for individuals dealing with mental health
                    issues to connect with support groups or therapists.
                  </td>
                  <td>Selected in Smart India Hackathon</td>
                  <td>2023</td>
                </tr>
                <tr>
                  <td className="namePrj">E-Commerce Platform</td>
                  <td>A Java console-based shopping management system.</td>
                  <td>Academic Project</td>
                  <td>2023</td>
                </tr>
                <tr>
                  <td className="namePrj">Statflow</td>
                  <td>A web-based platform for data analysis.</td>
                  <td>Project</td>
                  <td>2023</td>
                </tr>
                <tr>
                  <td className="namePrj">Spotify Clone</td>
                  <td>A Spotify web clone project.</td>
                  <td>Project</td>
                  <td>2023</td>
                </tr>
                <tr>
                  <td className="namePrj">Unigigs</td>
                  <td>
                    An Android application for booking and showcasing college
                    fests, events, hackathons, concerts, and sports.
                  </td>
                  <td>Project</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="namePrj">Human Activity Recognition</td>
                  <td>
                    A machine learning project that recognizes human activities
                    like sleeping, laughing, or crying from uploaded images.
                  </td>
                  <td>Group Project</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="namePrj">Social Media Follower Prediction</td>
                  <td>
                    A machine learning project for predicting social media
                    followers.
                  </td>
                  <td>Project</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="namePrj">Smoke Detector</td>
                  <td>
                    An IoT project that helps smokers quit by tracking the
                    number of puffs taken via a wearable device.
                  </td>
                  <td>IoT Project</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="namePrj">TRACKAI</td>
                  <td>Trained AI to play the game Trackmania.</td>
                  <td>AI Project</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="namePrj">Home Surveillance System</td>
                  <td>
                    An IoT-based home surveillance system that detects activity
                    in a camera feed and updates users via text messages with
                    images of detected activity.
                  </td>
                  <td>IoT Project</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="namePrj">Weed Detection in Paddy Crops</td>
                  <td>
                    A digital image processing project using YOLO models to
                    detect weeds in paddy crops.
                  </td>
                  <td>AI Project</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="namePrj">Fraud Detection in Ethereum</td>
                  <td>
                    A fraud detection system for Ethereum transactions using
                    machine learning.
                  </td>
                  <td>ML Project</td>
                  <td>2024</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="compTwo exp">
          <div className="type">
            <h2>Experiences</h2>
            <p>
              I have experience in various filled which have helped build by
              tech & soft skills.
            </p>
          </div>
          <div className="desc">
            <div className="container">
              <div className="boxTwo">
                <div className="detail">
                  <h3>LEAD&nbsp;DEVELOPER</h3>
                  <p>
                    Developed official website of B.P. Alloys Limited from
                    scratch. An internship which helped me grow.
                  </p>
                </div>
                <p>30&nbsp;days</p>
              </div>
              <div className="boxTwo">
                <div className="detail">
                  <h3>WEB&nbsp;MASTER</h3>
                  <p>
                    I am serving as the web master of ACMBMU Student Chapter,
                    which is officially licensed by acm. During my span I have
                    developed websites for ACMBMU.
                  </p>
                </div>
                <p>2&nbsp;years</p>
              </div>
            </div>
            <div className="container">
              <div className="boxTwo">
                <div className="detail">
                  <h3>TECHNICAL&nbsp;LEAD</h3>
                  <p>
                    Lead the technical team of HACKBMU, a hackathon organised by
                    ACMBMU.
                  </p>
                </div>
                <p>2&nbsp;Months</p>
              </div>
              <div className="boxTwo">
                <div className="detail">
                  <h3>LEAD&nbsp;DEVELOPER</h3>
                  <p>
                    Developed website for Subsaft, a startup in middle east. A
                    freelance work that helped me gain new insights.
                  </p>
                </div>
                <p>10&nbsp;days</p>
              </div>
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
