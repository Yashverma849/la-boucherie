export default function HomeMenuTitle({ subHeader, Header, subSubHeader }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center pt-6 px-4 md:px-16">
      {/* Left Image */}
      <div className="">
        <img
          src={"/salad1.png"}
          style={{ objectFit: "contain" }}
          width={200}
          height={100}
          alt={"Salad"}
        />
      </div>

      {/* Center Text */}
      <div className="text-center md:pt-12">
        <h3 className="text-2xl text-gray-500 uppercase font-semibold">
          {subHeader}
        </h3>
        <h2 className="text-5xl text-primary italic font-extrabold mt-2">
          {Header}
        </h2>
        <h4 className="text-gray-500 text-lg mt-3">{subSubHeader}</h4>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={"/Pasta2.png"}
          style={{ objectFit: "contain" }}
          width={200}
          height={100}
          alt={"Pasta"}
        />
      </div>
    </div>
  );
}
