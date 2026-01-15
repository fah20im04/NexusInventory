import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/AuthProvider";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata = {
  title: "Nexus Inv",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-[#0a0a0a] text-white`}>
        <AuthProvider>
          <Navbar />
          {/* Main content area */}
          <main className="pt-24 min-h-screen">{children}</main>

          <ToastContainer
            position="bottom-right"
            theme="dark"
            pauseOnHover
            closeOnClick
          />
        </AuthProvider>
      </body>
    </html>
  );
}
