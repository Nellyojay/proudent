import { Header } from '../Components/Header';
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
              <img src="Images/icons/user.png" alt="profile" />
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
              title: 'Vintage Leica Camera',
              seller: 'CollectorJoe',
              price: 420,
              image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400&auto=format&fit=crop',
              description: 'A well-maintained vintage rangefinder — film tested.'
            },
            {
              id: 'vinyl',
              title: 'Signed Vinyl — Rare',
              seller: 'VinylVault',
              price: 95,
              image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop',
              description: 'Limited pressing — mint condition sleeve. Perfect for collectors.'
            },
            {
              id: 'art',
              title: 'Original Pop Art Print',
              seller: 'ArtHouse',
              price: 1250,
              image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
              description: 'Framed print, bright pigments. Pickup or insured shipping available.'
            }
          ].map(item => (
            <article key={item.id} className="card">
              <div className="card-media" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="badge">Ends in</div>
                <div className="price-tag">
                  <small>Current</small>
                  <div className="price">${item.price}</div>
                </div>
              </div>
              <div className="card-header">
                <h3>{item.title}</h3>
                <small>by <strong>{item.seller}</strong></small>
              </div>
              <p className="description">{item.description}</p>
              <div className="card-footer">
                <div className="price-block">
                  <div className="price">${item.price}</div>
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
          Demo page — React with external CSS. For live bidding, add backend or JS logic.
        </footer>
      </div>
    </div>
  );
}