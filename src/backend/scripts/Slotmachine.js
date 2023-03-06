const { expect } = require("chai");
const { ethers } = require("hardhat"); // ethers from hardhat library


describe('SlotMachine', () =>{

    it('Has a name', async() =>{
        const SlotMachine = await ethers.getContractFactory('SlotMachine');
        let slotmachine = await SlotMachine.deploy();
        // Read the contract 
        const name = await slotmachine.name();
        // Check that name is correct 
        expect(name).to.equal('SlotMachine');
    } )

}); // end 
