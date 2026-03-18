import React, { useState, useEffect } from 'react';
import './_featurePopup.scss';
import { IoIosFlash } from 'react-icons/io';

const FeaturePopup = () => {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenFeaturePopup');
      if (!hasSeenPopup) {
         setIsOpen(true);
      }
   }, []);

   const handleClose = () => {
      setIsOpen(false);
      localStorage.setItem('hasSeenFeaturePopup', 'true');
   };

   if (!isOpen) return null;

   return (
      <div className='feature-popup-overlay'>
         <div className='feature-popup-content'>
            <div className='feature-popup-header'>
               <div className='feature-popup-icon'>
                  <IoIosFlash size={30} />
               </div>
               <h3>Welcome to E-linkUp</h3>
            </div>
            <div className='feature-popup-body'>
               <p>
                  Experience YouTube like never before. This is a <strong>web-based application</strong> designed for a pure viewing experience.
               </p>
               <ul className='feature-list'>
                  <li>
                     <span className='feature-badge free'>Free</span> Use it entirely for free.
                  </li>
                  <li>
                     <span className='feature-badge no-ads'>No Ads</span> Pure content, no interruptions.
                  </li>
                  <li>
                     <span className='feature-badge no-comments'>No Comments</span> Focused on the video.
                  </li>
                  <li>
                     <span className='feature-badge no-distraction'>No Distractions</span> Stay focused on what matters.
                  </li>
               </ul>
            </div>
            <div className='feature-popup-footer'>
               <button className='btn-get-started' onClick={handleClose}>
                  Get Started
               </button>
            </div>
         </div>
      </div>
   );
};

export default FeaturePopup;
