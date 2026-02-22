import React from "react";

function Login() {
  return (
    <>
      <div style={{ 
        maxWidth: "350px", 
        margin: "80px auto", 
        padding: "20px", 
        border: "1px solid #ddd",
        borderRadius: "8px"
      }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <div style={{ marginBottom: "15px" }}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#60a5fa",   // blue-400
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;