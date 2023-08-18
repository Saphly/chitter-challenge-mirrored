import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="sticky-top">
        <nav className="d-flex align-items-center justify-content-between bg-dark p-2">
          <Link to="/">
            <img
              alt="Chitter Logo"
              src="/images/logo-no-bg.png"
              className="p-2"
              width="80"
            />
          </Link>

          <button
            type="button"
            className="btn btn-outline-primary"
            data-bs-target="#loginModal"
            data-bs-toggle="modal"
          >
            Login
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
