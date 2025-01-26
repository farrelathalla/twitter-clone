"use client";
import WhoToFollow from "@/components/WhoToFollow";

const page = () => {
  return (
    <main>
      <div className="grid lg:grid-cols-[65%_35%] gap-8 pl-24 pr-8 md:pr-20 lg:pr-24 py-2">
        <div className="flex flex-col"></div>

        {/* Right Home */}
        <div className="lg:block hidden">
          <input
            type="text"
            placeholder="Search"
            value={""}
            onChange={() => {}}
            className="py-1 md:py-3 pl-6 pr-12 bg-black border-[1px] border-grey_disable rounded-full w-full text-sm font-extralight text-grey_disable focus:outline-blue_twitter"
          />
          <h1 className="font-black mt-10 text-xl"> What's happening </h1>
          <div className="mt-5 flex flex-col">
            <p className="text-grey_disable text-xs">Music Trending</p>
            <h3 className="font-semibold">#GaramDanMadu</h3>
            <p className="text-grey_disable text-xs">7,856 posts</p>
          </div>
          <div className="mt-5 flex flex-col">
            <p className="text-grey_disable text-xs">Sports Trending</p>
            <h3 className="font-semibold">Shin Tae Yong</h3>
            <p className="text-grey_disable text-xs">1,423 posts</p>
          </div>
          <div className="mt-5 flex flex-col">
            <p className="text-grey_disable text-xs">Trending in Indonesia</p>
            <h3 className="font-semibold">Besok Senin</h3>
            <p className="text-grey_disable text-xs">123 posts</p>
          </div>
          <div className="mt-5 flex flex-col">
            <p className="text-grey_disable text-xs">Trending in Indonesia</p>
            <h3 className="font-semibold">NextJS Project</h3>
            <p className="text-grey_disable text-xs">2,523 posts</p>
          </div>
          <h1 className="font-black mt-10 text-xl"> Who to follow </h1>
          <div className="flex flex-col">
            {/* Dummy Data */}
            <WhoToFollow
              image="placeholder.jpeg"
              fullname="Steve Lauda - Design Partner"
              username="stevelauda_"
              followStatus={false}
            />
            <WhoToFollow
              image="placeholder.jpeg"
              fullname="Steve Lauda - Design Partner"
              username="stevelauda_"
              followStatus={true}
            />
          </div>

          <p className="text-sm text-grey_disable mt-20"> Made by Frallex </p>
        </div>
      </div>
    </main>
  );
};

export default page;
