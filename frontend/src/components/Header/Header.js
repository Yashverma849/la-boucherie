import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header
      className="flex justify-between items-center"
      style={{ paddingLeft: "32px", paddingRight: "32px", paddingTop: "8px" }}
    >
      <nav className="flex justify-start items-center gap-8 text-lg text-gray-500 font-semibold">
        <Link
          className="text-primary text-3xl font-semibold flex gap-3 items-center"
          to="/"
        >
          <img
            src="/La bushere.png"
            style={{ objectFit: "contain" }}
            width={100}
            height={100}
            alt="Salad"
          />
        </Link>
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/menu" className="">
          Menu
        </Link>
        <Link to="/aboutus">About</Link>
        <Link to="/contactus">Contact</Link>
      </nav>

      <nav className="flex gap-4 text-lg font-semibold items-center justify-end">
        {/* Always show the cart icon */}
        <Link
          to="/cart"
          className="relative flex items-center justify-center gap-2 text-2xl text-gray-700"
        >
          {/* Cart icon using Heroicons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-700" // Set both width and height to make the icon more centered
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18l-2 14H5L3 3zm1 0l2 14h12l2-14"
            />
          </svg>

          {/* Cart Count Badge */}
          {cart.totalCount > 0 && (
            <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex justify-center items-center">
              {cart.totalCount}
            </span>
          )}
        </Link>

        {/* Handle login/logout */}
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button
              onClick={logout}
              className="bg-primary px-8 py-2 text-white rounded-full hover:bg-secondary transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-primary px-8 py-2 text-white rounded-full hover:border-primary hover:text-primary hover:border hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/25"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="border-primary border px-8 py-2 text-primary rounded-full hover:bg-primary hover:text-white transition-all hover:shadow-2xl hover:shadow-black/25"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
