export default function Footer() {
  return (
    <div className="mt-6 border-t-[1px] border-b-[1px]  border-gray-300">
      <div className="container px-4 md:px-0 mx-auto py-10 flex flex-col md:flex-row justify-between gap-8">
        <ul className="w-[50%] text-sm flex flex-col gap-2">
          <li className="text-xl font-bold">Active Trending</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <ul className="w-[50%] text-sm flex flex-col gap-2">
          <li className="text-xl font-bold">About Us</li>
          <li>About Company</li>
          <li>Connect Us</li>
          <li>Our Branches</li>
        </ul>
      </div>

      <div className="w-full border-t-[1px] border-gray-300 py-6">
        <div className="w-full container mx-auto text-center text-sm">
          Copyright © 2022 All Rights Reserved
        </div>
      </div>
    </div>
  );
}
