import { Link } from 'react-router-dom'
import './HomePage.css'

export function HomePage() {
  return (
    <div className="auction-wrapper">
      <div className="auction-container">
        <header className="auction-header">
          <div className="brand">
            <div className="logo"><strong>PE</strong></div>
            <div>
              <h1>ProudEnt</h1>
              <p className="lead">Trusted auctions — browse, watch, and place a bid</p>
            </div>
          </div>
          <nav className="nav-buttons">
            <Link to="profile" className="profile">
              <img src="Images/icons/profile-picture.png" alt="profile" />
            </Link>
            <a href="#new-listing" className="btn-ghost">Create listing</a>
            <a href="#top" className="btn-primary">Start bidding</a>
          </nav>
        </header>

        <section className="controls">
          <div className="search-bar">
            <input type="search" placeholder="Search items, categories, or sellers" />
            <select>
              <option>All categories</option>
              <option>Electronics</option>
              <option>Art</option>
              <option>Collectibles</option>
            </select>
          </div>
          <div className="sort-filter">
            <select>
              <option>Sort: Ending soon</option>
              <option>Highest bid</option>
              <option>Newest</option>
            </select>
            <a className="btn-ghost" href="#filters">Filters</a>
          </div>
        </section>

        <main className="grid">
          {[
            {
              id: 'leica',
              title: 'Samsung Charger',
              seller: 'CollectorJoe',
              time: '12:01:45',
              price: 420,
              image: 'Images/Products/charger.jpg',
              description: 'A well-maintained vintage rangefinder — film tested.'
            },
            {
              id: 'vinyl',
              title: 'Signed Vinyl — Rare',
              seller: 'VinylVault',
              time: '07:30:50',
              price: 95,
              image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop',
              description: 'Limited pressing — mint condition sleeve. Perfect for collectors.'
            },
            {
              id: 'art',
              title: 'Original Pop Art Print',
              seller: 'ArtHouse',
              time: '05:20:10',
              price: 1250,
              image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
              description: 'Framed print, bright pigments. Pickup or insured shipping available.'
            },{
              id: 'art',
              title: 'Iphone 16',
              seller: 'Owen Phonez',
              time: '05:20:10',
              price: 1250,
              image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25626687/DSC08433.jpg?quality=90&strip=all&crop=16.675%2C0%2C66.65%2C100&w=2400',
              description: 'Framed print, bright pigments. Pickup or insured shipping available.'
            },{
              id: 'art',
              title: 'Iphone 16',
              seller: 'Owen Phonez',
              time: '05:20:10',
              price: 1250,
              image: 'Images/Products/iphone-16.webp',
              description: 'Framed print, bright pigments. Pickup or insured shipping available.'
            },{
              id: 'art',
              title: 'Laptop',
              seller: 'Owen Laptopz',
              time: '05:20:10',
              price: 1250,
              image: 'Images/Products/laptop1.jpg',
              description: 'Framed print, bright pigments. Pickup or insured shipping available.'
            },{
              id: 'art',
              title: 'bicycle',
              seller: 'Owen bikes',
              time: '05:20:10',
              price: 1250,
              image: 'Images/Products/bicycle.jpg',
              description: 'Framed print, bright pigments. Pickup or insured shipping available.'
            },{
              id: 'art',
              title: 'Samsung Galaxy s10',
              seller: 'Owen Phonez',
              time: '05:20:10',
              price: 1250,
              image: 'Images/Products/samsung-phone.webp',
              description: 'Framed print, bright pigments. Pickup or insured shipping available.'
            }
          ].map(item => (
            <article key={item.id} className="card">

              <div className='product-image'>
                <img src={item.image} alt="" />
              </div>

              <div className="card-media">
                <p className="time-lapse">Ends in: {item.time}</p>
              </div>

              <div className="card-header">
                <h3>{item.title}</h3>
                <small>by <strong>{item.seller}</strong></small>
              </div>
              <p className="description">{item.description}</p>
              <div className="card-footer">
                <div className="price-block">
                  <div className="price">UGX {item.price}</div>
                  <small>Static demo</small>
                </div>
                <div className="actions">
                  <button className="btn-bid">Bid</button>
                  <button className="btn-watch">Watch</button>
                </div>
              </div>
            </article>
          ))}
        </main>

        <footer className="footer">
          <p>&copy; 2025. ProudEnt. All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}