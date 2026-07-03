import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#030712] border-t border-white/10 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="Revigoo"
              className="h-16 mb-6"
            />

            <p className="text-gray-400 leading-8">

              Revigoo is building a smarter and more transparent bike
              service platform by connecting riders with trusted and
              verified garages.

            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com/revigoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:info@revigoo.in"
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#home" className="hover:text-orange-500">Home</a></li>

              <li><a href="#services" className="hover:text-orange-500">Services</a></li>

              <li><a href="#workflow" className="hover:text-orange-500">Workflow</a></li>

              <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>General Bike Service</li>

              <li>Bike Repair</li>

              <li>Bike Inspection</li>

              <li>Verified Garages</li>

              <li>WhatsApp Booking</li>

              <li>Digital Service History</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <p>
                📧 info@revigoo.in
              </p>

              <p>
                📍 Kerala, India
              </p>

              <p>
                🚀 Launching Soon
              </p>

            </div>

            <button
              onClick={scrollTop}
              className="mt-8 bg-orange-500 hover:bg-orange-600 transition p-4 rounded-full"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-sm">

            © {new Date().getFullYear()} Revigoo. All Rights Reserved.

          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">

            Revigoo Technologies Pvt. Ltd.

          </p>

        </div>

      </div>

    </footer>
  );
}