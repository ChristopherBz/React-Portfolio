import React from "react";

//import stock
import stock1 from "../img/Moviemagic.JPG";
import stock2 from "../img/weatherdash.JPG";
import stock3 from "../img/codeQuiz2.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Please view all my recent projects here.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Movie Matcher</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap ReactJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                              href="https://fonyx.github.io/actorLookup/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="w-ctegory">
                                Click here for deployed application
                              </span>
                            </a> <br></br>
                <a
                              href="https://github.com/Fonyx/actorLookup"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="w-ctegory">
                                Click here for repo
                              </span>
                            </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock2} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Weather Dashboard</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                              href="https://christopherbz.github.io/Weather-Dashboard/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="w-ctegory">
                                Click here for deployed application
                              </span>
                            </a> <br></br>
                <a
                              href="https://github.com/ChristopherBz/Weather-Dashboard"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="w-ctegory">
                                Click here for repo
                              </span>
                            </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Project 3</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                              href="https://github.com/ChristopherBz/CodingQuiz"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="w-ctegory">
                                Click here for deployed application
                              </span>
                            </a> <br></br>
                <a
                              href="https://christopherbz.github.io/CodingQuiz/index.html"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="w-ctegory">
                                Click here for repo
                              </span>
                            </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
