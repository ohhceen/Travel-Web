"use client";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 shadow-md bg-white">
            <h1 className="text-2xl font-extrabold flex items-center font-sans">
                <span className="text-black">Jad</span>
                <span className="flex">
                    <span className="fill-text">o</span>
                    <span className="fill-text">o</span>
                </span>
            </h1>
            <div className="space-x-4">
                <a href="#" className="text-gray-700 hover:text-yellow-500">Destinations</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Hotels</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Flights</a>
                <a href="#" className="text-gray-700 hover:text-yellow-500">Bookings</a>
            </div>
            <div>
                <button className="mr-4 text-gray-700">Login</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">Sign Up</button>
            </div>
        </nav>
    );
}
