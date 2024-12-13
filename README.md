# swappme_DEX
Frontend for a decentralized exchange (DEX) built with Solidity, enabling users to securely trade custom ERC-20 tokens. This web app offers a decentralized, transparent, and efficient platform for swapping tokens we've created. Final project for the ETH Kipu Ethereum Developer Course.

## PASOS DEL DESARROLLO
1. crear carpeta CLIENT(frontend REACT) 
2. crear carpeta CONTRACTS(Backend HardHat) 
3. al backen agregar la carpeta scripts con el archivo deploy.js
4. instalar ETHERS a ambas carpetas 
    npm install ethers
5. instalar en el backend:  
    express: para crear el servidor backend  
    ethers: para interactuar con la blockchain.
    dotenv: para manejar variables sensibles como claves API.
    cors: para permitir que el frontend acceda a las rutas del backend.      
        npm install express ethers dotenv cors
6. configurar conexion a WALLET y comprobar que funciona
7. configurar contratos en CONTRACTS y CLIENT
8. hacer tests y probarlos
9. deployar backend
    npx hardhat run scripts/deploy.js --network sepolia
10. desployar frontend

## PASOS PARA DEPLOY
1. deployar backend
2. desployar frontend


## COMPORTAMIENTO DEL SITIO

1. el usuario accede a la plataforma y puede visualizar el tablero de interacciones
2. el usuario se loguea a la wallet clickeando en CONNECT WALLET
3. al loguearse en su wallet cambia el boton a WALLET CONNECTED y aparece la dirección de cuenta conectada.
4. el usuario puede cambiar de address para trabajar con una nueva cuenta de su wallet.
al desloguearse de la wallet se cierra la conexión con el frontend. Desaparece la info de cuenta y el botón de conexion cambia al estado original