import Link from "next/link";
export default function AboutPage() {
  return (
    <section className="min-h-screen w-full max-w-[1100px] mx-auto gap-x-4 gap-y-8  md:px-11 pt-27">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-6">
          🏸 About Playminton
        </h2>

        <div className="text-gray-700 space-y-6 text-lg">
          <div>
            <h3 className="text-xl font-semibold text-[#4CAF50] mb-2">
              How It Started
            </h3>
            <p>
              Playminton began as a space to share badminton thoughts, tips, and
              fun stories. What started as a simple idea turned into a passion
              project to celebrate this amazing sport.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#4CAF50] mb-2">
              What We’re About
            </h3>
            <p>
              We’re here to connect players, inspire beginners, and keep the
              love of badminton alive with helpful and engaging content.
            </p>
          </div>

          <Link href="https://www.instagram.com">
            <button className="mt-3 mb-6 px-6 py-3 bg-[#2E7D32] text-white font-semibold rounded-full hover:bg-black transition-colors">
              Follow us on Instagram
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
