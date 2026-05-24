type ContactActionStatus = "idle" | "success" | "error";

export type ContactActionState = {
  status: ContactActionStatus;
  message?: string;
  fieldErrors?: Record<string, string>;
};
