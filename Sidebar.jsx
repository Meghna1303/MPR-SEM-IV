import React, { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          fontSize: "28px",
          cursor: "pointer",
          marginLeft: "20px"
        }}
      >
        ☰
      </div>

      {/* Sidebar */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "220px",
            height: "100vh",
            backgroundColor: "#f9fafb",
            padding: "20px",
            boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
            zIndex: "1000"
          }}
        >
          <h3 style={{ marginBottom: "20px", color: "#065f46" }}>
            Catalogue
          </h3>

          <ul style={{ listStyle: "none", padding: "0" }}>
            <li style={{ marginBottom: "12px" }}>Handloom</li>
            <li style={{ marginBottom: "12px" }}>Pottery</li>
            <li style={{ marginBottom: "12px" }}>Jewelry</li>
            <li style={{ marginBottom: "12px" }}>Paintings</li>
            <li style={{ marginBottom: "12px" }}>Wooden Crafts</li>
          </ul>
        </div>
      )}
    </>
  );
}