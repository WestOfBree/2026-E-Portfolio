import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire a Web Developer - Contact",
  description:
    "Need a custom website? Contact Brianna Thomas for a free quote on responsive, SEO-friendly Next.js and React websites for your business.",
  alternates: { canonical: "/Contact" },
};

const ContactLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => children;

export default ContactLayout;
