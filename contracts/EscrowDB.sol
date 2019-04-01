pragma solidity >=0.4.22 <0.6.0;

import  './Ownable.sol';

contract EscrowDB is Ownable {

    mapping(address => string) public buyerList;
    mapping(address => string) public sellerList;
    mapping(address => string) public escrowList;

    function registerBuyer(string memory _name) public
    {
        buyerList[msg.sender] = _name;
    }
    function registerSeller(string memory _name) public
    {
        sellerList[msg.sender] = _name;
    }

    function registerEscrow(string memory _name) public 
    {
        escrowList[msg.sender] = _name;
    }

    function getBuyerFullInfo(address buyerAddress) public view returns (string  memory)
    {
        return (buyerList[buyerAddress]);
    }

    function getSellerFullInfo(address sellerAddress) public view returns (string memory)
    {
        return (sellerList[sellerAddress]);
    }

    function getEscrowFullInfo(address escrowAddress) public view returns (string memory)
    {
        return (escrowList[escrowAddress]);
    }
    
}