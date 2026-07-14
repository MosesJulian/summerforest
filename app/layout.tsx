import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",

});

export const metadata: Metadata = {
  title: "Summerforest Villa Watukarung",
  description: "Summerforest Villa in Watukarung, Pacitan — a private villa with stunning ocean views, pool, and nature surroundings near Watukarung surf beach.",
  keywords: [
    "Summerforest Villa",
    "villa Watukarung",
    "villa Pacitan",
    "penginapan Watukarung",
    "villa dekat pantai Watukarung",
    "surf villa Watukarung",
    "villa Java Indonesia",
    "private villa Pacitan",
    "villa kolam renang Watukarung",
    "Watukarung accommodation",
    "Watukarung surf resort",
    "villa near Watukarung beach",
  ],
  openGraph: {
    title: "Summerforest Villa Watukarung",
    description: "Private villa in Watukarung, Pacitan. Pool, nature, and ocean views near the famous Watukarung surf spot.",
    url: "https://summerforestwatukarung.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
