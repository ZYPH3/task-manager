import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/sidebar";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { userId } = auth();

  return (
        <ClerkProvider>

    <html lang="en">
      <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
      <body className={inter.className}>
        <ContextProvider>
        <GlobalStyleProvider>
          { userId && <Sidebar />}
        <div className="w-full">{children}</div>
        </GlobalStyleProvider>
        </ContextProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
