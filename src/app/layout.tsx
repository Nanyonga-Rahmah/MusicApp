
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className='grid grid-cols-6 min-h-screen overflow-y-auto  min-w-full overflow-x-hidden'>{children}</body>
    </html>
  );
}
