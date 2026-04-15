import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-blue-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold text-white text-lg mb-4">サービス別</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/toilet/" className="hover:text-white transition">トイレつまり・修理</Link></li>
              <li><Link href="/services/water-leak/" className="hover:text-white transition">水漏れ修理</Link></li>
              <li><Link href="/services/drain/" className="hover:text-white transition">排水つまり</Link></li>
              <li><Link href="/services/kitchen/" className="hover:text-white transition">キッチン水回り</Link></li>
              <li><Link href="/services/bathroom/" className="hover:text-white transition">お風呂・浴室</Link></li>
              <li><Link href="/services/washroom/" className="hover:text-white transition">洗面所</Link></li>
              <li><Link href="/services/sewer/" className="hover:text-white transition">下水・排水管</Link></li>
              <li><Link href="/services/water-heater/" className="hover:text-white transition">給湯器</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">エリア別</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/areas/tokyo/" className="hover:text-white transition">東京都</Link></li>
              <li><Link href="/areas/kanagawa/" className="hover:text-white transition">神奈川県</Link></li>
              <li><Link href="/areas/osaka/" className="hover:text-white transition">大阪府</Link></li>
              <li><Link href="/areas/aichi/" className="hover:text-white transition">愛知県</Link></li>
              <li><Link href="/areas/fukuoka/" className="hover:text-white transition">福岡県</Link></li>
              <li><Link href="/areas/hokkaido/" className="hover:text-white transition">北海道</Link></li>
              <li><Link href="/areas/yokohama/" className="hover:text-white transition">横浜市</Link></li>
              <li><Link href="/areas/sapporo/" className="hover:text-white transition">札幌市</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">比較・情報</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-white transition">業者ランキング</Link></li>
              <li><Link href="/cost/" className="hover:text-white transition">料金相場ガイド</Link></li>
              <li><Link href="/comparison/price/" className="hover:text-white transition">料金比較</Link></li>
              <li><Link href="/comparison/speed/" className="hover:text-white transition">対応スピード比較</Link></li>
              <li><Link href="/comparison/warranty/" className="hover:text-white transition">保証比較</Link></li>
              <li><Link href="/comparison/area-coverage/" className="hover:text-white transition">対応エリア比較</Link></li>
              <li><Link href="/comparison/reviews/" className="hover:text-white transition">口コミ比較</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">サイト情報</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guide/" className="hover:text-white transition">水トラブル対処ガイド</Link></li>
              <li><Link href="/faq/" className="hover:text-white transition">よくある質問</Link></li>
              <li><Link href="/about/" className="hover:text-white transition">運営者情報</Link></li>
              <li><Link href="/privacy-policy/" className="hover:text-white transition">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; 2026 水トラブル解決ナビ All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
