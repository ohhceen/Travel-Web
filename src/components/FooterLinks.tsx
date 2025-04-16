const FooterLinks = () => {
  const linkGroups = [
    {
      title: "Company",
      links: ["About", "Careers", "Mobile"]
    },
    {
      title: "Contact",
      links: ["Help/FAQ", "Press", "Affiliates"]
    },
    {
      title: "More",
      links: ["Airline Fees", "Airline", "Low Fare Tips"]
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 px-4 py-8 text-gray-700 text-sm">
      {linkGroups.map((group, index) => (
        <div key={index} className="min-w-[120px]">
          <h3 className="font-semibold text-gray-900 mb-4 text-base">{group.title}</h3>
          <ul className="space-y-3">
            {group.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a 
                  href="#" 
                  className="hover:text-blue-600 transition-colors duration-200"
                  aria-label={`${link} link`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;