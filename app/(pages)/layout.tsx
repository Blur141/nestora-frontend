import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
