import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume",  // You might want to change the title to reflect your app's name
  description: "Muhammad Ziyaad", // Update this too
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`} // You can set a background color here
      >
        {/* Main Wrapper */}
        <main className="min-h-screen flex flex-col"> 

          {/* Main Content */}
          <div className="flex-1">{children}</div> {/* This will render the dynamic content */}

          {/* Footer
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2025 My Application. All Rights Reserved.</p>
          </footer> */}
        </main>
      </body>
    </html>
  );
}

