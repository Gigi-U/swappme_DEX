// services/connectWallet.js

export const connectWallet = async () => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      return { connected: true, address: accounts[0] };
    }
    return { connected: false, address: "" };
  } catch (error) {
    console.error("Error al conectar la wallet:", error);
    return { connected: false, address: "" };
  }
};

export const checkWalletConnection = async () => {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      return { connected: accounts.length > 0, address: accounts[0] || "" };
    }
    return { connected: false, address: "" };
  } catch (error) {
    console.error("Error al verificar la conexión:", error);
    return { connected: false, address: "" };
  }
};
