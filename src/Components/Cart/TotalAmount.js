import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";

const TotalAmount = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Container>
      <Row>
        <Col>
          <Card.Title>Total</Card.Title>
        </Col>
        <Col className="d-flex justify-content-end">
          <Card.Title>{`$${totalAmount.toFixed(2)}`}</Card.Title>
        </Col>
      </Row>
    </Container>
  );
};

export default TotalAmount;
