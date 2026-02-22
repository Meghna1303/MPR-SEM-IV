import React from "react";

export default function Topsection() {
    return (
        <div
            style={{
                height: "70vh",
                backgroundColor: "#f7fafc",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "0 20px",
            }}
        >
            <h1
                style={{
                    fontSize: "42px",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: "16px",
                    maxWidth: "800px",
                }}
            >
                Empowering Rural Artisans Through Digital Marketplace
            </h1>

            <p
                style={{
                    fontSize: "18px",
                    color: "black",
                    maxWidth: "600px",
                    lineHeight: "1.6",
                }}
            >
                Buy authentic handmade products directly from rural artisans.
            </p>
            <div className="display:flex">
            <button className="rounded-xl bg-blue-400 h-10 w-40 mt-3 hover:bg-blue-200">Explore Products</button>
            <button className="rounded-xl bg-blue-400 h-10 w-40 ml-5 hover:bg-blue-200">Become an Artisan</button>
            </div>
        </div>
    );
}