import React, { useState } from "react";

export default function Categories() {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = {
    "Pottery & Clay Crafts": [
      "Terracotta Pots",
      "Decorative Vases",
      "Clay Diyas",
      "Kulhads",
    ],
    "Handloom & Textiles": [
      "Cotton Sarees",
      "Khadi Shawls",
      "Dupattas",
    ],
    "Handmade Accessories": [
      "Jute Bags",
      "Beaded Jewelry",
      "Handmade Wallets",
    ],
    "Wooden Handicrafts": [
      "Carved Idols",
      "Wooden Toys",
      "Wall Hangings",
    ],
    "Eco-friendly Products": [
      "Bamboo Bottles",
      "Palm Leaf Baskets",
      "Natural Soaps",
    ],
    "Tribal & Folk Art": [
      "Madhubani Paintings",
      "Warli Art",
      "Miniature Paintings",
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        marginBottom: "40px",
        fontSize: "16px",
        fontWeight: "500",
        marginTop: "4vh",
        position: "relative",
      }}
    >
      {Object.keys(categories).map((category, index) => (
        <div key={index} style={{ position: "relative" }}>
          <button
            className="hover:text-blue-400"
            onClick={() =>
              setOpenCategory(openCategory === category ? null : category)
            }
          >
            {category}
          </button>

          {openCategory === category && (
            <div
              style={{
                position: "absolute",
                top: "30px",
                left: "0",
                background: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                padding: "10px 0",
                width: "200px",
                zIndex: 100,
              }}
            >
              {categories[category].map((product, i) => (
                <div
                  key={i}
                  style={{
                    padding: "8px 15px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.background = "#f1f5f9")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "white")
                  }
                >
                  {product}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}