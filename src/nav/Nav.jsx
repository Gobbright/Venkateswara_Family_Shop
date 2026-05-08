import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Heart, ShoppingCart, User, MapPin, Truck, Headphones, Video, Search, Menu, X, ChevronDown, Phone, Mail
} from "lucide-react";
import { useState } from "react";
import logoImg from "../assets/Images/sri-venkateswara-logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const otherCloseTimer = useRef(null);

  const otherLinks = [
    { name: "Festive Wear", path: "/festive-wear" },
    // { name: "Tailoring", path: "/ot  her/tailoring" },
    { name: "About", path: "/other/about" },
    { name: "Contact", path: "/other/contact" },
    { name: "Track Order", path: "/order/track" },
  ];

  const showOtherDropdown = () => {
    if (otherCloseTimer.current) {
      clearTimeout(otherCloseTimer.current);
    }
    setOtherOpen(true);
  };

  const hideOtherDropdown = () => {
    otherCloseTimer.current = setTimeout(() => {
      setOtherOpen(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("site-footer");
      const footerTop = footer?.getBoundingClientRect().top ?? Infinity;

      setNavCompact(window.scrollY > 180);
      setFooterVisible(footerTop <= window.innerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

      {/* Top Bar */}
      <div className="w-full bg-[#4DA7AF] text-white px-8 md:px-16 py-0.5">
        <div className="flex items-center justify-between gap-6 whitespace-nowrap overflow-x-auto">
          <p className="flex items-center text-base md:text-lg font-medium m-0">
            Welcome to Sri Venkateshwara Family Shopping
          </p>
          <div className="flex items-center gap-8 md:gap-12 ml-4">
            <span className="flex items-center gap-1 text-base md:text-lg">
              <MapPin size={18} /> Trichy
            </span>
            <Link to="/order/track" className="flex items-center gap-1 text-base md:text-lg !no-underline text-white hover:text-orange-200 transition">
              <Truck size={18} /> Track Order
            </Link>
            <button
              type="button"
              onClick={() => setSupportOpen(true)}
              className="flex items-center gap-1 text-base md:text-lg transition hover:text-orange-200"
            >
              <Headphones size={18} /> Help & Support
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`sticky z-50 bg-[#FFEED8] transition-all duration-300 ${
          footerVisible
            ? "pointer-events-none top-[10px] mx-[10px] mb-[10px] w-[calc(100%-20px)] -translate-y-full rounded-2xl border border-orange-100 px-3 py-1.5 opacity-0 md:px-10 md:py-2"
            : navCompact
            ? "top-[10px] mx-[10px] mb-[10px] w-[calc(100%-20px)] rounded-2xl border border-orange-100 px-3 py-1.5 md:px-10 md:py-2"
            : "top-0 w-full px-4 py-3 md:px-14 md:py-5"
        }`}
      >

          {/* Top Row */}
          <div className="flex items-center justify-between">

            {/* Logo */}
            <img src={logoImg} alt="logo" className="h-12 md:h-14 w-auto" />

            {/* Menu (Desktop only) */}
            <ul className="hidden md:flex gap-10 font-semibold text-black text-lg">
              <li><Link to="/home" className="!no-underline text-black hover:text-orange-600 transition">Home</Link></li>
              <li><Link to="/mens" className="!no-underline text-black hover:text-orange-600 transition">Mens</Link></li>
              <li><Link to="/womens" className="!no-underline text-black hover:text-orange-600 transition">Womens</Link></li>
              <li><Link to="/kids" className="!no-underline text-black hover:text-orange-600 transition">Kids</Link></li>
              <li
                className="relative"
                onMouseEnter={showOtherDropdown}
                onMouseLeave={hideOtherDropdown}
              >
                <button
                  type="button"
                  onClick={() => setOtherOpen(!otherOpen)}
                  className="flex items-center gap-1 text-black hover:text-orange-600 transition"
                >
                  Others
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${otherOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {otherOpen && (
                  <div
                    className="absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.78) 0%, rgba(255,243,230,0.72) 48%, rgba(225,251,248,0.72) 100%)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {otherLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setOtherOpen(false)}
                        className="block !no-underline px-5 py-3 text-sm font-semibold text-black transition hover:bg-gradient-to-r hover:from-orange-500 hover:to-[#4DA7AF] hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>

            {/* Right Section */}
            <div className="flex items-center gap-4 md:gap-6 text-black font-semibold">

              {/* Mobile Menu Button */}
              <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              {/* Desktop Icons */}
              <div className="hidden md:flex items-center gap-6 text-base">
                <button className="group relative h-11 w-[205px] overflow-hidden bg-orange-600 text-white px-4 !rounded-full text-sm font-semibold transition hover:bg-gradient-to-r hover:from-orange-600 hover:via-[#FFBE8A] hover:to-[#4DA7AF]">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-500 group-hover:left-[calc(100%-42px)]">
                    <Video size={20} />
                  </span>
                  <span className="inline-flex h-full items-center justify-center whitespace-nowrap pl-5 transition-all duration-300 group-hover:-translate-x-8 group-hover:opacity-0">
                    Video Call Purchase
                  </span>
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Call Now
                  </span>
                </button>
                <Link to="/wishlist" className="flex items-center gap-1 !no-underline text-black hover:text-orange-600 cursor-pointer transition">
                  <Heart size={20} /> Wishlist
                </Link>
                <Link to="/cart" className="flex items-center gap-1 !no-underline text-black hover:text-orange-600 cursor-pointer transition">
                  <ShoppingCart size={20} /> Cart
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-[#4DA7AF] rounded-lg shadow p-4 space-y-4 text-lg font-bold">
              <Link to="/home" className="block text-center hover:text-orange-600 transition">Home</Link>
              <Link to="/mens" className="block text-center hover:text-orange-600 transition">Mens</Link>
              <Link to="/womens" className="block text-center hover:text-orange-600 transition">Womens</Link>
              <Link to="/kids" className="block text-center hover:text-orange-600 transition">Kids</Link>
              <button
                type="button"
                onClick={() => setOtherOpen(!otherOpen)}
                className="mx-auto flex items-center justify-center gap-1 hover:text-orange-600 transition"
              >
                Others
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${otherOpen ? "rotate-180" : ""}`}
                />
              </button>
              {otherOpen && (
                <div
                  className="rounded-lg py-2 text-base text-black shadow"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.78) 0%, rgba(255,243,230,0.72) 48%, rgba(225,251,248,0.72) 100%)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {otherLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setOtherOpen(false);
                        setMenuOpen(false);
                      }}
                      className="block !no-underline px-4 py-2 text-center transition hover:bg-gradient-to-r hover:from-orange-500 hover:to-[#4DA7AF] hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
              <div className="flex justify-center gap-4 pt-3 border-t text-lg ">
                <Link to="/wishlist" className="flex items-center gap-1 !no-underline text-black hover:text-orange-600 transition" onClick={() => setMenuOpen(false)}><Heart size={20} /> Wishlist</Link>
                <Link to="/cart" className="flex items-center gap-1 !no-underline text-black hover:text-orange-600 transition" onClick={() => setMenuOpen(false)}><ShoppingCart size={20} /> Cart</Link>
              </div>
            </div>
          )}

      </div>

      {/* Bottom Row */}
      <div className="w-full bg-[#FFEED8] px-4 pb-3 md:px-14 md:pb-5">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">

            {/* Search */}
            <div className="relative w-full flex-1">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search Product..."
                className="w-full bg-teal-100 rounded-full pl-11 pr-4 py-2.5 outline-none text-base transition focus:bg-white"
              />
            </div>

            {/* User + Login */}
            <div className="flex items-center gap-3 md:gap-5">
              <User size={28} />
              <button className="bg-orange-600 text-white px-5 py-2.5 !rounded-full text-base font-semibold transition hover:bg-gradient-to-r hover:from-orange-600 hover:via-[#FFBE8A] hover:to-[#4DA7AF]">
                Login
              </button>
            </div>

          </div>
      </div>

      {supportOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/35 px-4 backdrop-blur-sm">
          <div
            className="relative w-full max-w-lg rounded-2xl border border-white/40 p-6 text-slate-900 shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(255,243,230,0.76) 52%, rgba(225,251,248,0.76) 100%)",
              backdropFilter: "blur(14px)",
            }}
          >
            <button
              type="button"
              onClick={() => setSupportOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-slate-700 transition hover:bg-orange-500 hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="mb-3 pr-10 text-2xl font-bold text-[#1a0a00]">
              Help & Support
            </h3>
            <p className="mb-5 text-sm leading-7 text-slate-700">
              Need help with shopping, order tracking, delivery updates, product
              availability, exchanges, or tailoring service details? Our support team
              will help you with clear information and quick assistance.
            </p>
            <div className="space-y-3 rounded-xl bg-white/55 p-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 !no-underline text-slate-800 transition hover:text-orange-600"
              >
                <Phone size={18} className="text-orange-600" />
                +91 98765 43210
              </a>
              <a
                href="mailto:care@venkateshwaratextiles.in"
                className="flex items-center gap-3 !no-underline text-slate-800 transition hover:text-orange-600"
              >
                <Mail size={18} className="text-orange-600" />
                care@venkateshwaratextiles.in
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
