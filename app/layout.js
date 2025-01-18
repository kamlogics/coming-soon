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

export const metadata = {
  title: "KamLogics Tech Solutions - Innovating Your Digital Future",
  description: "KamLogics Tech Solutions specializes in UI/UX Design, Website Development, Mobile App Development, Web App Development, ML/AI, E-Commerce, DevOps, and Quality Assurance. We deliver innovative and scalable tech solutions tailored to your needs.",
  keywords: "KamLogics, Tech Solutions, UI/UX Design, Website Development, Mobile App Development, Android Development, iOS Development, Web App Development, Machine Learning, Artificial Intelligence, E-Commerce, DevOps, Quality Assurance, Software Development",
  author: "KamLogics Tech Solutions",
  robots: "index, follow",
  charset: "UTF-8",
  ogImage: "/kamlogics-ogimg.png",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet={metadata.charset} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:image" content={metadata.ogImage} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
