const BookingSteps = () => {
  const steps = [
    {
      icon: "🧭",
      color: "bg-yellow-400",
      title: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: "💳",
      color: "bg-red-500",
      title: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: "🚕",
      color: "bg-teal-700",
      title: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <div className="p-6">
      <p className="text-sm font-semibold text-gray-500">Easy and Fast</p>
      <h2 className="text-4xl font-extrabold text-gray-900 mt-2 leading-snug">
        Book Your Next Trip <br /> In 3 Easy Steps
      </h2>

      <div className="mt-10 space-y-8">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start space-x-4">
            {/* Circle icon with dynamic background color */}
            <div
              className={`flex items-center justify-center w-14 h-14 rounded-full text-white text-2xl ${step.color}`}
            >
              {step.icon}
            </div>
            <div>
              <h4 className="text-base font-semibold text-gray-800">{step.title}</h4>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
