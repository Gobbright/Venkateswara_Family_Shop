import shirt from '../assets/Images/Mens/Shirt/shirt.webp';
export default function Product() {
  const product = {
    name: "Classic Cotton Shirt",
    category: "Mens",
    image: shirt,
    price: 899,
    oldPrice: 1299,
    reviews: 112,
    discount: 31,
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#f5ede3] p-3 sm:p-4 md:p-6">
      <div className="mb-4 shrink-0 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">Product Details</h1>
        <p className="mt-1 text-sm text-gray-600 md:text-base">
          A closer look at your selected style
        </p>
      </div>

      <div className="grid min-h-0 flex-1 gap-5 overflow-y-auto pr-1 lg:grid-cols-[minmax(0,1fr)_520px]">
        <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-white p-6 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-[620px] w-full object-contain"
          />
        </div>

        <div className="rounded-3xl bg-[#fffaf3] p-6 shadow-sm lg:self-start">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-orange-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              Bestseller
            </span>
            <button
              type="button"
              aria-label={`Add ${product.name} to wishlist`}
              className="text-3xl leading-none text-gray-900 transition hover:text-orange-600"
            >
              {"\u2661"}
            </button>
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
            {product.category}
          </p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-gray-950">
            {product.name}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="text-[#e5a43a]">
              {"\u2605\u2605\u2605\u2605\u2605"}
            </span>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>

          <div className="mt-6 flex flex-wrap items-baseline gap-3">
            <span className="text-4xl font-bold text-[#39aeb7]">
              Rs. {product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-lg text-gray-500 line-through">
              Rs. {product.oldPrice.toLocaleString("en-IN")}
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              {product.discount}% off
            </span>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-950">Select Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className="h-11 min-w-11 rounded-full border border-black/20 bg-white px-4 text-sm font-semibold text-gray-900 transition hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-base leading-7 text-gray-700">
            Soft cotton fabric, clean everyday styling, and a comfortable fit
            made for regular wear. This is dummy product detail content.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="h-12 rounded-full border border-black/20 bg-white px-5 text-base font-semibold text-gray-900 transition hover:border-black hover:bg-gray-50"
            >
              Add Cart
            </button>
            <button
              type="button"
              className="h-12 rounded-full bg-black px-5 text-base font-semibold text-white transition hover:bg-orange-600"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-6 grid gap-3 text-sm font-medium text-gray-700">
            <div className="rounded-2xl bg-white px-4 py-3">
              Free delivery on orders above Rs. 999
            </div>
            <div className="rounded-2xl bg-white px-4 py-3">
              Easy 7 day exchange available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
