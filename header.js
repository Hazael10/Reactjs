import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src="https://sanmanueltarlac.gov.ph/wp-content/themes/sanmanueltarlac/assets/img/profiles/logo.png"
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        ></img>
        <Link to="/main" className="navbar-brand" href="/#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/mainLayout"
                className="nav-link active"
                aria-current="page"
                href="/#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" href="/#">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" href="/#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/footer" className="nav-link" href="/#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
