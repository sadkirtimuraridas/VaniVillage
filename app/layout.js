import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ⬅️ Added import

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Vani Village",
  description: "Vani Village",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer /> {/* ⬅️ Footer added here */}
      </body>
    </html>
  );
}
