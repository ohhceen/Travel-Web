import DestinationCard from "./DestinationsCard";

const destinations = [
  {
    image: "/Rome.png",
    title: "Rome, Italy",
    price: "$5.42k",
    days: "10 Days Trip",
  },
  {
    image: "/London.png",
    title: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
  },
  {
    image: "/Full-Europe.png",
    title: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
  },
];

const DestinationsSection = () => {
  return (
    <section className="text-center my-12 px-6">
      <h2 className="text-xl font-semibold text-gray-500">Top Selling</h2>
      <h1 className="text-3xl font-bold text-gray-900 mt-2">Top Destinations</h1>
      <div className="mt-8 flex justify-center items-center flex-wrap gap-6">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
