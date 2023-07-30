import { useState } from 'react';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Learn React
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            isCollapsed ? 'collapse navbar-collapse' : 'navbar-collapse'
          }
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#expandableText">
                ExpandableText
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#updatingObject">
                UpdatingObject
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bugs">
                Bugs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#listGroup">
                ListGroup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
