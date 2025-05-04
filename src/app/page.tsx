import HeroSection from "@/components/hero-section/page";
import BlogPage from "./blog/page";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BlogPage />
      <div className="text-center mt-2 mb-5">
        <p className="text-xl font-semibold">
          Want more badminton in your life?
        </p>
        <Link href="https://www.instagram.com">
          <button className="mt-3 mb-6 px-6 py-3 bg-[#2E7D32] text-white font-semibold rounded-full hover:bg-black transition-colors">
            Follow us on Instagrams
          </button>
        </Link>
      </div>
    </main>
  );
}
