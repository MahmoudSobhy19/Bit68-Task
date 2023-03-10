import Head from "next/head";
import Image from "next/image";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import Discount from "../components/Discount";
import Item from "../components/Item";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bit68</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Slider />
      <Categories />
      <Image
        src="/slider2.png"
        className="w-full"
        width={1000}
        height={1000}
        alt="slider"
      />
      <Brands />
      <Image
        src="/slider3.png"
        className="w-full"
        width={1000}
        height={1000}
        alt="slider"
      />
      <Item title="Featured items" type="featured" />
      <Item title="Most Viewed items" type="most_viewed" />
      <Discount />
      <Footer />
    </div>
  );
}
