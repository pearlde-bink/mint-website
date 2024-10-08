// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract RoboPunkNFT is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;  //up to current 
    uint256 public maxSupply;   
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled; // check if public mint is enabled
    string internal baseTokenUri;
    address payable public withdrawWallet; //wallet to withdraw funds
    mapping(address => uint256) public wallletMints; //wallets that have minted

    constructor() payable ERC721('RoboPunks', 'RP'){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        //set withdraw wallet address 
    } 
    
    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner { //set base token uri
        baseTokenUri = baseTokenUri_;
    }  

    function tokenURI(uint256 tokenId_) public view override returns (string memory){ // to wrap token
       require(_exists(tokenId_), 'Token does not exist');
        // concat base token uri with token id, add .json extension
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

    function withdraw() external onlyOwner{
        (bool success, ) = withdrawWallet.call{value: address(this).balance}(''); // withdraw function to address specified before
        require(success, 'withdraw failed');
    }

    function mint(uint256 quantity_) public payable {
        require(isPublicMintEnabled, 'minting not enabled');
        require(msg.value == quantity_ * mintPrice, 'wrong mint value');
        require(totalSupply + quantity_ <= maxSupply, 'sold out');
        require(wallletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');

        for(uint256 i = 0; i < quantity_; i++){
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}