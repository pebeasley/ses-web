import ContactForm from "@/features/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-base-200 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-success">
            Contact Southern Edge Services
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-primary md:text-6xl">
            Get reliable technology help without the runaround.
          </h1>
          <p className="mt-6 text-xl leading-8 text-base-content/70">
            Send a few details about what you need and we will follow up with a
            practical next step for your home or business.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
