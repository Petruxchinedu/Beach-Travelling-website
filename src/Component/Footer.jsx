import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES</h1>
          <div className="flex justify-between w-full sm:max-w-[200px] my-4">
            <FaFacebook className="icons" />
            <FaTwitter className="icons" />
            <FaInstagram className="icons" />
            <FaPinterest className="icons" />
            <FaYoutube className="icons" />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <ul className="lg:flex">
          <li>About</li>
          <li>Patnership</li>
          <li>Careers</li>
          <li>Newsroom</li>
          <li>Advertising</li>
        </ul>
        <ul className="text-right lg:flex">
          <li>Home</li>
          <li>Destination</li>
          <li>Travels</li>
          <li>Views</li>
          <li>Book</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
