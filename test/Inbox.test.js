const assert = require('assert'); // used for unit testing
const ganache = require('ganache-cli'); // ganache is a local ethereum test network
const Web3 = require('web3'); // web3 library allows us to create dapps, interact with ethereum network
const web3  = new Web3(ganache.provider());  // initialize web3 instance w/ ganache network

// import the interface and bytecode from the compile.js
// interface contains the ABI
// bytecode contains the contract in bytecode
const { interface, bytecode } = require('../compile')

// every web3 function is asynchronous - it returns a promise
// that's why we use the 'then' function or async/await

// declare accounts outside of beforeEach so that it has a global scope
// it gets define/initiazlied in the beforeEach
let accounts;
let inbox;

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // use an account to deploy a contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['hi there'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  });
});
