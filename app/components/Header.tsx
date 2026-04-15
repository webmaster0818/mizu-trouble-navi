"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M12 2C12 2 5 10.5 5 15a7 7 0 1014 0C19 10.5 12 2 12 2zm0 18a5 5 0 01-5-5c0-3.17 3.87-9.34 5-11.08C13.13 5.66 17 11.83 17 15a5 5 0 01-5 5z"/>
          </svg>
          水トラブル解決ナビ
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/ranking/" className="text-sm text-gray-700 hover:text-primary transition">業者ランキング</Link>
          <Link href="/cost/" className="text-sm text-gray-700 hover:text-primary transition">料金相場</Link>
          <Link href="/services/toilet/" className="text-sm text-gray-700 hover:text-primary transition">サービス</Link>
          <Link href="/areas/tokyo/" className="text-sm text-gray-700 hover:text-primary transition">エリア</Link>
          <Link href="/faq/" className="text-sm text-gray-700 hover:text-primary transition">FAQ</Link>
          <Link
            href="/ranking/"
            className="bg-accent text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition"
          >
            今すぐ相談
          </Link>
        </div>
        <button
          className="lg:hidden p-2"
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
      </nav>
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            <Link href="/ranking/" className="block text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>業者ランキング</Link>
            <Link href="/cost/" className="block text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>料金相場</Link>
            <Link href="/services/toilet/" className="block text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>サービス別</Link>
            <Link href="/areas/tokyo/" className="block text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>エリア別</Link>
            <Link href="/guide/" className="block text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>対処ガイド</Link>
            <Link href="/faq/" className="block text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link
              href="/ranking/"
              className="block bg-accent text-white text-center px-5 py-2 rounded-lg font-bold"
              onClick={() => setMenuOpen(false)}
            >
              今すぐ相談
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
