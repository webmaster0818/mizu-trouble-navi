import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import CTASection from "@/app/components/CTASection";
import FAQSection from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "水トラブル対処ガイド | 応急処置と業者選びのポイント",
  description: "水漏れ・つまり・排水トラブルが起きた時の応急処置方法と、信頼できる水道修理業者の選び方を解説します。",
};

export default function GuidePage() {
  const guideFaqs = [
    { question: "水道修理は自分でやっても大丈夫ですか？", answer: "パッキン交換やシャワーヘッド交換などの簡単な作業はDIYで対応可能です。ただし、配管工事や給水装置の変更は資格が必要なため、専門業者に依頼しましょう。" },
    { question: "複数の業者から見積もりを取るべきですか？", answer: "はい。最低2~3社から見積もりを取ることをおすすめします。料金の妥当性を判断でき、悪質業者を避けることにもつながります。" },
    { question: "水道局指定工事店に頼むべきですか？", answer: "水道局指定工事店は一定の基準を満たした業者です。給水装置工事は指定工事店でないと施工できないため、特に大きな工事の場合は指定工事店を選びましょう。" },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "水トラブル対処ガイド" }]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4">水トラブル対処ガイド</h1>
        <p className="text-gray-600 mb-10">水トラブルが発生した時の応急処置方法と、信頼できる業者の選び方を解説します。</p>

        {/* 応急処置 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-cta pl-4">水トラブル発生時の応急処置</h2>
          <div className="bg-cta-light border border-cta/20 rounded-2xl p-6 mb-6">
            <p className="font-bold text-cta mb-2">まず落ち着いて、以下の手順で対処してください。</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-bold mb-2">止水栓・元栓を閉める</h3>
                <p className="text-gray-600 text-sm">水漏れや溢れが続く場合、まず水を止めることが最優先です。各器具の近くにある止水栓を時計回りに回してください。止水栓が見つからない場合は、水道メーター横の元栓（家全体の水を止める）を閉めましょう。</p>
                <div className="bg-bg-light p-4 rounded-2xl mt-3">
                  <p className="text-sm font-bold text-gray-700 mb-2">止水栓の場所:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>トイレ: 便器横の壁や床</li>
                    <li>キッチン: シンク下の収納内</li>
                    <li>洗面所: 洗面台下の収納内</li>
                    <li>浴室: 蛇口付近の壁内（アクセスパネル内）</li>
                    <li>元栓: 水道メーター横（屋外）</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-bold mb-2">被害の拡大を防ぐ</h3>
                <p className="text-gray-600 text-sm">水漏れの場合はタオルやバケツで水を受け、床への浸水を防ぎます。電気機器の近くに水が来ている場合は、ブレーカーを落として感電を防止してください。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-bold mb-2">状況を記録する</h3>
                <p className="text-gray-600 text-sm">スマートフォンで水漏れ箇所やトラブルの状況を写真・動画で記録しておきましょう。業者への説明がスムーズになり、保険申請にも役立ちます。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
              <div>
                <h3 className="text-lg font-bold mb-2">業者に連絡する</h3>
                <p className="text-gray-600 text-sm">応急処置が済んだら、専門の水道修理業者に連絡します。複数社に連絡して見積もりを比較することをおすすめしますが、緊急の場合はまず1社に連絡して来てもらいましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 業者選びのポイント */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">信頼できる業者選びの7つのポイント</h2>

          <div className="space-y-4">
            {[
              { title: "水道局指定工事店であること", desc: "各自治体から認定を受けた業者は、一定の技術基準を満たしています。特に給水装置工事は指定業者でないと施工できません。" },
              { title: "料金体系が明確であること", desc: "「基本料金」「出張費」「作業費」「部品代」が明示されている業者を選びましょう。「見てみないと分からない」だけの業者は要注意です。" },
              { title: "事前に見積もりを提示すること", desc: "作業開始前に見積もりを提示し、承諾を得てから作業を始める業者が安心です。見積もり無料・キャンセル無料の業者がおすすめ。" },
              { title: "24時間対応であること", desc: "水トラブルはいつ発生するか分かりません。24時間365日対応の業者なら、深夜や休日でも安心です。" },
              { title: "施工保証があること", desc: "作業後に再発した場合の保証がある業者を選びましょう。保証期間は1~5年が一般的です。" },
              { title: "口コミ・評判が良いこと", desc: "実際に利用した人の口コミを確認しましょう。GoogleマップやSNSの口コミが参考になります。" },
              { title: "複数社から見積もりを取ること", desc: "最低2~3社から見積もりを取り比較することで、適正価格で依頼できます。極端に安い・高い業者は避けましょう。" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-gray-800 mb-2">
                  <span className="text-primary mr-2">{i + 1}.</span>{item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪質業者の見分け方 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-danger pl-4">悪質業者の見分け方</h2>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <p className="text-sm text-gray-700 mb-4">以下のような業者には注意してください。</p>
            <ul className="space-y-2 text-sm">
              {[
                "電話口で正確な料金を伝えず「見ないと分からない」を繰り返す",
                "公式サイトに会社名・住所・電話番号が記載されていない",
                "水道局指定工事店でない",
                "見積書を書面で出さない",
                "契約を急かす（「今すぐ決めないと」など）",
                "異常に安い価格で広告を出している（後から高額請求するパターン）",
                "作業中に追加費用を次々と提示する",
                "クーリングオフ制度の説明をしない",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-danger font-bold mt-0.5">&#9888;</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* サービス別リンク */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">トラブル別の詳しい解説</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/services/toilet/" className="p-4 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">トイレ</Link>
            <Link href="/services/water-leak/" className="p-4 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">水漏れ</Link>
            <Link href="/services/drain/" className="p-4 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">排水つまり</Link>
            <Link href="/services/kitchen/" className="p-4 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">キッチン</Link>
            <Link href="/services/bathroom/" className="p-4 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">浴室</Link>
            <Link href="/services/washroom/" className="p-4 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">洗面所</Link>
            <Link href="/services/sewer/" className="p-4 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">下水・排水管</Link>
            <Link href="/services/water-heater/" className="p-4 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">給湯器</Link>
          </div>
        </section>

        <FAQSection faqs={guideFaqs} />
      </div>
      <CTASection />
    </>
  );
}
