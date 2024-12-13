import React, { useState, useEffect } from "react";
import { connectWallet, checkWalletConnection } from '../services/connectWallet';  // Importa ambas funciones
import logo from "../assets/img/logo.png";

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [network, setNetwork] = useState("");  // Estado para guardar la red actual

  // Verificar la conexión al cargar el componente
  useEffect(() => {
    const verifyConnection = async () => {
      const { connected, address } = await checkWalletConnection();
      setIsWalletConnected(connected);
      setWalletAddress(address || "");

      if (window.ethereum) {
        // Obtener la red actual (opcional)
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        setNetwork(chainId);  // Guarda la red actual en el estado
      }
    };

    verifyConnection();

    // Listener para cambios en la cuenta de MetaMask
    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        setIsWalletConnected(true);
        setWalletAddress(accounts[0]);  // Actualiza la dirección cuando cambie la cuenta
      } else {
        setIsWalletConnected(false);
        setWalletAddress('');
      }
    };

    // Listener para cambios en la red de MetaMask
    const handleChainChanged = (chainId) => {
      console.log('Cambio de red:', chainId);
      setNetwork(chainId);  // Actualiza la red en el estado
      // Aquí podrías realizar otras acciones como mostrar un mensaje de advertencia si es una red no deseada
    };

    // Asegurarse de que `window.ethereum` esté disponible antes de agregar los listeners
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    // Limpiar los listeners cuando el componente se desmonte
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);  // El array vacío asegura que esto se ejecute solo al montar el componente

  // Función de conexión
  const handleWalletConnect = async () => {
    const { connected, address } = await connectWallet();
    setIsWalletConnected(connected);
    setWalletAddress(address || "");

    if (window.ethereum) {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      setNetwork(chainId);  // Al conectarse, también actualiza la red actual
    }
  };

  return (
    <header className="App-header">
      <img src={logo} alt="Logo" className="logo" />

      {/* Contenedor para el botón de conectar/desconectar */}
      <div className="right-side">
        <button
          className={`header-button ${isWalletConnected ? 'connected' : ''}`}
          onClick={isWalletConnected ? handleWalletConnect : handleWalletConnect}  // El botón solo cambia el estado de la wallet
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
