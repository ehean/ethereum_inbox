// specifies version of solidity
pragma solidity ^0.4.17;

// defines new contract (like a class definition)
contract Inbox {

    // defines a storage variable, exists for the life of the contract
    // value is persisted on the blockchain after contract is run
    // since it's public, solidity auto-creates a function called
    // message where you can retrieve the value
    string public message;

    // contructor function, called when contract is created
    // constructor cause it has same name as contract
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    // function type = 'public view'
    // public - anyone can call this function
    // view - returns data and does NOT modify contract's data (view == constant)
    // returns - only used for view or contract, cannot return data in a function that modifies data in contract
}
