import { Link } from 'react-router'

export function ProfilePage() {
  return (
    <div className='conetent'>
      <Link to="/">
      <span>Home Page</span>
      </Link>

      <h1>My name is okudi and this is my profile Page</h1>
    </div>
    
  );
}