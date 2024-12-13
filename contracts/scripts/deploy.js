const { ethers } = require("hardhat");

async function main() {
  // Desplegar TokenA
  const TokenA = await ethers.getContractFactory("TokenA");
  const tokenA = await TokenA.deploy("Token A", "TKA");
  await tokenA.deployed();
  console.log("TokenA deployed to:", tokenA.address);

  // Desplegar TokenB
  const TokenB = await ethers.getContractFactory("TokenB");
  const tokenB = await TokenB.deploy("Token B", "TKB");
  await tokenB.deployed();
  console.log("TokenB deployed to:", tokenB.address);

  // Desplegar SimpleDEX
  const SimpleDEX = await ethers.getContractFactory("SimpleDEX");
  const simpleDEX = await SimpleDEX.deploy(tokenA.address, tokenB.address);
  await simpleDEX.deployed();
  console.log("SimpleDEX deployed to:", simpleDEX.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// para desplegar
// npx hardhat run scripts/deploy.js --network rinkeby
