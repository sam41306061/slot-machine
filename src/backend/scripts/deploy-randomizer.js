async function main() {
    // Fetch contract to deploy
    const Randomizer = await ethers.getContractFactory("Randomizer")
  
    // Deploy contract
    const randomizer = await Randomizer.deploy()
    await randomizer.deployed()
    console.log(`Randomizer Deployed to: ${randomizer.address}`)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  