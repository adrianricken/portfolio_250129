import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "betreten erbeten",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon_white.png" sizes="any" />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
