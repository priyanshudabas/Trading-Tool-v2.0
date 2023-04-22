import React from 'react'
const Connection = () => {
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
                <form action="login" method="post">
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
                    <button type="submit" className="button is-primary">
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
  )
}

export default Connection