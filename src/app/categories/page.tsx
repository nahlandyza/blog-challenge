import Image from "next/image";
export default function AboutSectionPage() {
  return (
    <section id="about" className="min-h-screen bg-[#1E1E1E] pt-24 px-4">
      <h2 className="text-center text-4xl font-bold mb-2 text-white">
        About <span className="text-[#FF69B4]">me!</span>
      </h2>
      <div className="h-1 w-32 bg-[#FF69B4] mb-6 mx-auto" />
      <h3 className="text-[#B0B0B0] text-xl pt-2.5 mb-9 text-center">
        Curious about me? Here you have it:
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="relative w-60 h-60 mx-auto border-4 border-[#FF69B4] rounded-full">
          <Image
            src="/picture-profile.png"
            alt="profile picture"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Text Content */}
        <p className="md:col-span-2 text-[#F5F5F5] text-lg md:text-xl leading-relaxed text-justify px-2">
          Hi! I found myself drawn to the creativity and logic of building
          websites. I’m a Chemistry graduate with a newfound passion for web
          development. While my academic background taught me precision and
          critical thinking, I’m now diving into the world of front-end and
          full-stack development — learning by doing, experimenting with code,
          and slowly crafting my place in tech, one project at a time.
        </p>
      </div>
    </section>
  );
}
