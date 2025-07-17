export default function Blogs() {
  return (
    <div className="w-full bg-white justify-self-center mt-8">
      <div className="w-[70%] mx-auto">
        <h1 className="text-center text-4xl">Blogs</h1>
        <div className="w-full flex flex-col gap-10 sm:grid sm:gap-8  lg:grid mt-4 lg:gap-10   justify-center items-center grid-cols-3 grid-rows-2 ">
          <div className="">
            <img src="/grid1.png" alt="Background" className="w-full h-full" />
            <h1 className="mt-4 sm:text-base lg:text-lg">Festive Treats</h1>
            <p className="mt-4 text-sm  lg:h-[70px]">
              Explore the rich variety of holiday treats, from gingerbread
              cookies to fruitcake, and learn about their origins.
            </p>
          </div>
          <div className="">
            <img src="/grid2.png" alt="Background" className="w-full h-full" />
            <h1 className="mt-4 sm:text-base lg:text-lg">Warm Beverages</h1>
            <p className="mt-4 text-sm  lg:h-[70px]">
              Dive into the warm and cozy world of festive drinks. Whether it's
              hot cocoa or mulled wine, there's a story behind
            </p>
          </div>
          <div>
            <img src="/grid3.png" alt="Background" className="w-full h-full" />
            <h1 className="mt-4 sm:text-base lg:text-lg">
              Sparkling Adornments
            </h1>
            <p className="mt-4 text-sm  lg:h-[70px]">
              Unveil the history of festive jewelry and how these shimmering
              pieces became a part of our celebrations.
            </p>
          </div>
          <div>
            <img src="/grid4.png" alt="Background" className="w-full h-full" />
            <h1 className="mt-4 sm:text-base lg:text-lg">
              Winter Celebrations
            </h1>
            <p className="mt-4 text-sm  lg:h-[70px]">
              Delve into the diverse ways people around the world come together
              to celebrate this joyful season.
            </p>
          </div>
          <div>
            <img src="/grid5.png" alt="Background" className="w-full h-full" />
            <h1 className="mt-4 sm:text-base lg:text-lg">Thoughtful Gifting</h1>
            <p className="mt-4 text-sm  lg:h-[70px]">
              Explore the tradition of gifting and how it evolved over time,
              becoming an integral part of our festive rituals.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#E3473C] text-white mx-auto text-center mt-8  sm:w-[70%] rounded-sm  py-10">
        <h1 className="text-center text-4xl">Blogs</h1>
        <p className="mt-6 w-[80%] sm:w-[70%] lg:w-[60%] text-center mx-auto">
          Delve deeper into the origins of holiday traditions. From ancient
          customs to modern-day practices, discover how they've shaped our
          festive celebrations today.
        </p>
      </div>
    </div>
  );
}
