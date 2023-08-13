import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky-top">
      <nav className="d-flex align-items-center justify-content-between bg-dark p-2">
        <Link to="/">
          <img
            alt="Chitter Logo"
            src="/images/logo-no-bg.png"
            className="p-2"
            width="70"
          />
        </Link>

        <div className="px-1 bg-primary rounded p-2">Login</div>
      </nav>
    </header>
  );
};

export default Header;
