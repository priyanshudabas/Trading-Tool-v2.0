import React from "react";

const Login = () => {
  return (
    <div>
      <div class="container p-5">
        <div class="row">
          <div class="cl-md-4 offset-md-4">
            <div class="card" style={{ height: "100%" }}>
              <div class="card-body">
                <h2
                  class="text-center"
                  style={{ fontSize: "x-large", fontWeight: "bolder" }}
                >
                  Login Page
                </h2>
                <form action="login" method="post">
                  <div class="form-group">
                    <label
                      for="exampleInputEmail1"
                      style={{ fontWeight: "bold", paddingTop: "5%" }}
                    >
                      Email address
                    </label>{" "}
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required="required"
                      name="email"
                    />{" "}
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <div class="form-group">
                    <label
                      for="exampleInputPassword1"
                      style={{ fontWeight: "bold" }}
                    >
                      Password
                    </label>{" "}
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required="required"
                      name="password"
                    />
                  </div>

                  <div class="text-center mt-2">
                    <button type="submit" class="button is-primary">
                      Login
                    </button>
                    <div class="text-center mt-2">
                      <a href="register.jsp">Create Account</a>
                    </div>
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

export default Login;
