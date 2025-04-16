import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationSection from "@/components/DestinationSection";
import BookingSteps from "@/components/BookingSteps";
import TripCard from "@/components/TripCard";
import TripStatus from "@/components/TripStatus";
import OngoingTrip from "@/components/OnGoingTrip";
import Testimonials from "@/components/Testimonials";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import ServiceSection from "@/components/ServiceSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <DestinationSection />
      <section className="container mx-auto px-6 lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-1/2">
      <BookingSteps />
        </div>

        {/* TripCard & TripStatus di Kanan */}
        <div className="lg:w-1/2 relative flex justify-end">
          <TripCard />
          <div className="absolute -top-6 right-4">
            <TripStatus />
            <OngoingTrip />
          </div>
        </div>
      </section>
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
