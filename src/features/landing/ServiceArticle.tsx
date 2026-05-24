import { Service } from "@/types/Service";

export default function ServiceArticle({ service }: { service: Service }) {
  return (
    <article
      key={service.title}
      className="overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm"
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      <div className="relative p-7 pt-10">
        <div className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-black text-white ring-4 ring-white">
          {service.icon}
        </div>

        <h3 className="text-2xl font-black text-primary">{service.title}</h3>
        <p className="mt-4 leading-7 text-base-content/70">
          {service.description}
        </p>
      </div>
    </article>
  );
}
