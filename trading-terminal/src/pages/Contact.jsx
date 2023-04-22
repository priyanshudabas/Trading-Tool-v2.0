import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <article className="column" style={{ height: "680px" }}>
              <h2 className="title">Contact Info</h2>
              <h4 className="title is-4">Address</h4>
              <address className="block">
                Dummy address 4826 Tea Berry Lane Bowler, Wisconsin - 54416
              </address>
              <h4 className="title is-4">Contact</h4>
              <p>1234567890</p>
              <p>abc@email.com</p>
            </article>
            <article className="column" style={{ height: "680px" }}>
              <h2 className="title">How can we help?</h2>
              <h3 className="subtitle">Message Us</h3>
              <div className="field">
                <label className="label is-medium">
                  First Name<span>*</span>
                </label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Alex"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label is-medium">
                  Last Name<span>*</span>
                </label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label is-medium">
                  Email<span>*</span>
                </label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-medium"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label is-medium">
                  Message<span>*</span>
                </label>
                <div className="control">
                  <textarea
                    className="textarea is-medium"
                    placeholder="Your message..."
                    required
                    style={{ resize: "none", overflow: "auto" }}
                  ></textarea>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-primary is-outlined is-medium">
                    Submit
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
