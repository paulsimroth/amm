// @ts-ignore
import { ethers } from "hardhat";

async function main() {


  const AMM = await ethers.getContractFactory("AMM");
  const amm = await AMM.deploy();

  await amm.deployed();

  console.log(
    `AMM deployed to ${amm.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
