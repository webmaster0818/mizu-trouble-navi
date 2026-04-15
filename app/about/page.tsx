import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "水トラブル解決ナビの運営者情報ページです。",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "運営者情報" }]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">運営者情報</h1>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b"><th className="bg-gray-50 p-4 text-left w-1/3">サイト名</th><td className="p-4">水トラブル解決ナビ</td></tr>
              <tr className="border-b"><th className="bg-gray-50 p-4 text-left">URL</th><td className="p-4">https://mizu-trouble-navi.pages.dev</td></tr>
              <tr className="border-b"><th className="bg-gray-50 p-4 text-left">運営者</th><td className="p-4">水トラブル解決ナビ編集部</td></tr>
              <tr className="border-b"><th className="bg-gray-50 p-4 text-left">メール</th><td className="p-4">info@mizu-trouble-navi.pages.dev</td></tr>
              <tr className="border-b"><th className="bg-gray-50 p-4 text-left">サイトの目的</th><td className="p-4">水道修理業者の比較情報を提供し、利用者が最適な業者を選べるようサポートすること</td></tr>
              <tr><th className="bg-gray-50 p-4 text-left">免責事項</th><td className="p-4">当サイトに掲載している情報は、可能な限り正確な情報を提供するよう努めていますが、正確性・完全性を保証するものではありません。当サイトの情報を利用して生じた損害について、一切の責任を負いかねます。</td></tr>
            </tbody>
          </table>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">当サイトについて</h2>
          <div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700 space-y-4">
            <p>水トラブル解決ナビは、水漏れ・トイレつまり・排水トラブルなどの水回りのトラブルでお困りの方に向けて、信頼できる水道修理業者の比較情報を提供するサイトです。</p>
            <p>大手水道修理業者5社（クラシアン、水の救急隊、イースマイル、水道屋本舗、生活水道センター）の料金・対応速度・保証・口コミなどを多角的に比較し、利用者が最適な業者を選べるようサポートしています。</p>
            <p>掲載している料金相場は、各業者の公式サイトや実際の利用者からの情報をもとに算出した一般的な目安です。実際の費用は症状や作業内容により異なりますので、必ず事前に見積もりを取ってください。</p>
          </div>
        </section>
      </div>
    </>
  );
}
