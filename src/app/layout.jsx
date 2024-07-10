import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SidebarProvider } from "./providers";

const popp = Poppins({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Task management app",
  description: "working with ASP.NET and React tro manage tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popp.className}>
        <SidebarProvider>

        <Navbar />
        <div className="min-h-[80vh]">

          {children}

        </div>
        <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
