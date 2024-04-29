import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import banner from '../assets/images/harrier.jpg';
import '../styles.css';


const Banner = () => {
  const handleSmoothScroll = () => {
    scroll.scrollTo({
      id:'howItWorksHeading', // Target the ID of the HowItWorks component (ensure it matches exactly)
      behavior: 'smooth',
    });
  };

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-2xl">
            Welcome to <br />
            <span className="text-4xl font-bold" style={{ backgroundImage: 'linear-gradient(to right, #5608D5, #A80CFA)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Cruise Connect</span>
          </p>
          <Link
            to='howItWorksHeading' // Ensure ID matches exactly
            activeClass="active" // Optional: Add CSS class for active link styling
            spy={true} // Optional: Enable scrollspy behavior (highlight target section)
            smooth={true} // Enables smooth scrolling
            offset={-50} // Optional: Adjust vertical offset (e.g., account for navbar height)
            onClick={handleSmoothScroll} // Optional: Handle additional actions
          >
            <button className="btn btn-success opacity-50">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
