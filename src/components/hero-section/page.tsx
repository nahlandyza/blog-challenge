import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen px-6 md:px-11 pt-27 pb-3 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Text Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[#2E7D32] text-5xl md:text-7xl font-bold">
          PLAY
          <br />
          MINTON
        </h1>
        <p className="mt-4 text-[#2E7D32] text-base md:text-xl font-normal max-w-md">
          A space for badminton thoughts, tips, and passion.
        </p>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        <div className="relative w-full h-36 rounded-3xl overflow-hidden">
          <Image
            src="/cock3.png"
            alt="Racket Photo"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-36 rounded-3xl overflow-hidden">
          <Image
            src="/shuttlecock.png"
            alt="Green Cock"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative col-span-2 w-full h-40 rounded-3xl overflow-hidden">
          <Image
            src="/badminton.png"
            alt="Racket Photo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
