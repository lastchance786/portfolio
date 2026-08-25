import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejas Wakchoure | Business Intelligence Portfolio",
  description: "Business Intelligence, analytics, reporting automation and data visualization portfolio of Tejas Wakchoure.",
  keywords: ["Business Intelligence", "Power BI", "Tableau", "Snowflake", "SQL", "Python", "Analytics"],
  openGraph: {
    title: "Tejas Wakchoure | Business Intelligence Portfolio",
    description: "Turning complex data into clear decisions and scalable reporting systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="scroll-smooth"><body>{children}</body></html>;
}
