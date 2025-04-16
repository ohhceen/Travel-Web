import SubscribeForm from "./BookingSection"; // Pastikan ini berisi form input + button

const Subscribe = () => {
  return (
    <section className="flex justify-center items-center py-16 px-4">
      <div className="relative bg-[#f3f2ff] p-10 rounded-2xl w-full max-w-4xl text-center shadow-lg overflow-hidden">
        {/* Judul */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 leading-relaxed">
          Subscribe to get information, latest news and other <br className="hidden md:block" />
          interesting offers about <span className="font-bold">Jadoo</span>
        </h2>

        {/* Form */}
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="relative w-full md:w-2/3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-3 pl-10 pr-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">📧</span>
          </div>
          <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 rounded-lg shadow-md hover:brightness-110 transition">
            Subscribe
          </button>
        </form>

        {/* Ikon pesawat kertas */}
        <div className="absolute top-8 right-8 translate-x-1/2 -translate-y-1/2 bg-[#e1e1ef] w-13 h-13 flex items-center justify-center rounded-full text-white text-xl shadow-md">
          ✈️
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
