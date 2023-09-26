import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/useCategories";
import { FormEvent, useState } from "react";
import useDrinks from "../hooks/useDrinks";

export type Search = {
  name: string;
  category: string;
};
const SearchForm = () => {
  const [search, setSearch] = useState<Search>({ name: "", category: "" });
  const [alert, setAlert] = useState("");
  /** Contexts */
  const { categories } = useCategories();
  const { getDrinks } = useDrinks();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("All the fields are required");
      return;
    }
    setAlert("");
    getDrinks(search);
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Drink name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tequila, Vodka..."
              name="name"
              id="name"
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
              value={search.name}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Drink category</Form.Label>
            <Form.Select
              name="category"
              id="category"
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
              value={search.category}
            >
              <option value="">- Select category -</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="flex justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default SearchForm;
