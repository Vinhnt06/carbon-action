import Navbar from "@/components/layout/Navbar";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-16">{children}</div>
    </>
  );
}
