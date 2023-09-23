import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Cart from "../screens/Cart";
import Modal from "../Modal";
import { useCart } from "./ContextReducer";

export default function Nav(props) {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  let navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const openCart = () => {
    setCartView(true);
  };

  const closeCart = () => {
    setCartView(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFood
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-8"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link className="nav-link fs-8" aria-current="page" to="/myOrder">
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            {localStorage.getItem("authToken") ? (
              <div>
                <div
                  className="btn bg-white mx-1 text-success"
                  onClick={openCart}
                >
                  MyCart{"  "}
                  <Badge pill className="bg-danger">
                    {data.length}
                  </Badge>
                </div>
                
                {cartView ? (
                  <Modal onClose={closeCart}>
                    <Cart />
                  </Modal>
                ) : null}
                <div
                  className="btn bg-white mx-1 text-danger"
                  onClick={logoutHandler}
                >
                  Logout
                </div>
              </div>
            ) : (
              <div className="d-flex">
                {" "}
                <Link
                  className="btn bg-white mx-1 text-success "
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1 text-white "
                  to="/createUser"
                >
                  SignUp
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
