import Image from "next/image";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ objectId: string }>;
}) {
  const { objectId } = await params;
  const res = await fetch(
    ` https://jointedwound-us.backendless.app/api/data/Articles/${objectId}?loadRelations=category`
  );
  const data: {
    image: string;
    title: string;
    content: string;
    category: { name: string };
  } = await res.json();

  console.log(data);

  return (
    <section className="w-full max-w-[1100px] mx-auto pt-15">
      <div className="w-full h-96 relative">
        <Image
          src={data.image}
          alt="Hero image"
          fill
          className="object-cover"
        />
      </div>
      <span className="block py-2 px-4 text-sm border bg-white mt-4 w-fit">
        {data.category.name}
      </span>
      <h2 className="mt-8 text-4xl font-extrabold">{data.title}</h2>
      <p className="mt-4">
        {data.content} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Exercitationem neque quia explicabo cumque animi fugit modi aliquam,
        adipisci itaque asperiores aspernatur veritatis suscipit magnam sequi
        dolore consectetur ex dolorem repellat? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Esse voluptatum nulla temporibus obcaecati
        soluta, aliquid autem sed eveniet. Iusto cumque provident ipsa delectus
        ad, libero dolorum dolores qui temporibus enim.
      </p>
    </section>
  );
}
