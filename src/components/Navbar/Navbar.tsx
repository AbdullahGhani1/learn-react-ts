import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import NavItems from './NavItems';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [cartItems, setCartItems] = useState(5); // replace 5 with your actual cart items count

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
            <NavItems title="ListGroup" href="#listGroup" />
            <NavItems title="UpdatingObject" href="#updatingObject" />
            <NavItems title="Bugs" href="#bugs" />
            <NavItems title="ExpandableText" href="#expandableText" />
            <NavItems title="Form" href="#form" />
          </ul>
          <div className="position-relative">
            <AiOutlineShoppingCart color="#fff" size="30" />
            <span className="badge rounded-pill bg-danger position-absolute top-0 start-10 translate-middle">
              {cartItems}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
