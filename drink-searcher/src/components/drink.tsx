import { Button, Card, Col } from "react-bootstrap";
import { Drink } from "../context/drinks.provider";
import useDrinks from "../hooks/useDrinks";

type DrinkProps = {
  drink: Drink;
};
const Drink = ({ drink }: DrinkProps) => {
  const { toggleModal, handleDrinkId } = useDrinks();
  const { strDrinkThumb, strDrink, idDrink } = drink;
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={strDrinkThumb} alt={`${strDrink}-image`} />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Button
            className="w-100 text-uppercase mt-2"
            variant="warning"
            onClick={() => {
              toggleModal();
              handleDrinkId(idDrink);
            }}
          >
            Watch recipe
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Drink;
