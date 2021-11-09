import React from "react";

const Navbar = ({ dark, children, toggleNav }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav className={`navbar  navbar-expand navbar-${dark} bg-${dark}`}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          {children} {dark}
        </span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About me</a>
            </li>
            <li className="nav-item">
              <span className="nav-link nav-action" onClick={toggleNav}>
                Toggle Nav
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
