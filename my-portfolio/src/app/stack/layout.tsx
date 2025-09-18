import Link from "next/link";

function SkillsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>
        <Link href="/react">React</Link>
        <Link href="/nodejs">NodeJS</Link>
      </nav>
      {children}
    </div>
  );
}

export default SkillsLayout;
