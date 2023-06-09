// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract IpFingerprintCheck is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bool public isBlocked;
    bytes32 private jobId;
    uint256 private fee;

    event RequestData(bytes32 indexed requestId, bool isBlocked);

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
        setChainlinkOracle(0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD);
        jobId = "c1c5e92880894eb6b27d3cae19670aa3";
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    function checkIPFingerprint(string memory ip, string memory fingerprint) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        string memory baseURL = "https://server-blackedips.bunnyenv.com/v1/cs?";
        string memory query = string(abi.encodePacked("ip=", ip, "&fingerprint=", fingerprint));
        string memory url = string(abi.encodePacked(baseURL, query));
       
        req.add("get", url);
        req.add("path", "isBlocked");

        return sendChainlinkRequest(req, fee);
    }

    function fulfill(
        bytes32 _requestId,
        bool _isBlocked
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestData(_requestId, _isBlocked);
        isBlocked = _isBlocked;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}