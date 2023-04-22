import React from "react";
import { useEffect } from "react";
import axios from "axios";
import crypto from "crypto"
import querystring from "querystring"

const Connection = () => {
  useEffect(() => {
    const apiKey = "Rg+Hl5MHOrVMORtuVP44RSJmAvX0SAES92fOThdsyDakvca+ZK2CnnzB";
    const apiSecret =
      "M5PGFc1yf1RIHDBvvfWZWGm608bmedcmC6J0Qffmx9F7PHrp18sU7Bx1AQpbJc9xf5wShY/Wh1AfQlWhLmjpEg==";

    const nonce = new Date().getTime() * 1000;

    const requestData = {
      pair: "BTC/USD",
      type: "buy",
      ordertype: "limit",
      price: "5000",
      volume: "0.01",
      nonce: nonce,
    };

    const message = querystring.stringify(requestData);

    const signature = crypto
      .createHmac("sha256", Buffer.from(apiSecret, "base64"))
      .update("https://api.kraken.com/0/private/AddOrder" + message)
      .digest("base64");

    axios({
      method: "post",
      url: "https://api.kraken.com/0/private/AddOrder",
      headers: {
        "API-Key": apiKey,
        "API-Sign": signature,
      },
      data: message,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="container p-6">
        <div className="row">
          <div className="cl-md-4 offset-md-4">
            <div className="card p-6" style={{ height: "55vh" }}>
              <div className="card-body">
                <h2
                  className="text-center"
                  style={{ fontSize: "x-large", fontWeight: "bolder" }}
                >
                  Connect an Exchange
                </h2>
                <br></br>
                <form>
                  <div className="form-group">
                    <label
                      for="exampleInputEmail1"
                      style={{ fontWeight: "bold", paddingTop: "5%" }}
                    >
                      API Key:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Api Key"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      for="exampleInputPassword1"
                      style={{ fontWeight: "bold" }}
                    >
                      API Secret:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Api Secret"
                      required="required"
                      name="password"
                    />
                  </div>

                  <div className="text-center mt-2">
                    <button type="button" className="button is-primary">
                      Connect Kraken
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
