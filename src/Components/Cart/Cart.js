import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

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
