import React from 'react';
import './ProfilePage.css';

export function ProfilePage(){
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="/images/user-avatar.jpg"
            alt="User Avatar"
            className="avatar"
          />
          <div className="user-info">
            <h1 className="user-name">John Doe</h1>
            <p className="user-role">Verified Seller / Bidder</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-box">
            <h3>56</h3>
            <p>Items Sold</p>
          </div>
          <div className="stat-box">
            <h3>12</h3>
            <p>Active Bids</p>
          </div>
          <div className="stat-box">
            <h3>4.9★</h3>
            <p>Seller Rating</p>
          </div>
        </div>

        <div className="profile-about">
          <h2>About John</h2>
          <p>
            Passionate collector and reseller specializing in luxury watches and rare antiques. John has been part of the auction community since 2022 and is known for fair deals and authentic listings.
          </p>
        </div>

        <div className="user-auctions">
          <h2>Active Auctions</h2>
          <div className="auction-grid">
            <div className="auction-card">
              <img src="/images/watch.jpg" alt="Luxury Watch" />
              <h3>Rolex Submariner 2021</h3>
              <p>Current Bid: <strong>$3,500</strong></p>
              <button className="btn-bid">Place Bid</button>
            </div>
            <div className="auction-card">
              <img src="/images/antique.jpg" alt="Antique Clock" />
              <h3>Antique Clock 19th Century</h3>
              <p>Current Bid: <strong>$890</strong></p>
              <button className="btn-bid">Place Bid</button>
            </div>
          </div>
        </div>

        <footer className="profile-footer">&copy; 2025 Auction House. All rights reserved.</footer>
      </div>
    </div>
  );
};
