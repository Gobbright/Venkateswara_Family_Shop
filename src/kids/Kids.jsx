"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/Categories/1.png";
import img2 from "../assets/Images/Categories/2.png";
import img3 from "../assets/Images/Categories/3.png";
import img4 from "../assets/Images/Categories/4.png";
import img5 from "../assets/Images/Categories/5.png";
import track from "../assets/Images/Mens/Track/track.jpg";
import shorts from "../assets/Images/Mens/shorts/shorts.jpg";
import belt from "../assets/Images/Mens/Accessories/belt.jpg";

export default function Kids() {
  const categories = [
    { category: "Tops", image: img1, basePrice: 399 },
    { category: "T-Shirts", image: img2, basePrice: 299 },
    { category: "Bottoms", image: img3, basePrice: 499 },
    { category: "Dresses", image: img4, basePrice: 699 },
    { category: "Ethnic Wear", image: img5, basePrice: 799 },
    { category: "Nightwear", image: track, basePrice: 449 },
    { category: "Footwear", image: shorts, basePrice: 599 },
    { category: "Accessories", image: belt, basePrice: 199 },
  ];

  const products = Array.from({ length: 10 }, (_, index) => {
    const item = categories[index % categories.length];

    return {
      name: `Kids ${item.category}`,
      category: item.category,
      image: item.image,
      price: item.basePrice + index * 80,
      oldPrice: item.basePrice + index * 80 + 400,
      reviews: 45 + index * 9,
      isBestseller: index < 3,
      slug: `kids-${item.category.toLowerCase().replaceAll(" ", "-")}-${index + 1}`,
    };
  });

  const filters = categories.map((item) => item.category);
  const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-low-high" },
    { label: "Price: High to Low", value: "price-high-low" },
    { label: "Name: A to Z", value: "name-a-z" },
    { label: "Name: Z to A", value: "name-z-a" },
  ];
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState("featured");
  const filteredProducts =
    selectedFilters.length === 0
      ? products
      : products.filter((item) => selectedFilters.includes(item.category));
  const sortedProducts = [...filteredProducts].sort((first, second) => {
    if (sortBy === "price-low-high") {
      return first.price - second.price;
    }

    if (sortBy === "price-high-low") {
      return second.price - first.price;
    }

    if (sortBy === "name-a-z") {
      return (
        first.name.localeCompare(second.name) ||
        first.slug.localeCompare(second.slug)
      );
    }

    if (sortBy === "name-z-a") {
      return (
        second.name.localeCompare(first.name) ||
        second.slug.localeCompare(first.slug)
      );
    }

    return 0;
  });

  const handleFilterChange = (filter) => {
    setSelectedFilters((currentFilters) =>
      currentFilters.includes(filter)
        ? currentFilters.filter((item) => item !== filter)
        : [...currentFilters, filter]
    );
  };

  return (
    <div className="min-h-screen bg-[#f5ede3] p-3 sm:p-4 md:p-6">
      <div className="mb-3 shrink-0 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">Kids Collection</h1>
        <p className="mt-1 text-sm text-gray-600 md:text-base">
          Browse kids styles by category
        </p>
      </div>

      <div className="mb-3 flex shrink-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedFilters.includes(filter)
                  ? "border-black bg-black text-white"
                  : "border-black/20 bg-[#f5ede3] text-gray-800 hover:border-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <label className="flex items-center justify-center gap-2 text-gray-800 lg:justify-end">
          <span className="text-xl font-semibold">Sort</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="h-10 rounded-full border border-black/20 bg-[#fffaf3] px-4 text-sm font-medium outline-none transition hover:border-black focus:border-black"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 content-start gap-3 sm:gap-4 md:grid-cols-4">
          {sortedProducts.map((item) => (
            <div
              key={item.slug}
              className="group flex h-[490px] cursor-pointer flex-col overflow-hidden rounded-3xl bg-[#fffaf3] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 shrink-0 items-center justify-between px-5">
                {item.isBestseller ? (
                  <span className="rounded-full bg-orange-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Bestseller
                  </span>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  aria-label={`Add ${item.name} to wishlist`}
                  className="text-2xl leading-none text-gray-900 transition hover:text-orange-600"
                >
                  ♡
                </button>
              </div>

              <Link
                to={`/product/${item.slug}`}
                className="flex h-56 shrink-0 items-center justify-center overflow-hidden bg-white p-3 !no-underline md:h-60"
                aria-label={`View ${item.name}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </Link>

              <div className="min-h-0 shrink-0 px-5 py-4">
                <div className="mb-2 flex items-center gap-2 text-sm">
                  <span className="text-[#e5a43a]">
                    {"\u2605\u2605\u2605\u2605\u2605"}
                  </span>
                  <span className="text-gray-600">({item.reviews})</span>
                </div>
                <Link
                  to={`/product/${item.slug}`}
                  className="block !no-underline text-gray-950 hover:text-orange-600"
                >
                  <h2 className="text-lg font-semibold leading-tight">
                    {item.name}
                  </h2>
                </Link>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#39aeb7]">
                    Rs. {item.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    Rs. {item.oldPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    to="/cart"
                    className="flex h-10 items-center justify-center rounded-full border border-black/20 bg-white px-3 text-sm font-semibold text-gray-900 transition !no-underline hover:border-black hover:bg-gray-50"
                  >
                    Add Cart
                  </Link>
                  <Link
                    to={`/product/${item.slug}`}
                    className="flex h-10 items-center justify-center rounded-full bg-black px-3 text-sm font-semibold text-white transition !no-underline hover:bg-orange-600"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
