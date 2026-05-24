"use server";

import { ContactActionState } from "./Types";

export const contact = async (
  prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> => {
  console.log(formData);

  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  console.log(name);
  console.log(email);
  console.log(message);

  return { message: "test", status: "success" };
};
