import { ActionFunction, redirect } from "react-router-dom";
import { ClientI } from "../../../routes";

const URL = `${import.meta.env.VITE_API_URL as string}/clients`;

export const getClients = async (): Promise<ClientI[]> => {
  const request = await fetch(URL);
  if (!request.ok)
    throw new Error("There was an error fetching The client data");
  const clients = (await request.json()) as ClientI[];
  return clients;
};

export const postClient = async (
  request: Request
): Promise<Response | string[]> => {
  try {
    const validate = await validateForm(request);
    if (Array.isArray(validate)) return validate;
    const req = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(validate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!req.ok) throw new Error("There was an error posting the client");
    return redirect("/clients");
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export const getClient = async (id: string): Promise<ClientI> => {
  try {
    const request = await fetch(`${URL}/${id}`);
    const client = (await request.json()) as ClientI;
    return client;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const updateClient: ActionFunction = async ({ request, params }) => {
  try {
    const id = String(params.id);
    const validate = await validateForm(request);
    if (Array.isArray(validate)) return validate;
    const req = await fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(validate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!req.ok) throw new Error("There was an error updating the client");
    return redirect("/clients");
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export const deleteClient: ActionFunction = async ({ params }) => {
  try {
    const id = String(params.id);
    const request = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    if (!request.ok) throw new Error("There was an error updating the client");
    return redirect("/clients");
  } catch (error) {
    throw new Error(error as string);
  }
};

const validateForm = async (
  request: Request
): Promise<string[] | { [k: string]: FormDataEntryValue }> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = [];

  const email = formData.get("email") as string;
  // eslint-disable-next-line no-useless-escape
  const regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

  if (Object.values(data).includes("")) {
    errors.push("All the fields are required");
  }
  if (!regex.test(email)) {
    errors.push("The email is not valid");
  }
  if (Object.keys(errors).length) {
    return errors;
  }
  return data;
};
