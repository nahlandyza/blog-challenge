export default function CategoriesPage() {
  const categories = [
    {
      name: "Mental Game",
      description:
        "Focuses on mindset, concentration, and the psychological aspects of badminton.",
    },
    {
      name: "Technique & Skills",
      description:
        "Covers technical aspects of badminton including footwork, grip, and shot execution.",
    },
    {
      name: "Team Play",
      description:
        "Dedicated to doubles strategies, communication, and working effectively with a partner.",
    },
    {
      name: "Training & Practice",
      description:
        "Includes tips on training routines, drills, fitness, and regular practice.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto py-12  md:px-11 pt-27">
      <h2 className="text-4xl font-bold text-[#2E7D32] mb-10 text-center">
        Playminton Categories
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="p-6 border border-gray-200 rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-black mb-2">
              {category.name}
            </h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
