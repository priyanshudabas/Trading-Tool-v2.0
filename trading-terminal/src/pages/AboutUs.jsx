import React from "react";
import priyanshu from "../assets/priyanshu.png"
import krishna from "../assets/krishna.png"
import shivam from "../assets/shivam.png"
import goyal from "../assets/goyal.png"



const AboutUs = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={shivam} />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Shivam Jain</p>
                    <p class="subtitle is-6">
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
                <div class="content">
                  Student At Amity University
                  <br></br>
                  Intern at @globallogic
                  <br></br>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={krishna} />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Krishna Aggarwal</p>
                    <p class="subtitle is-6">
                      <a href="" target="_blank">
                        @krishna
                      </a>
                    </p>
                  </div>
                </div>

                <div class="content">
                  Student At Amity University
                  <br></br>
                  Open for Work
                  <br></br>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={goyal} />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Shubham Goyal</p>
                    <p class="subtitle is-6">
                      <a href="" target="_blank">
                        @shubham
                      </a>
                    </p>
                  </div>
                </div>

                <div class="content">
                  Student At Amity University
                  <br></br>
                  Upcoming SDE @hexaview
                  <br></br>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src={priyanshu} />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Priyanhu Dabas</p>
                    <p class="subtitle is-6">
                      <a href="" target="_blank">
                        @priyanshu
                      </a>
                    </p>
                  </div>
                </div>

                <div class="content">
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
