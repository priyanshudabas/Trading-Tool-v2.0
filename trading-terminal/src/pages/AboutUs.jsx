import React from "react";
import priyanshu from "../assets/priyanshu.png"
import krishna from "../assets/krishna.png"
import shivam from "../assets/shivam.png"
import goyal from "../assets/goyal.png"



const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={shivam} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Shivam Jain</p>
                    <p className="subtitle is-6">
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/shivam-jain-6004a822a/"
                        target="_blank"
                      >
                        @shivamjain
                      </a>
                    </p>
                  </div>
                </div>
                <div className="content">
                  Student At Amity University
                  <br></br>
                  Intern at @globallogic
                  <br></br>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={krishna} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Krishna Aggarwal</p>
                    <p className="subtitle is-6">
                      <a href="" target="_blank">
                        @krishna
                      </a>
                    </p>
                  </div>
                </div>

                <div className="content">
                  Student At Amity University
                  <br></br>
                  Open for Work
                  <br></br>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={goyal} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Shubham Goyal</p>
                    <p className="subtitle is-6">
                      <a href="" target="_blank">
                        @shubham
                      </a>
                    </p>
                  </div>
                </div>

                <div className="content">
                  Student At Amity University
                  <br></br>
                  Upcoming SDE @hexaview
                  <br></br>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={priyanshu} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Priyanhu Dabas</p>
                    <p className="subtitle is-6">
                      <a href="" target="_blank">
                        @priyanshu
                      </a>
                    </p>
                  </div>
                </div>

                <div className="content">
                  Student At Amity University
                  <br></br>
                  Intern at @globallogic
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
