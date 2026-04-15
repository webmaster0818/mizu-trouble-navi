import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisonPages, companies } from "@/app/lib/data";
import Breadcrumb from "@/app/components/Breadcrumb";
import CTAButton from "@/app/components/CTAButton";
import CTASection from "@/app/components/CTASection";

export async function generateStaticParams() {
  return comparisonPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = comparisonPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: { title: page.metaTitle, description: page.metaDescription },
  };
}

function PriceComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left">業者名</th>
            <th className="p-3 text-left">基本料金</th>
            <th className="p-3 text-left">出張費</th>
            <th className="p-3 text-left">深夜料金</th>
            <th className="p-3 text-left">見積費</th>
            <th className="p-3 text-left">キャンセル費</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">クラシアン</td><td className="p-3 text-accent font-bold">8,800円~</td><td className="p-3">無料</td><td className="p-3">あり（要確認）</td><td className="p-3">無料</td><td className="p-3">無料</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">水の救急隊</td><td className="p-3 text-accent font-bold">5,500円~</td><td className="p-3">無料</td><td className="p-3">あり（3,000~5,000円）</td><td className="p-3">無料</td><td className="p-3">無料</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">イースマイル</td><td className="p-3 text-accent font-bold">8,800円~</td><td className="p-3">無料</td><td className="p-3">あり（要確認）</td><td className="p-3">無料</td><td className="p-3">無料</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">水道屋本舗</td><td className="p-3 text-accent font-bold">4,400円~</td><td className="p-3">3,300円</td><td className="p-3">あり（要確認）</td><td className="p-3">無料</td><td className="p-3">要確認</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">生活水道センター</td><td className="p-3 text-accent font-bold">5,000円~</td><td className="p-3">無料</td><td className="p-3">あり（要確認）</td><td className="p-3">無料</td><td className="p-3">要確認</td></tr>
        </tbody>
      </table>
      <div className="mt-6 bg-gray-50 p-5 rounded-lg">
        <h3 className="font-bold mb-3">料金比較のポイント</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>基本料金が最も安いのは<strong>水道屋本舗（4,400円~）</strong>ですが、出張費3,300円が別途かかります。</li>
          <li>出張費込みで考えると、<strong>水の救急隊（5,500円~・出張費無料）</strong>がコスパに優れます。</li>
          <li>キャンセル無料を明示しているのは<strong>イースマイル</strong>で、安心して見積もりだけ依頼できます。</li>
          <li>深夜料金は各社異なるため、夜間のトラブルは事前に確認が必要です。</li>
        </ul>
      </div>
    </div>
  );
}

function SpeedComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left">業者名</th>
            <th className="p-3 text-left">最短到着</th>
            <th className="p-3 text-left">24時間対応</th>
            <th className="p-3 text-left">年中無休</th>
            <th className="p-3 text-left">電話受付</th>
            <th className="p-3 text-left">Web受付</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">クラシアン</td><td className="p-3 font-bold">最短30分</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td></tr>
          <tr className="border-b hover:bg-blue-50 bg-green-50"><td className="p-3 font-bold">水の救急隊</td><td className="p-3 font-bold text-accent">最短15分</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">イースマイル</td><td className="p-3 font-bold">最短20分</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">水道屋本舗</td><td className="p-3 font-bold">最短30分</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">生活水道センター</td><td className="p-3 font-bold">最短30~60分</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td><td className="p-3 text-success">対応</td></tr>
        </tbody>
      </table>
      <div className="mt-6 bg-gray-50 p-5 rounded-lg">
        <h3 className="font-bold mb-3">スピード比較のポイント</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>最速は<strong>水の救急隊（最短15分）</strong>。緊急性の高いトラブルに最適です。</li>
          <li>全5社が24時間365日対応で、深夜・休日のトラブルにも対応可能。</li>
          <li>到着時間はエリアや時間帯により変動します。繁忙期は通常より時間がかかる場合があります。</li>
        </ul>
      </div>
    </div>
  );
}

function WarrantyComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left">業者名</th>
            <th className="p-3 text-left">施工保証</th>
            <th className="p-3 text-left">PL保険</th>
            <th className="p-3 text-left">アフターフォロー</th>
            <th className="p-3 text-left">クレジット対応</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">クラシアン</td><td className="p-3">1~5年</td><td className="p-3 text-success">加入</td><td className="p-3">電話サポート</td><td className="p-3 text-success">対応</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">水の救急隊</td><td className="p-3 font-bold text-accent">最大5年</td><td className="p-3 text-success">加入</td><td className="p-3">電話サポート</td><td className="p-3 text-success">対応</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">イースマイル</td><td className="p-3">最大3年</td><td className="p-3 text-success">加入</td><td className="p-3">電話サポート</td><td className="p-3 text-success">対応</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">水道屋本舗</td><td className="p-3">1~3年</td><td className="p-3">要確認</td><td className="p-3">電話サポート</td><td className="p-3 text-success">対応</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">生活水道センター</td><td className="p-3">1~3年</td><td className="p-3">要確認</td><td className="p-3">電話サポート</td><td className="p-3 text-success">対応</td></tr>
        </tbody>
      </table>
      <div className="mt-6 bg-gray-50 p-5 rounded-lg">
        <h3 className="font-bold mb-3">保証比較のポイント</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>施工保証が最も充実しているのは<strong>水の救急隊（最大5年）</strong>とクラシアン。</li>
          <li>PL保険は大手3社（クラシアン・水の救急隊・イースマイル）が明示的に加入。</li>
          <li>全社クレジットカード払いに対応しているため、急な出費にも安心です。</li>
        </ul>
      </div>
    </div>
  );
}

function AreaCoverageComparison() {
  const prefectures = ["北海道", "東北", "関東", "中部", "近畿", "中国", "四国", "九州"];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-3 text-left">業者名</th>
            <th className="p-3 text-left">対応エリア</th>
            <th className="p-3 text-center">北海道</th>
            <th className="p-3 text-center">東北</th>
            <th className="p-3 text-center">関東</th>
            <th className="p-3 text-center">中部</th>
            <th className="p-3 text-center">近畿</th>
            <th className="p-3 text-center">九州</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">クラシアン</td><td className="p-3">全国</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">水の救急隊</td><td className="p-3">主要都市</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-warning">&#9651;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">イースマイル</td><td className="p-3">関東中心</td><td className="p-3 text-center text-danger">&#10005;</td><td className="p-3 text-center text-danger">&#10005;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-warning">&#9651;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-warning">&#9651;</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">水道屋本舗</td><td className="p-3">全国</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td></tr>
          <tr className="border-b hover:bg-blue-50"><td className="p-3 font-bold">生活水道センター</td><td className="p-3">全国</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td><td className="p-3 text-center text-success">&#9675;</td></tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-500 mt-2">&#9675;=対応 &#9651;=一部対応 &#10005;=非対応</p>
      <div className="mt-6 bg-gray-50 p-5 rounded-lg">
        <h3 className="font-bold mb-3">エリア比較のポイント</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>全国対応なのは<strong>クラシアン・水道屋本舗・生活水道センター</strong>の3社。</li>
          <li>関東エリアなら全5社が対応しているため、選択肢が最も多い地域です。</li>
          <li>地方エリアの場合は、対応可否を事前に電話で確認することをおすすめします。</li>
        </ul>
      </div>
    </div>
  );
}

function ReviewsComparison() {
  return (
    <div>
      {companies.map((c) => (
        <div key={c.id} className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-bold">{c.name}</h3>
            <span className="text-accent font-bold">{c.rating}/5.0</span>
            <span className="text-gray-500 text-sm">（{c.reviewCount.toLocaleString()}件）</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-3">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-success text-sm mb-2">良い口コミ</h4>
              <ul className="text-sm space-y-1">
                {c.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-success">&#9675;</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-danger text-sm mb-2">悪い口コミ</h4>
              <ul className="text-sm space-y-1">
                {c.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-danger">&#9651;</span>{con}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{c.reviewSummary}</p>
        </div>
      ))}
    </div>
  );
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = comparisonPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <Breadcrumb items={[
        { label: "ホーム", href: "/" },
        { label: "比較", href: "/comparison/price/" },
        { label: page.name },
      ]} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">水道修理業者5社の{page.name}</h1>
        <p className="text-gray-600 mb-8">{page.description}</p>

        {slug === "price" && <PriceComparison />}
        {slug === "speed" && <SpeedComparison />}
        {slug === "warranty" && <WarrantyComparison />}
        {slug === "area-coverage" && <AreaCoverageComparison />}
        {slug === "reviews" && <ReviewsComparison />}

        <div className="text-center mt-10">
          <CTAButton />
        </div>

        {/* 他の比較ページへのリンク */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-4">その他の比較</h2>
          <div className="flex flex-wrap gap-3">
            {comparisonPages.filter(p => p.slug !== slug).map((p) => (
              <Link key={p.slug} href={`/comparison/${p.slug}/`} className="px-4 py-2 border border-primary text-primary rounded-lg text-sm hover:bg-primary hover:text-white transition">
                {p.name}
              </Link>
            ))}
            <Link href="/ranking/" className="px-4 py-2 border border-accent text-accent rounded-lg text-sm hover:bg-accent hover:text-white transition">
              総合ランキング
            </Link>
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
}
