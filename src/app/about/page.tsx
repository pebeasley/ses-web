import PageHeader from "@/components/PageHeader";
import Image from "next/image";

type AboutPageItems = {
  text: string;
  imgUrl: string;
};

const aboutParagraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper ligula sit amet nisi semper, in finibus justo congue. Maecenas eget turpis a metus scelerisque cursus. Morbi blandit nulla nulla, semper maximus augue sollicitudin aliquam. Donec pretium tristique rhoncus. Sed justo elit, interdum sed diam eu, egestas consectetur turpis. Etiam feugiat libero at cursus scelerisque. Integer tincidunt tortor mollis posuere pellentesque. Donec porta accumsan metus ut tempus. Mauris massa leo, varius in ex nec, mattis eleifend erat. Quisque gravida semper ex non tempus. In imperdiet elit sed odio fringilla ultrices. Vivamus vehicula arcu eu nulla ullamcorper pellentesque. Vivamus facilisis, ipsum eget ornare viverra, tortor nunc suscipit risus, placerat porta velit odio et purus. Maecenas ac nulla egestas, molestie elit ut, tincidunt massa. Sed nec varius purus.",
  "Praesent vulputate est id ex pretium posuere tincidunt ac risus. Vestibulum sit amet pretium augue. Donec non ante sem. Sed id urna sollicitudin nulla tempus dictum. Phasellus luctus sagittis tellus, eget rhoncus mauris dignissim placerat. Aliquam erat volutpat. Aenean sed nibh vulputate, suscipit metus molestie, pretium enim. Etiam id massa venenatis, sollicitudin libero finibus, scelerisque eros. Pellentesque imperdiet nisl diam. Ut hendrerit, ligula et vestibulum convallis, nunc justo cursus lectus, sed rhoncus leo mi in justo. Nunc aliquet a turpis ac tempus. Aliquam lectus sapien, laoreet et interdum non, venenatis in orci.",
];

const aboutPageItems: AboutPageItems[] = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh est, finibus et malesuada et, venenatis ac risus. Donec ut elit lacus. Suspendisse maximus laoreet metus, a finibus metus faucibus sed. Vivamus non mauris massa. Phasellus quis bibendum sem, id placerat dolor. Nulla euismod diam massa, sit amet pharetra erat vulputate in. Maecenas vulputate viverra elementum.",
    imgUrl: "https://picsum.photos/400/400",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh est, finibus et malesuada et, venenatis ac risus. Donec ut elit lacus. Suspendisse maximus laoreet metus, a finibus metus faucibus sed. Vivamus non mauris massa. Phasellus quis bibendum sem, id placerat dolor. Nulla euismod diam massa, sit amet pharetra erat vulputate in. Maecenas vulputate viverra elementum.",
    imgUrl: "https://picsum.photos/400/400",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh est, finibus et malesuada et, venenatis ac risus. Donec ut elit lacus. Suspendisse maximus laoreet metus, a finibus metus faucibus sed. Vivamus non mauris massa. Phasellus quis bibendum sem, id placerat dolor. Nulla euismod diam massa, sit amet pharetra erat vulputate in. Maecenas vulputate viverra elementum.",
    imgUrl: "https://picsum.photos/400/400",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col gap-24">
      <div className="flex flex-row items-center justify-center w-full">
        <PageHeader text="About Us" />
      </div>
      <div className="flex flex-row flex-1 gap-20">
        <div className="flex flex-col flex-1 gap-8">
          {aboutParagraphs.map((p, index) => (
            <p className="text-accent-content" key={`about-paragraph-${index}`}>
              {p}
            </p>
          ))}
        </div>
        <div className="flex flex-col">
          <Image
            src="https://picsum.photos/id/4/1000/1000"
            height={800}
            width={600}
            alt="About Image"
          />
        </div>
      </div>
      {aboutPageItems.map((item, idx) => (
        <div
          key={`front-page-item-${idx}`}
          className={`p-24 flex flex-row gap-8 items-center rounded-xl shadow-2xl `.concat(
            idx % 2 === 0 ? "bg-primary" : "bg-secondary",
          )}
        >
          <div>
            <p className="text-3xl text-white">{item.text}</p>
          </div>
          <div className="">
            <Image
              src={item.imgUrl}
              alt={`front-page-item-${idx}`}
              width={1000}
              height={1000}
              className="rounded-full border-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
