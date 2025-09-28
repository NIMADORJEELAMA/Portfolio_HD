import { brands } from "@/lib/constants";

export default function LogoCloud() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="mx-auto grid w-full gap-6 px-2 grid-cols-3 lg:grid-cols-5 lg:w-4/5 ">
        {brands.map((brand) => {
          const Icon = brand.icon;
          return (
            <div
              key={brand.id}
              className="flex items-center justify-center rounded-3xl border bg-white/5 py-2 px-0"
            >
              <Icon className="h-8 w-8" style={{ color: brand.color }} />
              <span className="ml-2 text-sm">{brand.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
