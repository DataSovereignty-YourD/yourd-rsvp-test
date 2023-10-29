import { Link } from 'react-router-dom';
import Logo from '../../assets/img/YourD-Logo-high.png';
import LoginButton from '../login/loginButton';
export default function TopBar() {
  return (
    <div className="w-full h-12 bg-white shadow-lg fixed z-30 flex items-center ">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-16" />
      </Link>
      <LoginButton />
    </div>
  );
}
