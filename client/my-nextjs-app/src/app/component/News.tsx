export default function News() {
  return (
    <div className="w-full mt-8">
      <h1 className="text-center text-4xl">News Section</h1>
      <div className="sm:flex w-[50%] mx-auto gap-10 mt-4">
        <div>
          <img
            className="w-[200px] h-[193px] lg:w-[300px] lg:h-[300px]"
            src="/newsimg1.svg"
          />

          <h1 className="mt-4 text-base lg:text-lg">Festive decor</h1>
          <p className="mt-4 text-sm">
            Get inspired by the latest trends in holiday decor and transform
            your home into a winter wonderland.
          </p>
        </div>
        <div>
          {" "}
          <img
            className="w-[200px] h-[193px] lg:w-[300px] lg:h-[300px]"
            src="/newsimg2.svg"
          />
          <h1 className="mt-4 text-base lg:text-lg">Joyful moments </h1>
          <p className="mt-4 text-sm">
            Celebrate the small moments that bring immense joy. From carol
            singing to tree decorating, relive the magic.
          </p>
        </div>
      </div>
    </div>
  );
}
