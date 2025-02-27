import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Name and Motto */}
          <div>
            <h2 className="text-2xl font-bold mb-4">FitZone</h2>
            <p className="text-[#EFEDE8A6]">
              Empowering you to achieve your fitness goals, one step at a time.
            </p>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EFEDE8A6] hover:text-[#EC7807] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#EFEDE8A6] mt-8 pt-8 text-center text-[#EFEDE8A6]">
          <p>&copy; {new Date().getFullYear()} Fitzone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;