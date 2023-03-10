import Image from "next/image";

export default function Discount() {
  return (
    <div className="container mx-auto mb-10 py-4 px-4 md:px-0 my-6 flex flex-col md:flex-row justify-between gap-8">
      <Image
        src="/discount1.png"
        className="w-full md:w-[48%]"
        width={1000}
        height={1000}
        alt="slider"
      />

      <Image
        src="/discount2.png"
        className="w-full md:w-[48%]"
        width={1000}
        height={1000}
        alt="slider"
      />
    </div>
  );
}
