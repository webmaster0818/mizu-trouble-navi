import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, companies } from "@/app/lib/data";
import Breadcrumb from "@/app/components/Breadcrumb";
import CTAButton from "@/app/components/CTAButton";
import CTASection from "@/app/components/CTASection";
import FAQSection from "@/app/components/FAQSection";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "サービス別", href: "/services/toilet/" },
        { label: service.name },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2196F3] to-[#1565C0] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.name}</h1>
          <p className="text-lg opacity-90">{service.heroText}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 症状 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">こんな症状はありませんか？</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.symptoms.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-cta text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 原因 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">主な原因</h2>
          <div className="space-y-4">
            {service.causes.map((c, i) => (
              <div key={i} className="bg-bg-light rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-1">{c.title}</h3>
                <p className="text-gray-600 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 料金相場 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-cta pl-4">{service.name}の料金相場</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">作業内容</th>
                  <th className="p-3 text-left">料金相場</th>
                  <th className="p-3 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {service.priceTable.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-bg-light">
                    <td className="p-3">{row.item}</td>
                    <td className="p-3 text-cta font-bold whitespace-nowrap">{row.price}</td>
                    <td className="p-3 text-gray-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">※ 上記は一般的な相場です。実際の費用は業者や症状により異なります。</p>
        </section>

        {/* 応急処置 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-success pl-4">応急処置の方法</h2>
          <div className="space-y-4">
            {service.emergencySteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="w-10 h-10 bg-success text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.step}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 業者比較表 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">{service.name}対応業者5社比較</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">業者名</th>
                  <th className="p-3 text-left">基本料金</th>
                  <th className="p-3 text-left">出張費</th>
                  <th className="p-3 text-left">到着時間</th>
                  <th className="p-3 text-left">対応</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr key={c.id} className="border-b border-gray-100 hover:bg-bg-light">
                    <td className="p-3 font-bold">{c.name}</td>
                    <td className="p-3 text-cta font-bold">{c.basePrice}</td>
                    <td className="p-3">{c.dispatchFee}</td>
                    <td className="p-3">{c.responseTime}</td>
                    <td className="p-3"><span className="bg-green-100 text-success px-2 py-1 rounded-full text-xs font-bold">対応可</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <CTAButton />
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={service.faqs} />

        {/* 関連サービス */}
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">その他のサービス</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.filter(s => s.slug !== slug).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="p-3 bg-bg-light rounded-2xl border border-primary/10 hover:border-primary transition text-center text-sm font-bold">
                {s.shortName}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
