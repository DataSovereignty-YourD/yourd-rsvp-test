import { Link } from 'react-router-dom';
import Logo from '../../assets/img/YourD-Logo-high.png';
import Login from './login';
import { useState } from 'react';
export default function TopBar() {
  const [showLogin, setShowLogin] = useState(false);
  const handleClose = () => {
    setShowLogin(false);
  };
  

  return (
    <div className="w-full h-12 bg-white shadow-lg fixed z-30 flex items-center ">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-16" />
      </Link>
      <button
        onClick={() => setShowLogin(true)}
        className="w-12 h-12"
      >
        로그인
      </button>
      {showLogin && <Login initialOpen={showLogin} onClose={handleClose} />}

    </div>
  );
}

