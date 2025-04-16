import BookingSteps from "./BookingSteps";
import TripCard from "./TripCard";
import TripStatus from "./TripStatus";

const BookingSection = () => {
  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* Bagian kiri: Langkah Booking */}
        <BookingSteps />

        {/* Bagian kanan: Card Trip */}
        <div className="relative w-full flex justify-center">
          <TripCard />
          <div className="absolute -bottom-10 right-0">
            <TripStatus />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;
