import React, { useState, useEffect } from "react";
import Footer from "./commons/footer"; 
import Header from "./commons/header";
import "./shootingStars.css";
import "./App.css";
import EthCoin from "./commons/ethCoin";
import "./commons/header.css";
import "./commons/footer.css";

function App() {
  const [conversionType, setConversionType] = useState("AtoB");

  // Definir la función handleConversionTypeChange aquí
  const handleConversionTypeChange = (event) => {
    setConversionType(event.target.value);
  };
  useEffect(() => {
    const starCount = 45; // Número de estrellas
    const starsContainer = document.getElementById("stars");

    // Generar estrellas estáticas
    function createStar() {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);
    }

    for (let i = 0; i < starCount; i++) {
      createStar();
    }

    // Generar shooting stars
    function createShootingStar() {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.left = `${Math.random() * 100}%`;
      document.body.appendChild(shootingStar);

      // Eliminar shooting star después de la animación
      setTimeout(() => {
        document.body.removeChild(shootingStar);
      }, 1500); // Duración de la animación
    }

    const interval = setInterval(() => {
      createShootingStar();
    }, 2000); // Intervalo entre shooting stars

    // Limpieza del intervalo
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Componente Header */}
      <Header />
      <div id="stars"></div>

      {/* Agregar el div transparente en el centro */}
      <div className="center-box">
        <h1 className="dex-title">Token Actions</h1>        


        {/* Contenedor de los paneles */}
        <div className="boxes-container">
          {/* Panel 1: From and To */}
          <div className="panel-box">
            <h3>SWAPP</h3>
            <select onChange={handleConversionTypeChange} value={conversionType}>
              <option value="AtoB">From Token A to Token B</option>
              <option value="BtoA">From Token B  to Token A</option>
            </select>
            
            {conversionType === "AtoB" ? (
              <>
                <p>From</p>
                <input type="text" placeholder="Enter TokenA Address" />
                <span style={{ fontSize:'12px',color: 'rgb(2, 216, 223)', display: 'block', textAlign: 'right', marginRight: '20px' }}>Balance: 0.0</span>

                <p>To</p>
                <input type="text" placeholder="Enter TokenB Address" />
                <span style={{ fontSize:'12px',color: 'rgb(2, 216, 223)', display: 'block', textAlign: 'right', marginRight: '20px' }}>Balance: 0.0</span>

              </>
            ) : (
              <>
                <p>From</p>
                <input type="text" placeholder="Enter TokenB Address" />
                <span style={{ fontSize:'12px',color: 'rgb(2, 216, 223)', display: 'block', textAlign: 'right', marginRight: '20px' }}>Balance: 0.0</span>

                <p>To</p>
                <input type="text" placeholder="Enter TokenA Address" />
                <span style={{ fontSize:'12px',color: 'rgb(2, 216, 223)', display: 'block', textAlign: 'right', marginRight: '20px' }}>Balance: 0.0</span>

              </>
            )}

            {/* Botón debajo de los campos */}
            <button className="convert-button">Swap</button>
          </div>

          {/* Panel 2: Agregar o quitar Liquidez */}
          <div className="panel-box">
            <h3>MANAGE LIQUIDITY</h3>
            <select onChange={handleConversionTypeChange} value={conversionType}>
              <option value="addLiq">Add Liquidity</option>
              <option value="widthLiq">Withdraw Liquidity</option>
            </select>
            
            {conversionType === "addLiq" ? (
              <>
            <p>TokenA</p>
            <input type="number" placeholder="Enter Amount" />
            <p> TokenB</p>
            <input type="number" placeholder="Enter Amount" />
            <button className="convert-button">Add</button>
              </>
            ) : (
              <>
            <p>TokenA</p>
            <input type="number" placeholder="Enter Amount" />
            <p>TokenB</p>
            <input type="number" placeholder="Enter Amount" />
            <button className="convert-button">Withdraw</button>
              </>
            )}

          </div>

          {/* Panel 3: Obtener Precio de un Token */}
          <div className="panel-box">
            <h3>GET PRICE</h3>
            <select onChange={handleConversionTypeChange} value={conversionType}>
              <option value="TokenA">Token A</option>
              <option value="TokenB">Token B </option>
            </select>
            <button className="convert-button">Get Price</button>
            <br></br>
            <span style={{ fontSize:'12px',color: 'rgb(2, 216, 223)', display: 'block', textAlign: 'right', marginRight: '20px' }}>Price: x.xxxxxxxxxxxxxxxxxx ETH</span>

          </div>

        </div>
      </div>

      {/* Componente EthCoin centrado arriba */}
      <div className="eth-coin-container">
        <EthCoin />
      </div>

      {/* Componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
