import Link from "next/link";

function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className="flex gap-x-10">
        <Link href="/ulteams">Ulteams</Link>
        <Link href="/ultifit">Ultifit</Link>
      </nav>
      {children}
    </div>
  );
}

export default ProjectsLayout;
