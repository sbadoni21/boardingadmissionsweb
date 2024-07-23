import { Barlow, Inter, Jost, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/frontend/Navbar";
import Footer from "@/components/frontend/Footer";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={`${poppins.variable}`}>{children}</body>{" "}
      <Footer/>
    </html>
  );
}
