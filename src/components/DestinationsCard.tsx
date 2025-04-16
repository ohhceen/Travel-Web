import Image from "next/image";

interface DestinationCardProps {
  image: string;
  title: string;
  price: string;
  days: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, price, days }) => {
  return (
    
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative w-64 h-64 overflow-hidden rounded-lg aspect-square">
        <Image
          src={image}
          alt={title}
          width={500}
          height={800}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{price}</p>
        <p className="text-sm text-gray-700 flex items-center mt-2">
          <span className="mr-2">✈️</span> {days}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
