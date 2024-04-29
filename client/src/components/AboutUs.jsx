import React from 'react';
import { Link } from 'react-router-dom'
import book from '../assets/images/booking.png';
import rupee from '../assets/images/rupee.png';
import road from '../assets/images/road.png';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-16 px-4 mb-24"> {/* Added mb-24 for bottom margin */}
      <div className="text-center mb-8">
        <h2 id="howItWorksHeading" className="text-4xl font-bold">About Cruise Connect</h2>
        <p className="text-gray-400">
          The three principles of Cruise Connect.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Use grid-cols-1 for mobile */}
        <div className="flex flex-col items-center justify-center px-6 py-8 border border-purple-500 rounded-lg shadow-md"> {/* Purple Border */}
          <img src={book} alt="Choose A Car" className="w-12 h-12 mb-2" /> {/* Same Image for All Cards */}
          <h3 className="text-2xl font-bold mb-2">Seamless Booking</h3>
          <p className="text-gray-400">
            Click the <span>Start Booking</span> button and see the varities of vehicle options that you have.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 border border-purple-500 rounded-lg shadow-md"> {/* Purple Border */}
          <img src={rupee} alt="Pick Up A Car" className="w-12 h-12 mb-2" /> {/* Same Image for All Cards */}
          <h3 className="text-2xl font-bold mb-2">Transparent Pricing</h3>
          <p className="text-gray-400">
            Browse our extensive selection of vehicles to find the one that fits your needs and budget.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 border border-purple-500 rounded-lg shadow-md"> {/* Purple Border */}
          <img src={road} alt="Enjoy Driving" className="w-12 h-12 mb-2" /> {/* Same Image for All Cards */}
          <h3 className="text-2xl font-bold mb-2">Quickly hit the Roads</h3>
          <p className="text-gray-400">
            Once you've selected your desired pick-up and drop-off dates, complete the secure payment process to confirm your reservation. 
            We offer a variety of payment options for your convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
