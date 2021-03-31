// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.8.0;

pragma experimental ABIEncoderV2;

import "../DealRoom.sol";
import "../MultiSigHashed.sol";

contract DealRoomHubV1_0 {

    event NewRoomEvent(address addr);

    address owner;
    address[] private rooms;
    //upgradability
    bool internal _initialized;

    mapping (address => address[]) private roomsByUser;
    mapping (address => DealRoomDetails) private roomDetailsByAddress;

    struct MakeRoomParams {
        address buyer;
        address seller;
        address arbitrator;
        address sensorApprover;
        address docApprover;
    }

    struct DealRoomDetails {
        address addr;
        address buyer;
        address seller;
        address arbitrator;
        address sensorApprover;
        address docApprover;
        address dealMultiSig;
        address agentMultiSig;
    }

    modifier roomExists(address addr, bool mustExist) {
        DealRoomDetails memory roomDetails = getRoom(addr);
        if (mustExist) {
            //Room must exist
            require(roomDetails.addr != address(0), "ROOM_NOT_FOUND");
        } else {
            //Room must not already exist
            require(roomDetails.addr == address(0), "ROOM_EXISTS");
        }
        _;
    }

    modifier isOwner() {
        require(msg.sender == owner, "ONLY_OWNER");
        _;
    }

    function initialize() public {
        require(!_initialized, "contract already initialized");
        _initialized = true;
    }

    function makeRoom(MakeRoomParams memory params) virtual public returns (address) {
        DealRoom room = new DealRoom(params.buyer, params.seller);
        require(params.buyer != address(0), "BUYER_MISSING");
        require(params.seller != address(0), "SELLER_MISSING");
        require(params.arbitrator != address(0), "ARBITRATOR_MISSING");
        require(params.sensorApprover != address(0), "SENSOR_APPROVER_MISSING");
        require(params.docApprover != address(0), "DOC_APPROVER_MISSING");

        //Make an Agents multisig, 2/3 with Buyer, Seller, Arbitrator
        address[] memory agents = new address[](3);
        agents[0] = params.buyer;
        agents[1] = params.seller;
        agents[2] = params.arbitrator; 
        MultiSigHashed agentMultiSig = new MultiSigHashed(agents, 2);
        
        //Make a Main multisig, 3/3 with Agents, DocApprover, SensorApprover
        address[] memory mainSignatories = new address[](3);
        mainSignatories[0] = params.sensorApprover;
        mainSignatories[1] = params.docApprover; 
        mainSignatories[2] = address(agentMultiSig);  
        MultiSigHashed dealMultiSig = new MultiSigHashed(mainSignatories, 3);
        
        //Give the room to the Main Multisig
        room.changeOwner(address(dealMultiSig));

        //===Record room details (without upsetting the compiler)
        //Add to list
        rooms.push(address(room));
        //Index by buyer and seller
        roomsByUser[params.buyer].push(address(room));
        roomsByUser[params.seller].push(address(room));
        roomsByUser[params.arbitrator].push(address(room));
        roomsByUser[params.sensorApprover].push(address(room));
        roomsByUser[params.docApprover].push(address(room));

        //Index by address
        roomDetailsByAddress[address(room)].addr = address(room);
        roomDetailsByAddress[address(room)].buyer = params.buyer;
        roomDetailsByAddress[address(room)].seller = params.seller;
        roomDetailsByAddress[address(room)].arbitrator = params.arbitrator;        
        roomDetailsByAddress[address(room)].sensorApprover = params.sensorApprover;
        roomDetailsByAddress[address(room)].docApprover = params.docApprover;
        roomDetailsByAddress[address(room)].dealMultiSig = address(dealMultiSig);
        roomDetailsByAddress[address(room)].agentMultiSig = address(agentMultiSig);

        emit NewRoomEvent(address(room));

        return address(room);
    }

    function getUserRooms(address _user) virtual public view returns(address[] memory) {
        return roomsByUser[_user];
    }

    function getAllRooms() virtual public view returns(address[] memory) {
        return rooms;
    }

    function getRoom(address addr) virtual public view returns (DealRoomDetails memory) {
        return roomDetailsByAddress[addr];
    }

    function roomCount() virtual public view returns (uint) {
        return rooms.length;
    }

    function changeOwner(address newOwner) virtual public isOwner() {
        owner = newOwner;
    }
}
