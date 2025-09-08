'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    
    // Set launch date to October 30, 2025
    const launchDate = new Date('2025-10-30T00:00:00');

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If countdown is finished, set all to 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateTimer();
    
    // Set up interval
    const timer = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array to run only once

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <Head>
        <title>Coming Soon - CG Guides</title>
        <meta name="description" content="Something amazing is coming soon. Stay tuned!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Animated background elements with stars */}
        <div className="absolute inset-0">
          
          {/* Running/Shooting stars */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`shooting-star-${i}`}
              className="absolute"
              style={{
                left: '-100px',
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                animationIterationCount: 'infinite',
                animationName: 'shootingStar',
                animationTimingFunction: 'ease-out'
              }}
            >
              <div
                className="relative"
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50%',
                  boxShadow: '0 0 6px #ffffff, 0 0 12px #FF6B35, -150px 0 80px 10px rgba(255, 107, 53, 0.3)',
                }}
              />
            </div>
          ))}
          
          {/* Streaming stars (vertical) */}
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`streaming-star-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-50px',
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                animationIterationCount: 'infinite',
                animationName: 'streamingStar',
                animationTimingFunction: 'linear'
              }}
            >
              <div
                className="relative"
                style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: '#FF6B35',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px #FF6B35, 0 0 16px #ffffff, 0 -100px 60px 8px rgba(255, 255, 255, 0.2)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto w-full">
            {/* Logo/Brand */}
            <div className="mb-8 sm:mb-12">
              <div className="flex justify-center mb-4 sm:mb-6">
                <img 
                  src="https://www.cgguides.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.2b148d95.png&w=3840&q=75"
                  alt="CG Guides Logo"
                  className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain"
                  style={{ filter: 'brightness(1.1) contrast(1.1)' }}
                />
              </div>
              <div className="w-24 sm:w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#FF6B35' }}></div>
            </div>

            {/* Coming Soon Message */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
                Something <span style={{ color: '#FF6B35' }}>Amazing</span> is Coming Soon
              </h2>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
                We&apos;re crafting an exceptional experience that will revolutionize the way you learn and grow. 
                Get ready for something extraordinary.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12 sm:mb-16 px-2">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item) => (
                  <div 
                    key={item.label} 
                    className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    style={{ 
                      backgroundColor: '#1A1A1A', 
                      borderColor: '#333333' 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FF6B35';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#333333';
                    }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2" style={{ color: '#FF6B35' }}>
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Signup */}
            <div className="mb-8 sm:mb-12 px-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Be the first to know when we launch
              </h3>
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all text-sm sm:text-base"
                    style={{ 
                      backgroundColor: '#1A1A1A',
                      borderColor: '#333333'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FF6B35';
                      e.target.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#333333';
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    style={{ 
                      backgroundColor: '#FF6B35',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitted) {
                        e.currentTarget.style.backgroundColor = '#E55A2B';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitted) {
                        e.currentTarget.style.backgroundColor = '#FF6B35';
                      }
                    }}
                  >
                    {isSubmitted ? 'Thank You!' : 'Notify Me'}
                  </button>
                </div>
              </form>
              {isSubmitted && (
                <p className="text-green-400 mt-4 transition-all duration-500 ease-in-out text-sm sm:text-base">
                  Thanks for subscribing! We&apos;ll keep you updated.
                </p>
              )}
            </div>

            {/* Contact */}
            <div className="text-center px-4">
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Questions? Reach out to us at{' '}
                <a 
                  href="mailto:hello@cgguides.com" 
                  className="transition-colors"
                  style={{ color: '#FF6B35' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E55A2B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FF6B35';
                  }}
                >
                  hello@cgguides.com
                </a>
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                © 2024 CG Guides. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced floating particles with star effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationName: 'floatingStar'
              }}
            >
              <div
                style={{
                  width: `${1 + Math.random() * 2}px`,
                  height: `${1 + Math.random() * 2}px`,
                  backgroundColor: '#FF6B35',
                  borderRadius: '50%',
                  boxShadow: '0 0 4px #FF6B35, 0 0 8px rgba(255, 107, 53, 0.5)'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-200px);
            opacity: 0;
          }
        }
        
        @keyframes streamingStar {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 50px));
            opacity: 0;
          }
        }
        
        @keyframes floatingStar {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-15px) rotate(90deg) scale(1.2);
            opacity: 1;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg) scale(0.8);
            opacity: 0.7;
          }
          75% { 
            transform: translateY(-15px) rotate(270deg) scale(1.1);
            opacity: 1;
          }
        }
        
        @keyframes cloudRise {
          0% {
            transform: translateY(0px) translateX(0px) scale(0.8);
            opacity: 0.08;
          }
          20% {
            transform: translateY(-100px) translateX(-30px) scale(1);
            opacity: 0.12;
          }
          40% {
            transform: translateY(-200px) translateX(20px) scale(1.2);
            opacity: 0.1;
          }
          60% {
            transform: translateY(-300px) translateX(-10px) scale(1.4);
            opacity: 0.08;
          }
          80% {
            transform: translateY(-400px) translateX(40px) scale(1.6);
            opacity: 0.04;
          }
          100% {
            transform: translateY(-500px) translateX(-20px) scale(1.8);
            opacity: 0;
          }
        }
        
        @keyframes cloudDrift {
          0% {
            transform: translateY(0px) translateX(0px) scale(0.6);
            opacity: 0.04;
          }
          25% {
            transform: translateY(-150px) translateX(-50px) scale(0.9);
            opacity: 0.06;
          }
          50% {
            transform: translateY(-300px) translateX(30px) scale(1.1);
            opacity: 0.05;
          }
          75% {
            transform: translateY(-450px) translateX(-20px) scale(1.3);
            opacity: 0.03;
          }
          100% {
            transform: translateY(-600px) translateX(60px) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}