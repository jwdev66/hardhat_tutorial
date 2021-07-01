
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Calculator = await ethers.getContractFactory("Calculator");
  const calculator = await Calculator.deploy("0x6FB7e09c91162c9191c2d825a1e9734b1A258F53", 10);

  console.log("Calculator address:", calculator.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });