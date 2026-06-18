import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chashman — Mechatronics & Control Engineer",
  description:
    "Portfolio of Chashman — Mechatronics & Control Engineer. PLC programming, HMI design, SCADA systems, industrial automation, and machine learning. Currently engineering real-time interlocking signaling at Pakistan Railways.",
  keywords: [
    "Chashman",
    "Mechatronics Engineer",
    "Control Engineer",
    "PLC Programming",
    "SCADA",
    "HMI Design",
    "Industrial Automation",
    "Siemens PLC",
    "TIA Portal",
    "UET Lahore",
  ],
  authors: [{ name: "Chashman" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Chashman — Mechatronics & Control Engineer",
    description:
      "PLC whisperer. Signal architect. Builder of machines that think in millimeters and microseconds.",
    siteName: "Chashman Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chashman — Mechatronics & Control Engineer",
    description:
      "PLC whisperer. Signal architect. Builder of machines that think in millimeters and microseconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
        <Toaster />
        <SonnerToaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "oklch(0.12 0.025 285 / 90%)",
              border: "1px solid oklch(0.7 0.32 350 / 40%)",
              color: "white",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}
