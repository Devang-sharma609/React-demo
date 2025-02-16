import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';

export function Popup() {
  const [isOpen, setIsOpen] = useState(true);
  const [progress, setProgress] = useState(100);
  const DURATION = 5000; // 5 seconds
  const UPDATE_INTERVAL = 10; // Update every 10ms for smooth animation
  const timerRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const pausedTimeRef = useRef(0);
  
  const startTimer = () => {
    startTimeRef.current = Date.now() - pausedTimeRef.current;
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, 100 - (elapsed / DURATION) * 100);
      
      if (remaining === 0) {
        setIsOpen(false);
        clearInterval(timerRef.current);
      } else {
        setProgress(remaining);
      }
    }, UPDATE_INTERVAL);
  };

  useEffect(() => {
    if (!isOpen) return;
    startTimer();

    return () => clearInterval(timerRef.current);
  }, [isOpen]);

  const handleMouseEnter = () => {
    clearInterval(timerRef.current);
    pausedTimeRef.current = Date.now() - startTimeRef.current;
  };

  const handleMouseLeave = () => {
    startTimer();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fadeIn pointer-events-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-black rounded-lg shadow-xl max-w-md w-full relative overflow-hidden pointer-events-auto">
        <div className="absolute bottom-0 left-0 h-1 bg-white w-full">
          <div 
            className="h-full bg-blue-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-blue-500" size={24} />
            <h2 className="text-xl font-semibold text-white">New UI Update! (  v 1.1.3 )</h2>
          </div>
          
          <div className="space-y-4">
            <ul className="space-y-2 text-white">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                Now optimized for viewing across various devices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}