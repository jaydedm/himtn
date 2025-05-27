'use client'

import React, { useState, useEffect } from 'react';

const HiMountainHours = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentHoliday, setCurrentHoliday] = useState('');

  const hours = [
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Monday', hours: '11:00 AM to 4:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM to 4:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM to 4:00 PM' },
    { day: 'Thursday', hours: '11:00 AM to 4:00 PM' },
    { day: 'Friday', hours: '11:00 AM to 4:00 PM' },
    { day: 'Saturday', hours: 'Closed' }
  ];

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    setCurrentDay(dayOfWeek);

    // Check if store is open
    const checkIfOpen = () => {
      // Get current time in Mountain Time
      const mountainTime = new Date(today.toLocaleString("en-US", {timeZone: "America/Denver"}));
      const currentHour = mountainTime.getHours();
      const currentMonth = mountainTime.getMonth() + 1; // getMonth() returns 0-11
      const currentDate = mountainTime.getDate();
      const isMondayToFriday = dayOfWeek >= 1 && dayOfWeek <= 5;

      // Check for summer holidays
      const isHoliday = () => {
        // Memorial Day (last Monday of May)
        if (currentMonth === 5 && dayOfWeek === 1) {
          const lastMondayOfMay = new Date(mountainTime.getFullYear(), 4, 31);
          while (lastMondayOfMay.getDay() !== 1) {
            lastMondayOfMay.setDate(lastMondayOfMay.getDate() - 1);
          }
          if (currentDate === lastMondayOfMay.getDate()) {
            setCurrentHoliday('Memorial Day');
            return true;
          }
        }

        // Independence Day (July 4th)
        if (currentMonth === 7 && currentDate === 4) {
          setCurrentHoliday('Independence Day');
          return true;
        }

        // Labor Day (first Monday of September)
        if (currentMonth === 9 && dayOfWeek === 1) {
          const firstMondayOfSeptember = new Date(mountainTime.getFullYear(), 8, 1);
          while (firstMondayOfSeptember.getDay() !== 1) {
            firstMondayOfSeptember.setDate(firstMondayOfSeptember.getDate() + 1);
          }
          if (currentDate === firstMondayOfSeptember.getDate()) {
            setCurrentHoliday('Labor Day');
            return true;
          }
        }

        setCurrentHoliday('');
        return false;
      };

      // Closed on holidays
      if (isHoliday()) return false;

      if (isMondayToFriday) {
        // Store is open 11 AM to 4 PM Mountain Time
        return currentHour >= 11 && currentHour < 16;
      }
      return false; // Closed on weekends
    };

    setIsOpen(checkIfOpen());
  }, []);

  const handleMapsClick = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const address = "40.643878,-111.280606";

    if (isIOS) {
      window.open(`maps://maps.google.com/maps?daddr=${address}&ll=`);
    } else {
      window.open(`https://maps.google.com/maps?daddr=${address}`);
    }
  };

  return (
    <div>

      <section className="py-5 mt-4" style={{background: 'linear-gradient(135deg, #fef7ed, #fed7aa)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="card main-card rounded-lg">

                {/* Status Header */}
                <div className={`status-header ${isOpen ? 'status-open' : 'status-closed'}`}>
                  <h3 className="mb-2 text-uppercase" style={{letterSpacing: '0.1em', fontWeight: '500'}}>
                    {isOpen ? 'Dine In and Carry Out' : 'Sorry'}
                  </h3>
                  <h1 className="mb-0 text-uppercase" style={{letterSpacing: '0.15em', fontWeight: 'bold', fontSize: '2.5rem'}}>
                    {isOpen ? "We're Open" : "We're Closed"}
                    {currentHoliday && ` for ${currentHoliday}`}
                  </h1>
                </div>

                <div className="card-body p-4">

                  {/* Holiday Notice */}
                  <div className="holiday-notice">
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <svg width="20" height="20" fill="#f59e0b" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h6 className="fw-bold text-warning-emphasis mb-2">Summer Holiday Closures:</h6>
                        <p className="mb-0 text-warning-emphasis">Memorial Day • Independence Day • Labor Day</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours List */}
                  <div className="text-center mb-4">
                    <h4 className="fw-bold mb-4">Operating Hours</h4>
                    <div className="mx-auto" style={{maxWidth: '400px'}}>
                      {hours.map((item, index) => (
                        <div
                          key={index}
                          className={`hours-item d-flex justify-content-between align-items-center ${
                            index === currentDay ? `today ${currentHoliday ? 'holiday' : ''}` : ''
                          }`}
                        >
                          <span>
                            {item.day}
                            {index === currentDay && (
                              <span className={`today-badge ${currentHoliday ? 'holiday' : ''}`}>
                                Today
                              </span>
                            )}
                          </span>
                          <span>{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="contact-section p-4 text-center">
                  <div className="mb-4">
                    <h5 className="fw-semibold mb-3">Visit Us</h5>
                    <div
                      onClick={handleMapsClick}
                      className="address-link fw-medium"
                      style={{cursor: 'pointer'}}
                    >
                      40 North Main Street<br />
                      Kamas, Utah 84036
                    </div>
                  </div>

                  <div className="border-top pt-3">
                    <p className="text-muted mb-2">
                      <small><em>Call Us For Questions Or Carry Out</em></small>
                    </p>
                    <a
                      href="tel:4357834466"
                      className="phone-link"
                    >
                      (435) 783-4466
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiMountainHours;
