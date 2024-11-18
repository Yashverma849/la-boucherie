/*import TruncateText from "./TruncatedText";

export default function HomeMenu() {
  return (
    <div className="grid grid-cols-3 gap-4 pb-8">
      <div className="flex flex-col items-center p-6 bg-gray-200 border border-gray-200 transition-all rounded-xl aspect-square justify-between hover:bg-white hover:border-primary hover:border hover:shadow-2xl hover:shadow-black/50">
        <img
          src={"/Salad1.png"}
          alt=""
          width={150}
          height={50}
          className="aspect-square object-center"
        />
        <h4 className="text-2xl mt-6 font-medium">Pasta Salad</h4>
        <p className=" mt-4 text-base font-medium text-gray-400 text-justify">
          <TruncateText
            text={
              "Immerse your taste buds in a tantalizing ensemble of al dente rotini pasta, vibrant cherry tomatoes, crisp cucumber, red onions, and the subtle crunch of bell peppers. Drizzled with our signature red wine vinaigrette, crafted from extra-virgin olive oil, Dijon mustard, and a hint of garlic."
            }
            limit={19}
            className={" font-medium "}
          />
        </p>
        <button className="mt-6 bg-primary text-white text-xl font-medium px-8 py-2 rounded-full w-full text-center">
          Add to cart $5
        </button>
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-200 border border-gray-200 transition-all rounded-xl aspect-square justify-between hover:bg-white hover:border-primary hover:border hover:shadow-2xl hover:shadow-black/50">
        <img
          src={"/pizza.png"}
          alt=""
          width={150}
          height={50}
          className="aspect-square object-cover"
        />
        <h4 className="text-2xl mt-6 font-medium">Pasta Salad</h4>
        <p className=" mt-4 text-base font-medium text-gray-400 text-justify">
          <TruncateText
            text={
              "Immerse your taste buds in a tantalizing ensemble of al dente rotini pasta, vibrant cherry tomatoes, crisp cucumber, red onions, and the subtle crunch of bell peppers. Drizzled with our signature red wine vinaigrette, crafted from extra-virgin olive oil, Dijon mustard, and a hint of garlic."
            }
            limit={19}
            className={" font-medium "}
          />
        </p>
        <button className="mt-6 bg-primary text-white text-xl font-medium px-8 py-2 rounded-full w-full text-center">
          Add to cart $5
        </button>
      </div>
      <div className="flex flex-col items-center p-6 bg-gray-200 border border-gray-200 transition-all rounded-xl aspect-square justify-between hover:bg-white hover:border-primary hover:border hover:shadow-2xl hover:shadow-black/50">
        <img
          src={"/Pasta2.png"}
          alt=""
          width={150}
          height={50}
          className="aspect-square object-cover"
        />
        <h4 className="text-2xl mt-6 font-medium">Pasta Salad</h4>
        <p className=" mt-4 text-base font-medium text-gray-400 text-justify">
          <TruncateText
            text={
              "Immerse your taste buds in a tantalizing ensemble of al dente rotini pasta, vibrant cherry tomatoes, crisp cucumber, red onions, and the subtle crunch of bell peppers. Drizzled with our signature red wine vinaigrette, crafted from extra-virgin olive oil, Dijon mustard, and a hint of garlic."
            }
            limit={19}
            className={" font-medium "}
          />
        </p>
        <button className="mt-6 bg-primary text-white text-xl font-medium px-8 py-2 rounded-full w-full text-center">
          Add to cart $5
        </button>
      </div>
    </div>
  );
}
*/
import TruncateText from "./TruncatedText";

const products = [
  {
    name: "Pasta Salad",
    image: "/Salad1.png",
    description:
      "Immerse your taste buds in a tantalizing ensemble of al dente rotini pasta, vibrant cherry tomatoes, crisp cucumber, red onions, and the subtle crunch of bell peppers. Drizzled with our signature red wine vinaigrette, crafted from extra-virgin olive oil, Dijon mustard, and a hint of garlic.",
    price: "$5",
  },
  {
    name: "Pizza",
    image: "/pizza.png",
    description:
      "A delicious pizza topped with fresh mozzarella, tomatoes, basil, and a touch of olive oil. Perfect for pizza lovers looking for a classic, satisfying bite.",
    price: "$8",
  },
  {
    name: "Red Pasta",
    image: "/Pasta2.png",
    description:
      "This pasta features a rich and creamy sauce with roasted garlic, sun-dried tomatoes, and a blend of Parmesan and mozzarella cheese. A perfect dish for a comforting meal.",
    price: "$7",
  },
];

export default function HomeMenu() {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="grid xl:grid-cols-3 gap-4 pb-8 max-w-6xl">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-200 border border-gray-200 transition-all rounded-xl aspect-square justify-between hover:bg-white hover:border-primary hover:border hover:shadow-2xl hover:shadow-black/50"
          >
            <img
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="aspect-square object-center"
            />
            <h4 className="text-2xl mt-6 font-medium">{product.name}</h4>
            <p className="mt-4 text-base font-medium text-gray-400 text-justify">
              <TruncateText
                text={product.description}
                limit={19}
                className={"font-medium"}
              />
            </p>
            <button className="mt-6 bg-primary text-white text-xl font-medium px-8 py-2 rounded-full w-full text-center">
              Add to cart {product.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
