import { PropsWithChildren } from "react";

export default function Content({ children }: PropsWithChildren) {
  return <div className="container mx-auto p-12">{children}</div>;
}
