import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';

// Object model for profile and auctions
const profile = {
  name: 'John Doe',
  role: 'Verified Seller / Bidder',
  avatar: 'Images/icons/user-profile.svg',
  itemsSold: 4,
  activeBids: 2,
  rating: '4.9 ★',
  about:
    'Passionate collector and reseller specializing in luxury watches and rare antiques. John has been part of the auction community since 2022 and is known for fair deals and authentic listings.',
  auctions: [
    {
      id: 1,
      title: 'Rolex Submariner 2021',
      image: 'Images/Products/rolex-submariner.jpg',
      currentBid: 95000,
      isOpen: true,
      currency: 'UGX'
    },
    {
      id: 2,
      title: 'Antique Clock 19th Century',
      image: 'Images/Products/antique-clock.jpg',
      currentBid: null,
      isOpen: false,
      currency: 'UGX'
    },{
      id: 3,
      title: 'Hublot',
      image: 'Images/Products/hublot.jpg',
      currentBid: 78000,
      isOpen: true,
      currency: 'UGX'
    },{
      id: 4,
      title: 'Mechanical',
      image: 'Images/Products/mechanical.jpg',
      currentBid: null,
      isOpen: false,
      currency: 'UGX'
    }
  ]
};

export function ProfilePage() {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-header">
          <div className="user-bio">
            <img src={profile.avatar} alt="User Avatar" className="avatar" />
            <div className='user-info'>
              <h1 className="user-name">{profile.name}</h1>
              <p className="user-role">{profile.role}</p>
            </div>
          </div>
          <div className='home-page-link'>
            <Link to='/' className='home-link'>
              HOME PAGE
            </Link>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-box">
            <h3>{profile.itemsSold}</h3>
            <p>Items Sold</p>
          </div>
          <div className="stat-box">
            <h3>{profile.activeBids}</h3>
            <p>Active Bids</p>
          </div>
          <div className="stat-box">
            <h3>{profile.rating}</h3>
            <p>Seller Rating</p>
          </div>
        </div>

        <div className="profile-about">
          <h2>About {profile.name.split(' ')[0]}</h2>
          <p>{profile.about}</p>
        </div>

        <div className="user-auctions">
          <h2>Active Auctions</h2>
          <div className="auction-grid">
            {profile.auctions.map((a) => {
              const isOpen = !!a.isOpen;
              return (
                <div key={a.id} className="auction-card">
                  <img src={a.image} alt={a.title} />
                  <h3>{a.title}</h3>
                  <p>
                    Current Bid: <strong>{isOpen && typeof a.currentBid === 'number' ? `${a.currency} ${a.currentBid.toLocaleString()}` : 'Bid Closed'}</strong>
                  </p>
                  <button className="btn-bid" disabled={!isOpen} aria-disabled={!isOpen}>{isOpen ? 'Place Bid' : 'Closed'}</button>
                </div>
              );
            })}
          </div>
        </div>

        <footer className="profile-footer">&copy; 2025 ProudEnt. All rights reserved.</footer>
      </div>
    </div>
  );
}
