import React from "react";
import { Award, Heart, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Trusted Quality",
    text: "Every fabric is selected with care for comfort, color, finish, and long-lasting value.",
  },
  {
    icon: Sparkles,
    title: "Festive Elegance",
    text: "From everyday essentials to grand occasions, our collections are curated for every family moment.",
  },
  {
    icon: Users,
    title: "Family Shopping",
    text: "Mens, womens, kids, and festive wear come together in one convenient shopping experience.",
  },
];

const stats = [
  { value: "25+", label: "Years of textile trust" },
  { value: "5k+", label: "Happy family shoppers" },
  { value: "100+", label: "Curated seasonal styles" },
  { value: "7", label: "Days customer support" },
];

const promises = [
  {
    icon: ShoppingBag,
    title: "Carefully Curated",
    text: "Our team selects collections that balance traditional charm, practical comfort, and modern fashion needs.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Shopping",
    text: "We focus on clear product information, helpful support, and consistent service from selection to checkout.",
  },
  {
    icon: Truck,
    title: "Order Guidance",
    text: "Customers can get support for product choices, video call purchases, order updates, and delivery questions.",
  },
];

const About = () => {
  return (
    <section className="bg-[#FAF0E6] px-5 py-8 md:px-16 md:py-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#D9F0F2] to-[#FFF1E6] px-6 py-9 text-center shadow-[0_6px_24px_rgba(77,167,175,0.16)] md:px-14 md:py-10">
          <div className="relative z-10">
          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-base font-semibold text-orange-600">
            Our Story
          </span>
          <h1 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            About Sri Venkateshwara
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Discover our journey, quality promise, and family-focused textile collections made for every occasion.
          </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Heart size={24} />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">Our Story</h2>
            <p className="text-base leading-7 text-gray-600">
              Sri Venkateshwara Family Shopping was built with a simple promise: make quality textile shopping easy, warm, and reliable. Our store focuses on fabrics and outfits that feel good, look elegant, and suit real family celebrations, daily wear, gifting, and special occasions.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">What We Offer</h2>
            <p className="text-base leading-7 text-gray-600">
              Explore sarees, shirts, kids collections, festive wear, daily essentials, and premium textile selections. We aim to give customers a smooth shopping experience with friendly support, fair pricing, and dependable product quality.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white/90 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8510A] text-white">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
              <p className="text-base leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-gradient-to-br from-orange-50 to-teal-50 p-5 text-center">
              <h3 className="text-3xl font-extrabold text-[#E8510A]">{item.value}</h3>
              <p className="mt-2 text-base font-medium text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl bg-gradient-to-br from-[#4DA7AF] to-[#2F8F96] p-8 text-white shadow-xl">
            <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-base font-semibold">
              Why Families Choose Us
            </span>
            <h2 className="mt-5 text-3xl font-extrabold">One store for every occasion</h2>
            <p className="mt-4 text-base leading-7 text-white/85">
              We understand family shopping needs: school days, office wear, weddings, festivals, gifting, and daily essentials. That is why our collections are arranged to help customers compare, select, and shop with confidence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Sarees", "Mens Wear", "Kids Wear", "Festive Wear", "Essentials"].map((item) => (
                <span key={item} className="rounded-full bg-white/18 px-4 py-2 text-base font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {promises.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Icon size={23} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
              <Star size={25} />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Shopping Promise</h2>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-gray-600">
              We keep every customer experience simple: friendly guidance, quality-focused products, clean presentation, fair value, and support after purchase. Sri Venkateshwara Family Shopping is built for families who want dependable fashion without confusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
