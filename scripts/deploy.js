const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("AskVerse");
  const token = await MyToken.deploy(100000000000);

  await token.waitForDeployment();

  console.log(`Token deployed to: ${await token.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
