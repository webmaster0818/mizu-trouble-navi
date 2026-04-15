import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "水トラブル解決ナビ | 水道修理業者比較・料金相場【2026年最新】",
    template: "%s | 水トラブル解決ナビ",
  },
  description: "水漏れ・トイレつまり・排水トラブルの修理業者を徹底比較。クラシアン・水の救急隊など大手5社の料金相場・口コミ・対応時間を一覧で比較できます。",
  keywords: "水道修理,水漏れ修理,トイレつまり,排水つまり,水道業者比較,料金相場",
  openGraph: {
    title: "水トラブル解決ナビ | 水道修理業者比較・料金相場【2026年最新】",
    description: "水漏れ・トイレつまり・排水トラブルの修理業者を徹底比較。大手5社の料金・口コミ・対応時間を比較。",
    type: "website",
    locale: "ja_JP",
    siteName: "水トラブル解決ナビ",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
