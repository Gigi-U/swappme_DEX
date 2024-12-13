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

## ESTRUCTURA

    SWAPPME_DEX
    |_client (frontend React - ethers)
    |   |_node_modules
    |   |_public
    |   |_src
    |   |   |_assets
    |   |   |   |_img
    |   |   |_commons
    |   |   |   |_ethCoin.css
    |   |   |   |_ethCoin.js
    |   |   |   |_footer.css
    |   |   |   |_footer.js
    |   |   |   |_header.css
    |   |   |   |_header.js
    |   |   |_services
    |   |   |   |_connectWallet.js
    |   |   |_App.css
    |   |   |_App.js
    |   |   |_App.test.js
    |   |   |_index.css
    |   |   |_index.js
    |   |   |_reportWerVitals.js
    |   |   |_setipTests.js
    |   |   |_shootingStars.css
    |   |_.gitignore
    |   |_package-lock.json
    |   |_package.json
    |   |_README.md
    |_contracts (backend hardhat - ethers - express -cors - .env)
    |   |_artifacts
    |   |   |_build-info
    |   |   |_contracts
    |   |_cache
    |   |_contracts
    |   |_node_modules
    |   |_scripts
    |   |   |_deploy.js
    |   |_test
    |   |_.env
    |   |_.gitignore
    |   |_hardhat.config.js
    |   |_package-lock.json
    |   |_package.json
    |   |_README.md
    |   |_server.js
    |_LICENSE
    |_README.md

## COMPORTAMIENTO DEL SITIO

1. el usuario accede a la plataforma y puede visualizar el tablero de interacciones
2. el usuario se loguea a la wallet clickeando en CONNECT WALLET
3. al loguearse en su wallet cambia el boton a WALLET CONNECTED y aparece la dirección de cuenta conectada.
4. el usuario puede cambiar de address para trabajar con una nueva cuenta de su wallet.
al desloguearse de la wallet se cierra la conexión con el frontend. Desaparece la info de cuenta y el botón de conexion cambia al estado original
5. el usuario puede hacer un swap entre TokenA y TokenB
6. el usuario puede agregar liquidez
7. el usuario puede quitar liquidez
8. el usuario puede ver el precio de un token. 

