import React from "react";
import myImage from "../assets/investor1.png"

const Home = () => {
  return (
    // <script>
    //     $(function () {
    //         $("#nav-placeholder").load("/pages/nav.html");
    //     });
    // </script>

    <div class="container">
      <div class="content">
        <div class="text">
          <h1>
            helps traders win regardlessss of market conditions <br></br>{" "}
          </h1>
          <p>
            Trading Tool helps users grow their crypto investments using a
            feature-rich terminal and proven automated bot that operates on a
            major exchange.
          </p>
        </div>
        <div class="container111">
          <img src={myImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
