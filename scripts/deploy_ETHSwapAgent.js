
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ETHSwapAgentUpgradeableProxy = await ethers.getContractFactory("ETHSwapAgentUpgradeableProxy");
  const ethSwapAgentUpgradeableProxy = await ETHSwapAgentUpgradeableProxy.deploy("0x518096eDaF14066946253E6B6710c504684f7a42", "0x6FB7e09c91162c9191c2d825a1e9734b1A258F53", "0x");

  console.log("ETHSwapAgentUpgradeableProxy address:", ethSwapAgentUpgradeableProxy.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });