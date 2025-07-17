export default function Hero() {
  return (
    <div className="w-full bg-white justify-self-center">
      <div className="w-full mt-8  justify-self-center">
        <h1 className="text-center sm:font-medium font-extralight text-2xl">
          {" "}
          Embrace the <span className="text-[#E3473C]">festive spirit!</span>
        </h1>
        <div className="flex justify-center mt-4">
          {" "}
          <button className="bg-[#E3473C] text-[12px]  text-white rounded-md px-4 py-2 ">
            Link to online version of the email.
          </button>
        </div>
        <div className="mt-6 w-[80%] mx-auto text-sm sm:text-base flex sm:w-[50%]  justify-center items-center gap-4">
          <p>Specials </p>
          <p>Holiday edition</p>
          <p>Get in touch</p>
        </div>
        <div className="justify-self-center mt-4  flex justify-center w-full">
          <img
            className="w-full sm:w-[70%] rounded-sm"
            src="/bg.png"
            alt="Background"
          />
        </div>
        <div className="w-full mt-6 flex flex-col justify-center items-center">
          <h1 className="font-extralight text-xl sm:text-2xl ">
            Festive Origins and Traditions
          </h1>
          <p className="text-center text-sm sm:text-base  w-[80%] sm:w-[70%] mt-4">
            Discover the roots of our cherished festive customs and the
            significance behind them. From ornaments to festive foods, uncover
            the stories that have been passed down through generations.
          </p>
        </div>
      </div>
    </div>
  );
}
