import React from "react";
import manualTrading from "../assets/manualTrading.png"
import automatedTrading from "../assets/automatedTrading.png"
import strategyAlerts from "../assets/strategyAlerts.png"

const Features = () => {
  return (
    <div>
      <div className="container m-6">
        <h1 className="title is-1">Platform Features </h1>
      </div>
      <div className="container"> </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column">
          <p className="content is-large">
            <b>Manual Trading</b>
          </p>
          <p className="content is-medium">
            Manually entering trades as per personal techincal analysis and
            executing them.
          </p>
          <figure>
            <img src={manualTrading} className="is-rounded" alt="manual trading"/>
          </figure>
        </div>
        <div className="column is -1"></div>
        <div className="column is-centered">
          <p className="content is-large">
            <b>Automated Trading</b>
          </p>
          <p className="content is-medium">
            Sending trades automatically to the exchange as the strategy
            generates signals.
          </p>
          <figure>
            <img src={automatedTrading} alt="automatecd trading"/>
          </figure>
        </div>
        <div className="column is -1"></div>
        <div className="column is-centered">
          <p className="content is-large">
            <b>Strategy Alerts</b>
          </p>
          <p className="content is-medium">
            Alert the user as and when the strategy generates any form of
            signal.
          </p>
          <figure>
            <img src={strategyAlerts} alt="strategy alerts"/>
          </figure>
        </div>
        <div className="column is -1"></div>
      </div>
    </div>
  );
};

export default Features;
