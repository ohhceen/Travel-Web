import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500">TESTIMONIALS</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            What People Say About Us.
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative mt-8 flex items-center justify-center">
          <div className="relative bg-white shadow-lg rounded-lg p-6 w-96">
            <div className="absolute -top-6 left-6">
              <Image
                src="/Man.png"
                alt="User"
                width={48}
                height={48}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p className="text-gray-600 text-sm mt-6">
              "On the Windows talking painted posture yet its express parties use. Sure last upon he same as know next. Of believed or diverted no."
            </p>
            <p className="font-bold mt-4">Mike Taylor</p>
            <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex space-x-2 mt-6 justify-center">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>

        {/* Sponsor Logos */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <Image src="/Axon.png" alt="Axon" width={80} height={40} />
          <Image src="/Jetstar.png" alt="Jetstar" width={80} height={40} />
          <Image src="/Expedia.png" alt="Expedia" width={80} height={40} />
          <Image src="/Qantas.png" alt="Qantas" width={80} height={40} />
          <Image src="/Alitalia.png" alt="Alitalia" width={80} height={40} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
