const LoginRegisterModal = () => {
  const loginForm = (
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="loginEmail"
          aria-describedby="emailLoginInput"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          aria-describedby="passwordLoginInput"
          placeholder="Password"
          required
        />
      </div>

      <button className="d-block mx-auto p-2 btn btn-primary">Login</button>
    </form>
  );

  const registerForm = (
    // email, password, name and a username
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="registerEmail"
          aria-describedby="emailRegisterInput"
          placeholder="Email"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="registerPassword"
          aria-describedby="passwordRegisterInput"
          placeholder="Password"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="registerName"
          aria-describedby="nameRegisterInput"
          placeholder="Name"
          required
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
            aria-label="Username"
            aria-describedby="usernameRegisterInput"
            required
          />
        </div>
      </div>

      <button className="d-block mx-auto p-2 btn btn-primary">Register</button>
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

export default LoginRegisterModal;
