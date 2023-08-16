const LoginRegisterModal = () => {
  const loginForm = (
    <form>
      <label>
        Email: <input type="email" value="email" placeholder="Email" />
      </label>
      <label>
        Password:
        <input type="password" value="password" placeholder="Password" />
      </label>
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
            <div className="modal-header">
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
            <div className="modal-footer">
              {/* <button
                className="btn btn-primary"
                data-bs-target="#registerModal"
                data-bs-toggle="modal"
              >
                Open second modal
              </button> */}
              New to Chitter?{" "}
              <div
                className=""
                type="button"
                data-bs-target="#registerModal"
                data-bs-toggle="modal"
              >
                Click here to register
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
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registerModalLabel">
                Modal 2
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#loginModal"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegisterModal;
