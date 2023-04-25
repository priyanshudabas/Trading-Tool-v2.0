import React from "react";
import priyanshu from "../assets/priyanshu.png"
import krishna from "../assets/krishna.png"
import shivam from "../assets/shivam.png"
import goyal from "../assets/goyal.png"
import goyal2 from"../assets/goyal2.png"



const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <br></br>
        <h2 className="title" >About Us</h2>
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
                    <p className="title is-4">Shivam Jain  </p>
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
                <br></br>
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
                      <img src={goyal2} />
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
        <br></br>
        <h2 className="title" >Frequently Asked Questions</h2>
        <label for="touch1"><span>What is a Trading Tool?</span></label>               
  <input type="checkbox" id="touch1"/> 

  <ul class="slide1">
    <li><p>A trading tool, as the name suggests, is anything that allows a trader to invest effectively. Trading tools can include physical items with which one would need to 
      operate in the financial markets, such as a computer and Internet access.</p></li> 

  </ul>


  <label for="touch2"><span>What is Futures?</span></label>               
  <input type="checkbox" id="touch2"/> 

  <ul class="slide2">
    <li><p>Futures are Derivatives contracts in which both buyers and sellers have the obligation to buy/sell the
       underlying asset at a predetermined price respectively. A Futures Contract is an agreement between the buyer
        and the seller to buy or sell a specified quantity of the underlying asset at a future date at a price agreed 
        upon between them. Hence, at the expiration date, the buyer must buy and the seller must sell the agreed quantity
         of the asset at the set price regardless of the current price of the asset. Further, these contracts are marked to
          market every day. In other words, the contract value is changed every day until the expiration date. 
          They are traded on exchanges just like stocks.
</p></li> 

  </ul>
      </div>

    </div>
  );
};

export default AboutUs;
