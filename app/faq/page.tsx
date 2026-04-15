import type { Metadata } from "next";
import { mainFaqs } from "@/app/lib/data";
import Breadcrumb from "@/app/components/Breadcrumb";
import FAQSection from "@/app/components/FAQSection";
import CTASection from "@/app/components/CTASection";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）| 水道修理に関する疑問を解決",
  description: "水道修理の料金相場、業者の選び方、応急処置方法など、水トラブルに関するよくある質問15問にお答えします。",
};

export default function FAQPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "よくある質問" }]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">よくある質問（FAQ）</h1>
        <p className="text-gray-600 mb-8">水道修理に関するよくある質問にお答えします。</p>
        <FAQSection faqs={mainFaqs} />
      </div>
      <CTASection />
    </>
  );
}
