import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import FoodItem from "./FoodItem";

import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFoods = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://http-react-4093f-default-rtdb.firebaseio.com/food.json"
        );

        if (!response.ok) {
          throw new Error("Something went Wrong!");
        }

        const data = await response.json();

        const loadedFoods = [];

        for (const key in data) {
          loadedFoods.push({
            id: key,
            title: data[key].title,
            price: data[key].price,
            image: data[key].image,
          });
        }
        setFoods(loadedFoods);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFoods();
  }, []);

  return (
    <Container className="mt-5">
      {!isLoading && !error && (
        <Row>
          {foods.map((food) => (
            <FoodItem
              key={food.id}
              id={food.id}
              image={food.image}
              title={food.title}
              price={food.price}
            />
          ))}
        </Row>
      )}
      {isLoading && !error && (
        <Spinner animation="border" size="lg" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default Foods;
