import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import Twitter1 from "../assets/img/Twitter1.png"
import Twitter2 from "../assets/img/Twitter2.png"
import Twitter3 from "../assets/img/Twitter3.png"
import Twitter4 from "../assets/img/Twitter4.png"


import GYM1 from "../assets/img/GYM1.png";
import GYM2 from "../assets/img/GYM2.png";
import GYM3 from "../assets/img/GYM3.png";
import GYM4 from "../assets/img/GYM4.png";
import GYM5 from "../assets/img/GYM5.png";
import GYM6 from "../assets/img/GYM6.png";




import Illustration from "../assets/img/try.png"
import speechBubble from "../assets/img/image.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { ExternalLink } from "react-external-link";

import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "../../node_modules/react-tooltip/dist/react-tooltip.css"

import Railway1 from "../assets/img/Railway1.png"
import Railway2 from "../assets/img/Railway2.png"
import Railway3 from "../assets/img/Railway3.png"
import Railway4 from "../assets/img/Railway4.png"
import Railway5 from "../assets/img/Railway5.png"
import Railway6 from "../assets/img/Railway6.png"
import Railway7 from "../assets/img/Railway7.png"





export const Projects = () => {

  // const projects1 = [
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     img1: airbnb,
  //   },

  // ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsArrowRight className=" text-white whiteColor z-50" />,
    prevArrow: <BsArrowLeft className=" text-white whiteColor z-50" />,

  };


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>

                  <div className="leverageHold">
                    <p className=" capitalize o">"creating leverage should be the first priority of every Homosapien. that leverage can be anything leverage of time, leverage of money, leverage of skills, or even leverage of your team. As it is the same leverage that can put you way ahead of your competitors" - A lesson from my trading journey.</p>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item  className="cursor-pointer">
                        <Nav.Link eventKey="first">Twitter</Nav.Link>
                      </Nav.Item>
                      <Nav.Item  className="cursor-pointer">
                        <Nav.Link eventKey="second">GYM Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item  className="cursor-pointer">
                        <Nav.Link eventKey="third">Railway Live Status</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>

                          <div>
                            <Slider {...settings}>
                              <img alt="img" src={Twitter1} className=" rounded-xl mb-8" />
                              <img alt="img" src={Twitter2} className=" rounded-xl mb-8" />
                              <img alt="img" src={Twitter3} className=" rounded-xl mb-8" />
                              <img alt="img" src={Twitter4} className=" rounded-xl mb-8" />
                         
                            </Slider>


                            <div className="flex justify-center ccc">

                              <img alt="img" src={Illustration} className="w20rem ml-10" />

                              <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">

                                  "I developed a Twitter clone UI that replicates the platform's core features, including tweet and comment creation and liking.<ExternalLink href="https://github.com/bipul8282" className=" uppercase text-yellow-400 hover:text-yellow-500"> See more on my github </ExternalLink> "

                                </p>
                              </div>


                            </div>


                            <div className="flex relative speechHold">
                              <img alt="img" src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github"
                              place="bottom"
                              content="github" />

                            <ReactTooltip
                              anchorId="live"
                              place="bottom"
                              content="live project" />

                            <div className="flex gap-6 relative bubbleContentHold">
                              <ExternalLink href="https://github.com/bipul8282/TWITTER-CLONE">
                                <BsGithub className=" inline-block white text-3xl" id="github" />
                              </ExternalLink>

                              <ExternalLink href="https://twitter-clone-gamma-two.vercel.app/">
                                <BsGlobe className=" white text-3xl inline-block" id="live" />
                              </ExternalLink>
                            </div>

                          </div>
                        </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="second">
                        <Row>

                          <div>
                            <Slider {...settings}>
                              <img alt="img" src={GYM1} className=" rounded-xl mb-8" />
                              <img alt="img" src={GYM2} className=" rounded-xl mb-8" />
                              <img alt="img" src={GYM3} className=" rounded-xl mb-8" />
                              <img alt="img" src={GYM4} className=" rounded-xl mb-8" />
                              <img alt="img" src={GYM5} className=" rounded-xl mb-8" />
                              <img alt="img" src={GYM6} className=" rounded-xl mb-8" />
                             



                            </Slider>


                            <div className="flex justify-center ccc">

                              <img  alt="img" src={Illustration} className="w20rem ml-10" />

                              <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">
                                  "This gym website built with React, Recoil, and React Router Dom allows users to register, login, and purchase subscriptions. <ExternalLink href="https://github.com/bipul8282" className="text-yellow-400 hover:text-yellow-500 uppercase"> See more on my github </ExternalLink>"

                                </p>
                              </div>


                            </div>


                            <div className="flex relative speechHold">
                              <img alt="img" src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github2"
                              place="bottom"
                              content="github" />

                            <ReactTooltip
                              anchorId="live2"
                              place="bottom"
                              content="live project" />

                            <div className="flex gap-6 relative bubbleContentHold">
                              <ExternalLink href="https://github.com/bipul8282/GYM-WEBSITE">
                                <BsGithub className=" inline-block white text-3xl" id="github2" />
                              </ExternalLink>

                              <ExternalLink href="https://gym-website-peach.vercel.app/">
                                <BsGlobe className=" white text-3xl inline-block" id="live2" />
                              </ExternalLink>
                            </div>

                          </div>
                        </Row>



                      </Tab.Pane>
                      <Tab.Pane eventKey="third">

                        <Row>
                          <div>
                            <Slider {...settings}>
                              <img alt="img" src={Railway1} className=" rounded-xl mb-8" />
                              <img alt="img" src={Railway2} className=" rounded-xl mb-8" />
                              <img alt="img" src={Railway3} className=" rounded-xl mb-8" />
                              <img alt="img" src={Railway4} className=" rounded-xl mb-8" />
                              <img alt="img" src={Railway5} className=" rounded-xl mb-8" />
                              <img alt="img" src={Railway6} className=" rounded-xl mb-8" />
                              <img alt="img" src={Railway7} className=" rounded-xl mb-8" />
                             
                            </Slider>


                            <div className="flex justify-center ccc">

                              <img alt="img" src={Illustration} className="w20rem ml-10" />

                              <div className=" airbnbIntroHold">
                                <p className=" capitalize airbnbIntro">
                                  "This project name is RAILWAY LIVE STATUS, you can register your self and check the
live status of a train you wish too. In this project  <ExternalLink href="https://github.com/bipul8282" className="text-yellow-400 hover:text-yellow-500 uppercase"> See more on my github </ExternalLink>"

                                </p>
                              </div>


                            </div>


                            <div className="flex relative speechHold">
                              <img alt="img" src={speechBubble} className="bubble" />
                            </div>

                            <ReactTooltip
                              anchorId="github3"
                              place="bottom"
                              content="github" />

                            <ReactTooltip
                              anchorId="live3"
                              place="bottom"
                              content="live project" />

                            <div className="flex gap-6 relative bubbleContentHold">

                              <ExternalLink href="https://github.com/bipul8282/railwaylivestatus">
                                <BsGithub className=" inline-block white text-3xl" id="github3" />
                              </ExternalLink>

                              <ExternalLink href="https://spectacular-kitsune-6af37f.netlify.app/">
                                <BsGlobe className=" white text-3xl inline-block" id="live3" />
                              </ExternalLink>
                            </div>

                          </div>
                        </Row>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>

          </Col>
        </Row>
      </Container>
      <img alt="img" className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

