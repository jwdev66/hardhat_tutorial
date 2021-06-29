// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.7.3;

contract Calculator {
    uint256 public calculateResult;
    address public user;
    
    event Add(uint256 a, uint256 b);
    
    function add(uint256 a, uint256 b) public returns (uint256) {
        calculateResult = a + b;
        assert(calculateResult >= a);
        
        emit Add(a, b);
        user = msg.sender;
        
        return calculateResult;
    }
}