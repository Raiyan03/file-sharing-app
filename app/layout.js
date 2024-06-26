import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster, toast } from 'sonner'
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "File Sharing App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
