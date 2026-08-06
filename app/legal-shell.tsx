import Image from "next/image";
import Link from "next/link";

export function LegalShell({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legal-page">
      <nav className="legal-nav shell">
        <Link href="/" aria-label="Still home">
          <Image src="/app/icon.png" alt="" width={38} height={38} style={{ borderRadius: 10 }} unoptimized />
        </Link>
        <Link href="/">Back to Still ↗</Link>
      </nav>
      <header className="legal-hero shell">
        <p className="section-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      {children}
    </main>
  );
}
