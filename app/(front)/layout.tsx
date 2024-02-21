import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-gradient-to-r from-blue-600 to-pink-600">
      <Navbar />
      <main className="pt-40 pb-20 bg-gradient-to-r from-blue-600 to-pink-600">
        {children}
      </main>
      <Footer />
    </div>
  );
}
