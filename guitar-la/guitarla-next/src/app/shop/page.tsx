import { ENDPOINTS } from "../constants";
import GuitarsList from "./components/guitars-list/guitars-list"

export const getGuitars = async (): Promise<any> => {
  const url = ENDPOINTS.guitars;
  const response = await fetch(url);
  if (response.ok) {
    throw new Error("Error fetching guitars");
  }
  return await response.json();
};



const ShopPage = async () => {
  const guitars = await getGuitars();

  return (
    <>
      <GuitarsList />
    </>
  )
}
export default ShopPage