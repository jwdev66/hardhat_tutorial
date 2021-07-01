
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ImplV1 = await ethers.getContractFactory("ImplV1");
  const implV1 = await ImplV1.deploy();

  console.log("ImplV1 address:", implV1.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });