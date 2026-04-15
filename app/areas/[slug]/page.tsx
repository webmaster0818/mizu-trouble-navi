import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, companies } from "@/app/lib/data";
import Breadcrumb from "@/app/components/Breadcrumb";
import CTAButton from "@/app/components/CTAButton";
import CTASection from "@/app/components/CTASection";
import FAQSection from "@/app/components/FAQSection";

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const areaFaqs = [
    {
      question: `${area.name}で水道修理の費用相場はいくらですか？`,
      answer: `${area.name}での水道修理費用は、全国相場とほぼ同程度です。蛇口のパッキン交換で3,000~5,000円、トイレつまりで5,000~40,000円、水漏れ修理で3,000~30,000円が目安です。業者により料金が異なるため、複数社から見積もりを取ることをおすすめします。`,
    },
    {
      question: `${area.name}で24時間対応の水道修理業者はありますか？`,
      answer: `はい。クラシアン、水の救急隊、イースマイルなど大手業者は${area.name}で24時間365日対応しています。深夜・早朝は割増料金がかかる場合がありますので、事前にご確認ください。`,
    },
    {
      question: `${area.name}の水道局の連絡先は？`,
      answer: `${area.waterBureauName}の電話番号は ${area.waterBureauPhone} です。水道の使用開始・停止、漏水、水質に関する問い合わせが可能です。`,
    },
  ];

  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "エリア別", href: "/areas/tokyo/" },
        { label: area.name },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2196F3] to-[#1565C0] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{area.name}の水トラブル修理業者おすすめ5選</h1>
          <p className="text-lg opacity-90">{area.name}で水漏れ・つまりの修理に対応する業者を料金・口コミ・対応時間で比較。</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 業者比較表 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">{area.name}対応の水道修理業者5社比較</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">順位</th>
                  <th className="p-3 text-left">業者名</th>
                  <th className="p-3 text-left">基本料金</th>
                  <th className="p-3 text-left">出張費</th>
                  <th className="p-3 text-left">到着時間</th>
                  <th className="p-3 text-left">対応</th>
                  <th className="p-3 text-left">{area.name}対応</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr key={c.id} className="border-b border-gray-100 hover:bg-bg-light">
                    <td className="p-3">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-white font-bold text-xs ${
                        c.rank === 1 ? "bg-yellow-500" : c.rank === 2 ? "bg-gray-400" : c.rank === 3 ? "bg-amber-600" : "bg-gray-300"
                      }`}>{c.rank}</span>
                    </td>
                    <td className="p-3 font-bold">{c.name}</td>
                    <td className="p-3 text-cta font-bold">{c.basePrice}</td>
                    <td className="p-3">{c.dispatchFee}</td>
                    <td className="p-3">{c.responseTime}</td>
                    <td className="p-3 whitespace-nowrap">{c.availableHours}</td>
                    <td className="p-3"><span className="bg-green-100 text-success px-2 py-1 rounded-full text-xs font-bold">対応可</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <CTAButton text={`${area.name}で無料見積もりを依頼する`} />
          </div>
        </section>

        {/* 各社紹介 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">各社の特徴</h2>
          <div className="space-y-4">
            {companies.map((c) => (
              <div key={c.id} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-xs ${
                    c.rank === 1 ? "bg-yellow-500" : c.rank === 2 ? "bg-gray-400" : c.rank === 3 ? "bg-amber-600" : "bg-gray-300"
                  }`}>{c.rank}</span>
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <span className="text-cta font-bold text-sm">{c.rating}/5.0</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{c.description}</p>
                <div className="flex flex-wrap gap-2">
                  {c.features.slice(0, 3).map((f, i) => (
                    <span key={i} className="bg-bg-accent text-primary text-xs px-2 py-1 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* エリアの特徴 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">{area.name}の水道事情</h2>
          <div className="bg-bg-light rounded-2xl p-6">
            <dl className="space-y-3 text-sm mb-4">
              <div className="flex gap-4"><dt className="font-bold text-gray-700 w-24 flex-shrink-0">人口</dt><dd className="text-gray-600">{area.population}</dd></div>
              <div className="flex gap-4"><dt className="font-bold text-gray-700 w-24 flex-shrink-0">水道情報</dt><dd className="text-gray-600">{area.waterInfo}</dd></div>
            </dl>
            <h3 className="font-bold text-gray-800 mb-2">{area.name}の水回りの特徴</h3>
            <ul className="space-y-2 text-sm">
              {area.characteristics.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 緊急連絡先 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-cta pl-4">緊急連絡先</h2>
          <div className="bg-cta-light border border-cta/20 rounded-2xl p-6">
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-gray-800">{area.waterBureauName}</p>
                <p className="text-cta font-bold text-lg">{area.waterBureauPhone}</p>
              </div>
              <p className="text-gray-600 text-xs">※ 水道の使用開始・停止、漏水の通報、水質に関する問い合わせが可能です。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={areaFaqs} />

        {/* 関連エリア */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">その他のエリア</h2>
          <div className="flex flex-wrap gap-2">
            {areas.filter(a => a.slug !== slug).slice(0, 15).map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}/`} className="px-3 py-1.5 bg-bg-light border border-primary/10 rounded-full text-xs hover:border-primary hover:text-primary transition">
                {a.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
