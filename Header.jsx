import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "../Login/Login";

export default function Header() {
    const[open,setOpen]=useState(false);
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">

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

                    {/* LEFT: Logo + Search */}
                    <div className="flex items-center gap-6">
                        <Link to="/" className="flex items-center">
                            <h1 className="text-blue-400 text-5xl font-serif">
                                ArtLink
                            </h1>
                        </Link>

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="px-4 py-2 w-700px border border-gray-400 rounded-full focus:outline-none ml-20"
                        />
                    </div>

                    {/* RIGHT: Buttons */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" 
                            
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white  bg-blue-400  hover:bg-gray-400  focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Register
                        </Link>
                    </div>

                    {/* NAV LINKS */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${
                                            isActive ? "text-blue-400" : "text-gray-700"
                                        } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${
                                            isActive ? "text-blue-400" : "text-gray-700"
                                        } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${
                                            isActive ? "text-blue-400" : "text-gray-700"
                                        } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${
                                            isActive ? "text-blue-400" : "text-gray-700"
                                        } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}