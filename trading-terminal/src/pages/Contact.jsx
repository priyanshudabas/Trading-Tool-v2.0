import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="section">
        <div class="container">
          <div class="columns">
            <article class="column" style={{ height: "680px" }}>
              <h2 class="title">Contact Info</h2>
              <h4 class="title is-4">Address</h4>
              <address class="block">
                Dummy address 4826 Tea Berry Lane Bowler, Wisconsin - 54416
              </address>
              <h4 class="title is-4">Contact</h4>
              <p>1234567890</p>
              <p>abc@email.com</p>
            </article>
            <article class="column" style={{ height: "680px" }}>
              <h2 class="title">How can we help?</h2>
              <h3 class="subtitle">Message Us</h3>
              <div class="field">
                <label class="label is-medium">
                  First Name<span>*</span>
                </label>
                <div class="control">
                  <input
                    class="input is-medium"
                    type="text"
                    placeholder="Alex"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label is-medium">
                  Last Name<span>*</span>
                </label>
                <div class="control">
                  <input
                    class="input is-medium"
                    type="text"
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label is-medium">
                  Email<span>*</span>
                </label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input is-medium"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label is-medium">
                  Message<span>*</span>
                </label>
                <div class="control">
                  <textarea
                    class="textarea is-medium"
                    placeholder="Your message..."
                    required
                    style={{ resize: "none", overflow: "auto" }}
                  ></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button class="button is-primary is-outlined is-medium">
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
