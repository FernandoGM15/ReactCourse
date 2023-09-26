import { Container } from "react-bootstrap";
import SearchForm from "./components/search-form";
import { CategoriesProvider } from "./context/categories.provider";
import { DrinksProvider } from "./context/drinks.provider";
import DrinksList from "./components/drinks-list";
import ModalDrink from "./components/modal-drink";
function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Drinks searcher</h1>
        </header>
        <Container className="mt-5">
          <SearchForm />
          <DrinksList />
          
          <ModalDrink />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
