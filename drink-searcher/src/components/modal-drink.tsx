import { Image, Modal } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";
import { Recipe } from "../context/drinks.provider";
const ModalDrink = () => {
  const { modal, toggleModal, recipe, loading } = useDrinks();

  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      const strIngredient = `strIngredient${i}` as keyof Recipe;
      const strMeasure = `strMeasure${i}` as keyof Recipe;
      if (recipe[strIngredient]) {
        ingredients.push(
          <li key={recipe[strIngredient]}>
            {recipe[strIngredient]} {recipe[strMeasure]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    !loading && (
      <Modal show={modal} onHide={toggleModal}>
        <Image src={recipe.strDrinkThumb} alt={recipe.strDrink} />
        <Modal.Header>
          <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instructions</h2>
            <p>{recipe.strInstructions}</p>
            <h2>Ingredients</h2>
            <ul>{showIngredients()}</ul>
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};
export default ModalDrink;
