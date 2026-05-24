// import ContactDialog from "@/features/contact/ContactDialog";
// import Image from "next/image";

// type FrontPageItems = {
//   text: string;
//   imgUrl: string;
// };

// const frontPageItems: FrontPageItems[] = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh est, finibus et malesuada et, venenatis ac risus. Donec ut elit lacus. Suspendisse maximus laoreet metus, a finibus metus faucibus sed. Vivamus non mauris massa. Phasellus quis bibendum sem, id placerat dolor. Nulla euismod diam massa, sit amet pharetra erat vulputate in. Maecenas vulputate viverra elementum.",
//     imgUrl: "https://picsum.photos/400/400",
//   },
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh est, finibus et malesuada et, venenatis ac risus. Donec ut elit lacus. Suspendisse maximus laoreet metus, a finibus metus faucibus sed. Vivamus non mauris massa. Phasellus quis bibendum sem, id placerat dolor. Nulla euismod diam massa, sit amet pharetra erat vulputate in. Maecenas vulputate viverra elementum.",
//     imgUrl: "https://picsum.photos/400/400",
//   },
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh est, finibus et malesuada et, venenatis ac risus. Donec ut elit lacus. Suspendisse maximus laoreet metus, a finibus metus faucibus sed. Vivamus non mauris massa. Phasellus quis bibendum sem, id placerat dolor. Nulla euismod diam massa, sit amet pharetra erat vulputate in. Maecenas vulputate viverra elementum.",
//     imgUrl: "https://picsum.photos/400/400",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="flex flex-col gap-24">
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage:
//             "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
//         }}
//       >
//         <div className="hero-overlay"></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-lg">
//             <h1 className="mb-5 text-7xl font-bold">Southern Edge Services</h1>
//             </div>
//           <div className="max-w-md">
//             <p className="mb-5 text-2xl">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <ContactDialog />
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto">
//         <div className="flex flex-col gap-24">
//           {frontPageItems.map((item, idx) => (
//             <div
//               key={`front-page-item-${idx}`}
//               className={`p-24 flex flex-row gap-8 items-center rounded-xl shadow-2xl `.concat(
//                 idx % 2 === 0 ? "bg-primary" : "bg-secondary"
//               )}
//             >
//               <div>
//                 <p className="text-3xl text-white">{item.text}</p>
//               </div>
//               <div className="">
//                 <Image
//                   src={item.imgUrl}
//                   alt={`front-page-item-${idx}`}
//                   width={1000}
//                   height={1000}
//                   className="rounded-full border-0"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import ContactDialog from "@/features/contact/ContactDialog";

const services = [
  {
    title: "Computer Support",
    image: "/services/computer-support.jpg",
    icon: "▣",
    description:
      "Setup, repairs, upgrades, cleanup, and troubleshooting for home and business computers.",
  },
  {
    title: "Networking & Wi-Fi",
    image: "/services/networking.jpg",
    icon: "⌁",
    description:
      "Router setup, Wi-Fi coverage fixes, cabling, access points, and small-office networks.",
  },
  {
    title: "Security Systems",
    image: "/services/security.jpg",
    icon: "◉",
    description:
      "Camera setup, smart security devices, monitoring configuration, and system support.",
  },
  {
    title: "Setup & Troubleshooting",
    image: "/services/setup.jpg",
    icon: "✓",
    description:
      "Printers, email, devices, software, smart home tech, and everyday IT problems solved.",
  },
];

const trustItems = [
  { label: "Locally Owned", icon: "⌖" },
  { label: "Home & Business", icon: "▣" },
  { label: "Free Estimates", icon: "$" },
];

export default function Home() {
  return (
    <main className="bg-base-100 text-base-content">
      <section
        className="relative min-h-[720px] bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 13, 28, 0.94) 0%, rgba(2, 13, 28, 0.78) 42%, rgba(2, 13, 28, 0.34) 100%), url('/hero-it-services.jpg')",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <div className="text-2xl font-black tracking-wide">
            SOUTHERN EDGE
            <span className="block text-sm font-bold tracking-[0.3em] text-success">
              SERVICES
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a href="#services" className="hover:text-success">
              Services
            </a>
            <a href="/about" className="hover:text-success">
              About Us
            </a>
            <a href="#reviews" className="hover:text-success">
              Reviews
            </a>
            <a href="#areas" className="hover:text-success">
              Service Areas
            </a>
            <a href="/contact" className="hover:text-success">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <ContactDialog />
            <a href="tel:+12515096035" className="font-bold">
              (251) 509-6035
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Reliable IT Services for Homes & Businesses
            </h1>

            <p className="mt-8 max-w-2xl text-2xl text-white/90">
              Local computer, networking, security, setup, and troubleshooting
              support.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ContactDialog />
              <a
                href="tel:+12515096035"
                className="btn btn-outline btn-lg border-white px-10 text-white hover:bg-white hover:text-primary"
              >
                Call Now
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3"></div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-success">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">
              Services That Keep Your Technology Working
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-success" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
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

                  <h3 className="text-2xl font-black text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-base-content/70">
                    {service.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex font-bold text-success hover:text-primary"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
