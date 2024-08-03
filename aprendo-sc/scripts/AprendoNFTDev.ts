import { ethers, upgrades } from "hardhat";


let contrato : any;
const defaultAdmin :string ="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
const pauser :string ="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
const minter :string ="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
const upgrader :string ="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

async function main() {
  const [deployer] = await ethers.getSigners();

  //Deploy SC
  const ApendoNFTUp = await ethers.getContractFactory(
    "AprendoNFTUp"
  );
  contrato = await upgrades.deployProxy(ApendoNFTUp,[defaultAdmin,pauser,minter,upgrader], {
    kind: "uups",
  });
  await contrato.waitForDeployment();
  console.log("ApendoNFTUp deployed to:", contrato.target);

  // We get the contract to deploy
  const NFTSC = await contrato.PAUSER_ROLE();
  console.log("🚀 ~ main ~ NFTSC:", NFTSC)
  

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });