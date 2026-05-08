import kurti from "../../assets/Images/Womens/Kurti/kurti.jpg";
import shirt from "../../assets/Images/Mens/Shirt/shirt.webp";
import tShirt from "../../assets/Images/Mens/T-shirt/T-shirt.jpg";
import saree from "../../assets/Images/Womens/Saree/saree.jpg";
import track from "../../assets/Images/Mens/Track/track.jpg";
import kidsDress from "../../assets/Images/Categories/4.png";

export default function Wishlist() {
  const wishlistItems = [
    {
      name: "Womens Kurti",
      category: "Womens",
      image: kurti,
      price: 799,
      oldPrice: 1399,
      reviews: 96,
      isBestseller: true,
      slug: "wishlist-womens-kurti",
    },
    {
      name: "Mens Shirt",
      category: "Mens",
      image: shirt,
      price: 899,
      oldPrice: 1299,
      reviews: 112,
      isBestseller: true,
      slug: "wishlist-mens-shirt",
    },
    {
      name: "Kids T-Shirt",
      category: "Kids",
      image: tShirt,
      price: 379,
      oldPrice: 699,
      reviews: 74,
      isBestseller: false,
      slug: "wishlist-kids-t-shirt",
    },
    {
      name: "Womens Saree",
      category: "Womens",
      image: saree,
      price: 1299,
      oldPrice: 1899,
      reviews: 84,
      isBestseller: true,
      slug: "wishlist-womens-saree",
    },
    {
      name: "Mens Track Pant",
      category: "Mens",
      image: track,
      price: 699,
      oldPrice: 1199,
      reviews: 68,
      isBestseller: false,
      slug: "wishlist-mens-track-pant",
    },
    {
      name: "Kids Dress",
      category: "Kids",
      image: kidsDress,
      price: 779,
      oldPrice: 1099,
      reviews: 59,
      isBestseller: false,
      slug: "wishlist-kids-dress",
    },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#f5ede3] p-3 sm:p-4 md:p-6">
      <div className="mb-4 shrink-0 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">Wishlist</h1>
        <p className="mt-1 text-sm text-gray-600 md:text-base">
          Your saved styles are ready when you are
        </p>
      </div>

      <div className="mb-4 flex shrink-0 items-center justify-between gap-3 rounded-2xl bg-[#fffaf3] px-4 py-3 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-gray-950">
            {wishlistItems.length} saved items
          </p>
          <p className="text-xs text-gray-600">Dummy wishlist collection</p>
        </div>
        <button
          type="button"
          className="h-10 rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Add All Cart
        </button>
      </div>

      <div className="flex min-h-0 w-full flex-1">
        <div className="grid min-h-0 flex-1 grid-cols-2 content-start gap-3 overflow-y-auto pr-1 sm:gap-4 md:grid-cols-4 lg:grid-cols-4">
          {wishlistItems.map((item) => (
            <div
              key={item.slug}
              className="group flex h-[500px] cursor-pointer flex-col overflow-hidden rounded-3xl bg-[#fffaf3] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 shrink-0 items-center justify-between px-5">
                {item.isBestseller ? (
                  <span className="rounded-full bg-orange-600 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Bestseller
                  </span>
                ) : (
                  <span className="rounded-full bg-[#f5ede3] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-700">
                    {item.category}
                  </span>
                )}
                <button
                  type="button"
                  aria-label={`Remove ${item.name} from wishlist`}
                  className="text-2xl leading-none text-orange-600 transition hover:text-gray-900"
                >
                  {"\u2665"}
                </button>
              </div>

              <div className="flex h-56 shrink-0 items-center justify-center overflow-hidden bg-white p-3 md:h-60">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="min-h-0 shrink-0 px-5 py-4">
                <div className="mb-2 flex items-center gap-2 text-sm">
                  <span className="text-[#e5a43a]">
                    {"\u2605\u2605\u2605\u2605\u2605"}
                  </span>
                  <span className="text-gray-600">({item.reviews})</span>
                </div>
                <h2 className="text-lg font-semibold leading-tight text-gray-950">
                  {item.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  {item.category}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#39aeb7]">
                    Rs. {item.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    Rs. {item.oldPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="h-10 rounded-full border border-black/20 bg-white px-3 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-gray-50"
                  >
                    Add Cart
                  </button>
                  <button
                    type="button"
                    className="h-10 rounded-full bg-black px-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    Buy Now
                  </button>
                </div>
                <button
                  type="button"
                  className="mt-3 h-10 w-full rounded-full border border-orange-600/30 bg-orange-50 px-3 text-sm font-semibold text-orange-700 transition hover:border-orange-600 hover:bg-orange-100"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
