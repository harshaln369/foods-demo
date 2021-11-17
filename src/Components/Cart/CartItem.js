import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = () => {
  const foodItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <Container fluid>
      {foodItems.map((item) => {
        return (
          <Row key={item.id}>
            <Col className="d-flex justify-content-start align-items-center">
              <Card.Subtitle className="mt-1">{item.title}</Card.Subtitle>
            </Col>

            <Col>
              <div className="d-flex justify-content-center">
                <Button
                  variant="btn"
                  onClick={() => {
                    dispatch(cartActions.removeItemFromCart(item.id));
                  }}
                >
                  -
                </Button>
                <Card.Text className="d-flex justify-content-center mt-2">
                  {item.quantity}
                </Card.Text>
                <Button
                  variant="btn"
                  onClick={() => {
                    dispatch(
                      cartActions.addItemToCart({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                      })
                    );
                  }}
                >
                  +
                </Button>
              </div>
            </Col>

            <Col className="d-flex justify-content-center align-items-center">
              <Card.Text>{`$${item.price}`}</Card.Text>
            </Col>

            <Col className="d-flex justify-content-center align-items-center">
              <Card.Text>{`$${item.totalPrice.toFixed(2)}`}</Card.Text>
            </Col>
          </Row>
        );
      })}

      <hr />
    </Container>
  );
};

export default CartItem;
