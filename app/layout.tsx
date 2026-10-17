import type { Metadata } from "next";
import { Noto_Sans_Thai, Prompt } from "next/font/google";
import "./globals.css";

const body = Noto_Sans_Thai({
  variable: "--font-noto",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
});

const heading = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
});

const title = "หุ้นจีน | Chinese Stock by Thai Value Investor";
const description =
  "แบ่งปันผลวิเคราะห์หุ้นจีนแบบ Value Investor ตามแนวคิด Peter Lynch อัปเดตทันทีที่งบออก พร้อมจัดอันดับหุ้นที่น่าสนใจที่สุด";

export const metadata: Metadata = {
  metadataBase: new URL("https://chinese-stock-by-thai-value-investor.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "หุ้นจีน แบบ value investor",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${body.variable} ${heading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
