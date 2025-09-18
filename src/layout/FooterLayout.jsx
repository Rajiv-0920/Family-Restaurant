import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../components/Logo";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const FooterLayout = () => {
  return (
    <footer className="p-4 sm:p-6 lg:p-15 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="description">
            Experience the warmth of{" "}
            <span className="primary-text font-medium">
              KhaiKhai Family Restaurant
            </span>
            , where delicious food and family vibes create lasting memories.
            Connect with us for updates and offers!
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <h3 className="heading text-lg sm:text-xl font-semibold mb-2">
            Opening Hours
          </h3>
          <ul className="text-sm sm:text-base space-y-1">
            <li className="flex gap-2 items-center">
              <FaRegClock /> Sunday: 10:50 am-11:50 pm
            </li>
            <li className="flex gap-2 items-center">
              <FaRegClock /> Monday: 10:50 am-11:50 pm
            </li>
            <li className="flex gap-2 items-center">
              <FaRegClock /> Tuesday: 10:50 am-11:50 pm
            </li>
            <li className="flex gap-2 items-center">
              <FaRegClock /> Wednesday: 10:50 am-11:50 pm
            </li>
            <li className="flex gap-2 items-center">
              <FaRegClock /> Thursday: 10:50 am-11:50 pm
            </li>
            <li className="flex gap-2 items-center">
              <FaRegClock /> Friday: 10:50 am-11:50 pm
            </li>
            <li className="flex gap-2 items-center">
              <FaRegClock /> Saturday: 10:50 am-11:50 pm
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <h3
            id="contact"
            className="heading text-lg sm:text-xl font-semibold mb-2"
          >
            Contact Us
          </h3>
          <ul className="text-sm sm:text-base space-y-1">
            <li className="flex gap-2 items-center">
              <MdEmail className="email-contact-icon" />
              Email:
              <a href="mailto:khai24310@gmail.com" className="email-contact">
                khai24310@gmail.com
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <IoCall /> Phone: <a href="tel:+918535809773">+91 853 580 9773</a>
            </li>
            <li className="flex gap-2 items-center">
              <IoCall /> Phone: <a href="tel:+919265005659">+91 926 500 5659</a>
            </li>
            <li className="flex gap-2 items-start">
              <FaLocationArrow />
              Location:{" "}
              <a
                href="https://maps.app.goo.gl/7YiR1cmMXXeTGqW57"
                className="capitalize"
              >
                neamatpur, IISCO bypass road, dist. paschim bardhaman
              </a>
            </li>
          </ul>
          <div className="map-container mt-2 sm:mt-4 mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154637.96674655986!2d86.72190639726558!3d23.716501800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e1b0bd3787d5%3A0xc07e5468c71461d8!2sKhai-Khai%20Family%20restaurant!5e1!3m2!1sen!2sin!4v1758115982694!5m2!1sen!2sin"
              style={{ border: "2px solid #ff7d2940", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-48 sm:h-64 md:h-80"
            ></iframe>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <h3 className="heading text-lg sm:text-xl font-semibold mb-2">
            Follow Us
          </h3>
          <ul className="text-sm sm:text-base space-y-1 flex gap-4">
            <li>
              <a
                href="https://www.facebook.com/share/1guETBf34R/"
                target="_blank"
                className="hover:underline text-2xl"
              >
                <FaFacebook className="hover:fill-[#ff7d29]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/khaikhai_familyrestaurant?utm_source=qr&igsh=c3pvOG12enQwMzRx"
                target="_blank"
                className="hover:underline text-2xl"
              >
                <FaInstagram className="hover:fill-[#ff7d29]" />
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/+918535809773?text=${encodeURIComponent(
                  "Hello Khai Khai Family Restaurant! I'd like to inquire about your services. Please reply with details."
                )}`}
                target="_blank"
                className="hover:underline text-2xl"
              >
                <FaWhatsapp className="hover:fill-[#ff7d29]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
