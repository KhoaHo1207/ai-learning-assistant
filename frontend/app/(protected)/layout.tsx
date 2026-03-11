import { redirect } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: Props) {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    redirect("/login");
  }
  return <div>{children}</div>;
}
