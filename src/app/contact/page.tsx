import ContactForm from "@/features/contact/ContactForm";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col gap-24">
      <div className="flex flex-row items-center justify-center w-full">
        <PageHeader text="Contact Us" />
      </div>
      <div className="flex flex-col md:flex-row gap-24">
        <p>
          freestar freestar Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam nibh est, finibus et malesuada et, venenatis ac risus.
          Donec ut elit lacus. Suspendisse maximus laoreet metus, a finibus
          metus faucibus sed. Vivamus non mauris massa. Phasellus quis bibendum
          sem, id placerat dolor. Nulla euismod diam massa, sit amet pharetra
          erat vulputate in. Maecenas vulputate viverra elementum.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
