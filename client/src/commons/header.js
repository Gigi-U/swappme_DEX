import React, { useState, useEffect } from "react";
import { connectWallet, checkWalletConnection } from '../services/connectWallet';  // Asegúrate de que ambas funciones estén correctamente implementadas
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Verificar la conexión de la wallet al cargar el componente
  useEffect(() => {
    const verifyConnection = async () => {
      const { connected, address } = await checkWalletConnection();
      setIsWalletConnected(connected);
      setWalletAddress(address || "");
    };

    verifyConnection();
  }, []);

  // Función para conectar la wallet
  const handleWalletConnect = async () => {
    try {
      const { connected, address } = await connectWallet();
      setIsWalletConnected(connected);
      setWalletAddress(address || "");
    } catch (error) {
      console.error("Error al conectar la wallet:", error);
    }
  };

  return (
    <header className="App-header">
      <img src={logo} alt="Logo" className="logo" />
  
      {/* Contenedor para el botón */}
      <div className="right-side">
        <button
          className={`header-button ${isWalletConnected ? 'connected' : ''}`}
          onClick={handleWalletConnect}
        >
          <p>{isWalletConnected ? "WALLET CONNECTED" : 'CONNECT WALLET'}</p>
        </button>
      </div>
  
      {/* Si la wallet está conectada, muestra la dirección centrada */}
      {isWalletConnected && (
        <div className="wallet-address-container">
          <p className="wallet-address">WALLET CONNECTED: {walletAddress}</p>
        </div>
      )}
    </header>
  );
  
  
};

export default Header;
