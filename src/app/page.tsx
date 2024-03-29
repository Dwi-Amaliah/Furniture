import Image from "next/image";
import Layout from "./components/Layout";
import Hero from "./components/page/Hero";
import Banner from "./components/page/Banner";

export default function Home() {
  return (
    <main className="bg-white/50">
      <Layout>
        {/* <Banner /> */}

        <Hero />

        <div className="p-32">
          <div className="grid grid-cols-3 justify-items-center">
            <div className="text-2xl text-center">
              <div className="mb-1">Lorem ipsum dolor</div>
              <div className="mb-1">sit amet consectetur</div>
              <div>Labore quia</div>
            </div>
            <div className="text-4xl text-center">
              <div className="mb-2">We Work to an</div>
              <div className="mb-2">Extremely High Standart</div>
              <div>of Customer Satisfaction</div>
            </div>
            <div className="text-2xl text-center">
              <div className="mb-1">Lorem ipsum dolor</div>
              <div className="mb-1">sit amet consectetur</div>
              <div>adipisicing elit</div>
            </div>
          </div>
        </div>

        <div className="px-16 pb-16">
          <div className="grid grid-flow-col justify-items-center">
            <div className="pr-10">
              <Image
                src="/gambar/minimalistdiningroom5.jpg"
                width={200}
                height={100}
                alt="mdr1"
                className="rounded-[20px] shadow shadow-slate-600"
              ></Image>
            </div>
            <div className="pr-10">
              <Image
                src="/gambar/badroom.jpg"
                width={200}
                height={100}
                alt="mdr2"
                className="rounded-[20px] shadow shadow-gray-800"
              ></Image>
            </div>
            <div className="pr-10">
              <Image
                src="/gambar/minimalistdiningroom9.jpg"
                width={200}
                height={100}
                alt="mdr3"
                className="rounded-[20px] shadow shadow-gray-800"
              ></Image>
            </div>
            <div className="pr-10">
              <Image
                src="/gambar/family room.jpg"
                width={200}
                height={100}
                alt="mdr4"
                className="rounded-[20px] shadow shadow-gray-800"
              ></Image>
            </div>
            <Image
              src="/gambar/minimalistdiningroom1.jpg"
              width={200}
              height={100}
              alt="mdr5"
              className="rounded-[20px] shadow shadow-gray-800"
            ></Image>
          </div>
        </div>

        {/* <section
          id="home"
          className="flex justify-between border-b-[5px] border-transparent  border-spacing-5"
        >
          <div className="flex-row px-28 py-20 space-y-10 bg-white/50">
            <div className="sm:text-4xl lg:text-6xl sm:pt-24  lg:pt-28">
              <div className="flex items-center">Heavy</div>
              <div className="flex items-center">Pendant</div>
              <div>Light</div>
            </div>
            <div className="sm:text-base lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
              dicta distinctio hic natus deleniti beatae facere cum sunt
              tempora!
            </div>
            <div className="ring-1 ring-slate-950 rounded-full w-32 text-center py-2 hover:text-cyan-950">
              <button>Shop Now</button>
            </div>
            <Image
              src={"/gambar/living1.jpg"}
              width={600}
              height={800}
              alt="lamp"
            ></Image>
          </div>
        </section>

        <section
          id="chair"
          className="flex justify-between border-b-[5px]  border-transparent mx-auto"
        >
          <Image
            src={"/gambar/c2.jpg"}
            width={500}
            height={200}
            alt="chair"
            className="py-2 bg-white"
          ></Image>
          <div className="flex-row px-16 space-y-10 bg-white">
            <div className="sm:text-4xl lg:text-6xl pt-52">
              <div className="flex items-center">Cirle</div>
              <div className="flex items-center">Wood</div>
              <div>Pre-Table</div>
            </div>
            <div className="sm:text-base lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
              dicta distinctio hic natus deleniti beatae facere cum sunt
              tempora!
            </div>
          </div>
          <div></div>
        </section>

        <section
          id="lamp"
          className="flex justify-between h-svh border-b-[5px] border-transparent mx-auto"
        >
          <div className="flex-row px-28 space-y-10 bg-white">
            <div className="sm:text-4xl lg:text-6xl pt-48">
              <div className="flex items-center">Lamp</div>
              <div className="flex items-center">Wood</div>
              <div>Pre-Table</div>
            </div>
            <div className="sm:text-base lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
              dicta distinctio hic natus deleniti beatae facere cum sunt
              tempora!
            </div>
          </div>
          <div>
            <Image
              src={"/gambar/l2.jpg"}
              width={550}
              height={600}
              alt="lamp"
              className="bg-white"
            ></Image>
          </div>
        </section>

        <section
          id="table"
          className="flex justify-between h-svh border-b-[5px] border-transparent"
        >
          <div>
            <Image
              src={"/gambar/t1.jpg"}
              width={570}
              height={550}
              alt="table"
              className=""
            ></Image>
          </div>
          <div className="flex-row px-10 space-y-10 bg-white">
            <div className="sm:text-4xl lg:text-6xl pt-48">
              <div className="flex items-center">Cirle</div>
              <div className="flex items-center">Wood</div>
              <div>Pre-Table</div>
            </div>
            <div className="sm:text-base lg:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
              dicta distinctio hic natus deleniti beatae facere cum sunt
              tempora!
            </div>
          </div>
        </section> */}

        {/* <section
          id="about"
          className="flex justify-between border-b-[5px] border-white"
        >
          <div className="px-40 py-20">
            <div className="text-center pb-14 text-4xl">About Us</div>
            <div className="text-justify text-lg ">
              At Abani Furniture, we understand that your home is a reflection
              of your personality and lifestyle. Therefore, we strive to offer a
              diverse range of furniture that caters to various tastes and
              preferences. Whether you are seeking modern minimalism, classic
              elegance, or eclectic designs, our extensive catalog is
              thoughtfully curated to inspire and enhance your living spaces. We
              prioritize sustainability in our manufacturing processes, using
              responsibly sourced materials to create durable and
              environmentally conscious furniture that stands the test of time.
              As a customer-centric company, we prioritize your satisfaction.
              Our commitment to excellence extends beyond our products to
              encompass a seamless shopping experience. Our knowledgeable and
              friendly customer service team is dedicated to assisting you at
              every step, from selecting the perfect piece to ensuring its safe
              and timely delivery to your doorstep. Join us on a journey of
              transforming your living spaces into havens of style and comfort
              with Abani Furniture – where quality meets craftsmanship, and
              every piece tells a unique story.
            </div>
          </div>
        </section> */}

        {/* Hero  */}
      </Layout>
    </main>
  );
}
