import type { Metadata } from "next";
import "./globals.css";

// Metadata controls the browser tab title and search engine description.
export const metadata: Metadata = {
  title: "Tartan Hub | CMU-Africa",
  description: "Your campus. Your opportunities. Your Guild. One place to connect and stay informed.",
};

// The root layout wraps every page in the application.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
