import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";

import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const itemLength = items.length;

  let cartContent;

  if (itemLength > 0) {
    cartContent = (
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card.Subtitle>Item</Card.Subtitle>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card.Subtitle>Amount</Card.Subtitle>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card.Subtitle>price</Card.Subtitle>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card.Subtitle>Total Price</Card.Subtitle>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <CartItem />
          </Col>
        </Row>
        <Row>
          <Col>
            <TotalAmount />
          </Col>
        </Row>
      </Container>
    );
  } else {
    cartContent = <Alert variant="danger">No Item in Cart Found!</Alert>;
  }

  return cartContent;
};

export default Cart;
