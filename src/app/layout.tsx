import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talentifies - IT Solutions That Empower Your Business Growth",
  description:
    "Talentifies delivers end-to-end IT services — from custom website and mobile app development to connecting you with top-tier tech talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-primary antialiased">{children}</body>
    </html>
  );
}
