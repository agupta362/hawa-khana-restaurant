import React from "react";

/**
 * Location Component for Hawa Khana Restaurant 
 * This page displays the physical address, hours of operation, and map.
 */
function Location() {
  return (
    <div className="page">
      <div className="location-header">
        <h1>Find Hawa Khana</h1>
      </div>

      <div className="location-content">
        {/* LEFT COLUMN: Restaurant info */}
        <div className="location-info">
          <h2>Address</h2>
          <p>123 Fusion Way</p>
          <p>Kathmandu, Nepal, 44600</p>
          <p className="phone">+977 9866113000</p>

          <h2>Hours of Operation</h2>
          <div>
            <div className="hours-row">
              <span className="day">Monday – Thursday</span>
              <span className="time">11:00 AM – 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Friday</span>
              <span className="time">11:00 AM – 11:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Saturday</span>
              <span className="time">12:00 PM – 11:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Sunday</span>
              <span className="time">12:00 PM – 10:00 PM</span>
            </div>
          </div>

          <h2>Getting Here</h2>
          <p>
            We are located in the heart of downtown, near the historic Durbar Square. 
            Street parking is available nearby, and we are easily accessible by public transit.
          </p>
        </div>

        {/* RIGHT COLUMN: Map */}
        <div className="map-container">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.85160071253!2d85.3015!3d27.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f9733230a5%3A0xc4703a5574591a5e!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1649000000000!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;