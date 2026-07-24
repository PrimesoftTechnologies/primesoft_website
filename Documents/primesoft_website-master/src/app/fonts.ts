// app/fonts.ts
import localFont from "next/font/local";

export const myCustomFont = localFont({
  src: "../../public/fonts/odoo-font.woff2", 
  display: "swap",
  variable: "--font-custom",
});
