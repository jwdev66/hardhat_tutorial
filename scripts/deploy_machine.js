
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Calculator = await ethers.getContractFactory("Calculator");
  const calculator = await Calculator.deploy();

  const Machine = await ethers.getContractFactory("Machine");
  const machine = await Machine.deploy(calculator.address);  

  console.log("Machine address:", machine.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });