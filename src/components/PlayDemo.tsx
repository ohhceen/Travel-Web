"use client";

export default function PlayDemo() {
    return (
        <button className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 text-white flex items-center  justify-center rounded-full shadow-md">
            ▶
        </div>
        <span className="font-medium text-gray-700">Play Demo</span>
        </button>
    );
}