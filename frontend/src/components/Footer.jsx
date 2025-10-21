import { assets, footerLinks } from "../assets/assets";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10 bg-gradient-to-b from-primary/5 to-white border-t border-gray-200">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 py-12 text-gray-600">
        
        {/* Logo and Description */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <img className="w-32" src={assets.logo} alt="logo" />
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            From farm-fresh produce to everyday essentials, we bring everything you need 
            straight to your doorstep — fast, reliable, and affordable.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 text-gray-600">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full md:w-auto">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-3 text-base md:text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="hover:text-primary transition duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300/40 py-5 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} <span className="font-medium text-gray-800">GroNow</span>. 
          All Rights Reserved. Designed by <span className="font-semibold text-primary">T. Purusottam Reddy</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
