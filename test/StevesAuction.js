const { ethers } = require("hardhat"); 
const { expect } = require("chai"); 
const Web3  = require("web3"); 

describe("Steve's Auction", function() {
    
    it("Should check whether the assigned NFT address is the right one", async() => {
       const [ owner ] = await ethers.getSigners();  
       const web3 = new Web3(Web3.givenProvider); 
       const addr = web3.utils.toChecksumAddress("0xd9145CCE52D386f254917e481eB44e9943F39138"); 
       const contractFactory = await ethers.getContractFactory("StevesAuction"); 
       const steveAuction = await contractFactory.deploy(addr, 0, 1); 
       await steveAuction.deployed(); 
        
       expect( await steveAuction.nft()).to.equal(addr); 
    }); 

    it("Should check whether the seller is the one who just deployed the NFT", async() => {
        const [ owner ] = await ethers.getSigners();  
       const web3 = new Web3(Web3.givenProvider); 
       const addr = web3.utils.toChecksumAddress("0xd9145CCE52D386f254917e481eB44e9943F39138"); 
       const contractFactory = await ethers.getContractFactory("StevesAuction"); 
       const steveAuction = await contractFactory.deploy(addr, 0, 1); 
       await steveAuction.deployed(); 

       expect( await steveAuction.seller()).to.equal(owner.address); 
    }); 

})