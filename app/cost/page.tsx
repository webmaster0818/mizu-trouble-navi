import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/app/lib/data";
import Breadcrumb from "@/app/components/Breadcrumb";
import CTASection from "@/app/components/CTASection";

export const metadata: Metadata = {
  title: "水道修理の料金相場ガイド【2026年最新】",
  description: "トイレつまり・水漏れ・排水つまりなど水道修理のサービス別料金相場を徹底解説。適正価格で業者に依頼するためのガイド。",
};

export default function CostPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "料金相場ガイド" }]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">水道修理の料金相場ガイド</h1>
        <p className="text-gray-600 mb-8">水道修理にかかる費用の相場をサービス別にまとめました。業者に依頼する前の参考にしてください。</p>

        <div className="bg-accent-light border-l-4 border-accent p-4 rounded-r-lg mb-8">
          <p className="text-sm text-gray-700">
            <strong>注意:</strong> 以下の料金は一般的な相場です。実際の費用は症状の程度、使用部材、作業時間等により異なります。必ず事前に見積もりを取りましょう。
          </p>
        </div>

        {/* 料金相場サマリー */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-3 text-left">サービス</th>
                <th className="p-3 text-left">軽度</th>
                <th className="p-3 text-left">中度</th>
                <th className="p-3 text-left">重度</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">トイレつまり</td><td className="p-3">5,000~8,000円</td><td className="p-3">10,000~20,000円</td><td className="p-3">20,000~40,000円</td></tr>
              <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">水漏れ修理</td><td className="p-3">3,000~5,000円</td><td className="p-3">8,000~15,000円</td><td className="p-3">15,000~40,000円</td></tr>
              <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">排水つまり</td><td className="p-3">5,000~8,000円</td><td className="p-3">10,000~20,000円</td><td className="p-3">15,000~50,000円</td></tr>
              <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">キッチン水回り</td><td className="p-3">3,000~5,000円</td><td className="p-3">8,000~15,000円</td><td className="p-3">15,000~30,000円</td></tr>
              <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">浴室</td><td className="p-3">3,000~8,000円</td><td className="p-3">5,000~15,000円</td><td className="p-3">15,000~30,000円</td></tr>
              <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">洗面所</td><td className="p-3">3,000~5,000円</td><td className="p-3">8,000~15,000円</td><td className="p-3">15,000~25,000円</td></tr>
              <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">下水・排水管</td><td className="p-3">10,000~20,000円</td><td className="p-3">20,000~50,000円</td><td className="p-3">50,000~500,000円</td></tr>
              <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">給湯器</td><td className="p-3">10,000~20,000円</td><td className="p-3">30,000~80,000円</td><td className="p-3">100,000~280,000円</td></tr>
            </tbody>
          </table>
        </div>

        {/* サービス別詳細 */}
        {services.map((s) => (
          <section key={s.slug} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-primary pl-4">{s.name}の料金相場</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">作業内容</th>
                    <th className="p-3 text-left">料金相場</th>
                    <th className="p-3 text-left">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {s.priceTable.map((row, i) => (
                    <tr key={i} className="border-b hover:bg-blue-50">
                      <td className="p-3">{row.item}</td>
                      <td className="p-3 text-accent font-bold whitespace-nowrap">{row.price}</td>
                      <td className="p-3 text-gray-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href={`/services/${s.slug}/`} className="text-primary text-sm font-bold hover:underline">
              {s.name}の詳細を見る &rarr;
            </Link>
          </section>
        ))}

        {/* 料金に関する注意事項 */}
        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">料金に関する注意事項</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-accent font-bold">1.</span>上記は基本料金+作業費の目安です。部品代が別途かかる場合があります。</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">2.</span>深夜・早朝（22時~8時）は割増料金（3,000~8,000円程度）が加算される場合があります。</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">3.</span>出張費は業者により無料~3,300円と異なります。事前に確認しましょう。</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">4.</span>見積もり後の追加料金の有無を必ず確認してください。</li>
            <li className="flex items-start gap-2"><span className="text-accent font-bold">5.</span>複数社から見積もりを取ることで適正価格が分かります。</li>
          </ul>
        </section>

        <div className="text-center">
          <Link href="/ranking/" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-lg hover:opacity-90 transition">
            業者ランキングを見る
          </Link>
        </div>
      </div>
      <CTASection />
    </>
  );
}
