import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lê Nguyễn Xuân Lộc | Software Engineering Intern",
  description: "Personal portfolio of Lê Nguyễn Xuân Lộc.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body style={{ fontFamily: 'var(--font-geist-sans)' }}>{children}</body>
    </html>
  );
}
