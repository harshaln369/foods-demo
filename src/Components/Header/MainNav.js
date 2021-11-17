import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../../store/show-cart-slice";
import { authActions } from "../../store/auth-slice";
import Cart from "../Cart/Cart";

const MainNav = (props) => {
  const items = useSelector((state) => state.cart.items);
  const itemLength = items.length;

  const showOrderButton = itemLength !== 0;

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    setShow(true);
    dispatch(showCartActions.toggleShowCart());
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Container>
          <Navbar.Brand>H's Fast Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isLoggedIn && (
                <Button
                  className="mx-1 my-1"
                  variant="secondary"
                  onClick={toggleCartHandler}
                >
                  My Cart
                  <Badge pill bg="dark" className="mx-1">
                    {itemLength}
                  </Badge>
                </Button>
              )}
              {!isLoggedIn && (
                <Button className="mx-1 my-1" onClick={loginHandler}>
                  Login
                </Button>
              )}
              {isLoggedIn && (
                <Button
                  variant="danger"
                  className="mx-1 my-1"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          {showOrderButton && (
            <Button variant="primary" onClick={handleClose}>
              Order
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MainNav;
