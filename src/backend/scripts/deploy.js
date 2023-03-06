async function main() {
    // Fetch contract to deploy
    const SlotMachine = await ethers.getContractFactory("SlotMachine")
  
    // Deploy contract
    const slotmachine = await SlotMachine.deploy()
    await slotmachine.deployed()
    console.log(`Slotmachine Deployed to: ${slotmachine.address}`)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  