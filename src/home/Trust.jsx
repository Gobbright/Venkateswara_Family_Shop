import { useState } from "react";
import { Shield, RotateCcw, Lock, Headphones } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every weave inspected by our master artisans.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "7-day hassle-free return on all orders.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "256-bit encrypted, trusted gateways.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated team available 7 days a week.",
  },
];

function TrustCard({ icon: Icon, title, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center rounded-2xl w-full"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #e2e2e2 0%, #FFE4C7 55%, #c4dfdd 100%)"
          : "#FFFAF6",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        padding: "22px 24px",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
    >
      {/* Icon Circle — stays orange always */}
      <div
        className="flex items-center justify-center rounded-full mb-5"
        style={{
          backgroundColor: hovered ? "#FFE4C7" : "#E8510A",
          width: "58px",
          height: "58px",
          flexShrink: 0,
          transition: "background-color 0.3s ease, transform 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <Icon size={24} color={hovered ? "#E8510A" : "#ffffff"} strokeWidth={1.8} />
      </div>

      {/* Title — turns blue on hover */}
      <h3
        className="text-base font-bold mb-2"
        style={{
          color: "#1a0a00",
          fontFamily: "Georgia, serif",
        }}
      >
        {title}
      </h3>

      {/* Description — turns blue on hover */}
      <p
        className="text-sm leading-relaxed"
        style={{
          color: "#7a5c4a",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Trust() {
  return (
    <section
      className="w-full py-16 px-6"
      style={{ backgroundColor: "#FFF0E0" }}
    >
      {/* Heading */}
      <h2
        className="text-center text-4xl font-bold mb-12"
        style={{ color: "#1a0a00", fontFamily: "Georgia, serif" }}
      >
        Woven With <span style={{ color: "#E8510A" }}>Trust</span>
      </h2>

      {/* Cards Grid */}
      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        style={{ maxWidth: "1200px" }}
      >
        {trustItems.map((item) => (
          <TrustCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
