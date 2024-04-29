import React from 'react';
import { Link } from 'react-router-dom'
import click from '../assets/images/click1.png';
import car from '../assets/images/car.png';
import card from '../assets/images/card.png';

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-16 px-4 mb-24"> {/* Added mb-24 for bottom margin */}
      <div className="text-center mb-8">
        <h2 id="howItWorksHeading" className="text-4xl font-bold">How It Works</h2>
        <p className="text-gray-400">
          Explore our simple car rental process and get on the road in no time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Use grid-cols-1 for mobile */}
        <div className="flex flex-col items-center justify-center px-6 py-8 border border-purple-500 rounded-lg shadow-md"> {/* Purple Border */}
          <img src={click} alt="Choose A Car" className="w-12 h-12 mb-2" /> {/* Same Image for All Cards */}
          <h3 className="text-2xl font-bold mb-2">Get Started</h3>
          <p className="text-gray-400">
            Click the <span>Start Booking</span> button and see the varities of vehicle options that you have.
          </p>
          <Link to='/cars'>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-full mt-4">
              Start Booking
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 border border-purple-500 rounded-lg shadow-md"> {/* Purple Border */}
          <img src={car} alt="Pick Up A Car" className="w-12 h-12 mb-2" /> {/* Same Image for All Cards */}
          <h3 className="text-2xl font-bold mb-2">Choose A Car</h3>
          <p className="text-gray-400">
            Browse our extensive selection of vehicles to find the one that fits your needs and budget.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 border border-purple-500 rounded-lg shadow-md"> {/* Purple Border */}
          <img src={card} alt="Enjoy Driving" className="w-12 h-12 mb-2" /> {/* Same Image for All Cards */}
          <h3 className="text-2xl font-bold mb-2">Select Dates & Pay</h3>
          <p className="text-gray-400">
            Once you've selected your desired pick-up and drop-off dates, complete the secure payment process to confirm your reservation. 
            We offer a variety of payment options for your convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
