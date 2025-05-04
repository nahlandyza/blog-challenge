import Image from "next/image";
export default function HomePage() {
  return (
    <section className="min-h-screen grid grid-cols-2 mx-11">
      {/* for contain home */}
      {/* for text section */}
      <div className="text-7xl text-center font-bold my-auto mx-auto text-[#2E7D32]">
        <h1 className="">PLAY</h1>MINTON
        <p className="text-xl font-normal">
          A space for badminton thoughts, tips, and passion.
        </p>
      </div>
      {/* for picture */}
      <div className="gird grid-rows-2x border border-amber-600 my-auto">
        {/* for pic section 1 */}
        <div className="flex gap-7">
          <div className="w-[100%] h-36 relative ">
            <Image
              src="/cock3.png"
              alt="Racket Photo"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="w-[100%] h-36 relative">
            <Image
              src="/shuttlecock.png"
              alt="Racket with Cock Photo"
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          {/* for pic section 2 */}
        </div>
        <div className="w-[100%] h-40 relative mt-5">
          <Image
            src="/badminton.png"
            alt="Cock Pink Photo"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
