import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/Categories/1.png";
import img2 from "../assets/Images/Categories/2.png";
import img3 from "../assets/Images/Categories/3.png";
import img4 from "../assets/Images/Categories/4.png";
import img5 from "../assets/Images/Categories/5.png";

const categories = [
  { id: 1, name: "Women's Wear", image: img1, path: "/womens" },
  { id: 2, name: "Men's Wear", image: img2, path: "/mens" },
  { id: 3, name: "Kids Collection", image: img3, path: "/kids" },
  { id: 4, name: "Festive Wear", image: img4, path: "/festive-wear" },
  { id: 5, name: "Daily Essentials", image: img5, path: "/mens" },
];

const gradientOverlay = {
  background:
    "linear-gradient(to top, rgba(129,185,179,0.72) 0%, rgba(129,185,179,0.18) 45%, transparent 100%)",
};

const ArrowBtn = ({ hovered, featured = false }) => (
  <span
    className={`flex items-center justify-center rounded-full shadow-md flex-shrink-0 transition-all duration-300 ${
      featured ? "w-12 h-12" : "w-9 h-9"
    }`}
    style={{
      backgroundColor: hovered ? "#FFBE8A" : "#ffffff",
      transform: hovered ? "scale(1.1)" : "scale(1)",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={featured ? "w-6 h-6" : "w-4 h-4"}
      fill="none"
      viewBox="0 0 24 24"
      stroke={hovered ? "#fff" : "#374151"}
      strokeWidth={2.5}
      style={{
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "rotate(0deg)" : "rotate(-45deg)",
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </span>
);

const Card = ({ cat, className }) => {
  const [hovered, setHovered] = useState(false);
  const isFeatured = cat.id === 1;

  return (
    <Link
      to={cat.path}
      className={`relative overflow-hidden rounded-2xl cursor-pointer block ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={cat.image}
        alt={cat.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
      />
      <div className="absolute inset-0" style={gradientOverlay} />
      <div
        className={`absolute left-4 right-4 flex justify-between ${
          isFeatured ? "top-[320px] items-start" : "bottom-4 items-end"
        }`}
      >
        <div className="flex flex-col">
          {isFeatured && (
            <span className="mb-1 text-sm font-medium uppercase tracking-wider text-white drop-shadow">
              New Arrivals
            </span>
          )}
          <span
            className="text-white font-semibold drop-shadow transition-all duration-300"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: isFeatured
                ? hovered
                  ? "2rem"
                  : "1.75rem"
                : hovered
                  ? "1.2rem"
                  : "1rem",
            }}
          >
            {cat.name}
          </span>
        </div>
        <ArrowBtn hovered={hovered} featured={isFeatured} />
      </div>
    </Link>
  );
};

export default function Categories() {
  return (
    <section id="categories" className="w-full py-14 px-4 md:px-10" style={{ backgroundColor: "#FAF5EE" }}>
      <div className="text-center mb-10">
        <h2
          className="text-3xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Shop the Categories
        </h2>
        <p className="text-gray-500 text-sm">
          Explore our refined categories for a seamless shopping experience.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
        <Card cat={categories[0]} className="col-span-12 md:col-span-6 row-span-2 h-[420px]" />
        <Card cat={categories[1]} className="col-span-12 md:col-span-3 h-[200px]" />
        <Card cat={categories[2]} className="col-span-12 md:col-span-3 h-[200px]" />
        <Card cat={categories[3]} className="col-span-12 md:col-span-3 h-[200px]" />
        <Card cat={categories[4]} className="col-span-12 md:col-span-3 h-[200px]" />
      </div>
    </section>
  );
}
