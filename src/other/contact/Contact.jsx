import React from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Store",
    text: "142, East Masi Street, Trichy, Tamil Nadu 625001",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email Support",
    text: "care@venkateshwaratextiles.in",
  },
  {
    icon: Clock,
    title: "Store Hours",
    text: "Monday to Sunday, 10:00 AM - 9:00 PM",
  },
];

const Contact = () => {
  return (
    <section className="bg-[#FAF0E6] px-5 py-8 md:px-16 md:py-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#D9F0F2] to-[#FFF1E6] px-6 py-9 text-center shadow-[0_6px_24px_rgba(77,167,175,0.16)] md:px-14 md:py-10">
          <div className="relative z-10">
          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-base font-semibold text-orange-600">
            We Are Here To Help
          </span>
          <h1 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Contact Sri Venkateshwara
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Need help with products, video call purchase, orders, or store details? Send us a message and our team will guide you.
          </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {contactCards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">{title}</h3>
              <p className="text-base leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-2xl bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <h2 className="mb-5 text-2xl font-bold text-gray-900">Send a Message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-full bg-orange-50 px-5 py-3 text-base outline-none focus:bg-white focus:ring-2 focus:ring-orange-300" placeholder="Your Name" />
              <input className="rounded-full bg-orange-50 px-5 py-3 text-base outline-none focus:bg-white focus:ring-2 focus:ring-orange-300" placeholder="Phone Number" />
            </div>
            <input className="mt-4 w-full rounded-full bg-orange-50 px-5 py-3 text-base outline-none focus:bg-white focus:ring-2 focus:ring-orange-300" placeholder="Email Address" />
            <textarea className="mt-4 min-h-32 w-full rounded-2xl bg-orange-50 px-5 py-4 text-base outline-none focus:bg-white focus:ring-2 focus:ring-orange-300" placeholder="How can we help you?" />
            <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-gradient-to-r hover:from-orange-600 hover:via-[#FFBE8A] hover:to-[#4DA7AF]">
              Submit Message
              <Send size={16} />
            </button>
          </form>

          <div className="rounded-2xl bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Shopping Support</h2>
            <p className="text-base leading-7 text-gray-600">
              Our team can help you choose fabric, confirm product availability, assist with festive collections, and guide you through order support. For quick purchase help, use the video call purchase option in the navbar.
            </p>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 to-teal-50 p-5">
              <h3 className="mb-2 font-bold text-gray-900">Quick Response</h3>
              <p className="text-base leading-7 text-gray-600">
                We usually respond during store working hours. Please share your phone number for faster support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
