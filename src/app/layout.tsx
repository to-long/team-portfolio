import type { Metadata } from "next";
import { IntlProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teamotion - IT Solutions That Empower Your Business Growth",
  description:
    "Teamotion delivers end-to-end IT services — from custom website and mobile app development to connecting you with top-tier tech talent.",
};

// Apply the theme class before React hydrates so there is no flash of the wrong theme.
const themeInitScript = `
(function() {
  try {
    var theme = localStorage.getItem('teamotion-theme');
    if (theme !== 'dark' && theme !== 'light') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-primary antialiased">
        <IntlProvider>{children}</IntlProvider>
      </body>
    </html>
  );
}
