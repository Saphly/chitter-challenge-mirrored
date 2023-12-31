import PropTypes from "prop-types";
import { useState } from "react";

// TODO: onSubmit clear states and close modal

const LoginRegisterModal = ({ loginHandler, registerHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const onLoginClick = (event) => {
    event.preventDefault();
    loginHandler({ email, password });
    setEmail("");
    setPassword("");
  };

  const onRegisterClick = (event) => {
    event.preventDefault();
    registerHandler({ email, password, name, username });
    setEmail("");
    setPassword("");
    setName("");
    setUsername("");
  };

  const loginForm = (
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          aria-label="emailLoginInput"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          aria-label="passwordLoginInput"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button
        className="d-block mx-auto p-2 btn btn-primary"
        aria-label="modalLoginFormButton"
        disabled={email.length === 0 || password.length === 0}
        onClick={(event) => {
          onLoginClick(event);
        }}
      >
        Login
      </button>
    </form>
  );

  const registerForm = (
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="registerEmail"
          aria-label="emailRegisterInput"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="registerPassword"
          aria-label="passwordRegisterInput"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="registerName"
          aria-label="nameRegisterInput"
          placeholder="Name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Username</label>
        <div className="input-group">
          <span className="input-group-text" id="registerUsername">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="usernameRegisterInput"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
      </div>

      <button
        className="d-block mx-auto p-2 btn btn-primary"
        aria-label="modalRegisterFormButton"
        disabled={
          email.length === 0 ||
          password.length === 0 ||
          name.length === 0 ||
          username.length === 0
        }
        onClick={(event) => onRegisterClick(event)}
      >
        Register
      </button>
    </form>
  );

  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        aria-hidden="true"
        aria-labelledby="loginModalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="loginModalLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{loginForm}</div>
            <div className="modal-footer border-0 justify-content-center fs-6">
              New to Chitter?
              <div
                className="link-underline-primary"
                type="button"
                data-bs-target="#registerModal"
                data-bs-toggle="modal"
              >
                <u>Click here to register</u>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND MODAL */}
      <div
        className="modal fade"
        id="registerModal"
        aria-hidden="true"
        aria-labelledby="registerModalLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-5" id="registerModalLabel">
                Register
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{registerForm}</div>
            <div className="modal-footer border-0 justify-content-center fs-6">
              &#60;
              <div
                className="link-underline-primary"
                type="button"
                data-bs-target="#loginModal"
                data-bs-toggle="modal"
              >
                <u>Back to login</u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LoginRegisterModal.propTypes = {
  loginHandler: PropTypes.func,
  registerHandler: PropTypes.func,
};

export default LoginRegisterModal;
