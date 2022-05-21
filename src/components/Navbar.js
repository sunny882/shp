import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow mb-3 w-100">
        <div className="container-fluid">
          <a className="navbar-brand ps-3 border-end pe-3 border-dark" href="/">
            SHP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Main2">
                  Main2
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Panj Takht
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      1. Akal Takht Sahib
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      2. Takht Sri Keshgarh Sahib
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      3. Takht Sri Damdama Sahib
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      4. Takht Sri Patna Sahib
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      5. Takht Sri Hazur Sahib
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ten Gurus
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      1. Guru Nanak Dev Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      2. Guru Angad Dev ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      3. Guru Amardas Sahib Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      4. Guru Ram Das Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      5. Guru Arjan Dev Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      6. Guru Har Gobind Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      7. Guru Har Rai Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      8. Guru Har Krishan Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      9. Guru Tegh Bahadur Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      10. Guru Gobind Singh ji
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Sri Guru Granth Sahib Ji
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
