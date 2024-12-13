import React, { useState, useEffect } from "react";
import { connectWallet, checkWalletConnection } from '../services/connectWallet';  // Importa ambas funciones
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Verificar la conexión al cargar el componente
  useEffect(() => {
    const verifyConnection = async () => {
      const { connected, address } = await checkWalletConnection();
      setIsWalletConnected(connected);
      setWalletAddress(address || "");
    };

    // Llama la función para verificar si la wallet está conectada
    verifyConnection();

    // Listener para cambios en la cuenta de MetaMask
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setIsWalletConnected(true);
          setWalletAddress(accounts[0]);
        } else {
          setIsWalletConnected(false);
          setWalletAddress('');
        }
      });

      // Listener para cambios en la red de MetaMask (opcional)
      window.ethereum.on('chainChanged', (chainId) => {
        // Puedes manejar lo que sucede cuando cambia la red, si es necesario
        console.log('Cambio de red:', chainId);
      });
    }

    return () => {
      // Limpiar los listeners cuando el componente se desmonte
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {});
        window.ethereum.removeListener('chainChanged', () => {});
      }
    };
  }, []);

  const handleWalletConnect = async () => {
    const { connected, address } = await connectWallet();
    setIsWalletConnected(connected);
    setWalletAddress(address || "");
  };

  return (
    <header className="App-header">
      <img src={logo} alt="Logo" className="logo" />

      {/* Contenedor para el botón de conectar/desconectar */}
      <div className="right-side">
        <button
          className={`header-button ${isWalletConnected ? 'connected' : ''}`}
          onClick={isWalletConnected ? handleWalletConnect : handleWalletConnect}
        >
          <p>{isWalletConnected ? "WALLET CONNECTED" : 'CONNECT WALLET'}</p>
        </button>
      </div>

      {/* Si la wallet está conectada, muestra la dirección centrada */}
      {isWalletConnected && (
        <div className="wallet-address-container">
          <p className="wallet-address">Connected: {walletAddress}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
