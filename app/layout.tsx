import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gossip Premier",
  description: "Gossipremier blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <NuqsAdapter>{children}</NuqsAdapter>

        <Analytics />
      </body>
    </html>
  );
}
