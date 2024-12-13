# swappme_DEX
Frontend for a decentralized exchange (DEX) built with Solidity, enabling users to securely trade custom ERC-20 tokens. This web app offers a decentralized, transparent, and efficient platform for swapping tokens we've created. Final project for the ETH Kipu Ethereum Developer Course.

## PASOS DEL DESARROLLO
1. crear carpeta CLIENT(frontend REACT) 
2. crear carpeta CONTRACTS(Backend HardHat) 
3. instalar ETHERS a ambas carpetas 
    npm install ethers
4. instalar en el backend:  
    express: para crear el servidor backend  
    ethers: para interactuar con la blockchain.
    dotenv: para manejar variables sensibles como claves API.
    cors: para permitir que el frontend acceda a las rutas del backend.      
        npm install express ethers dotenv cors
5. configurar conexion a WALLET y comprobar que funciona
6. configurar contratos en CONTRACTS y CLIENT
7. hacer tests y probarlos
8. deployar backend
    npx hardhat run scripts/deploy.js --network sepolia
9. desployar frontend

## PASOS PARA DEPLOY
1. deployar backend
2. desployar frontend


 