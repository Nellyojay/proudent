import { Link } from 'react-router'

export function HomePage() {
  return (
    <div className='content'>
      <Link to="/profile">
        <span>Profile</span>
      </Link>

      <h1>okudi</h1>
    </div>
  );
}