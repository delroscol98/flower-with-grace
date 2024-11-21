import "./globals.css";
import { Rufina, Average_Sans } from "next/font/google";

export const metadata = {
  title: "Flower with Grace",
};

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

const averageSans = Average_Sans({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
