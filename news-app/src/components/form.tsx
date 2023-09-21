import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useNewsContext from "../hooks/useNewsContext";

const CATEGORIES = [
  { value: "general", label: "General" },
  { value: "business", label: "Bussiness" },
  { value: "entertainment", label: "Entertainment" },
  { value: "health", label: "Health" },
  { value: "science", label: "Science" },
  { value: "sports", label: "Sports" },
  { value: "technology", label: "Technology" },
];

const Form = () => {
  const { category, handleChangeCategory } = useNewsContext();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          onChange={handleChangeCategory}
          value={category}
        >
          {CATEGORIES.map((category) => (
            <MenuItem value={category.value} key={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};
export default Form;
