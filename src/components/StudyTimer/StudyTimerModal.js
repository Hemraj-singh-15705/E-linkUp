import React, { useState, useEffect } from 'react';
import './_studyTimer.scss';
import { MdClose } from 'react-icons/md';

const BreakScreen = ({ onClose }) => {
   return (
      <div className="break-screen-overlay">
         <div className="break-screen-content">
            <h1>🎉 Time's Up!</h1>
            <p>You did great. Now take a screen break, stretch, and relax your eyes!</p>
            <div className="animation-container">
               <div className="pulse-circle"></div>
            </div>
            <button className="btn-close-break" onClick={onClose}>Back to E-linkUp</button>
         </div>
      </div>
   )
}

const StudyTimerModal = ({ onClose }) => {
   const [minutes, setMinutes] = useState(25);
   const [timeLeft, setTimeLeft] = useState(null);
   const [isBreak, setIsBreak] = useState(false);

   useEffect(() => {
      if (timeLeft === null) return;
      if (timeLeft === 0) {
         const audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg');
         audio.play();
         setIsBreak(true);
         return;
      }

      const timer = setInterval(() => {
         setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
   }, [timeLeft]);

   const startTimer = () => {
      setTimeLeft(minutes * 60);
   };

   if (isBreak) {
      return <BreakScreen onClose={onClose} />;
   }

   const formatTime = (seconds) => {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
   };

   return (
      <div className="study-timer-overlay">
         <div className="study-timer-content">
            <div className="study-timer-header">
               <h3>Study Focus Timer</h3>
               <MdClose size={24} className="close-icon" onClick={onClose} />
            </div>
            
            {timeLeft === null ? (
               <div className="study-timer-body">
                  <p>Set a timer to focus purely on your learning without distractions.</p>
                  <div className="preset-buttons">
                     <button className={minutes === 15 ? 'active' : ''} onClick={() => setMinutes(15)}>15 min</button>
                     <button className={minutes === 25 ? 'active' : ''} onClick={() => setMinutes(25)}>25 min</button>
                     <button className={minutes === 45 ? 'active' : ''} onClick={() => setMinutes(45)}>45 min</button>
                     <button className={minutes === 60 ? 'active' : ''} onClick={() => setMinutes(60)}>60 min</button>
                  </div>
                  <div className="custom-input">
                     <label>Custom (min): </label>
                     <input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} min="1" />
                  </div>
                  <button className="btn-start" onClick={startTimer}>Start Focus Session</button>
               </div>
            ) : (
               <div className="study-timer-running">
                  <div className="time-display">
                     {formatTime(timeLeft)}
                  </div>
                  <p>Stay focused. You can do this!</p>
                  <button className="btn-stop" onClick={() => setTimeLeft(null)}>Cancel Timer</button>
               </div>
            )}
         </div>
      </div>
   );
};

export default StudyTimerModal;
