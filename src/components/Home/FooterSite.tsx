
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const FooterSite = () => {
  return (
    <footer className="bg-[#e7f3f9] text-gray-800 pt-12 pb-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img
            src="https://i.pinimg.com/736x/2b/40/5b/2b405bd122d1fe0fed784f9454aa2e2c.jpg"
            alt="CCube Homeopathy"
            className="w-28 mb-4"
          />
          <p className="text-sm">
            Himanshu kumar a Backend Developer make this.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaFacebookF className="text-xl hover:text-blue-600" /></a>
            <a href="#"><FaInstagram className="text-xl hover:text-pink-500" /></a>
            <a href="#"><FaYoutube className="text-xl hover:text-red-600" /></a>
          </div>
        </div>

        {/* Have a Question */}
        <div>
          <h3 className="text-lg font-bold mb-4">Have a question ?</h3>
          <p className="font-semibold underline decoration-orange-500">Ready To Speak</p>
          <p className="text-sm mb-4">With The Developer?</p>
          <div className="flex items-center space-x-2 mb-4">
            <FaPhoneAlt className="text-pink-600" />
            <span className="text-lg font-bold">(+91) 70489 45773</span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 font-semibold rounded hover:bg-orange-600 flex items-center gap-2">
            Send Mail  <FaArrowRight />
          </button>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="flex items-start space-x-2 mb-3">
            <MdLocationOn className="text-orange-500 text-xl" />
            <p className="text-sm">
              DLF gurgaon Sector -20 Gurgaon - 122016
            </p>
          </div>
          <div className="flex items-start space-x-2 mb-4">
            <MdEmail className="text-orange-500 text-xl" />
            <p className="text-sm">Himanshu2022kumar02@gmail.com</p>
          </div>
          <button className="text-orange-500 border border-orange-500 px-4 py-2 text-sm font-semibold rounded hover:bg-orange-100">
            GET DIRECTIONS
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-600">
        © 1998-2024 All rights reserved by <span className="font-bold text-gray-800">SuerHim</span>
      </div>
    </footer>
  );
};

export default FooterSite;
