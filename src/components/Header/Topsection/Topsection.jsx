import React, { useState, useEffect } from "react";

export default function Topsection() {
  const [loginType, setLoginType] = useState(null); 
  // null | "artisan" | "customer"

  const images = [
    "https://i.pinimg.com/736x/2c/63/b6/2c63b64fb50962bbfde0a7582c235102.jpg",
    "https://i.pinimg.com/1200x/62/70/9c/62709cd39fb3930b97675d5f22271e57.jpg",
    "https://i.pinimg.com/736x/40/12/4a/40124ac1dbbb4d643e9f30440af91dc8.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen relative overflow-hidden flex justify-center items-center text-center">

      {/* Background */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="background"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ filter: "blur(6px)", transform: "scale(1.1)" }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Rural Artisans Through Digital Marketplace
        </h1>

        <p className="text-lg mb-6">
          Buy authentic handmade products directly from rural artisans.
        </p>

        <div className="flex gap-5 justify-center">
          <button
            className="rounded-xl bg-blue-500 h-10 w-40 hover:bg-blue-400 transition"
            onClick={() => setLoginType("customer")}
          >
            Explore Products!
          </button>

          <button
            className="rounded-xl bg-blue-500 h-10 w-40 hover:bg-blue-400 transition"
            onClick={() => setLoginType("artisan")}
          >
            Become an Artisan
          </button>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {loginType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

          <div className="bg-white rounded-2xl shadow-xl p-8 w-96 relative">

            {/* Close */}
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              onClick={() => setLoginType(null)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">
              {loginType === "artisan" ? "Artisan Login" : "Customer Login"}
            </h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-2 mb-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition">
              Login
            </button>

            <p className="text-sm text-center mt-4 text-gray-500">
              Don’t have an account?{" "}
              <span className="text-blue-500 cursor-pointer hover:underline">
                Register
              </span>
            </p>

          </div>
        </div>
      )}
    </div>
  );
}