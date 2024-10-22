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
              src={require("../../assets/images/herobg.webm")}
              type="video/mp4"
            />
          </video>
          <div className="nav">
            <div className="name">
              <p>Prakhar Srivastava</p>
              <div className="nameP">
                <p>Web designer and developer</p>
                <i className="fa-solid fa-user-secret userSecret"></i>
              </div>
            </div>
            <div className="profile">
              <img srcSet={assets.photo} alt="PRAKHAR KUMAR SRIVASTAVA" />
            </div>
            <div className="reach">
              <a
                href="https://drive.google.com/file/d/1pcHsdDQk9KdRNR1mdvIneaVWx8vUwOF1/view?usp=sharing"
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
              Innovative Design & <br />
              Web Development Expertise
            </h1>
            <h3>
              Crafting intuitive websites and apps, I enhance user experience,
              <br /> drive key metrics, and enable businesses to excel
              digitally.
            </h3>
          </div>
          <div className="work">
            <p>Corporate Web Development</p>
            <p>App Development</p>
            <p>Complex System Design</p>
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
                      src={require("../../assets/images/prjOne.webm")}
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
                  <p className="tag">FULL-STACK</p>
                  <video autoPlay muted loop id="backgroundVideoTwo">
                    <source
                      src={require("../../assets/images/prjTwo.webm")}
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
                  <p className="tag">FULL-STACK</p>
                  <video autoPlay muted loop id="backgroundVideoTwo">
                    <source
                      src={require("../../assets/images/prjsub.webm")}
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
                  <p className="tag">FULL-STACK</p>
                  <video autoPlay muted loop id="backgroundVideoTwo">
                    <source
                      src={require("../../assets/images/prjFour.webm")}
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
                    Indoor Navigation System
                    <i className="fa-solid fa-caret-down"></i>
                  </td>
                  <td className="detailsHidden">
                    An app based navigation tailored for our college campus to
                    assist students in locating specific faculty member’s office
                    within a complex consisting of 89 cabins on a single floor.
                  </td>
                  <td className="detailsHidden">Group Project</td>
                  <td className="detailsHidden">2022</td>
                </tr>
                <tr>
                  <td className="namePrj">SoulSpace</td>
                  <td>
                    A web-based platform that provides a secure and anonymous
                    environment for individuals dealing with mental health
                    issues to connect with support groups or engage in
                    confidential interactions with licensed therapists.
                  </td>
                  <td>Selected in Smart India Hackathon</td>
                  <td>2023</td>
                </tr>
                <tr>
                  <td className="namePrj">E-Commerce Platform</td>
                  <td>A java console based shopping management System.</td>
                  <td>Academic Project</td>
                  <td>2023</td>
                </tr>
                <tr>
                  <td className="namePrj">Statflow</td>
                  <td>A web based platform for data analysis.</td>
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
                    An android application for booking and showcasing college
                    fests, events, hackathons, concerts and sports.
                  </td>
                  <td>Project</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="namePrj">Human Activity Recognition</td>
                  <td>
                    A machine learning project for recognizing human activities.
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
