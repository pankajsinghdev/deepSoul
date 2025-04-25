import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DeepSoul - Your Inner Wellbeing Hub",
  description:
    "DeepSoul connects you with professional therapists, supportive community, and powerful self-help tools for your mental wellbeing journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
