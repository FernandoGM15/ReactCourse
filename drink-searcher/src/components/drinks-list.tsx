import { Row } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";
import Drink from "./drink";

const DrinksList = () => {
  const { drinks } = useDrinks();
  return (
    <Row className="my-2">
      {drinks.map((drink) => (
        <Drink drink={drink} key={drink.idDrink} />
      ))}
    </Row>
  );
};
export default DrinksList;
