
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ImplV0 = await ethers.getContractFactory("ImplV0");
  const implV0 = await ImplV0.deploy();

  console.log("ImplV0 address:", implV0.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });