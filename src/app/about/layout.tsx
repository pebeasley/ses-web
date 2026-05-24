import Content from "@/features/layout/Content";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <Content>{children}</Content>;
}
