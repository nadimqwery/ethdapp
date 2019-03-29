pragma solidity >=0.4.22 <0.6.0;

contract Payment {
  address  transferFrom;
  address payable transferTo;
  string public remarks;
  uint256 public  balance;

  constructor() public {
    transferFrom = msg.sender;
  }

  event TransferFund(address _transferTo, address _transferFrom, uint amount);

  function transferFund( address payable _transferTo ) public payable returns (bool){
      transferTo = _transferTo;
      transferTo.transfer(msg.value);
      balance = msg.value;
      emit TransferFund(transferTo, transferFrom, msg.value);
      return true;
  }

  function getBalanceOfCurrentAccount() public payable returns (uint) {
    return transferFrom.balance;
  }


}
