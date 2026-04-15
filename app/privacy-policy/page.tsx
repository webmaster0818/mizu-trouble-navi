import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "水トラブル解決ナビのプライバシーポリシーです。個人情報の取り扱いについて定めています。",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "プライバシーポリシー" }]} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-heading mb-8">プライバシーポリシー</h1>
        <div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-700 space-y-6">
          <p>水トラブル解決ナビ（以下、「当サイト」）は、以下のとおり個人情報保護方針を定め、個人情報の保護に努めます。</p>

          <h2 className="text-xl font-bold mt-8">1. 個人情報の収集について</h2>
          <p>当サイトでは、お問い合わせの際にお名前、メールアドレス等の個人情報をご提供いただく場合があります。</p>

          <h2 className="text-xl font-bold mt-8">2. 個人情報の利用目的</h2>
          <p>収集した個人情報は、以下の目的で利用いたします。</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>お問い合わせへの回答</li>
            <li>サービスの改善</li>
            <li>統計データの作成（個人を特定できない形式）</li>
          </ul>

          <h2 className="text-xl font-bold mt-8">3. 個人情報の第三者提供</h2>
          <p>法令に基づく場合を除き、個人情報を第三者に提供することはありません。</p>

          <h2 className="text-xl font-bold mt-8">4. アクセス解析ツールについて</h2>
          <p>当サイトでは、Googleアナリティクスを利用してアクセス情報を収集しています。Googleアナリティクスはデータ収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。</p>
          <p>Cookieを無効にすることで収集を拒否できます。お使いのブラウザの設定をご確認ください。Googleアナリティクスの利用規約については、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google アナリティクス利用規約</a>をご覧ください。</p>

          <h2 className="text-xl font-bold mt-8">5. 広告について</h2>
          <p>当サイトでは、第三者配信の広告サービスを利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。</p>

          <h2 className="text-xl font-bold mt-8">6. アフィリエイトプログラムについて</h2>
          <p>当サイトは、各種アフィリエイトプログラムに参加しています。当サイトを経由して商品・サービスを購入された場合、当サイトに紹介料が支払われることがあります。</p>

          <h2 className="text-xl font-bold mt-8">7. 免責事項</h2>
          <p>当サイトに掲載されている情報の正確性には万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について、当サイトは責任を負いません。</p>

          <h2 className="text-xl font-bold mt-8">8. 著作権について</h2>
          <p>当サイトに掲載されている文章・画像等の著作物は、著作権法により保護されています。無断転載・複製はお断りいたします。</p>

          <h2 className="text-xl font-bold mt-8">9. プライバシーポリシーの変更</h2>
          <p>当サイトは、個人情報に関する法令等の変更に伴い、本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じます。</p>

          <p className="text-gray-500 mt-8">制定日: 2026年4月1日</p>
        </div>
      </div>
    </>
  );
}
