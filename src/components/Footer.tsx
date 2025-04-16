import Image from "next/image";
import { FaFacebook} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-purple-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Brand & Description */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900">Jadoo.</h2>
          <p className="text-gray-500 text-sm mt-2">
            Book your trip in minutes, get full 
          </p>
          <p className="text-gray-500 text-sm">
            Control for much longer.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-3 gap-10 text-gray-700 text-sm">
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">More</h3>
            <ul className="mt-2 space-y-2">
              <li>Airline Fees</li>
              <li>Airline</li>
              <li>Low Fare Tips</li>
            </ul>
          </div>
        </div>

        {/* Social Media & App Download */}
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg">
            <FaInstagram/>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg">
            <FaFacebook/>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg">
            <FaTwitter/>
          </div>
          </div>
          <p className="text-gray-700 font-medium">Discover our app</p>
          <div className="flex space-x-3">
            <Image
              src="/Google Play.png"
              alt="Google Play"
              width={120}
              height={40}
            />
            <Image
              src="/Play Store.png"
              alt="Apple Store"
              width={120}
              height={40}
            />
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        All rights reserved @jadoo.co
      </p>
    </footer>
  );
};

export default Footer;
