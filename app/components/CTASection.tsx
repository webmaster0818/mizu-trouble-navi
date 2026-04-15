import CTAButton from "./CTAButton";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">水のトラブルでお困りですか？</h2>
        <p className="text-lg mb-8 opacity-90">24時間365日対応の業者に今すぐ相談できます。見積もり無料。</p>
        <CTAButton text="今すぐ無料相談する" />
      </div>
    </section>
  );
}
