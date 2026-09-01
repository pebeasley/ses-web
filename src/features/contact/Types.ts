type ContactActionStatus = "idle" | "success" | "error";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  contactMethod: string;
  message: string;
};

export type ContactActionState = {
  status: ContactActionStatus;
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
  values?: ContactFormValues;
};
