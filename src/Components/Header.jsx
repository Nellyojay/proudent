import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      
      <Link><span>Home Page</span></Link>
      <Link><span>Profile Page</span></Link>
      
    </div>
  );
}