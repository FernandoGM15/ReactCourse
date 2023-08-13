import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { getGuitars, type GuitarResponseI } from "~/services/guitars.server";
import { useLoaderData } from "@remix-run/react";
import GuitarList from "~/components/guitar-list";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "GuitarLA - Shop" },
    { name: "description", content: "GuitarLA - Our guitar collection" },
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await getGuitars();
  return response;
};

const Index = () => {
  const guitars = useLoaderData<GuitarResponseI>();

  return <GuitarList guitarResponse={guitars} />;
};
export default Index;
