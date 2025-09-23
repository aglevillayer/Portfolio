import "./globals.css";
import NavbarLateral from "@/components/NavbarLateral";
import NavbarHeader from "@/components/NavbarHeader";
import NavbarFooter from "@/components/NavbarFooter";
import { LightModeProvider } from "@/context/LightModeContext";
import { FrModeProvider } from "@/context/FrModeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* // TODO: modifier flavicon */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className="flex min-h-full">
        <LightModeProvider>
          <FrModeProvider>
            <NavbarHeader className="md:hidden" />
            <main className="grow flex flex-row">
              <NavbarLateral className="hidden md:block w-3xs mr-10" />
              <div>{children}</div>
            </main>
            <NavbarFooter className="md:hidden" />
          </FrModeProvider>
        </LightModeProvider>
      </body>
    </html>
  );
}
