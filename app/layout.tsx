import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "@/app/theme";

export const metadata = {
  title: "Portfolio",
  description: "here you will find out a few words about me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </body>
      </html>
    </>
  );
}
