import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La-Wasit",
  description: "La-Wasit is the largest property site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
