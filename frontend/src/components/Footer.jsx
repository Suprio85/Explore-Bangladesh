import React from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa"
import { FcBusinessContact } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-10 flex">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">About Us</h3>
                        <p className="text-sm">
                            We are a passionate team dedicated to helping you explore the world's most beautiful destinations. Our mission is to make your travel planning easy, fun, and stress-free.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="/destinations" className="hover:text-gray-400">Destinations</a></li>
                            <li><a href="/tours" className="hover:text-gray-400">Tours</a></li>
                            <li><a href="/blog" className="hover:text-gray-400">Travel Blog</a></li>
                            <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                        <p className="text-sm">
                            123 Travel Street, Wanderlust City, World 45678
                        </p>
                        <p className="text-sm mt-2">
                            Email: <a href="mailto:info@tripplanner.com" className="hover:text-gray-400">info@tripplanner.com</a>
                        </p>
                        <p className="text-sm mt-2">
                            Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+1 (234) 567-890</a>
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" ><FaFacebookSquare size={44} className="text-gray-400 hover:text-white" aria-label="Facebook" /></Link>
                            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitterSquare size={44} className="text-gray-400 hover:text-white" aria-label="Twitter" /></Link>
                            <Link to="https://instagram.com"target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={44} className="text-gray-400 hover:text-white" aria-label="Instagram" /></Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Trip Planner. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
