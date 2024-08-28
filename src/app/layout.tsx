"use client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
