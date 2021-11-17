import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (!isLoggedIn) {
      setShow(true);
      return;
    }
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
      })
    );
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <>
      <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
        <Card style={{ width: "25rem" }} className="m-2 p-2 bg-dark text-white">
          <Card.Img variant="top" src={props.image} className={classes.image} />
          <Card.Body className="text-center">
            <Container>
              <Row>
                <Col>
                  <Card.Title>{props.title}</Card.Title>
                </Col>
                <Col>
                  <Card.Title>{price}</Card.Title>
                </Col>
              </Row>
            </Container>

            <Button
              variant="primary"
              className="mt-3"
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">Please Login To Add To Cart!</Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FoodItem;
