import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container p-6">
        <div className="row">
          <div className="cl-md-4 offset-md-4">
            <div className="card p-6" style={{ height: "60vh" }}>
              <div className="card-body">
                <h2
                  className="text-center"
                  style={{ fontSize: "x-large", fontWeight: "bolder" }}
                >
                  Login Page
                </h2>
                <form action="login" method="post">
                  <div className="form-group">
                    <label
                      for="exampleInputEmail1"
                      style={{ fontWeight: "bold", paddingTop: "5%" }}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required="required"
                      name="email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <div className="form-group">
                    <label
                      for="exampleInputPassword1"
                      style={{ fontWeight: "bold" }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required="required"
                      name="password"
                    />
                  </div>

                  <div className="text-center mt-2">
                    <button type="submit" className="button is-primary">
                      Login
                    </button>
                    <div className="text-center mt-2">
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
