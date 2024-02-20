import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-zinc-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-zinc-100">{children}</main>
      <Footer />
    </div>
  );
}
