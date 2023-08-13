import type { GuitarResponseI } from "~/services/guitars.server";
import Guitar from "./guitar";

interface GuitarPropsI {
  guitarResponse: GuitarResponseI;
}

const GuitarList = ({ guitarResponse }: GuitarPropsI) => {
  const { data } = guitarResponse;

  return (
    <>
      <h2 className="heading">Our collection</h2>
      {data.length && (
        <div className="guitars-grid">
          {data.map((guitar) => (
            <Guitar key={guitar.id} {...guitar["attributes"]} />
          ))}
        </div>
      )}
    </>
  );
};
export default GuitarList;
