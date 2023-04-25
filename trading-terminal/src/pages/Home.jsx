import React from "react";
import myImage from "../assets/investor1.png"

const Home = () => {
  return (
    // <script>
    //     $(function () {
    //         $("#nav-placeholder").load("/pages/nav.html");
    //     });
    // </script>

    <div className="container">
      <div className="content">
        <div className="text">
          <h1>
            helps traders win regardless of market conditions <br></br>{" "}
          </h1>
          <div class="buttons">
              <button class="button is-primary is-medium">Get Started</button>
          </div>
          <p>
            Trading Tool helps users grow their crypto investments using a
            feature-rich terminal and proven automated bot that operates on a
            major exchange.
          </p>
        </div>
        <div className="container111">
          <img src={myImage} alt="investing"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
