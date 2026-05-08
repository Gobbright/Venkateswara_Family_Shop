import { Link } from 'react-router-dom';
import shirt from '../../assets/Images/Mens/Shirt/shirt.webp';
import kurtis from '../../assets/Images/Womens/Kurti/kurti.jpg';
import Tshirt from '../../assets/Images/Mens/T-shirt/T-shirt.jpg';
export default function Cart() {
  const cartItems = [
    {
      name: "Mens Shirt",
      category: "Mens",
      image: shirt,
      size: "L",
      color: "Blue",
      price: 899,
      oldPrice: 1299,
      quantity: 1,
      slug: "cart-mens-shirt",
    },
    {
      name: "Womens Kurti",
      category: "Womens",
      image: kurtis,
      size: "M",
      color: "Maroon",
      price: 799,
      oldPrice: 1399,
      quantity: 2,
      slug: "cart-womens-kurti",
    },
    {
      name: "T-Shirt",
      category: "Mens",
      image: Tshirt,
      size: "L",
      color: "White",
      price: 379,
      oldPrice: 699,
      quantity: 1,
      slug: "cart-kids-t-shirt",
    },
       {
      name: "Mens Shirt",
      category: "Mens",
      image: shirt,
      size: "L",
      color: "Blue",
      price: 899,
      oldPrice: 1299,
      quantity: 1,
      slug: "cart-mens-shirt",
    },
    {
      name: "Womens Kurti",
      category: "Womens",
      image:kurtis,
      size: "M",
      color: "Maroon",
      price: 799,
      oldPrice: 1399,
      quantity: 2,
      slug: "cart-womens-kurti",
    },
    {
      name: "Kids T-Shirt",
      category: "Kids",
      image:Tshirt,
      size: "8Y",
      color: "White",
      price: 379,
      oldPrice: 699,
      quantity: 1,
      slug: "cart-kids-t-shirt",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalOldPrice = cartItems.reduce(
    (total, item) => total + item.oldPrice * item.quantity,
    0
  );
  const discount = totalOldPrice - subtotal;
  const deliveryFee = subtotal > 999 ? 0 : 99;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-[#f5ede3] p-3 sm:p-4 md:p-6">
      <div className="mb-4 shrink-0 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">Cart</h1>
        <p className="mt-1 text-sm text-gray-600 md:text-base">
          Review your selected styles before checkout
        </p>
      </div>

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,760px)_520px] lg:justify-center">
        <div className="lg:max-h-[calc(100vh-180px)] lg:overflow-y-auto lg:pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.slug}-${index}`}
                className="grid gap-4 rounded-3xl bg-[#fffaf3] p-4 shadow-sm transition hover:shadow-md sm:grid-cols-[150px_1fr]"
              >
                <div className="flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-white p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex min-w-0 flex-col justify-between gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                        {item.category}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold leading-tight text-gray-950">
                        {item.name}
                      </h2>
                      <p className="mt-2 text-sm font-medium text-gray-600">
                        Size: {item.size} | Color: {item.color}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 rounded-full border border-orange-600/30 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:border-orange-600 hover:bg-orange-100"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#39aeb7]">
                          Rs. {item.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          Rs. {item.oldPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-600">
                        Item total: Rs.{" "}
                        {(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="flex items-center rounded-full border border-black/20 bg-white p-1">
                      <button
                        type="button"
                        className="h-9 w-9 rounded-full text-xl font-semibold text-gray-900 transition hover:bg-gray-100"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        -
                      </button>
                      <span className="w-10 text-center text-base font-semibold text-gray-950">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="h-9 w-9 rounded-full text-xl font-semibold text-gray-900 transition hover:bg-gray-100"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="shrink-0 rounded-3xl bg-[#fffaf3] p-8 shadow-sm lg:sticky lg:top-[150px] lg:self-start">
          <h2 className="text-2xl font-semibold text-gray-950">Price Details</h2>

          <div className="mt-6 space-y-5 text-base font-medium text-gray-700">
            <div className="flex justify-between gap-4">
              <span>Bag Total</span>
              <span>Rs. {totalOldPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between gap-4 text-green-700">
              <span>Discount</span>
              <span>- Rs. {discount.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Delivery</span>
              <span>{deliveryFee === 0 ? "Free" : `Rs. ${deliveryFee}`}</span>
            </div>
          </div>

          <div className="my-5 border-t border-black/10" />

          <div className="flex items-center justify-between gap-4">
            <span className="text-lg font-semibold text-gray-950">Total</span>
            <span className="text-3xl font-bold text-[#39aeb7]">
              Rs. {total.toLocaleString("en-IN")}
            </span>
          </div>

          <button
            type="button"
            className="mt-5 h-12 w-full rounded-full bg-black px-5 text-base font-semibold text-white transition hover:bg-orange-600"
          >
            Checkout
          </button>
          <Link
            to="/mens"
            className="mt-3 flex h-12 w-full items-center justify-center rounded-full border border-black/20 bg-white px-5 text-base font-semibold text-gray-900 transition !no-underline hover:border-black hover:bg-gray-50"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
