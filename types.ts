import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mongolia Tender Explorer",
  description: "English-language explorer for Mongolia public procurement invitations from 2019 onward."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
