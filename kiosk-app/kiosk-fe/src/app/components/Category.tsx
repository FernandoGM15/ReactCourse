import { Category } from "@prisma/client";
import Image from "next/image";
import { useKiosk } from "../hooks/useKiosk";

type CategoryProps = {
  category: Category;
};

const Category = ({ category }: CategoryProps) => {
  const { id, name, icon } = category;

  const { currentCategory, handleSelectCategory } = useKiosk();

  const selected = currentCategory.id === id && "bg-amber-400";
  return (
    <div className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 ${selected}`}>
      <Image
        width={70}
        height={70}
        src={`/img/icono_${icon}.svg`}
        alt={`${icon}-image`}
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleSelectCategory(id)}
      >
        {name}
      </button>
    </div>
  );
};
export default Category;
