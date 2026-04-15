import Link from "next/link";

export default function CTAButton({ text = "無料見積もりを依頼する", href = "/ranking/", className = "" }: { text?: string; href?: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`inline-block bg-accent text-white font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition shadow-lg ${className}`}
    >
      {text}
    </Link>
  );
}
