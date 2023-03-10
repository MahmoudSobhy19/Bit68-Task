import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <div className="flex justify-center bg-secondary text-white">
        <div className="container mx-auto flex justify-center py-2">
          White Friday Sale Up To 70% Off
        </div>
      </div>

      <div className="container mx-auto flex justify-between py-4">
        <div className="flex items-center gap-2">
          <Image src="/map.svg" alt="logo" width={30} height={30} />
          <p>Store Locator</p>
        </div>

        <div className="w-[50%] relative">
          <input
            className="w-full border-[1px] rounded-xl px-6 py-2"
            type="text"
            placeholder="Search"
          />
          <Image
            className="absolute top-[10px] right-6"
            src="/search.svg"
            alt="logo"
            width={20}
            height={20}
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <p className="text-secondary font-semibold">العربية</p>
          <Image src="/user.svg" alt="logo" width={30} height={30} />
          <Image src="/cart.svg" alt="logo" width={30} height={30} />
        </div>
      </div>

      <div className="flex justify-start bg-black text-white">
        <ul className="container mx-auto flex flex-wrap justify-start gap-8 py-2">
          <li>Top Deals</li>
          <li>Deals of the Day</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>New</li>
          <li>Brands</li>
          <li>Sports</li>
          <li>Accessories</li>
          <li className="text-[#ffd800]">Sale</li>
        </ul>
      </div>
    </header>
  );
}
