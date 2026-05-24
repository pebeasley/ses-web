"use server";

import { ContactActionState } from "./Types";

export const contact = async (
  prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> => {
  console.log(formData);

  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const contactMethod = String(formData.get("contactMethod") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(service);
  console.log(contactMethod);
  console.log(message);

  return { message: "Thanks. We will be in touch soon.", status: "success" };
};
