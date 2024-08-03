import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import { upgrades } from "hardhat";

describe("ApendoNFTUp", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployApendoNFTUpFixture() {

    // Contracts are deployed using the first signer/account by default
    const [deployer,otherAccount] = await hre.ethers.getSigners();

    const AprendoNFTUp = await hre.ethers.getContractFactory("AprendoNFTUp");
    const aprendoNFTUp = await upgrades.deployProxy(AprendoNFTUp, {
      kind: "uups",
    });
    await aprendoNFTUp.waitForDeployment();
    console.log("ApendoNFTUp deployed to:", aprendoNFTUp.target);

    return { aprendoNFTUp,deployer,otherAccount};
  }

  describe("Upgrade", function () {
    it("Upgrade to V2", async function () {
      const { aprendoNFTUp } = await loadFixture(deployApendoNFTUpFixture);
      const AprendoNFTUpV2 = await hre.ethers.getContractFactory("AprendoNFTUpV2");
      const aprendoNFTUpV2 = await upgrades.upgradeProxy(aprendoNFTUp.target, AprendoNFTUpV2);
      expect(aprendoNFTUpV2.target).to.equal(aprendoNFTUp.target);
    });

    it("Check Version", async function () {
      const { aprendoNFTUp } = await loadFixture(deployApendoNFTUpFixture);
      const AprendoNFTUpV2 = await hre.ethers.getContractFactory("AprendoNFTUpV2");
      const aprendoNFTUpV2 = await upgrades.upgradeProxy(aprendoNFTUp.target, AprendoNFTUpV2);
      expect(await aprendoNFTUpV2.version()).to.equal("V2");
    });
  });

  describe("Roles use cases", async () => {
    it("Check Admin Role", async () => {
      const { aprendoNFTUp,deployer,otherAccount } = await loadFixture(deployApendoNFTUpFixture);
      expect(
        await aprendoNFTUp.hasRole(
          hre.ethers.keccak256(hre.ethers.toUtf8Bytes("ADMIN_ROLE")),
          deployer.address
        )
      ).to.be.equal(true);
    });

    it("Set ADMIN_ROLE  (with or without ADMIN_ROLE role)", async () => {
      const { aprendoNFTUp,deployer,otherAccount } = await loadFixture(deployApendoNFTUpFixture);
      // Without ADMIN_ROLE role
      await expect(
        aprendoNFTUp
          .connect(otherAccount)
          .grantRole(
            hre.ethers.keccak256(hre.ethers.toUtf8Bytes("ADMIN_ROLE")),
            deployer.address
          )
      ).to.be.reverted;
     // With ADMIN_ROLE role
      await aprendoNFTUp.grantRole(
        hre.ethers.keccak256(hre.ethers.toUtf8Bytes("ADMIN_ROLE")),
        otherAccount.address
      );

      expect(
        await aprendoNFTUp.hasRole(
          hre.ethers.keccak256(hre.ethers.toUtf8Bytes("ADMIN_ROLE")),
          otherAccount.address
        )
      ).to.be.equal(true);
    });
  });
  describe("Pausable use cases", async () => {
    // Check the pausable functionality of the contract with or without ADMIN_ROLE
    it("Check pausable and unpausable function with an ADMIN_ROLE", async () => {
      const { aprendoNFTUp,deployer,otherAccount } = await loadFixture(deployApendoNFTUpFixture);
      await aprendoNFTUp.pause();
      const paused = await aprendoNFTUp.paused();
      expect(paused).to.equal(true);

      await aprendoNFTUp.unpause();
      const unpaused = await aprendoNFTUp.paused();
      expect(unpaused).to.equal(false);
    });

    it("Change pause function without an ADMIN_ROLE role", async () => {
      // Without ADMIN_ROLE role
      const { aprendoNFTUp,deployer,otherAccount } = await loadFixture(deployApendoNFTUpFixture);
      await expect(aprendoNFTUp.connect(otherAccount).pause()).to.be.reverted;
    });
  });
  describe("Mint cases", async () => {
    // Check the pausable functionality of the contract with or without ADMIN_ROLE
    it("Mint with an ADMIN_ROLE", async () => {
      const { aprendoNFTUp,deployer,otherAccount } = await loadFixture(deployApendoNFTUpFixture);
      const tx = await aprendoNFTUp.safeMint(otherAccount.address,"https://www.mytokenlocation.com");
      let result = await tx.wait()

      expect(result.status).to.be.equal(1);

      //Check NFT balance of accounts
      expect(await aprendoNFTUp.balanceOf(otherAccount.address)).to.be.equal(1);

    });

    it("Mint without ADMIN_ROLE", async () => {
      // Without ADMIN_ROLE role
      const { aprendoNFTUp,deployer,otherAccount } = await loadFixture(deployApendoNFTUpFixture);

      await expect(
        aprendoNFTUp
          .connect(otherAccount)
          .safeMint(
           otherAccount.address,
           "https://www.mytokenlocation.com"
          )
      ).to.be.reverted;
    });
  });
});
