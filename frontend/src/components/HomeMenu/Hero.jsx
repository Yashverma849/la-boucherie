import Right from "../Icons/Right";

export default function Hero() {
  return (
    <div className="hero flex flex-col md:flex-row items-center justify-center pb-20 px-4 pl-48">
      {/* Left Section - Text content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
        <h1 className="text-4xl font-bold">
          Everything <br /> is better <br /> with a{" "}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="text-lg font-medium text-gray-500 my-6">
          Pizza is the missing piece that makes everyday complete, a simple yet
          delicious joy in life!
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-primary p-2 text-lg font-semibold text-white rounded-full px-6 flex items-center uppercase">
            Order Now &nbsp; <Right />
          </button>
          <button className="p-2 text-lg font-semibold rounded-full px-6 border border-primary flex text-gray-600">
            Learn More &nbsp; <Right />
          </button>
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div className="flex items-center justify-center mt-8 md:mt-0">
        <div className="w-72 h-72">
          <img
            src={"/pizza.png"}
            alt={"Pizza"}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
