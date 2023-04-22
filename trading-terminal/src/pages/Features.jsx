import React from "react";
import manualTrading from "../assets/manualTrading.png"
import automatedTrading from "../assets/automatedTrading.png"
import strategyAlerts from "../assets/strategyAlerts.png"

const Features = () => {
  return (
    <div>
      <div className="container m-6">
        <h1 class="title is-1">Platform Features </h1>
      </div>
      <div class="container"> </div>
      <div class="columns">
        <div class="column is-1"></div>
        <div class="column">
          <p class="content is-large">
            <b>Manual Trading</b>
          </p>
          <p class="content is-medium">
            Manually entering trades as per personal techincal analysis and
            executing them.
          </p>
          <figure>
            <img src={manualTrading} class="is-rounded" />
          </figure>
        </div>
        <div class="column is -1"></div>
        <div class="column is-centered">
          <p class="content is-large">
            <b>Automated Trading</b>
          </p>
          <p class="content is-medium">
            Sending trades automatically to the exchange as the strategy
            generates signals.
          </p>
          <figure>
            <img src={automatedTrading} />
          </figure>
        </div>
        <div class="column is -1"></div>
        <div class="column is-centered">
          <p class="content is-large">
            <b>Strategy Alerts</b>
          </p>
          <p class="content is-medium">
            Alert the user as and when the strategy generates any form of
            signal.
          </p>
          <figure>
            <img src={strategyAlerts} />
          </figure>
        </div>
        <div class="column is -1"></div>
      </div>
    </div>
  );
};

export default Features;
