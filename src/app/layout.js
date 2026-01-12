import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./globals.css";
import Slider from "../components/Silder.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* <Navbar /> */}
       
        <main>{children}</main>
      
        {/* <Footer /> */}
      </body>
    </html>
  );
}
