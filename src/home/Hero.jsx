import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/Images/Home/hero.png"; // update path as needed

const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden" style={{ minHeight: "clamp(400px, 70vh, 650px)" }}>

            {/* Background Image */}
            <img
                src={heroImg}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover object-right"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:pl-20 md:pr-4 py-14 md:py-32 max-w-xl -translate-y-[20px]">

                {/* Heading */}
                <h1
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 md:mb-4"
                    style={{ fontFamily: "'Rowdies', sans-serif" }}
                >
                    Premium Textile{" "}
                    <span className="text-yellow-400">Collections</span> for Every Occasion
                </h1>

                {/* Subtext */}
                <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-6 md:mb-8 leading-relaxed">
                    Discover timeless fashion with high-quality fabrics crafted for comfort,
                    style, and elegance - woven by master artisans of South India.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <Link to="/mens" className="!no-underline bg-orange-600 text-white px-5 md:px-6 py-2.5 md:py-4 rounded-full text-sm font-extrabold flex items-center gap-2 transition hover:bg-gradient-to-r hover:from-orange-600 hover:via-[#FFBE8A] hover:to-[#4DA7AF]">
                        Explore Collection <ArrowRight size={18} />
                    </Link>
                    <Link to="/womens" className="!no-underline bg-white text-orange-600 px-5 md:px-6 py-2.5 md:py-4 rounded-full text-sm font-extrabold flex items-center gap-2 transition hover:bg-gradient-to-r hover:from-orange-600 hover:via-[#FFBE8A] hover:to-[#4DA7AF] hover:text-white">
                        Shop Now <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Hero;
