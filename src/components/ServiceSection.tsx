import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="py-16 px-8 text-center">
      <h4 className="text-sm uppercase text-gray-500 tracking-wide">Category</h4>
      <h2 className="text-3xl font-bold text-[#181E4B] mt-2">
        We Offer Best Services
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ServiceCard
          icon="/Weather.png"
          title="Calculated Weather"
          description="Built Wicket longer admire do barton vanity itself do in it."
        />
        <ServiceCard
          icon="/Best-Flights.png"
          title="Best Flights"
          description="Engrossed listening. Park gate sell they west hard for the."
        />
        <ServiceCard
          icon="/Local-Event.png"
          title="Local Events"
          description="Barton vanity itself do in it. Preferred to men it engrossed listening."
        />
        <ServiceCard
          icon="/Custom.png"
          title="Customization"
          description="We deliver outsourced aviation services for military customers"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
