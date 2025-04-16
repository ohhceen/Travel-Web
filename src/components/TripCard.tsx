import Image from "next/image";

const TripCard = () => {
  return (
    <div className="relative bg-white shadow-lg rounded-2xl p-4 w-80 flex flex-col gap-4">
      {/* Card Image */}
      <div className="relative w-full h-40 rounded-xl overflow-hidden">
        <Image 
        src="/Greece.jpg" 
        alt="Trip to Greece" 
        width={384}
        height={224} 
        objectFit="cover" 
        objectPosition="object-center"
        />
      </div>

      {/* Trip Details */}
      <div>
        <h3 className="text-lg font-semibold">Trip To Greece</h3>
        <p className="text-gray-500 text-sm">14-29 June | by Robbin J</p>
      </div>

      {/* Icons */}
      <div className="flex justify-between text-gray-600 text-sm">
        <span>📍 Location</span>
        <span>🏨 Hotel</span>
        <span>✈️ Flight</span>
      </div>
      <p className="text-gray-500 text-sm">24 people going</p>
    </div>
  );
}
export default TripCard;