// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.7.3;

// import "openzeppelin-solidity/contracts/proxy/TransparentUpgradeableProxy.sol";

import "./TransparentUpgradeableProxy.sol";

contract ETHSwapAgentUpgradeableProxy is TransparentUpgradeableProxy {

    constructor(address logic, address admin, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) public {

    }

}