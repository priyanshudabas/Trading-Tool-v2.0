import React from 'react';

const Login = () => {
  return (
    <div>
      <div className="container center-container mt-6">
        <div className="card card1 p-6">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <label class="label">Email</label>
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <label class="label">Password</label>
              <input class="input" type="password" placeholder="Password" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success mt-2">Login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
