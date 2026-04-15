import type { Metadata } from "next";
import Link from "next/link";
import { companies } from "@/app/lib/data";
import Breadcrumb from "@/app/components/Breadcrumb";
import CTAButton from "@/app/components/CTAButton";
import CTASection from "@/app/components/CTASection";

export const metadata: Metadata = {
  title: "水道修理業者おすすめランキング5選【2026年最新】",
  description: "水道修理業者5社を料金・対応速度・口コミで総合ランキング。クラシアン、水の救急隊、イースマイルなど大手業者を徹底比較。",
};

export default function RankingPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "業者ランキング" }]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4">水道修理業者おすすめランキング5選</h1>
        <p className="text-gray-600 mb-8">料金・対応速度・保証・口コミを総合的に評価し、信頼できる水道修理業者をランキング形式でご紹介します。</p>

        {/* 比較サマリー */}
        <div className="overflow-x-auto mb-12 rounded-2xl shadow-sm border border-gray-100">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-3 text-left">順位</th>
                <th className="p-3 text-left">業者名</th>
                <th className="p-3 text-left">総合評価</th>
                <th className="p-3 text-left">基本料金</th>
                <th className="p-3 text-left">出張費</th>
                <th className="p-3 text-left">到着時間</th>
                <th className="p-3 text-left">対応時間</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c) => (
                <tr key={c.id} className="border-b border-gray-100 hover:bg-bg-light">
                  <td className="p-3">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-xs ${
                      c.rank === 1 ? "bg-yellow-500" : c.rank === 2 ? "bg-gray-400" : c.rank === 3 ? "bg-amber-600" : "bg-gray-300"
                    }`}>{c.rank}</span>
                  </td>
                  <td className="p-3 font-bold">{c.name}</td>
                  <td className="p-3">
                    <span className="text-cta font-bold">{c.rating}</span>/5.0
                  </td>
                  <td className="p-3 text-cta font-bold">{c.basePrice}</td>
                  <td className="p-3">{c.dispatchFee}</td>
                  <td className="p-3">{c.responseTime}</td>
                  <td className="p-3">{c.availableHours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 各社詳細レビュー */}
        {companies.map((c) => (
          <section key={c.id} className="mb-12 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg ${
                c.rank === 1 ? "bg-yellow-500" : c.rank === 2 ? "bg-gray-400" : c.rank === 3 ? "bg-amber-600" : "bg-gray-300"
              }`}>{c.rank}</span>
              <div>
                <h2 className="text-2xl font-bold">{c.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-cta font-bold text-lg">{c.rating}</span>
                  <span className="text-gray-500 text-sm">/ 5.0（口コミ {c.reviewCount.toLocaleString()}件）</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{c.description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-bg-light p-4 rounded-2xl">
                <h3 className="font-bold text-sm text-gray-500 mb-2">基本情報</h3>
                <dl className="space-y-1 text-sm">
                  <div className="flex justify-between"><dt className="text-gray-600">基本料金</dt><dd className="font-bold text-cta">{c.basePrice}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-600">出張費</dt><dd>{c.dispatchFee}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-600">対応時間</dt><dd>{c.availableHours}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-600">最短到着</dt><dd>{c.responseTime}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-600">保証</dt><dd>{c.warranty}</dd></div>
                  <div className="flex justify-between"><dt className="text-gray-600">対応エリア</dt><dd>{c.areas}</dd></div>
                </dl>
              </div>
              <div className="bg-bg-light p-4 rounded-2xl">
                <h3 className="font-bold text-sm text-gray-500 mb-2">特徴</h3>
                <ul className="space-y-1 text-sm">
                  {c.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 p-4 rounded-2xl">
                <h3 className="font-bold text-sm text-success mb-2">良い口コミ・メリット</h3>
                <ul className="space-y-1 text-sm">
                  {c.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-success">&#9675;</span><span>{p}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-2xl">
                <h3 className="font-bold text-sm text-danger mb-2">悪い口コミ・デメリット</h3>
                <ul className="space-y-1 text-sm">
                  {c.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="text-danger">&#9651;</span><span>{con}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">{c.reviewSummary}</p>

            <div className="text-center">
              <CTAButton text={`${c.name}に無料相談する`} />
            </div>
          </section>
        ))}

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">各社の詳細比較はこちら</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/comparison/price/" className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition">料金比較</Link>
            <Link href="/comparison/speed/" className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition">スピード比較</Link>
            <Link href="/comparison/warranty/" className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition">保証比較</Link>
            <Link href="/comparison/reviews/" className="px-4 py-2 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition">口コミ比較</Link>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
