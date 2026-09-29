import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body style={{ fontFamily: 'var(--font-geist-sans)' }}>{children}</body>
    </html>
  );
}
