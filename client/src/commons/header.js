import React, { useState } from 'react';
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnect = () => {
    // Alterna el estado de la wallet entre conectada y desconectada
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <header className="App-header">
      <img src={logo} alt="Logo" className="logo" />
      
      <button
        className={`header-button ${isWalletConnected ? 'connected' : ''}`}
        onClick={handleWalletConnect}
      >
        <p>{isWalletConnected ? 'WALLET CONNECTED' : 'CONNECT WALLET'}</p>
      </button>
    </header>
  );
};

export default Header;
