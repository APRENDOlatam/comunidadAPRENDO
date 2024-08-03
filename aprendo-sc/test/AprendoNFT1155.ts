import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import { upgrades } from "hardhat";

describe("AprendoNFT1155", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployAprendoNFT1155Fixture() {

    // Contracts are deployed using the first signer/account by default
    const [deployer,otherAccount] = await hre.ethers.getSigners();

    const AprendoNFT1155 = await hre.ethers.getContractFactory("AprendoNFT1155");
    const aprendoNFT1155 = await upgrades.deployProxy(AprendoNFT1155, {
      kind: "uups",
    });
    await aprendoNFT1155.waitForDeployment();
    console.log("AprendoNFT1155 deployed to:", aprendoNFT1155.target);

    const tokenId = 1990;
    const mintAmount = 1;

    const data = hre.ethers.toUtf8Bytes("")


    return { aprendoNFT1155,deployer,otherAccount,tokenId, mintAmount, data};
  }

  describe("Upgrade", function () {
    it("Upgrade to V2", async function () {
      const { aprendoNFT1155 } = await loadFixture(deployAprendoNFT1155Fixture);
      const AprendoNFT1155V2 = await hre.ethers.getContractFactory("AprendoNFT1155V2");
      const aprendoNFT1155V2 = await upgrades.upgradeProxy(aprendoNFT1155.target, AprendoNFT1155V2);
      expect(aprendoNFT1155V2.target).to.equal(aprendoNFT1155.target);
    });

    it("Check Version", async function () {
      const { aprendoNFT1155 } = await loadFixture(deployAprendoNFT1155Fixture);
      const AprendoNFT1155V2 = await hre.ethers.getContractFactory("AprendoNFT1155V2");
      const aprendoNFT1155V2 = await upgrades.upgradeProxy(aprendoNFT1155.target, AprendoNFT1155V2);
      expect(await aprendoNFT1155V2.version()).to.equal("V2");
    });
  });

  describe("Roles use cases", async () => {
    it("Check Admin Role", async () => {
      const { aprendoNFT1155,deployer,otherAccount } = await loadFixture(deployAprendoNFT1155Fixture);
      expect(
        await aprendoNFT1155.hasRole(
          hre.ethers.keccak256(hre.ethers.toUtf8Bytes("ADMIN_ROLE")),
          deployer.address
        )
      ).to.be.equal(true);
    });

    it("Set ADMIN_ROLE  (with or without ADMIN_ROLE role)", async () => {
      const { aprendoNFT1155,deployer,otherAccount } = await loadFixture(deployAprendoNFT1155Fixture);
      // Without ADMIN_ROLE role
      await expect(
        aprendoNFT1155
          .connect(otherAccount)
          .grantRole(
            hre.ethers.keccak256(hre.ethers.toUtf8Bytes("ADMIN_ROLE")),
            deployer.address
          )
      ).to.be.reverted;
     // With ADMIN_ROLE role
      await aprendoNFT1155.grantRole(
        hre.ethers.keccak256(hre.ethers.toUtf8Bytes("ADMIN_ROLE")),
        otherAccount.address
      );

      expect(
        await aprendoNFT1155.hasRole(
          hre.ethers.keccak256(hre.ethers.toUtf8Bytes("ADMIN_ROLE")),
          otherAccount.address
        )
      ).to.be.equal(true);
    });
  });
  describe("Pausable use cases", async () => {
    // Check the pausable functionality of the contract with or without ADMIN_ROLE
    it("Check pausable and unpausable function with an ADMIN_ROLE", async () => {
      const { aprendoNFT1155,deployer,otherAccount } = await loadFixture(deployAprendoNFT1155Fixture);
      await aprendoNFT1155.pause();
      const paused = await aprendoNFT1155.paused();
      expect(paused).to.equal(true);

      await aprendoNFT1155.unpause();
      const unpaused = await aprendoNFT1155.paused();
      expect(unpaused).to.equal(false);
    });

    it("Change pause function without an ADMIN_ROLE role", async () => {
      // Without ADMIN_ROLE role
      const { aprendoNFT1155,deployer,otherAccount } = await loadFixture(deployAprendoNFT1155Fixture);
      await expect(aprendoNFT1155.connect(otherAccount).pause()).to.be.reverted;
    });
  });
  describe("Mint cases", async () => {
    // Check the pausable functionality of the contract with or without ADMIN_ROLE
    it("Mint with an ADMIN_ROLE", async () => {
      const { aprendoNFT1155,deployer,otherAccount,tokenId, mintAmount, data } = await loadFixture(deployAprendoNFT1155Fixture);

      const tx = await aprendoNFT1155.mint(otherAccount.address,tokenId, mintAmount, data);
      let result = await tx.wait()

      expect(result.status).to.be.equal(1);

      //Check NFT balance of accounts
      expect(await aprendoNFT1155.balanceOf(otherAccount.address,tokenId)).to.be.equal(1);

    });

    it("Mint without ADMIN_ROLE", async () => {
      // Without ADMIN_ROLE role
      const { aprendoNFT1155,deployer,otherAccount,tokenId, mintAmount, data } = await loadFixture(deployAprendoNFT1155Fixture);
      await expect(
        aprendoNFT1155
          .connect(otherAccount)
          .mint(otherAccount.address,tokenId, mintAmount, data)
      ).to.be.reverted;
    });
  });
});
