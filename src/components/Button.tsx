"use client";

interface ButtonProps {
    text: string;
}

export default function Button({ text }: ButtonProps) {
  return(
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition">
            {text} 
        </button>
    );
}