import Image from "next/image";

const OngoingTrip: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 w-60">
      <div className="flex items-center gap-3">
        <Image
          src="/Rome2.jpg"
          alt="Trip to Rome"
          width={100}
          height={100}
          className="rounded-full object cover"
        />
        <div>
          <p className="text-gray-500 text-xs">Ongoing</p>
          <p className="font-bold text-sm">Trip to Rome</p>
          <p className="text-xs text-purple-600 font-semibold">40% completed</p>
          <div className="w-full h-1 bg-gray-300 rounded-full">
            <div className="h-full bg-purple-600 rounded-full" style={{ width: "40%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingTrip;