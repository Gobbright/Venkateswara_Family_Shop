import React from "react";
import { Headphones, Mail, MapPin, Phone, Send, Shirt, ShoppingBag } from "lucide-react";

const enquiryOptions = [
  "Silk Sarees",
  "Mens Wear",
  "Kids Collection",
  "Festive Wear",
  "Tailoring Service",
];

const ShopEnquiry = () => {
  return (
    <section className="bg-[#FAF0E6] px-4 py-12 md:px-16 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-lg bg-white p-5 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <div className="flex flex-col justify-between rounded-lg bg-[#4DA7AF] p-6 text-white">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-orange-200">
              Shop Enquiry
            </p>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight md:text-4xl">
              Need help choosing the right product?
            </h2>
            <p className="text-sm leading-7 text-white/85 md:text-base">
              Send your enquiry for product availability, size details, saree collections,
              festive offers, delivery support, or tailoring questions. Our team will
              guide you with clear shopping details.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 shrink-0 text-orange-200" size={20} />
              <div>
                <p className="font-bold">Call Support</p>
                <a href="tel:+919876543210" className="!no-underline text-white/85 hover:text-orange-200">
                  +91 98765 43210
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 shrink-0 text-orange-200" size={20} />
              <div>
                <p className="font-bold">Email Us</p>
                <a
                  href="mailto:care@venkateshwaratextiles.in"
                  className="!no-underline text-white/85 hover:text-orange-200"
                >
                  care@venkateshwaratextiles.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-orange-200" size={20} />
              <p className="text-white/85">142, East Masi Street, Trichy, Tamil Nadu 625001</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Headphones size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#1a0a00]">Request Shopping Details</h3>
              <p className="text-sm text-slate-500">We will contact you with product information.</p>
            </div>
          </div>

          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="h-12 rounded-lg border border-orange-100 bg-orange-50 px-4 outline-none transition focus:border-orange-500 focus:bg-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-12 rounded-lg border border-orange-100 bg-orange-50 px-4 outline-none transition focus:border-orange-500 focus:bg-white"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative">
                <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select className="h-12 w-full appearance-none rounded-lg border border-orange-100 bg-orange-50 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:bg-white">
                  <option>Product Category</option>
                  {enquiryOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Shirt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Product / Size / Color"
                  className="h-12 w-full rounded-lg border border-orange-100 bg-orange-50 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:bg-white"
                />
              </div>
            </div>

            <textarea
              rows="5"
              placeholder="Tell us what you are looking for..."
              className="resize-none rounded-lg border border-orange-100 bg-orange-50 px-4 py-3 outline-none transition focus:border-orange-500 focus:bg-white"
            />

            <button
              type="button"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-7 font-bold text-white transition hover:bg-gradient-to-r hover:from-orange-600 hover:via-[#FFBE8A] hover:to-[#4DA7AF] md:w-fit"
            >
              Send Enquiry <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ShopEnquiry;
