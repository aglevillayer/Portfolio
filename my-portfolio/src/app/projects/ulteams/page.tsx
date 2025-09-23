import Link from "next/link";

export default function page() {
  return (
    <div className="main-container">
      <section className="section-container">
        <h1 className="section-title">Ulteams</h1>
      </section>
      <div>
        <p className="mb-10">Sorry, this page is in development</p>
        <div className="flex gap-2">
          <p>In the meantime, you can see the app </p>
          <Link
            className="app-link"
            href="https://ulteams.app/"
            target="_blank"
          >
            here
          </Link>
        </div>
      </div>
    </div>
  );
}
