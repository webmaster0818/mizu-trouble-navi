"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-primary/20 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2C12 2 5 10.5 5 15a7 7 0 1014 0C19 10.5 12 2 12 2zm0 18a5 5 0 01-5-5c0-3.17 3.87-9.34 5-11.08C13.13 5.66 17 11.83 17 15a5 5 0 01-5 5z"/>
          </svg>
          水トラブル解決ナビ
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/ranking/" className="text-sm text-gray-700 hover:text-primary font-medium transition">業者ランキング</Link>
          <Link href="/cost/" className="text-sm text-gray-700 hover:text-primary font-medium transition">料金相場</Link>
          <Link href="/services/toilet/" className="text-sm text-gray-700 hover:text-primary font-medium transition">サービス</Link>
          <Link href="/areas/tokyo/" className="text-sm text-gray-700 hover:text-primary font-medium transition">エリア</Link>
          <Link href="/faq/" className="text-sm text-gray-700 hover:text-primary font-medium transition">FAQ</Link>
          <Link
            href="/ranking/"
            className="bg-cta text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-cta-dark transition shadow-md"
          >
            今すぐ相談
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/ranking/"
            className="bg-cta text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-cta-dark transition shadow-md"
          >
            今すぐ相談
          </Link>
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="lg:hidden border-t border-primary/10 bg-white">
          <div className="px-4 py-3 space-y-3">
            <Link href="/ranking/" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>業者ランキング</Link>
            <Link href="/cost/" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>料金相場</Link>
            <Link href="/services/toilet/" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>サービス別</Link>
            <Link href="/areas/tokyo/" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>エリア別</Link>
            <Link href="/guide/" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>対処ガイド</Link>
            <Link href="/faq/" className="block text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>FAQ</Link>
          </div>
        </div>
      )}
    </header>
  );
}
