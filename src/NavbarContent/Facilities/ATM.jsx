import React from "react";
import atm from "../../assets/images/Facilities/ATM/ATM.jpeg";
import "../../styles/atm.scss";

export default function ATM() {
  return (
    <div className="atm-facility">
      <h1 className="page-title">ATM Facility</h1>

      {/* Top Section: Image + First Paragraph */}
      <div className="top-section">
        <div className="image-container">
          <img src={atm} alt="ATM Facility at KIT" />
        </div>

        <div className="text-right">
          <p>
            An Automated Teller Machine (ATM) is an electronic banking device that
            allows customers to perform basic financial transactions without
            visiting a bank branch. Using an ATM card and a Personal
            Identification Number (PIN), users can withdraw cash, check balance,
            deposit money, and transfer funds at any time.
          </p>
        </div>
      </div>

      {/* Remaining Content */}
      <div className="content-section">
        <p>
          ATMs are widely installed in banks, shopping areas, railway stations,
          and other public places to ensure easy accessibility. They reduce long
          queues in banks and save time by offering fast and secure transactions.
        </p>

        <p>
          With advancements in technology, modern ATMs support features such as
          cash deposits, mini statements, and contactless transactions, making
          banking more efficient and user-friendly for students and staff.
        </p>
      </div>

      {/* Features */}
      <div className="features-section">
        <h2>Key Features of Our ATM Facility</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>24/7 Availability</h3>
            <p>Round-the-clock access to banking services</p>
          </div>
          <div className="feature-item">
            <h3>Secure Transactions</h3>
            <p>PIN-protected operations for safety</p>
          </div>
          <div className="feature-item">
            <h3>Multiple Services</h3>
            <p>Cash withdrawal, balance inquiry, transfers</p>
          </div>
          <div className="feature-item">
            <h3>Campus Location</h3>
            <p>Conveniently placed within the college</p>
          </div>
        </div>
      </div>
    </div>
  );
}
