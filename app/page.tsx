import Link from "next/link";
import Image from "next/image";
import { companies, services, areas, mainFaqs } from "@/app/lib/data";
import CompanyTable from "@/app/components/CompanyTable";
import FAQSection from "@/app/components/FAQSection";
import CTASection from "@/app/components/CTASection";

export default function Home() {
  const topFaqs = mainFaqs.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2196F3] to-[#1565C0] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 opacity-15">
          <Image src="/images/hero-water.png" alt="" fill className="object-cover" priority />
        </div>
        {/* Water drop decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/5 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 mb-6 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C12 2 5 10.5 5 15a7 7 0 1014 0C19 10.5 12 2 12 2zm0 18a5 5 0 01-5-5c0-3.17 3.87-9.34 5-11.08C13.13 5.66 17 11.83 17 15a5 5 0 01-5 5z"/>
            </svg>
            困ったらすぐ相談！24時間365日対応
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            水漏れ・つまりのトラブル<br className="hidden md:block" />
            最適な修理業者がすぐ見つかる
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            大手5社の料金・口コミ・対応時間を徹底比較。24時間対応の業者に今すぐ相談。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ranking/" className="inline-block bg-cta text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-cta-dark transition shadow-lg">
              業者ランキングを見る
            </Link>
            <Link href="/cost/" className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition shadow-lg">
              料金相場を確認する
            </Link>
          </div>
        </div>
      </section>

      {/* 信頼バッジ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-bg-light rounded-2xl">
              <div className="w-16 h-16 bg-bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-heading">厳選5社を徹底比較</h3>
              <p className="text-gray-600 text-sm">クラシアン、水の救急隊など信頼性の高い大手5社を比較できます。</p>
            </div>
            <div className="text-center p-6 bg-bg-light rounded-2xl">
              <div className="w-16 h-16 bg-cta-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-heading">24時間365日対応</h3>
              <p className="text-gray-600 text-sm">深夜・休日も対応可能な業者を掲載。緊急トラブルにも安心。</p>
            </div>
            <div className="text-center p-6 bg-bg-light rounded-2xl">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-heading">料金相場がわかる</h3>
              <p className="text-gray-600 text-sm">サービス別の料金相場を掲載。適正価格で依頼できます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 業者比較表 */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">水道修理業者5社 比較表</h2>
          <CompanyTable />
          <div className="text-center mt-8">
            <Link href="/ranking/" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition shadow-md">
              詳しいランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* サービス別 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">サービスから探す</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="block p-6 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary hover:shadow-md transition text-center group">
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary transition">{s.shortName}</h3>
                <p className="text-xs text-gray-500">{s.priceTable[0]?.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* エリア別 */}
      <section className="py-12 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">エリアから探す</h2>
          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">都道府県</h3>
            <div className="flex flex-wrap gap-2">
              {areas.filter(a => a.type === "prefecture").map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}/`} className="px-4 py-2 bg-white border border-primary/10 rounded-full text-sm hover:border-primary hover:text-primary transition">
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-700 mb-3">主要都市</h3>
            <div className="flex flex-wrap gap-2">
              {areas.filter(a => a.type === "city").map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}/`} className="px-4 py-2 bg-white border border-primary/10 rounded-full text-sm hover:border-primary hover:text-primary transition">
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FAQSection faqs={topFaqs} />
          <div className="text-center mt-6">
            <Link href="/faq/" className="text-primary font-bold hover:underline">
              全てのFAQを見る &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
