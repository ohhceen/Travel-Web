type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const isHighlighted = title === "Best Flights";

  return (
    <div
      className={`p-6 text-center transition-all duration-300 ${
        isHighlighted
          ? "bg-white rounded-[30px] shadow-xl relative z-10"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-center mb-4">
        <img src={icon} alt={title} className="h-12 w-12" />
      </div>
      <h3 className="text-lg font-semibold text-[#181E4B]">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{description}</p>

      {/* Optional: Decorative shape on bottom left */}
      {isHighlighted && (
        <div className="absolute bottom-0 left-0 w-10 h-10 bg-[#DF6951] rounded-tr-[30px]" />
      )}
    </div>
  );
};

export default ServiceCard;
