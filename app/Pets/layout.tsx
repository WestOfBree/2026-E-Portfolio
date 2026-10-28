import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pets",
  description: "Meet the pets behind Brianna Thomas, freelance web developer.",
  alternates: { canonical: "/Pets" },
};

const PetsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => children;

export default PetsLayout;
